import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Encoded subject for better reliability across different email clients
  const emailSubject = encodeURIComponent("Inquiry from LemonLogic Website");
  const emailBody = encodeURIComponent("Hello LemonLogic,\n\nI'd like to learn more about your services.\n\nRegards,");

  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Branding */}
          <div className="space-y-3">
            <h3 className="text-2xl font-bold tracking-tight">
              Lemon<span className="text-yellow-400">Logic</span>
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Intelligent Automation & Business Systems
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="font-semibold text-slate-100">Contact</h4>
            <address className="not-italic space-y-3 text-slate-400">
              <a 
                href={`mailto:hello@lemonlogicai.com?subject=${emailSubject}&body=${emailBody}`}
                className="block hover:text-yellow-400 transition-colors duration-200"
              >
                hello@lemonlogicai.com
              </a>
              <a 
                href="tel:+2348144664481"
                className="block hover:text-yellow-400 transition-colors duration-200"
              >
                +234 814 466 4481
              </a>
            </address>
          </div>

          {/* Site Navigation */}
          <div className="space-y-4">
            <h4 className="font-semibold text-slate-100">Legal</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/privacy-policy" className="text-slate-400 hover:text-yellow-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/cookie-policy" className="text-slate-400 hover:text-yellow-400 transition-colors duration-200">
                Cookie Policy
              </Link>
              <Link to="/terms-of-use" className="text-slate-400 hover:text-yellow-400 transition-colors duration-200">
                Terms of Use
              </Link>
            </nav>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-center md:text-left">
          <p className="text-slate-500 text-sm">
            &copy; {currentYear} LemonLogic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}