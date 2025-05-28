import React from 'react';
import { motion } from 'framer-motion';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Nexus has transformed how we operate. The automation features alone have saved us countless hours of manual work.",
    author: "Sarah Johnson",
    position: "COO, TechVenture Inc.",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    rating: 5,
  },
  {
    quote: "The analytics dashboard provides insights we never had access to before. It's completely changed our decision-making process.",
    author: "Michael Chen",
    position: "CTO, DataFlow Systems",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    rating: 5,
  },
  {
    quote: "Implementation was smooth and the support team was there every step of the way. We saw ROI within the first month.",
    author: "Emma Rodriguez",
    position: "VP of Operations, GrowthSphere",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  const { ref, controls } = useAnimateOnScroll();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="testimonials" className="section">
      <div className="container-custom">
        <motion.div
          className="section-heading text-center"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.p variants={itemVariants} className="section-title">
            Testimonials
          </motion.p>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900">
            What our clients say
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what some of our clients have to say about their experience with Nexus.
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white p-8 rounded-2xl shadow-lg relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary-50 rounded-bl-3xl -mt-8 -mr-8 flex items-end justify-start pb-2 pl-2">
                <Quote className="h-6 w-6 text-primary-300" />
              </div>
              
              <div className="flex items-center space-x-1 mb-4 text-yellow-400">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              
              <p className="text-neutral-700 mb-6 relative z-10">"{testimonial.quote}"</p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900">{testimonial.author}</h4>
                  <p className="text-sm text-neutral-500">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Logos Section */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="mt-20"
        >
          <motion.p variants={itemVariants} className="text-center text-neutral-500 mb-8">
            Trusted by innovative companies worldwide
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
          >
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-8 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                <div className="w-auto h-full bg-neutral-300 rounded-md px-6"></div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;