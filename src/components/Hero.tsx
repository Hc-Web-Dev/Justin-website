import { motion, Variants } from 'framer-motion';
import { Calendar } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
    <section id="home" className="relative min-h-screen flex items-center justify-center text-white pt-28 pb-16 sm:pt-24 sm:pb-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-top bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg')"
        }}
      ></div>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      <motion.div 
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-8">
            <motion.div className="space-y-4" variants={itemVariants}>
              <div className="inline-flex items-center space-x-2 bg-teal-500/20 text-teal-300 px-4 py-2 rounded-full text-sm font-medium border border-teal-500/30">
                <Calendar className="h-4 w-4" />
                <span>Enrollment Opens October 1st</span>
              </div>
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                variants={itemVariants}
              >
                Your Future in
                <span className="text-teal-400 block">Healthcare Training</span>
              </motion.h1>
              <motion.p 
                className="text-lg sm:text-xl text-gray-300 leading-relaxed"
                variants={itemVariants}
              >
                Transform your career with accredited healthcare courses at Mitchellsplain Skills 
                and Training Academy. Professional training that opens doors to meaningful opportunities.
              </motion.p>
            </motion.div>



            <motion.div 
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-4"
              variants={itemVariants}
            >
              <motion.button
                onClick={scrollToContact}
                className="bg-teal-500 text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-xl"
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px -5px rgba(0, 128, 128, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                Enroll Today
              </motion.button>
              <motion.button
                onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-teal-500 text-teal-400 px-10 py-4 rounded-xl font-semibold text-lg shadow-lg"
                whileHover={{ scale: 1.05, backgroundColor: "#14b8a6", color: "#ffffff", boxShadow: "0px 10px 30px -5px rgba(20, 184, 166, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                View Courses
              </motion.button>
            </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;