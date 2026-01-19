import { motion } from 'framer-motion';
import type { MouseEvent } from 'react';
import { Phone, Mail, MapPin, Award } from 'lucide-react';

const Footer = () => {
  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    event.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Academy Info */}
          <div className="lg:col-span-2">
            <div className="flex items-start space-x-3 mb-6">
              <img src="/logo.svg" alt="Mitchellsplain Skills & Training Academy Logo" className="h-10 sm:h-12 w-auto flex-shrink-0" />
              <div className="min-w-0">
                <h3 className="text-lg sm:text-xl font-bold leading-tight">Mitchellsplain Skills & Training Academy</h3>
                <p className="text-gray-400 text-sm sm:text-base">Professional Healthcare Training</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
              Transform your career with our accredited healthcare courses. In joint venture with 
              MMokeng Careers Training Institute, we provide world-class training that opens doors 
              to meaningful opportunities in the healthcare sector.
            </p>
            <div className="flex items-center space-x-2 bg-gray-800 px-3 sm:px-4 py-2 rounded-lg inline-block">
              <Award className="h-4 w-4 sm:h-5 sm:w-5 text-teal-400" />
              <span className="text-xs sm:text-sm font-medium">QCTO Accredited</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <motion.a 
                  href="#home"
                  onClick={(event) => handleNavClick(event, 'home')}
                  className="text-gray-300 hover:text-teal-400"
                  whileHover={{ x: 5 }}
                >
                  Home
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#about"
                  onClick={(event) => handleNavClick(event, 'about')}
                  className="text-gray-300 hover:text-teal-400"
                  whileHover={{ x: 5 }}
                >
                  About Us
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#courses"
                  onClick={(event) => handleNavClick(event, 'courses')}
                  className="text-gray-300 hover:text-teal-400"
                  whileHover={{ x: 5 }}
                >
                  Courses
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#contact"
                  onClick={(event) => handleNavClick(event, 'contact')}
                  className="text-gray-300 hover:text-teal-400"
                  whileHover={{ x: 5 }}
                >
                  Contact
                </motion.a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li>
                <motion.a 
                  href="tel:0761564909"
                  className="flex items-center space-x-3 text-gray-300 hover:text-teal-400 group"
                  whileHover={{ x: 5 }}
                >
                  <Phone className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span>076 156 4909</span>
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="mailto:mtplsa.academy@gmail.com"
                  className="flex items-center space-x-3 text-gray-300 hover:text-teal-400 group"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span>mtplsa.academy@gmail.com</span>
                </motion.a>
              </li>
              <li className="flex items-start space-x-3 text-gray-300">
                <MapPin className="h-5 w-5 mt-1 text-teal-400 flex-shrink-0" />
                <span className="text-sm sm:text-base leading-relaxed">
                  Opening Soon in<br />
                  <span className="text-teal-300 font-semibold">Cape Town City Center</span><br />
                  <span className="text-orange-300 text-xs">New Campus Location</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="text-gray-400 text-xs sm:text-sm mb-4 md:mb-0">
              © 2026 Mitchellsplain Skills & Training Academy. All rights reserved.
            </div>
            <div className="text-gray-400 text-xs sm:text-sm mb-4 md:mb-0">
              Accreditation No: QCTO-07 QCTO/SDP 13062314529
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <motion.a
              href="https://hcweb.co.za/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400 text-xs sm:text-sm transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Website by HC WEB
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;