import { motion, Variants } from 'framer-motion';
import { Award, Users, BookOpen, Target } from 'lucide-react';

const About = () => {
  const features = [
    {
      title: "Expert Instructors",
      description: "Learn from experienced professionals actively working in the healthcare industry.",
      icon: Users,
    },
    {
      title: "Comprehensive Curriculum",
      description: "Our courses cover a wide range of topics, ensuring a well-rounded education.",
      icon: BookOpen,
    },
    {
      title: "Flexible Learning Options",
      description: "We offer both in-person and online classes to fit your busy schedule.",
      icon: Target,
    },
    {
      title: "Career Support",
      description: "Get assistance with job placements and career advice from our dedicated team.",
      icon: Award,
    }
  ];

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const cardContainerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
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
    <motion.section 
      id="about" 
      className="py-20 bg-white"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Our Academy
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Mitchellsplain Skills and Training Academy, in joint venture with MMokeng Careers Training Institute, 
            provides world-class healthcare training to empower your professional journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Empowering Healthcare Professionals Since 2014
            </h3>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Our academy is committed to providing high-quality education and training in the healthcare sector. 
              We combine theoretical knowledge with practical hands-on experience to ensure our graduates are 
              job-ready and confident in their chosen field.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With our QCTO accreditation and partnership with MMokeng Careers Training Institute, we offer 
              both accredited and non-accredited programs designed to meet industry demands and create 
              pathways to meaningful careers in healthcare.
            </p>
            <div className="bg-teal-50 border-l-4 border-teal-600 p-6 rounded-lg">
              <p className="text-teal-800 font-medium">
                "Our mission is to bridge the gap between education and employment by providing practical, 
                industry-relevant training that transforms lives and communities."
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Healthcare training classroom"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-blue-600/20 rounded-2xl"></div>
          </motion.div>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={cardContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-sm border border-gray-100"
              variants={cardVariants}
              whileHover={{ y: -8, boxShadow: "0px 15px 30px -10px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="bg-teal-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <feature.icon className="h-8 w-8 text-teal-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;