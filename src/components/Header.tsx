import { useState, type MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'contact') {
      document.getElementById('form-heading')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    event.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <motion.header 
      className="fixed top-0 w-full z-50 bg-white shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-1">
          <div className="flex items-center">
            <img src="/logo.svg" alt="Mitchellsplain Skills & Training Academy Logo" className="h-20 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <motion.a
              href="#home"
              onClick={(event) => handleNavClick(event, 'home')}
              className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
            >
              Home
            </motion.a>
            <motion.a
              href="#about"
              onClick={(event) => handleNavClick(event, 'about')}
              className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
            >
              About
            </motion.a>
            <motion.a
              href="#courses"
              onClick={(event) => handleNavClick(event, 'courses')}
              className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
            >
              Courses
            </motion.a>
            <motion.a
              href="#contact-form"
              onClick={(event) => handleNavClick(event, 'contact-form')}
              className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
            >
              Contact
            </motion.a>
            <motion.a
              href="#contact-form"
              onClick={(event) => handleNavClick(event, 'contact-form')}
              className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Enroll Now
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-3 border-t border-gray-200 bg-white/95 backdrop-blur-sm rounded-b-lg">
            <div className="flex flex-col space-y-4 px-4">
              <motion.a
                href="#home"
                onClick={(event) => handleNavClick(event, 'home')}
                className="text-gray-700 hover:text-teal-600 font-medium text-left"
              >
                Home
              </motion.a>
              <motion.a
                href="#about"
                onClick={(event) => handleNavClick(event, 'about')}
                className="text-gray-700 hover:text-teal-600 font-medium text-left"
              >
                About
              </motion.a>
              <motion.a
                href="#courses"
                onClick={(event) => handleNavClick(event, 'courses')}
                className="text-gray-700 hover:text-teal-600 font-medium text-left"
              >
                Courses
              </motion.a>
              <motion.a
                href="#contact-form"
                onClick={(event) => handleNavClick(event, 'contact-form')}
                className="text-gray-700 hover:text-teal-600 font-medium text-left"
              >
                Contact
              </motion.a>
              <motion.a
                href="#contact-form"
                onClick={(event) => handleNavClick(event, 'contact-form')}
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg font-medium text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Enroll Now
              </motion.a>
            </div>
          </div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;