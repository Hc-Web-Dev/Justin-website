import { motion, Variants } from 'framer-motion';
import { CheckCircle, Award, BookOpen } from 'lucide-react';

const Courses = () => {
  const accreditedCourses = [
    {
      title: "Social Auxiliary Work",
      level: "Level 5",
      duration: "12 months",
      students: "50+ enrolled",
      description: "Comprehensive training in social work principles, community development, and client support services.",
      features: [
        "Community engagement techniques",
        "Client assessment and support",
        "Professional ethics and practice",
        "Report writing and documentation",
        "Practical work experience"
      ]
    },
    {
      title: "Health Promotion Officer",
      level: "Level 3",
      duration: "6 months",
      students: "30+ enrolled",
      description: "Learn to promote health awareness, conduct health education programs, and support community wellness initiatives.",
      features: [
        "Health education planning",
        "Community health programs",
        "Disease prevention strategies",
        "Health screening coordination",
        "Public health communication"
      ]
    },
    {
      title: "Home-Based Personal Care Worker",
      level: "Level 3",
      duration: "6 months",
      students: "40+ enrolled",
      description: "Training in providing personal care services in home settings, focusing on elderly and disabled care.",
      features: [
        "Personal care assistance",
        "Medication management",
        "Mobility support",
        "Emergency response procedures",
        "Family communication skills"
      ]
    }
  ];

  const nonAccreditedCourses = [
    {
      title: "HIV Counseling & Testing",
      duration: "3 months",
      students: "25+ enrolled",
      description: "Specialized training in HIV counseling, testing procedures, and support services for affected individuals.",
      features: [
        "Pre and post-test counseling",
        "Testing procedures",
        "Risk assessment",
        "Support group facilitation",
        "Confidentiality protocols"
      ]
    },
    {
      title: "Care Worker's Course",
      duration: "4 months",
      students: "35+ enrolled",
      description: "Essential skills for care workers including basic healthcare, patient interaction, and care planning.",
      features: [
        "Basic healthcare principles",
        "Patient communication",
        "Care plan implementation",
        "Infection control",
        "Professional boundaries"
      ]
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
      id="courses"
      className="py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      aria-labelledby="courses-heading"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2
            id="courses-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            itemProp="name"
          >
            Our Training Programs
          </h2>
          <p
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
            itemProp="description"
          >
            Choose from our comprehensive range of accredited and non-accredited courses
            designed to advance your healthcare career.
          </p>
        </header>

        {/* Accredited Courses */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-8 sm:mb-12">
            <div className="bg-teal-100 px-4 sm:px-6 py-2 sm:py-3 rounded-full">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Award className="h-5 w-5 sm:h-6 sm:w-6 text-teal-600" />
                <h3 className="text-xl sm:text-2xl font-bold text-teal-900">Accredited Courses</h3>
              </div>
            </div>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={cardContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {accreditedCourses.map((course, index) => (
              <motion.article
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col"
                variants={cardVariants}
                whileHover={{ y: -8, boxShadow: "0px 20px 40px -15px rgba(0, 128, 128, 0.2)" }}
                itemScope
                itemType="https://schema.org/Course"
                itemProp="itemListElement"
              >
                <div className="bg-gradient-to-r from-teal-600 to-blue-600 p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                      {course.level}
                    </span>
                    <Award className="h-6 w-6" />
                  </div>
                  <h4
                    className="text-2xl font-bold mb-2"
                    itemProp="name"
                  >
                    {course.title}
                  </h4>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex-grow">
                    <p
                      className="text-gray-600 mb-6 leading-relaxed"
                      itemProp="description"
                    >
                      {course.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      {course.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <motion.button 
                    className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold mt-auto"
                    whileHover={{ scale: 1.05, backgroundColor: "#0d9488" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.button>
                </div>
                              </motion.article>
              ))}
            </motion.div>
        </div>

        {/* Non-Accredited Courses */}
        <div>
          <div className="flex items-center justify-center mb-8 sm:mb-12">
            <div className="bg-blue-100 px-4 sm:px-6 py-2 sm:py-3 rounded-full">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                <h3 className="text-xl sm:text-2xl font-bold text-blue-900">Non-Accredited Courses</h3>
              </div>
            </div>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
            variants={cardContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {nonAccreditedCourses.map((course, index) => (
              <motion.article
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                variants={cardVariants}
                whileHover={{ y: -8, boxShadow: "0px 20px 40px -15px rgba(59, 130, 246, 0.2)" }}
                itemScope
                itemType="https://schema.org/Course"
                itemProp="itemListElement"
              >
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
                  <h4
                    className="text-2xl font-bold mb-2"
                    itemProp="name"
                  >
                    {course.title}
                  </h4>
                </div>
                
                <div className="p-6">
                  <p
                    className="text-gray-600 mb-6 leading-relaxed"
                    itemProp="description"
                  >
                    {course.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {course.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <motion.button 
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold"
                    whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.button>
                </div>
                              </motion.article>
              ))}
            </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Courses;