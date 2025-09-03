import { motion, Variants } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  const handleCallClick = () => {
    window.open('tel:0761564909', '_self');
  };

  const handleEmailClick = () => {
    window.open('mailto:mtplsa.academy@gmail.com', '_self');
  };

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <motion.section 
      id="contact" 
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-teal-50 to-blue-50"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
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

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <motion.div 
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Contact Information</h3>
              
              <div className="space-y-4 sm:space-y-6">
                <motion.div 
                  onClick={handleCallClick}
                  className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-teal-50 rounded-xl cursor-pointer group"
                  whileHover={{ scale: 1.03, backgroundColor: "#ccfbf1" }}
                >
                  <div className="bg-teal-600 p-3 rounded-lg group-hover:bg-teal-700 transition-colors">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone Number</p>
                    <p className="text-teal-600 font-medium">076 156 4909</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  onClick={handleEmailClick}
                  className="flex items-center space-x-4 p-4 bg-blue-50 rounded-xl cursor-pointer group"
                  whileHover={{ scale: 1.03, backgroundColor: "#dbeafe" }}
                >
                  <div className="bg-blue-600 p-3 rounded-lg group-hover:bg-blue-700 transition-colors">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email Address</p>
                    <p className="text-blue-600 font-medium">mtplsa.academy@gmail.com</p>
                  </div>
                </motion.div>
                
                <div className="flex items-center space-x-4 p-4 bg-orange-50 rounded-xl">
                  <div className="bg-orange-600 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Physical Address</p>
                    <p className="text-orange-600 font-medium">
                      Entrance 1, Second Floor<br />
                      Netclinic Ndabeni, Sunrise Building<br />
                      55 Morningside St, Ndabeni<br />
                      Cape Town, 7405
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-xl">
                  <div className="bg-green-600 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Office Hours</p>
                    <p className="text-green-600 font-medium">
                      Monday - Friday: 8:00 AM - 5:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Quick Enrollment</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 sm:p-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-xl">
                  <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
                  <div>
                    <p className="font-semibold text-sm sm:text-base">Enrollment Opens</p>
                    <p className="text-teal-100 text-sm sm:text-base">October 1st, 2025</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  Don't wait! Spaces are limited. Contact us today to secure your spot in our 
                  upcoming courses and transform your healthcare career.
                </p>
                <div className="flex space-x-4">
                  <motion.button 
                    onClick={handleCallClick}
                    className="flex-1 bg-teal-600 text-white py-3 rounded-lg font-semibold"
                    whileHover={{ scale: 1.05, backgroundColor: "#0d9488" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Call Now
                  </motion.button>
                  <motion.button 
                    onClick={handleEmailClick}
                    className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold"
                    whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Email Us
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div 
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col h-[600px] sm:h-auto"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <div className="p-4 sm:p-6 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
              <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Find Us</h3>
              <p className="opacity-90 text-sm sm:text-base">Visit our campus in Ndabeni, Cape Town</p>
            </div>
            <div className="h-96 flex-grow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.2829837461785!2d18.4951!3d-33.9249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5d3a96c5f26b%3A0x5ed15be931c089a7!2sEntrance%201%2C%20Second%20Floor%2C%20Netclinic%20Ndabeni%2C%20Sunrise%20Building%2C%2055%20Morningside%20St%2C%20Ndabeni%2C%20Cape%20Town%2C%207405!5e0!3m2!1sen!2sza!4v1234567890!5m2!1sen!2sza"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mitchellsplain Skills and Training Academy Location"
              ></iframe>
            </div>
            <div className="p-6">
              <motion.a
                href="https://google.com/maps?q=Entrance+1,+Second+Floor,+Netclinic+Ndabeni,+Sunrise+Building,+55+Morningside+St,+Ndabeni,+Cape+Town,+7405&ftid=0x1dcc5d3a96c5f26b:0x5ed15be931c089a7&entry=gps&lucs=,94282334,94284472,94224825,94227247,94227248,94231188,47071704,47069508,94218641,94203019,47084304&g_ep=CAISEjI1LjMzLjIuNzkzNTkyNzA0MBgAIIgnKmMsOTQyODIzMzQsOTQyODQ0NzIsOTQyMjQ4MjUsOTQyMjcyNDcsOTQyMjcyNDgsOTQyMzExODgsNDcwNzE3MDQsNDcwNjk1MDgsOTQyMTg2NDEsOTQyMDMwMTksNDcwODQzMDRCAlpB&skid=8aff5617-a9ab-4c7f-a1dc-0cda56873b30&g_st=ipc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold text-center block"
                whileHover={{ scale: 1.05, backgroundColor: "#1f2937" }}
                whileTap={{ scale: 0.95 }}
              >
                Get Directions
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;