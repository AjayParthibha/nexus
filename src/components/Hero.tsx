import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-100 rounded-full blur-3xl opacity-60 translate-y-1/2 -translate-x-1/3"></div>
      </div>

      <div className="container-custom">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-1 bg-primary-50 text-primary-600 rounded-full text-sm font-medium">
              Intelligent Solutions for Modern Businesses
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-bold mb-6 text-4xl md:text-6xl lg:text-7xl tracking-tight text-neutral-900 max-w-4xl"
          >
            Transform Your Business with{' '}
            <span className="text-primary-500">AI-Powered</span> Intelligence
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-neutral-600 mb-8 text-lg md:text-xl max-w-2xl"
          >
            Nexus delivers cutting-edge solutions that help businesses automate processes, 
            gain valuable insights, and stay ahead of the competition.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#contact" className="btn-primary">
              Get Started
              <ChevronRight className="ml-1 h-4 w-4" />
            </a>
            <a href="#about" className="btn-secondary">
              Learn More
            </a>
          </motion.div>
        </div>

        {/* Hero image section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 md:mt-20 relative mx-auto max-w-5xl"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Team collaborating on digital platform" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 to-transparent"></div>
            
            {/* Overlaid stat cards */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap justify-center gap-4">
              {[
                { label: "Clients Worldwide", value: "500+" },
                { label: "Projects Completed", value: "1,200+" },
                { label: "Team Members", value: "50+" },
                { label: "Avg. ROI", value: "225%" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="glass px-4 py-3 rounded-xl shadow-lg"
                >
                  <p className="font-bold text-xl md:text-2xl text-neutral-900">{stat.value}</p>
                  <p className="text-xs md:text-sm text-neutral-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex flex-col items-center text-neutral-400 hover:text-primary-500 transition-colors"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ArrowDown size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;