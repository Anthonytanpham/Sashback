'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Wave Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 800"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            d="M0,400 Q300,200 600,400 T1200,400 L1200,800 L0,800 Z"
            fill="#C6FF5E"
          />
          <path
            d="M0,500 Q400,300 800,500 T1200,500 L1200,800 L0,800 Z"
            fill="#2C2C2C"
          />
          <path
            d="M0,600 Q200,400 400,600 T800,600 T1200,600 L1200,800 L0,800 Z"
            fill="#6B7280"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-black mb-6 tracking-tight leading-tight"
          >
            CRAFTSMANSHIP
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="block"
              style={{ color: '#C6FF5E', WebkitTextStroke: '2px black' }}
            >
              BUILT TO LAST
            </motion.span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-12 max-w-2xl mx-auto font-sans"
          >
            Expert Contracting Services in Flooring, Carpentry, and More.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mb-16 sm:mb-20"
          >
            <motion.button
              onClick={scrollToContact}
              className="inline-flex items-center px-8 py-4 text-lg font-display font-semibold text-black border-2 border-black rounded-none hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: 'linear-gradient(45deg, transparent 50%, #C6FF5E 50%)',
                backgroundSize: '200% 200%',
                backgroundPosition: '100% 100%',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundPosition = '0% 0%';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundPosition = '100% 100%';
              }}
            >
              GET A FREE QUOTE
              <motion.svg
                className="ml-3 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-gray-400"
          >
            <span className="text-sm font-sans mb-2">Scroll Down</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 