import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const { ref, controls } = useAnimateOnScroll();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would typically handle form submission
    console.log('Form submitted:', formState);
    alert('Thanks for your message! We\'ll get back to you soon.');
    setFormState({
      name: '',
      email: '',
      company: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="section">
      <div className="container-custom">
        <motion.div
          className="section-heading text-center"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.p variants={itemVariants} className="section-title">
            Contact Us
          </motion.p>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900">
            Get in touch with our team
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Have questions about our platform or pricing? Need a demo? Our team is here to help.
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12"
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-neutral-900">Send us a message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formState.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors outline-none"
                    placeholder="Your Company"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors outline-none resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn-primary w-full sm:w-auto"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </button>
              </form>
            </div>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="bg-neutral-900 text-white rounded-2xl shadow-lg p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Our Location</h4>
                    <p className="text-neutral-400">123 Innovation Drive, San Francisco, CA 94103</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email Us</h4>
                    <p className="text-neutral-400">info@nexusai.com</p>
                    <p className="text-neutral-400">support@nexusai.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Call Us</h4>
                    <p className="text-neutral-400">+1 (555) 123-4567</p>
                    <p className="text-neutral-400">+1 (555) 987-6543</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="h-5 w-5 text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Working Hours</h4>
                    <p className="text-neutral-400">Monday - Friday: 9am - 6pm</p>
                    <p className="text-neutral-400">Saturday: 10am - 4pm</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-neutral-800">
                <h4 className="font-medium mb-4">Connect With Us</h4>
                <div className="flex space-x-4">
                  {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                    <a 
                      key={social}
                      href="#" 
                      className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-primary-500 hover:text-white transition-colors"
                    >
                      <span className="sr-only">{social}</span>
                      <div className="w-5 h-5"></div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;