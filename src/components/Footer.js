const Footer = () => (
  <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300 py-8 mt-12">
    <div className="container mx-auto text-center px-6">
      <h3 className="text-lg font-semibold tracking-wide text-white mb-2">
        Hiring Process Automation
      </h3>
      <p className="text-gray-400 text-sm">
        Streamlining recruitment for a better hiring experience.
      </p>

      <div className="flex justify-center gap-6 mt-4">
        <a href="#" className="hover:text-blue-400 transition">
          Privacy Policy
        </a>
        <a href="#" className="hover:text-blue-400 transition">
          Terms of Service
        </a>
        <a href="#" className="hover:text-blue-400 transition">
          Contact Us
        </a>
      </div>

      <div className="mt-6 flex justify-center gap-4">
        <a href="#" className="text-gray-400 hover:text-white transition">
          <i className="fab fa-facebook-f text-xl"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition">
          <i className="fab fa-twitter text-xl"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition">
          <i className="fab fa-linkedin-in text-xl"></i>
        </a>
      </div>

      <p className="mt-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} Hiring Process Automation. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
