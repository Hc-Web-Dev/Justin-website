import { motion, Variants } from 'framer-motion';
import { Building2 } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };



  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white pt-24 pb-16 sm:pt-20 sm:pb-20"
      role="banner"
      aria-label="Hero section with healthcare training information"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-top bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg')"
        }}
        role="img"
        aria-label="Healthcare training classroom background"
      ></div>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true"></div>
      <motion.div 
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-8">
            <motion.div className="space-y-4" variants={itemVariants}>
              <div
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500/20 to-teal-500/20 text-orange-300 px-6 py-3 rounded-full text-sm font-bold border border-orange-500/30 shadow-lg"
                role="status"
                aria-label="Opening announcement"
              >
                <Building2 className="h-5 w-5" aria-hidden="true" />
                <span>Opening Soon in Cape Town City Centre</span>
              </div>
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                variants={itemVariants}
                itemProp="name"
              >
                Your Future in
                <span className="text-teal-400 block">Healthcare Training</span>
                <span className="text-orange-400 block text-2xl sm:text-3xl lg:text-4xl font-semibold mt-2">Cape Town City Centre Campus</span>
              </motion.h1>
              <motion.p
                className="text-lg sm:text-xl text-gray-300 leading-relaxed"
                variants={itemVariants}
                itemProp="description"
              >
                Join us at our brand new campus in Cape Town City Centre! Transform your career with
                accredited healthcare courses at Mitchellsplain Skills and Training Academy.
                Professional training in the heart of the city that opens doors to meaningful opportunities.
              </motion.p>
            </motion.div>



            <motion.nav
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-4"
              variants={itemVariants}
              role="navigation"
              aria-label="Primary actions"
            >
              <motion.button
                onClick={scrollToContact}
                className="bg-teal-500 text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-xl focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2 focus:ring-offset-black"
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px -5px rgba(0, 128, 128, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                aria-label="Enroll in healthcare training courses"
              >
                Enroll Today
              </motion.button>
              <motion.button
                onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-teal-500 text-teal-400 px-10 py-4 rounded-xl font-semibold text-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2 focus:ring-offset-black"
                whileHover={{ scale: 1.05, backgroundColor: "#14b8a6", color: "#ffffff", boxShadow: "0px 10px 30px -5px rgba(20, 184, 166, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                aria-label="View available healthcare training courses"
              >
                View Courses
              </motion.button>
            </motion.nav>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;