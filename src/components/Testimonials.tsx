'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'Salt Lake City, UT',
      rating: 5,
      text: 'Sashback Construction transformed our outdated kitchen with beautiful hardwood flooring. Their attention to detail and professionalism exceeded our expectations. The team was punctual, clean, and the quality of work is outstanding.',
      project: 'Kitchen Hardwood Installation',
    },
    {
      id: 2,
      name: 'Michael Chen',
      location: 'Provo, UT',
      rating: 5,
      text: 'We hired Sashback for luxury vinyl plank installation throughout our home. The results are incredible - it looks like real hardwood but with all the benefits of vinyl. Highly recommend their services!',
      project: 'Luxury Vinyl Plank Installation',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      location: 'West Valley City, UT',
      rating: 5,
             text: 'The custom carpentry work for our built-in shelving was exactly what we envisioned. The craftsmanship is top-notch and the team communicated every step of the process. We&apos;ll definitely use them again.',
      project: 'Custom Built-in Shelving',
    },
    {
      id: 4,
      name: 'David Thompson',
      location: 'Sandy, UT',
      rating: 5,
      text: 'Our bathroom tile project turned out beautifully. The team was efficient, professional, and left everything spotless. The quality of their work speaks for itself. Great experience from start to finish.',
      project: 'Bathroom Tile Installation',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.605-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-black mb-4 tracking-tight">
            CLIENT REVIEWS
          </h2>
          <div className="w-24 h-1 bg-lime mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-sans">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say about our work.
          </p>
        </motion.div>

        {/* Desktop Grid View */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="hidden md:grid md:grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
            >
              {/* Quote Icon */}
              <motion.div
                className="absolute -top-4 -left-4 w-12 h-12 bg-lime rounded-full flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </motion.div>

              {/* Stars */}
              <div className="flex mb-4 mt-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-700 font-sans leading-relaxed mb-6 italic">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>

              {/* Client Info */}
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-display font-semibold text-black text-lg">
                  {testimonial.name}
                </h4>
                <p className="text-gray-500 font-sans text-sm mb-2">
                  {testimonial.location}
                </p>
                <p className="text-lime font-sans text-sm font-medium">
                  {testimonial.project}
                </p>
              </div>

              {/* Accent Border */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-lime via-charcoal to-lime transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Carousel View */}
        <div className="md:hidden relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg p-8 shadow-lg relative"
          >
            {/* Quote Icon */}
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-lime rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Stars */}
            <div className="flex mb-4 mt-4">
              {renderStars(testimonials[currentIndex].rating)}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-gray-700 font-sans leading-relaxed mb-6 italic">
              &ldquo;{testimonials[currentIndex].text}&rdquo;
            </blockquote>

            {/* Client Info */}
            <div className="border-t border-gray-200 pt-4">
              <h4 className="font-display font-semibold text-black text-lg">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-gray-500 font-sans text-sm mb-2">
                {testimonials[currentIndex].location}
              </p>
              <p className="text-lime font-sans text-sm font-medium">
                {testimonials[currentIndex].project}
              </p>
            </div>
          </motion.div>

          {/* Carousel Controls */}
          <div className="flex justify-between items-center mt-8">
            <motion.button
              onClick={prevTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-charcoal text-white rounded-full hover:bg-black transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? 'bg-lime' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-charcoal text-white rounded-full hover:bg-black transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 