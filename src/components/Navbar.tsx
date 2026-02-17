import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <Link to="/" className="text-2xl font-bold text-indigo-700">
          DigitalAccess
        </Link>

        <div className="space-x-8 hidden md:flex">
          <Link to="/services" className="hover:text-indigo-600 transition">
            Services
          </Link>
          <Link to="/platform" className="hover:text-indigo-600 transition">
            Platform
          </Link>
          <Link to="/about" className="hover:text-indigo-600 transition">
            About
          </Link>
          <Link to="/blog" className="hover:text-indigo-600 transition">
            Blog
          </Link>
        </div>

        <a
          href="https://calendly.com/rajeshgupta"
          target="_blank"
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Book Call
        </a>
      </div>
    </nav>
  );
}