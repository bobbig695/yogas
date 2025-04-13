import { motion } from "framer-motion";
import { Mail, Phone, Globe, Instagram, Facebook, Youtube, Twitter } from "lucide-react";
import LeadForm from "./lead-form";

const ContactSection = () => {
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
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="font-heading text-3xl md:text-4xl font-semibold text-neutral-900 mb-6"
              variants={fadeIn}
            >
              Begin Your Yoga Journey
            </motion.h2>
            <motion.p 
              className="text-neutral-900/70 mb-6"
              variants={fadeIn}
            >
              Fill out the form below to get started with our online yoga
              classes. We'll get back to you within 24 hours to discuss your
              goals and find the right program for you.
            </motion.p>

            <motion.div 
              className="space-y-6 mb-8"
              variants={staggerContainer}
            >
              <motion.div 
                className="flex items-start"
                variants={fadeIn}
              >
                <div className="text-primary text-xl mt-1 mr-4">
                  <Mail />
                </div>
                <div>
                  <h3 className="font-medium">Email Us</h3>
                  <p className="text-neutral-900/70">info@serenityyoga.com</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start"
                variants={fadeIn}
              >
                <div className="text-primary text-xl mt-1 mr-4">
                  <Phone />
                </div>
                <div>
                  <h3 className="font-medium">Call Us</h3>
                  <p className="text-neutral-900/70">(555) 123-4567</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start"
                variants={fadeIn}
              >
                <div className="text-primary text-xl mt-1 mr-4">
                  <Globe />
                </div>
                <div>
                  <h3 className="font-medium">Social Media</h3>
                  <div className="flex space-x-4 mt-2">
                    <a
                      href="#"
                      className="text-neutral-900 hover:text-primary transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="text-neutral-900 hover:text-primary transition-colors"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="text-neutral-900 hover:text-primary transition-colors"
                    >
                      <Youtube className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="text-neutral-900 hover:text-primary transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="bg-neutral-100 p-6 md:p-8 rounded-xl">
              <LeadForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
