import { motion, Variants } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import ContactForm from './ContactForm';

const Contact = () => {
  const handleCallClick = () => {
    window.open('tel:0761564909', '_self');
  };

  const handleEmailClick = () => {
    window.open('mailto:mtplsa.academy@gmail.com', '_self');
  };

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.section 
      id="contact" 
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-teal-50 to-blue-50"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Ready to start your healthcare career? Contact us today to learn more about our courses 
            and enrollment process.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Information and Form */}
          <motion.div
            className="space-y-4 sm:space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Contact Information</h3>
              
              <div className="space-y-3 sm:space-y-4">
                <motion.div 
                  onClick={handleCallClick}
                  className="flex items-center space-x-3 p-3 sm:p-4 bg-teal-50 rounded-xl cursor-pointer group"
                  whileHover={{ scale: 1.02, backgroundColor: "#ccfbf1" }}
                >
                  <div className="bg-teal-600 p-2 sm:p-3 rounded-lg group-hover:bg-teal-700 transition-colors flex-shrink-0">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">Phone Number</p>
                    <p className="text-teal-600 font-medium text-sm sm:text-base">076 156 4909</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  onClick={handleEmailClick}
                  className="flex items-center space-x-3 p-3 sm:p-4 bg-blue-50 rounded-xl cursor-pointer group"
                  whileHover={{ scale: 1.02, backgroundColor: "#dbeafe" }}
                >
                  <div className="bg-blue-600 p-2 sm:p-3 rounded-lg group-hover:bg-blue-700 transition-colors flex-shrink-0">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">Email Address</p>
                    <p className="text-blue-600 font-medium text-xs sm:text-sm break-all">mtplsa.academy@gmail.com</p>
                  </div>
                </motion.div>
                
                <div className="flex items-start space-x-3 p-3 sm:p-4 bg-orange-50 rounded-xl">
                  <div className="bg-orange-600 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">Location</p>
                    <p className="text-orange-600 font-medium text-xs sm:text-sm leading-relaxed">
                      Opening Soon in Cape Town City Center<br />
                    </p>
                  </div>
                </div>
                
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />

          </motion.div>

          {/* Map */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col h-[400px] sm:h-[500px] lg:h-auto"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-4 sm:p-6 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2">Find Us</h3>
              <p className="opacity-90 text-xs sm:text-sm lg:text-base">Coming Soon to Cape Town City Center</p>
            </div>
            <div className="flex-grow min-h-[250px] sm:min-h-[300px] lg:h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.2829837461785!2d18.4185!3d-33.9249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc676b5e1f9b9b%3A0x1e0b1b1b1b1b1b1b!2sCape%20Town%20City%20Centre%2C%20Cape%20Town!5e0!3m2!1sen!2sza!4v1699999999!5m2!1sen!2sza"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mitchellsplain Skills and Training Academy - Cape Town City Center"
              ></iframe>
            </div>
            <div className="p-4 sm:p-6">
              <motion.a
                href="https://google.com/maps?q=Cape+Town+City+Centre,+Cape+Town,+South+Africa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gray-900 text-white py-2.5 sm:py-3 rounded-lg font-semibold text-center block text-sm sm:text-base"
                whileHover={{ scale: 1.02, backgroundColor: "#1f2937" }}
                whileTap={{ scale: 0.98 }}
              >
                View Cape Town City Center
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;