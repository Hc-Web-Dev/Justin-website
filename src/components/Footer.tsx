import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Award } from 'lucide-react';

const Footer = () => {
  const handleCallClick = () => {
    window.open('tel:0761564909', '_self');
  };

  const handleEmailClick = () => {
    window.open('mailto:mtplsa.academy@gmail.com', '_self');
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Academy Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src="/logo.svg" alt="Mitchellsplain Skills & Training Academy Logo" className="h-12 w-auto" />
              <div>
                <h3 className="text-xl font-bold">Mitchellsplain Skills & Training Academy</h3>
                <p className="text-gray-400">Professional Healthcare Training</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transform your career with our accredited healthcare courses. In joint venture with 
              MMokeng Careers Training Institute, we provide world-class training that opens doors 
              to meaningful opportunities in the healthcare sector.
            </p>
            <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-lg inline-block">
              <Award className="h-5 w-5 text-teal-400" />
              <span className="text-sm font-medium">QCTO Accredited</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <motion.button 
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-teal-400"
                  whileHover={{ x: 5 }}
                >
                  Home
                </motion.button>
              </li>
              <li>
                <motion.button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-teal-400"
                  whileHover={{ x: 5 }}
                >
                  About Us
                </motion.button>
              </li>
              <li>
                <motion.button 
                  onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-teal-400"
                  whileHover={{ x: 5 }}
                >
                  Courses
                </motion.button>
              </li>
              <li>
                <motion.button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-teal-400"
                  whileHover={{ x: 5 }}
                >
                  Contact
                </motion.button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li>
                <motion.button 
                  onClick={handleCallClick}
                  className="flex items-center space-x-3 text-gray-300 hover:text-teal-400 group"
                  whileHover={{ x: 5 }}
                >
                  <Phone className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span>076 156 4909</span>
                </motion.button>
              </li>
              <li>
                <motion.button 
                  onClick={handleEmailClick}
                  className="flex items-center space-x-3 text-gray-300 hover:text-teal-400 group"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span>mtplsa.academy@gmail.com</span>
                </motion.button>
              </li>
              <li className="flex items-start space-x-3 text-gray-300">
                <MapPin className="h-5 w-5 mt-1 text-teal-400" />
                <span>
                  Entrance 1, Second Floor<br />
                  Netclinic Ndabeni<br />
                  55 Morningside St<br />
                  Cape Town, 7405
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Mitchellsplain Skills & Training Academy. All rights reserved.
            </div>
            <div className="text-gray-400 text-sm">
              Accreditation No: QCTO-07 QCTO/SDP 13062314529
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;