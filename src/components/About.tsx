import React from 'react';
import { motion } from 'framer-motion';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import { ShieldCheck, Zap, BarChart, Users } from 'lucide-react';

const aboutFeatures = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'Fast Implementation',
    description: 'Get up and running quickly with our streamlined onboarding process and intuitive platform.',
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security with 99.9% uptime guarantee and comprehensive data protection.',
  },
  {
    icon: <BarChart className="h-6 w-6" />,
    title: 'Data-Driven Insights',
    description: 'Powerful analytics tools that transform your data into actionable business intelligence.',
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Dedicated Support',
    description: 'Our expert team is available 24/7 to ensure your success and answer any questions.',
  },
];

const About: React.FC = () => {
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
    <section id="about" className="section bg-neutral-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left side content */}
          <div>
            <motion.p variants={itemVariants} className="section-title">
              About Us
            </motion.p>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6 text-neutral-900">
              We're on a mission to transform how businesses operate
            </motion.h2>
            <motion.p variants={itemVariants} className="text-neutral-600 mb-8">
              Founded in 2020, Nexus has quickly established itself as a leader in AI-powered business solutions. 
              Our innovative platform combines cutting-edge technology with intuitive design to help organizations 
              of all sizes streamline operations, gain valuable insights, and drive growth.
            </motion.p>
            <motion.p variants={itemVariants} className="text-neutral-600 mb-8">
              What sets us apart is our commitment to creating solutions that are not only powerful but also 
              accessible and easy to use. We believe that advanced technology should be available to everyone, 
              not just technical experts.
            </motion.p>
            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-4"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
                  >
                    <img 
                      src={`https://randomuser.me/api/portraits/men/${20 + i}.jpg`} 
                      alt="Team member" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <p className="font-medium text-neutral-900">Trusted by 500+ companies</p>
                <div className="flex text-yellow-400 text-sm">
                  {'★'.repeat(5)}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right side - features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {aboutFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 mb-4 rounded-lg bg-primary-50 flex items-center justify-center text-primary-500">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-neutral-900">
                  {feature.title}
                </h3>
                <p className="text-neutral-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;