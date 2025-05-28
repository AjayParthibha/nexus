import React from 'react';
import { motion } from 'framer-motion';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: 'Alex Morgan',
    position: 'CEO & Co-Founder',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    bio: 'Alex has over 15 years of experience in technology and previously founded two successful startups.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: '#',
    },
  },
  {
    name: 'Sophia Chen',
    position: 'CTO',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    bio: 'Sophia leads our engineering team and has a background in AI and machine learning from Stanford.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: '#',
    },
  },
  {
    name: 'Marcus Johnson',
    position: 'Head of Product',
    image: 'https://randomuser.me/api/portraits/men/86.jpg',
    bio: 'Marcus oversees product development and has a passion for creating intuitive user experiences.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: '#',
    },
  },
  {
    name: 'Olivia Martinez',
    position: 'Head of Customer Success',
    image: 'https://randomuser.me/api/portraits/women/28.jpg',
    bio: 'Olivia ensures our clients get the most value from our platform and leads our support team.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: '#',
    },
  },
];

const Team: React.FC = () => {
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
    <section id="team" className="section bg-neutral-50">
      <div className="container-custom">
        <motion.div
          className="section-heading text-center"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.p variants={itemVariants} className="section-title">
            Our Team
          </motion.p>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900">
            Meet the people behind Nexus
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Our diverse team of experts is passionate about creating innovative solutions that help businesses succeed.
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl shadow-md overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-60 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <div className="flex space-x-4">
                    <a href={member.social.linkedin} className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-primary-500 transition-colors">
                      <Linkedin size={16} />
                    </a>
                    <a href={member.social.twitter} className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-primary-500 transition-colors">
                      <Twitter size={16} />
                    </a>
                    <a href={member.social.email} className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-primary-500 transition-colors">
                      <Mail size={16} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-neutral-900 mb-1">{member.name}</h3>
                <p className="text-primary-500 text-sm font-medium mb-3">{member.position}</p>
                <p className="text-neutral-600 text-sm">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;