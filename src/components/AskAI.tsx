import { useState, useRef, useEffect } from 'react';

// Minimal typings since @types/dom-chromium-ai may not be installed
type Availability = 'available' | 'downloadable' | 'downloading' | 'unavailable';

interface LanguageModelSession {
  promptStreaming(prompt: string): AsyncIterable<string>;
}

interface CreateOptions {
  initialPrompts?: { role: 'system' | 'user' | 'assistant'; content: string }[];
  monitor?: (m: Monitor) => void;
}

interface Monitor {
  addEventListener(
    type: 'downloadprogress',
    listener: (e: DownloadProgressEvent) => void
  ): void;
}

interface DownloadProgressEvent {
  loaded: number;
}

interface LanguageModelFactory {
  availability: (opts?: Record<string, unknown>) => Promise<Availability>;
  create: (opts?: CreateOptions) => Promise<LanguageModelSession>;
  capabilities?: () => Promise<{ available: 'readily' | 'after-download' | 'no' }>;
}

declare global {
  interface Window {
    LanguageModel?: LanguageModelFactory;
    languageModel?: LanguageModelFactory;
    ai?: { languageModel?: LanguageModelFactory };
  }
}

function getLanguageModelFactory(): LanguageModelFactory | undefined {
  return (
    window.ai?.languageModel ??
    window.languageModel ??
    window.LanguageModel
  );
}

const SYSTEM_PROMPT = `You are Aashish Anil's portfolio assistant. Answer questions about him
using ONLY the facts below. Be concise and friendly. If asked something you don't know, say so.

- DevOps Engineer, ~1.5 years experience. Most recently Junior DevOps Engineer at McMillan
  Technologies & Consultancy Services (Mar 2025 - May 2026), sole DevOps practitioner there.
- Built CI/CD pipelines (Jenkins, GitHub Actions) cutting manual deployment effort by 80%+.
- Built a self-healing incident response system with n8n + Jenkins (3-min health checks,
  Telegram alerts, auto-restart on HTTP 500+).
- Cloud/infra: AWS (IAM, EC2, S3, VPC, RDS, ECS, ECR), Linode, Terraform, Helm, Docker, Kubernetes.
- Observability: Prometheus, Grafana, Node Exporter, CloudWatch.
- Projects: monitoring/self-healing infra, CI/CD automation platform, Terraform cloud infra
  modules, GlauDec (containerized ML pipeline for glaucoma detection), a DevSecOps pipeline
  with SonarQube + Trivy scanning.
- Education: B.Tech Computer Science, St. Thomas College of Engineering and Technology (2019-2023).
- Location: Kannur, Kerala, India. Open to remote roles.
- Contact: aashishanil530@gmail.com, LinkedIn: linkedin.com/in/aashishanil.`;

type Status = 'checking' | 'unsupported' | 'needs-download' | 'downloading' | 'ready' | 'error';

export default function AskAI() {
  const [status, setStatus] = useState<Status>('checking');
  const [progress, setProgress] = useState(0);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([]);
  const [input, setInput] = useState('');
  const [streaming, setStreaming] = useState(false);
  const sessionRef = useRef<LanguageModelSession | null>(null);

  useEffect(() => {
    (async () => {
      const factory = getLanguageModelFactory();
      if (!factory) {
        setStatus('unsupported');
        return;
      }
      try {
        const availability = await factory.availability();
        if (availability === 'unavailable') setStatus('unsupported');
        else if (availability === 'available') setStatus('ready');
        else setStatus('needs-download'); // 'downloadable' or 'downloading'
      } catch {
        setStatus('unsupported');
      }
    })();
  }, []);

  async function initSession() {
    const factory = getLanguageModelFactory();
    if (!factory) return;
    setStatus('downloading');
    try {
      const session = await factory.create({
        initialPrompts: [{ role: 'system', content: SYSTEM_PROMPT }],
        monitor: (m) => {
          m.addEventListener('downloadprogress', (e) => {
            setProgress(Math.round(e.loaded * 100));
          });
        },
      });
      sessionRef.current = session;
      setStatus('ready');
    } catch {
      setStatus('error');
    }
  }

  async function sendMessage() {
    if (!input.trim()) return;
    const question = input.trim();
    setInput('');
    setMessages((m) => [...m, { role: 'user', content: question }]);
    setStreaming(true);

    if (!sessionRef.current) {
      // Session wasn't pre-warmed (e.g. status went straight to 'ready')
      const factory = getLanguageModelFactory();
      if (!factory) {
        setStreaming(false);
        return;
      }
      sessionRef.current = await factory.create({
        initialPrompts: [{ role: 'system', content: SYSTEM_PROMPT }],
      });
    }

    setMessages((m) => [...m, { role: 'assistant', content: '' }]);
    try {
      const stream = sessionRef.current.promptStreaming(question);
      for await (const chunk of stream) {
        setMessages((m) => {
          const copy = [...m];
          copy[copy.length - 1] = { role: 'assistant', content: copy[copy.length - 1].content + chunk };
          return copy;
        });
      }
    } catch {
      setMessages((m) => {
        const copy = [...m];
        copy[copy.length - 1] = { role: 'assistant', content: 'Something went wrong. Try again.' };
        return copy;
      });
    }
    setStreaming(false);
  }

  if (status === 'unsupported') {
    return (
      <div className="text-sm text-neutral-400 border border-neutral-800 rounded-lg p-4">
        This on-device AI assistant needs desktop Chrome with built-in AI support.
        Try opening this site in the latest Chrome on desktop.
      </div>
    );
  }

  if (status === 'checking') return null;

  return (
    <div className="border border-neutral-800 rounded-lg p-4 space-y-3">
      <h3 className="font-medium">Ask AI about me</h3>
      <p className="text-xs text-neutral-500">Runs fully on-device via Chrome&apos;s built-in Gemini Nano — nothing leaves your browser.</p>

      {status === 'needs-download' && (
        <button onClick={initSession} className="text-sm px-3 py-1.5 rounded bg-neutral-800 hover:bg-neutral-700">
          Download AI model (~a few hundred MB, one-time)
        </button>
      )}

      {status === 'downloading' && (
        <p className="text-sm text-neutral-400">Downloading model… {progress}%</p>
      )}

      {status === 'ready' && (
        <>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {messages.map((m, i) => (
              <div key={i} className={m.role === 'user' ? 'text-neutral-200' : 'text-neutral-400'}>
                <span className="font-medium">{m.role === 'user' ? 'You: ' : 'AI: '}</span>
                {m.content}
              </div>
            ))}
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage();
            }}
            className="flex gap-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g. What's his experience with Kubernetes?"
              className="flex-1 bg-neutral-900 border border-neutral-800 rounded px-3 py-1.5 text-sm"
              disabled={streaming}
            />
            <button
              type="submit"
              disabled={streaming || !input.trim()}
              className="px-3 py-1.5 rounded bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-sm"
            >
              Ask
            </button>
          </form>
        </>
      )}
    </div>
  );
}