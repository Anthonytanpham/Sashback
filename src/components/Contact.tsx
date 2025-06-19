'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Phone',
      value: '(801) 555-0123',
      link: 'tel:+18015550123',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      value: 'info@sashbackconstruction.com',
      link: 'mailto:info@sashbackconstruction.com',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Service Area',
      value: 'Serving Northern Utah',
      link: null,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="absolute top-0 right-0 w-96 h-96" viewBox="0 0 400 400" fill="none">
          <path d="M0,200 Q100,100 200,200 T400,200" stroke="#C6FF5E" strokeWidth="2" />
          <path d="M0,250 Q150,150 300,250 T400,250" stroke="#2C2C2C" strokeWidth="2" />
          <path d="M0,300 Q200,200 400,300" stroke="#6B7280" strokeWidth="2" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-black mb-4 tracking-tight">
            GET IN TOUCH
          </h2>
          <div className="w-24 h-1 bg-lime mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-sans">
            Ready to start your project? Contact us today for a free consultation and quote.
          </p>
        </motion.div>

        {/* Contact Content */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants} className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-display font-bold text-black mb-6">
              Send Us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime focus:border-transparent transition-colors duration-200 bg-white font-sans peer"
                  placeholder=" "
                />
                <label className="absolute left-4 top-3 text-gray-500 font-sans transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:left-4 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-lime peer-focus:text-sm peer-focus:bg-white peer-focus:px-2">
                  Full Name
                </label>
              </div>

              {/* Email Field */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime focus:border-transparent transition-colors duration-200 bg-white font-sans peer"
                  placeholder=" "
                />
                <label className="absolute left-4 top-3 text-gray-500 font-sans transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:left-4 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-lime peer-focus:text-sm peer-focus:bg-white peer-focus:px-2">
                  Email Address
                </label>
              </div>

              {/* Phone Field */}
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime focus:border-transparent transition-colors duration-200 bg-white font-sans peer"
                  placeholder=" "
                />
                <label className="absolute left-4 top-3 text-gray-500 font-sans transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:left-4 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-lime peer-focus:text-sm peer-focus:bg-white peer-focus:px-2">
                  Phone Number
                </label>
              </div>

              {/* Message Field */}
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime focus:border-transparent transition-colors duration-200 bg-white font-sans peer resize-none"
                  placeholder=" "
                />
                <label className="absolute left-4 top-3 text-gray-500 font-sans transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:left-4 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-lime peer-focus:text-sm peer-focus:bg-white peer-focus:px-2">
                  Project Details
                </label>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 px-6 font-display font-semibold text-lg rounded-lg transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                    : submitStatus === 'success'
                    ? 'bg-green-500 text-white'
                    : 'bg-black text-white hover:bg-charcoal'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : submitStatus === 'success' ? (
                  'Message Sent!'
                ) : (
                  'SEND MESSAGE'
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-display font-bold text-black mb-6">
                Contact Information
              </h3>
              <p className="text-gray-600 font-sans leading-relaxed mb-8">
                We&apos;re here to help bring your vision to life. Get in touch with us to discuss your project requirements and receive a personalized quote.
              </p>
            </div>

            {/* Contact Details */}
                         <div className="space-y-6">
               {contactInfo.map((info) => (
                <motion.div
                  key={info.title}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-lime/10 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-lime rounded-full flex items-center justify-center text-black">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-black">
                      {info.title}
                    </h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-600 font-sans hover:text-lime transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-600 font-sans">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Business Hours */}
            <motion.div variants={itemVariants} className="bg-charcoal text-white rounded-lg p-6">
              <h4 className="font-display font-semibold text-xl mb-4">
                Business Hours
              </h4>
              <div className="space-y-2 font-sans">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>7:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>8:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="text-lime">Closed</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 