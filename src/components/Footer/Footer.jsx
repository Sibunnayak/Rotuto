import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-10 border-t  shadow-lg">
      <div className="flex flex-col lg:flex-row lg:mx-28 mx-10">
        {/* Company Information */}
        <div className="flex flex-col items-start mb-8 sm:mx-16 lg:w-1/3">
          <div className="mb-2.5 flex flex-row items-center">
            <p className="text-2xl font-bold text-black">Rotuto</p>
          </div>
          <div className="text-sm mb-1 text-black lg:w-full md:w-2/3">
            AI empowers you to select specific keywords that matter to you.
          </div>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-sm:-ml-9 md:px-14 gap-4 lg:gap-12 justify-center">
          {/* Links */}
          <div className="flex flex-col mx-10 sm:mx-0">
            <div className="text-xl font-bold mb-2.5 text-black">Links</div>
            <Link to="/" className="text-base text-black mb-1 hover:underline">
              Home
            </Link>
            <Link
              to="/about-us"
              className="text-base text-black mb-1 hover:underline"
            >
              About
            </Link>
            <Link
              to="/pricing"
              className="text-base text-black mb-1 hover:underline"
            >
              Pricing
            </Link>
            <Link
              to="/use-cases"
              className="text-base text-black mb-1 hover:underline"
            >
              Use Cases
            </Link>
          </div>

          {/* Social Media */}
          <div className="flex flex-col mx-10 sm:mx-0">
            <div className="text-xl font-bold mb-2.5 text-black">
              Social Media
            </div>
            <a
              href="https://www.linkedin.com/showcase/leadesh/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-black mb-1 hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://www.facebook.com/getleadesh/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-black mb-1 hover:underline"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/getleadesh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-black mb-1 hover:underline"
            >
              Instagram
            </a>
            <a
              href="https://twitter.com/getleadesh/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-black mb-2 hover:underline"
            >
              Twitter
            </a>
          </div>

          {/* Legal */}
          <div className="flex flex-col mx-10 sm:mx-0">
            <div className="text-xl font-bold text-black mb-2.5">Legal</div>
            <Link
              to="/privacy-policy"
              className="text-base text-black mb-1 hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-conditions"
              className="text-base text-black mb-1 hover:underline"
            >
              Terms and Conditions
            </Link>
            <Link
              to="/support"
              className="text-base text-black mb-1 hover:underline"
            >
              Support
            </Link>
            <Link
              to="/contact-us"
              className="text-base text-black mb-1 hover:underline"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <hr className="bg-gray-900 w-2/3 mx-auto my-5 opacity-70" />
      <div className="text-black text-center max-sm:text-xs text-sm mb-4 max-sm:mx-6">
        <p>
          © 2023 - 2024 Neonflake Enterprises OPC Pvt Ltd. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
