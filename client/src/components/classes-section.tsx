import { motion } from "framer-motion";
import { Clock, Calendar } from "lucide-react";
import { yogaClasses } from "@/lib/data";

const ClassesSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="classes" className="py-20 bg-neutral-200">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-neutral-900 mb-5">
            Discover Our Online Classes
          </h2>
          <p className="text-neutral-900/70">
            From beginners to advanced practitioners, our diverse range of
            classes offers something for everyone on their yoga journey.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {yogaClasses.map((yogaClass, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
              variants={fadeIn}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={yogaClass.image}
                  alt={yogaClass.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-xs font-medium text-primary">
                  {yogaClass.level}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold mb-2">
                  {yogaClass.title}
                </h3>
                <p className="text-neutral-900/70 mb-4">
                  {yogaClass.description}
                </p>
                <div className="flex items-center text-sm text-neutral-900/60 mb-5">
                  <div className="flex items-center mr-4">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{yogaClass.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{yogaClass.schedule}</span>
                  </div>
                </div>
                <a
                  href="#contact"
                  className="block text-center bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-full transition-colors font-medium"
                >
                  Join This Class
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClassesSection;
