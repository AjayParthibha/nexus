import React from 'react';
import { motion } from 'framer-motion';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import { 
  BarChart2, 
  Clock, 
  Shield, 
  Zap, 
  Users, 
  Globe 
} from 'lucide-react';

const features = [
  {
    icon: <BarChart2 className="h-6 w-6" />,
    title: 'Data-Driven Insights',
    description: 'Turn your data into actionable business intelligence with our powerful analytics tools.',
    color: 'text-primary-500',
    bgColor: 'bg-primary-50',
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: 'Time-Saving Automation',
    description: 'Reduce manual tasks by up to 80% with intelligent workflow automation.',
    color: 'text-secondary-500',
    bgColor: 'bg-secondary-50',
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Enterprise Security',
    description: 'Bank-level encryption and comprehensive security protocols to protect your data.',
    color: 'text-accent-500',
    bgColor: 'bg-accent-50',
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'Lightning Performance',
    description: 'Our platform is optimized for speed, with response times under 100ms.',
    color: 'text-success-500',
    bgColor: 'bg-green-50',
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Team Collaboration',
    description: 'Seamless collaboration features to keep your entire team aligned and productive.',
    color: 'text-warning-500',
    bgColor: 'bg-yellow-50',
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: 'Global Scalability',
    description: 'Infrastructure that scales with your business, from startup to enterprise.',
    color: 'text-error-500',
    bgColor: 'bg-red-50',
  },
];

const Features: React.FC = () => {
  const { ref, controls } = useAnimateOnScroll();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="features" className="section bg-neutral-50">
      <div className="container-custom">
        <motion.div
          className="section-heading text-center"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.p variants={itemVariants} className="section-title">
            Key Features
          </motion.p>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900">
            Why businesses choose Nexus
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Our platform offers a comprehensive set of features designed to help your business 
            thrive in today's competitive landscape.
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-12 h-12 ${feature.bgColor} ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-900">{feature.title}</h3>
              <p className="text-neutral-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;