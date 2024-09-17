import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="mx-auto px-5">
        <div className="flex flex-col items-center sm:items-start sm:flex-row justify-between gap-5">
          {/* About Section */}
          <div className="mb-6 sm:mb-0">
            <h2 className="text-lg font-bold text-white">About Us</h2>
            <p className="mt-2">
              We are committed to providing high-quality education to help you achieve your learning goals. Explore our courses and join our community.
            </p>
          </div>

          {/* Links Section */}
          <div className="mb-6 sm:mb-0">
            <h2 className="text-lg font-bold text-white text-nowrap">Quick Links</h2>
            <ul className="mt-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Courses</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="mb-6 sm:mb-0">
            <h2 className="text-lg font-bold text-white">Contact Us</h2>
            <p className="mt-2">Email: <a href="mailto:support@example.com" className="text-gray-400 hover:text-white">support@example.com</a></p>
            <p className="mt-1">Phone: <a href="tel:+1234567890" className="text-gray-400 hover:text-white">+1 (234) 567-890</a></p>
            <p className="mt-1">Address: 123 Education St, Learning City, LC 12345</p>
          </div>

          {/* Social Media Section */}
          <div className="mb-6 sm:mb-0">
            <h2 className="text-lg font-bold text-white">Follow Us</h2>
            <div className="flex mt-2 space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedinIn size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <p className="text-gray-500">© {new Date().getFullYear()} Your Education Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
