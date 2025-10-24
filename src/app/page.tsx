export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex justify-between items-center h-16">
            <span className="text-xl font-bold gradient-text">
              Aashish Anil
            </span>
            <div className="hidden md:flex space-x-8 text-sm">
              <a href="#about" className="hover:text-blue-500 transition-colors">
                ABOUT
              </a>
              <a href="#experience" className="hover:text-blue-500 transition-colors">
                EXPERIENCE
              </a>
              <a href="#projects" className="hover:text-blue-500 transition-colors">
                PROJECTS
              </a>
              <a href="#contact" className="hover:text-blue-500 transition-colors">
                CONTACT
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section className="min-h-screen flex items-center justify-center section-padding">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto fade-in">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight">
              Cloud & DevOps
              <br />
              <span className="gradient-text">Engineer</span>
            </h1>
            <div className="space-y-6 text-gray-600">
              <p className="text-lg md:text-xl max-w-2xl">
                A motivated DevOps enthusiast passionate about automating infrastructure, optimizing deployments, and building scalable cloud solutions.
              </p>
              <div className="flex flex-col md:flex-row gap-4 text-sm">
                <span>📍 Kannur, Kerala</span>
                <a href="mailto:aashishanil530@gmail.com" className="hover:text-blue-500 transition-colors">
                  ✉️ aashishanil530@gmail.com
                </a>
                <a href="https://linkedin.com/in/aashishanil" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                  💼 LinkedIn
                </a>
              </div>
              <div className="pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center text-sm border border-black px-6 py-3 hover:bg-black hover:text-white transition-colors"
                >
                  Let's Connect
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-padding">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">About</h2>
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  A motivated Cloud and DevOps enthusiast with a passion for automation and infrastructure optimization. I specialize in designing and implementing efficient CI/CD pipelines, containerization strategies, and cloud-native solutions.
                </p>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-sm font-medium text-gray-400 mb-4">CERTIFICATIONS</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="flex-1">
                          <h4 className="font-medium">Jenkins</h4>
                          <p className="text-sm text-gray-500">KodeKloud • September 2024</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-1">
                          <h4 className="font-medium">Docker and Kubernetes Masterclass</h4>
                          <p className="text-sm text-gray-500">Udemy • March 2024</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-1">
                          <h4 className="font-medium">Flutter Developer</h4>
                          <p className="text-sm text-gray-500">MaverixPro Ltd • January 2024</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-medium text-gray-400 mb-4">TECHNICAL SKILLS</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Cloud & Infrastructure</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>AWS (EC2, S3, VPC)</li>
                        <li>Terraform</li>
                        <li>Docker</li>
                        <li>Kubernetes</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">CI/CD & DevOps</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>Jenkins</li>
                        <li>GitHub Actions</li>
                        <li>Git</li>
                        <li>CloudWatch</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-400 mb-4">PROGRAMMING</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>Python</li>
                        <li>Bash</li>
                        <li>C</li>
                        <li>Dart</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Databases</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>MySQL</li>
                        <li>MongoDB</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold">Associate Web Developer</h3>
              <p className="text-gray-600 mt-1">Copious Infotech • January 2024 - Present</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold">Flutter Intern</h3>
              <p className="text-gray-600 mt-1">Maverixpro Technology • July 2023 - January 2024</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section-padding py-10">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">Projects</h2>
            <div className="space-y-24">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <span className="text-sm text-gray-400 mb-4 block">01 / DEVOPS</span>
                  <h3 className="text-2xl font-bold mb-4">BoardGame Pipeline</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Comprehensive CI/CD pipeline implementation for Java Maven application with security scanning and Kubernetes deployment.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600 mb-6">
                    <li>→ Reduced deployment time by 30%</li>
                    <li>→ Achieved 95% defect-free code with SonarQube</li>
                    <li>→ Decreased manual configuration by 40%</li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm">Jenkins</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm">Kubernetes</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm">Docker</span>
                  </div>
                </div>
                <div className="bg-gray-50 aspect-video w-full"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="md:order-2">
                  <span className="text-sm text-gray-400 mb-4 block">02 / CLOUD</span>
                  <h3 className="text-2xl font-bold mb-4">AWS Infrastructure Automation</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Automated AWS infrastructure provisioning using Terraform modules for efficient and consistent deployment.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600 mb-6">
                    <li>→ Reduced setup time by 50%</li>
                    <li>→ Achieved 99.9% uptime</li>
                    <li>→ 25% reduction in deployment errors</li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm">AWS</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm">Terraform</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm">IaC</span>
                  </div>
                </div>
                <div className="bg-gray-50 aspect-video w-full md:order-1"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <span className="text-sm text-gray-400 mb-4 block">03 / ML</span>
                  <h3 className="text-2xl font-bold mb-4">GlauDec</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Python-based glaucoma detection system using fundus image analysis with containerized deployment.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600 mb-6">
                    <li>→ Containerized with Docker</li>
                    <li>→ Automated CI/CD with GitHub Actions</li>
                    <li>→ Published to Docker Hub</li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm">Python</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm">Docker</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm">GitHub Actions</span>
                  </div>
                </div>
                <div className="bg-gray-50 aspect-video w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="section-padding py-10">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">Education</h2>
            <div className="max-w-3xl">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Bachelor of Technology</h3>
                <p className="text-gray-600">Computer Science</p>
                <p className="text-sm text-gray-500">St. Thomas College of Engineering and Technology • 2019 - 2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-padding">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">Contact</h2>
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Feel free to reach out for collaborations or just a friendly hello. I'm always open to discussing new projects and opportunities.
                </p>
                <div className="space-y-4 text-sm">
                  <a href="mailto:aashishanil530@gmail.com" className="flex items-center space-x-3 hover:text-blue-500 transition-colors">
                    <span className="w-6">📧</span>
                    <span>aashishanil530@gmail.com</span>
                  </a>
                  <a href="https://linkedin.com/in/aashishanil" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:text-blue-500 transition-colors">
                    <span className="w-6">💼</span>
                    <span>linkedin.com/in/aashishanil</span>
                  </a>
                </div>
              </div>
              <div>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm mb-2 text-gray-600">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 border border-gray-200 focus:outline-none focus:border-blue-500 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm mb-2 text-gray-600">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-200 focus:outline-none focus:border-blue-500 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm mb-2 text-gray-600">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-200 focus:outline-none focus:border-blue-500 transition-colors"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full border border-black px-6 py-3 hover:bg-black hover:text-white transition-colors text-sm"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="py-8 text-center text-sm text-gray-500">
        <div className="container mx-auto">
          <p>© 2025 Aashish Anil. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
