import Link from 'next/link';import Link from 'next/link';



const Navbar = () => {const Navbar = () => {

  return (  return (

    <nav className="fixed top-0 w-full bg-gray-900 text-white shadow-lg z-50">    <nav className="fixed top-0 w-full bg-gray-900 text-white shadow-lg z-50">

      <div className="container mx-auto px-4">      <div className="container mx-auto px-4">

        <div className="flex justify-between items-center h-16">        <div className="flex justify-between items-center h-16">

          <Link href="/" className="text-xl font-bold">          <Link href="/" className="text-xl font-bold">

            Aashish Anil            Aashish Anil

          </Link>          </Link>

          <div className="hidden md:flex space-x-8">          <div className="hidden md:flex space-x-8">

            <Link href="/#about" className="hover:text-blue-400 transition-colors">            <Link href="/#about" className="hover:text-blue-400 transition-colors">

              About              About

            </Link>            </Link>

            <Link href="/#experience" className="hover:text-blue-400 transition-colors">            <Link href="/#experience" className="hover:text-blue-400 transition-colors">

              Experience              Experience

            </Link>            </Link>

            <Link href="/#projects" className="hover:text-blue-400 transition-colors">            <Link href="/#projects" className="hover:text-blue-400 transition-colors">

              Projects              Projects

            </Link>            </Link>

            <Link href="/#contact" className="hover:text-blue-400 transition-colors">            <Link href="/#contact" className="hover:text-blue-400 transition-colors">

              Contact              Contact

            </Link>            </Link>

          </div>          </div>

        </div>        </div>

      </div>      </div>

    </nav>    </nav>

  );  );

};};



export default Navbar;export default Navbar;