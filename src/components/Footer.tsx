import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        <div>
          <h3 className="text-white text-xl font-semibold mb-4">
            DigitalAccess
          </h3>
          <p>
            Enterprise accessibility strategy and automation platform
            for scalable WCAG compliance.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2">
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/platform">Platform</Link></li>
            <li><Link to="/blog">Insights</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <p>Email: se.rajeshgupta@gmail.com</p>
          <p>Enterprise Strategy Consultation Available</p>
        </div>

      </div>

      <div className="text-center mt-12 text-sm text-gray-300">
		© {new Date().getFullYear()} DigitalAccess. All rights reserved.
	  </div>
    </footer>
  );

}
