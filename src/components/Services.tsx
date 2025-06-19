'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      title: 'LUXURY VINYL PLANKS',
      description: 'Durable, waterproof, and authentic in appearance.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: 'HARDWOOD',
      description: 'Timeless finishes with long-lasting quality.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4 4 4 0 004-4V5z" />
        </svg>
      ),
    },
    {
      title: 'TILE',
      description: 'Stylish and durable for floors, walls, and backsplashes.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
        </svg>
      ),
    },
    {
      title: 'CARPENTRY',
      description: 'Custom woodwork, framing, and interior finishings.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2l1 2-1 1-1-1z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M22 12l-2 1-1-1 1-1z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 22l-1-2 1-1 1 1z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 12l2-1 1 1-1 1z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.78 4.22l-1.41 1.41-.71-.71.71-.7z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.78 19.78l-1.41-1.41-.71.71.71.7z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.22 19.78l1.41-1.41.71.71-.71.7z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.22 4.22l1.41 1.41.71-.71-.71-.7z" />
          <circle cx="12" cy="12" r="8.5" strokeWidth={1.5} />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
          <circle cx="12" cy="12" r="4" strokeWidth={1} opacity="0.5" />
        </svg>
      ),
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

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-black mb-4 tracking-tight">
            OUR SERVICES
          </h2>
          <div className="w-24 h-1 bg-lime mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-sans">
            Professional contracting services with attention to detail and commitment to excellence.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-lime"
            >
              {/* Card Background Accent */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-lime/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />

              {/* Icon */}
              <motion.div
                className="relative z-10 mb-6 text-charcoal group-hover:text-black transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                {service.icon}
              </motion.div>

              {/* Title */}
              <h3 className="relative z-10 text-xl font-display font-bold text-black mb-4 group-hover:text-black transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-gray-600 font-sans leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {service.description}
              </p>

              {/* Hover Border Effect */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-lime transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-lg"
                initial={false}
              />

              {/* Corner Accent */}
              <motion.div
                className="absolute top-4 right-4 w-3 h-3 bg-lime rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center px-8 py-4 text-lg font-display font-semibold text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            DISCUSS YOUR PROJECT
            <motion.svg
              className="ml-3 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 