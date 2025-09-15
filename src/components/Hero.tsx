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
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const tagVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.7,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants: Variants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.97 },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden"
      role="banner"
      aria-label="Hero section: Launching healthcare training in Cape Town City Centre"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
        role="img"
        aria-label="Modern healthcare classroom with students and instructors"
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black/90" aria-hidden="true"></div>

      {/* Main Content */}
      <motion.div
        className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-8 flex flex-col items-center">
          {/* Headline with Integrated Tag */}
          <motion.div variants={itemVariants} className="space-y-4 relative">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight"
              itemProp="name"
            >
              Your Future in
              <span className="text-teal-400 block mt-2 sm:mt-3">Healthcare Training</span>
              <span className="block mt-4 sm:mt-6 relative">
                <span className="text-orange-400 text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide">
                  Cape Town City Centre Campus
                </span>

                {/* Integrated Floating Tag — Positioned to the right of campus name */}
                <motion.div
                  variants={tagVariants}
                  className="absolute -top-2 -right-4 sm:-right-6 md:-right-8 bg-gradient-to-r from-orange-500/90 to-orange-600/90 text-white text-xs sm:text-sm font-bold px-3 py-1.5 rounded-full flex items-center space-x-1.5 shadow-lg border border-orange-400/30 backdrop-blur-sm animate-fade-in"
                  aria-label="Campus opening soon"
                >
                  <Building2 className="h-3.5 w-3.5" aria-hidden="true" />
                  <span className="whitespace-nowrap">Opening Soon</span>
                </motion.div>
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed max-w-4xl mx-auto px-2"
            itemProp="description"
          >
            Join us at our brand-new campus in the heart of Cape Town. Transform your career with
            <span className="font-medium text-white"> accredited, industry-aligned healthcare courses </span>
            from Mitchellsplain Skills and Training Academy — where professional training meets real-world opportunity.
          </motion.p>

          {/* CTA Buttons */}
          <motion.nav
            className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-8"
            variants={itemVariants}
            role="navigation"
            aria-label="Primary call-to-action buttons"
          >
            <motion.button
              onClick={scrollToContact}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 sm:px-12 py-4 rounded-xl font-semibold text-lg sm:text-xl shadow-xl focus:outline-none focus:ring-4 focus:ring-teal-300/50 focus:ring-offset-2 focus:ring-offset-black transition-all duration-300"
              aria-label="Enroll in healthcare training courses today"
            >
              Enroll Today
            </motion.button>

            <motion.button
              onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="border-2 border-teal-500 text-teal-300 hover:bg-teal-500 hover:text-white px-8 sm:px-12 py-4 rounded-xl font-semibold text-lg sm:text-xl shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-teal-300/50 focus:ring-offset-2 focus:ring-offset-black transition-all duration-300"
              aria-label="View available healthcare training courses"
            >
              View Courses
            </motion.button>
          </motion.nav>
        </div>
      </motion.div>

      {/* Optional Scroll Hint */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }}
          className="text-gray-300 text-sm"
          aria-hidden="true"
        >
          ↓ Scroll to explore
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;