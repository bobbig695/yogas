import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/data";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [autoplay, setAutoplay] = useState(true);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay, currentIndex]);

  useEffect(() => {
    if (containerRef.current) {
      const slideWidth = containerRef.current.offsetWidth;
      const scrollPosition = currentIndex * slideWidth;
      
      containerRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <section id="testimonials" className="py-20 bg-neutral-200">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-neutral-900 mb-5">
            What Our Students Say
          </h2>
          <p className="text-neutral-900/70">
            Discover how our online yoga classes have transformed the lives of
            students around the world.
          </p>
        </motion.div>

        <motion.div 
          className="relative testimonial-slider"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div 
            className="flex overflow-x-auto pb-8 -mx-4 scrollbar-hide snap-x snap-mandatory" 
            ref={containerRef}
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="px-4 min-w-full md:min-w-[50%] lg:min-w-[33.333%] snap-start"
              >
                <div className="bg-white p-6 rounded-xl shadow-sm h-full">
                  <div className="flex items-center mb-4">
                    <div className="text-primary flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="fill-current"
                          size={16}
                          fill={i < testimonial.rating ? "currentColor" : "none"}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-neutral-900/70 mb-6 italic">
                    "{testimonial.comment}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">{testimonial.name}</h4>
                      <p className="text-sm text-neutral-900/60">
                        {testimonial.status}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute -bottom-4 left-0 right-0 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-primary" : "bg-neutral-300"
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>

          <button
            className="absolute top-1/2 left-2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center focus:outline-none hover:bg-neutral-100 md:flex hidden"
            onClick={goToPrevious}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="text-primary text-xl" />
          </button>
          <button
            className="absolute top-1/2 right-2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center focus:outline-none hover:bg-neutral-100 md:flex hidden"
            onClick={goToNext}
            aria-label="Next testimonial"
          >
            <ChevronRight className="text-primary text-xl" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
