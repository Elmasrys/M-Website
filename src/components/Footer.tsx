import React from 'react';
import { Zap, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <a href="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-md p-1.5">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-700">Maverika</span>
            </a>
            <p className="text-gray-600 mb-4">
              AI-powered Enterprise Virtual Employees for the modern organization.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-green-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-green-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-green-600 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {['Features', 'Use Cases', 'Pricing', 'Security', 'Enterprise', 'Roadmap'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {['Documentation', 'API Reference', 'Guides', 'Blog', 'Case Studies', 'Community'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {['About Us', 'Careers', 'Contact', 'Partners', 'Legal', 'Privacy Policy'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Maverika. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-green-600 transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-green-600 transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-green-600 transition-colors text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;