import { motion, Variants } from 'framer-motion';
import { Building2 } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white px-4"
      role="banner"
      aria-label="Hero section with healthcare training information"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-top bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg')",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      {/* Foreground content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Pill */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-teal-500/20 text-orange-300 px-4 py-2 rounded-full text-xs sm:text-sm font-bold border border-orange-500/30 shadow-lg"
          role="status"
          aria-label="Opening announcement"
        >
          <Building2 className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
          <span>Opening Soon in Cape Town City Centre</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mt-4 mb-3 sm:mb-4"
          itemProp="name"
        >
          Your Future in
          <span className="text-teal-400 block">Healthcare Training</span>
          <span className="text-orange-400 block text-lg xs:text-xl sm:text-2xl lg:text-3xl font-semibold mt-1">
            Cape Town City Centre Campus
          </span>
        </motion.h1>

        {/* Sub-copy */}
        <motion.p
          variants={itemVariants}
          className="text-sm xs:text-base sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-6 sm:mb-8"
          itemProp="description"
        >
          Join us at our brand-new campus in Cape Town City Centre! Transform
          your career with accredited healthcare courses at Mitchellsplain
          Skills and Training Academy. Professional training in the heart of the
          city that opens doors to meaningful opportunities.
        </motion.p>

        {/* Buttons – always visible without scroll */}
        <motion.nav
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4"
          role="navigation"
          aria-label="Primary actions"
        >
          <motion.button
            onClick={scrollToContact}
            className="w-full sm:w-auto bg-teal-500 text-white px-6 py-3 sm:px-10 sm:py-4 rounded-xl font-semibold text-base sm:text-lg shadow-xl focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2 focus:ring-offset-black"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Enroll in healthcare training courses"
          >
            Enroll Today
          </motion.button>

          <motion.button
            onClick={() =>
              document
                .getElementById('courses')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="w-full sm:w-auto border-2 border-teal-500 text-teal-400 px-6 py-3 sm:px-10 sm:py-4 rounded-xl font-semibold text-base sm:text-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2 focus:ring-offset-black"
            whileHover={{
              scale: 1.05,
              backgroundColor: '#14b8a6',
              color: '#ffffff',
            }}
            whileTap={{ scale: 0.95 }}
            aria-label="View available healthcare training courses"
          >
            View Courses
          </motion.button>
        </motion.nav>
      </motion.div>
    </section>
  );
};

export default Hero;
