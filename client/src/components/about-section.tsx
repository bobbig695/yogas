import { motion } from "framer-motion";
import { Award } from "lucide-react";

const AboutSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-neutral-900 mb-6">
              About Your Instructor
            </h2>
            <p className="text-neutral-900/70 mb-6">
              Hi, I'm Maya. With over 10 years of experience teaching yoga
              across various styles and traditions, I've helped hundreds of
              students transform their practice and their lives.
            </p>
            <p className="text-neutral-900/70 mb-6">
              After completing my 500-hour teacher training in Rishikesh, India,
              I've dedicated my life to sharing the profound benefits of yoga
              with practitioners at all levels.
            </p>
            <p className="text-neutral-900/70 mb-6">
              My teaching philosophy centers on making yoga accessible to
              everyone while honoring its rich traditions. I believe in creating
              a supportive environment where you can explore, grow, and discover
              your own path to wellbeing.
            </p>
            <div className="flex items-center space-x-4 mt-8">
              <a
                href="#contact"
                className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full transition-colors font-medium"
              >
                Connect With Me
              </a>
              <a
                href="#classes"
                className="text-primary font-medium flex items-center hover:underline"
              >
                View My Classes
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <img
              src="https://images.unsplash.com/photo-1552196563-55cd4e45efb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=926&q=80"
              alt="Yoga instructor in a peaceful pose"
              className="w-full h-auto rounded-xl shadow-lg"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-md hidden md:block">
              <div className="flex items-center">
                <div className="bg-primary/10 rounded-full p-2 mr-3">
                  <Award className="text-primary text-xl" />
                </div>
                <div>
                  <p className="text-sm text-neutral-900/70">Certified</p>
                  <p className="font-semibold">E-RYT 500 Instructor</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
