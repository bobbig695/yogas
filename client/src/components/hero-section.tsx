import { motion } from "framer-motion";
import { Heart, User, Home } from "lucide-react";

const HeroSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section
      id="home"
      className="relative pt-16 pb-32 md:pt-20 md:pb-40 bg-neutral-100 overflow-hidden"
    >
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        }}
      ></div>

      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="font-heading text-4xl md:text-6xl font-semibold text-neutral-900 mb-6 leading-tight"
            variants={fadeIn}
          >
            Transform Your Life Through{" "}
            <span className="text-primary">Mindful Yoga</span>
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-neutral-900/80 mb-10"
            variants={fadeIn}
          >
            Join our online yoga community and experience the benefits of
            professional guidance from anywhere in the world.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={fadeIn}
          >
            <a
              href="#contact"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full transition-all font-medium text-lg w-full sm:w-auto text-center"
            >
              Start Your Journey
            </a>
            <a
              href="#classes"
              className="border-2 border-primary text-primary hover:bg-primary/5 px-8 py-3 rounded-full transition-all font-medium text-lg w-full sm:w-auto text-center"
            >
              Explore Classes
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
            variants={fadeIn}
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Heart className="text-primary text-xl" />
            </div>
            <h3 className="font-heading text-xl font-semibold mb-2">
              Mind-Body Balance
            </h3>
            <p className="text-neutral-900/70">
              Our holistic approach helps you achieve harmony between physical
              strength and mental clarity.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
            variants={fadeIn}
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <User className="text-primary text-xl" />
            </div>
            <h3 className="font-heading text-xl font-semibold mb-2">
              Expert Instruction
            </h3>
            <p className="text-neutral-900/70">
              Learn from certified instructors with years of experience in
              various yoga disciplines.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
            variants={fadeIn}
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Home className="text-primary text-xl" />
            </div>
            <h3 className="font-heading text-xl font-semibold mb-2">
              Practice Anywhere
            </h3>
            <p className="text-neutral-900/70">
              Access our classes from any device, anytime, anywhere—no commute
              required.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
