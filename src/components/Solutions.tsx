import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import { ChevronRight, ArrowRight } from 'lucide-react';

const solutions = [
  {
    id: 'automation',
    title: 'Intelligent Automation',
    description: 'Streamline repetitive tasks and workflows with our AI-powered automation platform.',
    features: [
      'Process automation for routine tasks',
      'Smart document processing and data extraction',
      'Workflow optimization and bottleneck detection',
      'Custom automation rules and triggers'
    ],
    image: 'https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    color: 'bg-primary-500',
  },
  {
    id: 'analytics',
    title: 'Advanced Analytics',
    description: 'Transform your data into actionable insights with powerful analytics tools.',
    features: [
      'Real-time data visualization dashboards',
      'Predictive analytics and trend forecasting',
      'Custom reporting and KPI tracking',
      'Anomaly detection and alerts'
    ],
    image: 'https://images.pexels.com/photos/7947459/pexels-photo-7947459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    color: 'bg-secondary-500',
  },
  {
    id: 'platform',
    title: 'Integration Platform',
    description: 'Connect all your business tools and systems for seamless data flow and collaboration.',
    features: [
      'Pre-built connectors for popular business tools',
      'Custom API integration capabilities',
      'Data synchronization across platforms',
      'Secure data transfer protocols'
    ],
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    color: 'bg-accent-500',
  },
];

const Solutions: React.FC = () => {
  const [activeSolution, setActiveSolution] = useState(solutions[0].id);
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

  const activeSolutionData = solutions.find(s => s.id === activeSolution);

  return (
    <section id="solutions" className="section">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="section-heading text-center"
        >
          <motion.p variants={itemVariants} className="section-title">
            Our Solutions
          </motion.p>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900">
            Powerful tools for modern businesses
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Our comprehensive suite of solutions helps businesses of all sizes streamline operations,
            gain valuable insights, and drive growth.
          </motion.p>
        </motion.div>

        <div className="mt-12 md:mt-16">
          {/* Solution tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {solutions.map((solution) => (
              <motion.button
                key={solution.id}
                variants={itemVariants}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  activeSolution === solution.id
                    ? `text-white ${solution.color}`
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
                onClick={() => setActiveSolution(solution.id)}
              >
                {solution.title}
              </motion.button>
            ))}
          </div>

          {/* Active solution content */}
          {activeSolutionData && (
            <motion.div 
              key={activeSolutionData.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center"
            >
              {/* Content */}
              <div className="lg:col-span-2">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-900">
                  {activeSolutionData.title}
                </h3>
                <p className="text-neutral-600 mb-6">
                  {activeSolutionData.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {activeSolutionData.features.map((feature, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className={`mt-1 w-5 h-5 rounded-full ${activeSolutionData.color} flex items-center justify-center flex-shrink-0`}>
                        <ChevronRight className="h-3 w-3 text-white" />
                      </div>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                
                <a 
                  href="#contact"
                  className={`inline-flex items-center text-${activeSolutionData.id === 'automation' ? 'primary' : activeSolutionData.id === 'analytics' ? 'secondary' : 'accent'}-500 font-medium hover:underline`}
                >
                  Learn more about {activeSolutionData.title}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
              
              {/* Image */}
              <div className="lg:col-span-3 overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src={activeSolutionData.image} 
                  alt={activeSolutionData.title}
                  className="w-full h-auto object-cover transition-transform hover:scale-105 duration-700 ease-in-out"
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Solutions;