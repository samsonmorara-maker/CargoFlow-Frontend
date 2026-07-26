import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaTruck,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">

      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 md:grid-cols-4">

        {/* Company */}

        <div>

          <div className="mb-6 flex items-center gap-3">

            <FaTruck className="text-3xl text-blue-500" />

            <h2 className="text-2xl font-bold text-white">
              CargoFlow
            </h2>

          </div>

          <p className="leading-7">
            Intelligent logistics platform built for
            customers, drivers and businesses.
          </p>

        </div>

        {/* Platform */}

        <div>

          <h3 className="mb-6 text-xl font-semibold text-white">
            Platform
          </h3>

          <div className="space-y-3">

            <Link to="/" className="block hover:text-white">
              Home
            </Link>

            <a href="#features" className="block hover:text-white">
              Features
            </a>

            <a href="#" className="block hover:text-white">
              Pricing
            </a>

            <a href="#" className="block hover:text-white">
              Business
            </a>

          </div>

        </div>

        {/* Company */}

        <div>

          <h3 className="mb-6 text-xl font-semibold text-white">
            Company
          </h3>

          <div className="space-y-3">

            <a href="#" className="block hover:text-white">
              About
            </a>

            <a href="#" className="block hover:text-white">
              Careers
            </a>

            <a href="#" className="block hover:text-white">
              Contact
            </a>

            <a href="#" className="block hover:text-white">
              Privacy Policy
            </a>

          </div>

        </div>

        {/* Social */}

        <div>

          <h3 className="mb-6 text-xl font-semibold text-white">
            Connect
          </h3>

          <div className="flex gap-5 text-2xl">

            <a href="#">
              <FaFacebook className="hover:text-white" />
            </a>

            <a href="#">
              <FaTwitter className="hover:text-white" />
            </a>

            <a href="#">
              <FaInstagram className="hover:text-white" />
            </a>

            <a href="#">
              <FaLinkedin className="hover:text-white" />
            </a>

            <a href="#">
              <FaGithub className="hover:text-white" />
            </a>

          </div>

        </div>

      </div>

      <div className="border-t border-gray-800 py-8">

        <p className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} CargoFlow. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;