'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Sample gallery images (in a real implementation, these would be actual project photos)
  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
      alt: 'Luxury vinyl plank flooring installation',
      title: 'Luxury Vinyl Planks',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      alt: 'Hardwood flooring project',
      title: 'Hardwood Flooring',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&h=600&fit=crop',
      alt: 'Tile backsplash installation',
      title: 'Tile Work',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1503594384566-461fe158e797?w=800&h=600&fit=crop',
      alt: 'Custom carpentry work',
      title: 'Custom Carpentry',
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop',
      alt: 'Kitchen renovation project',
      title: 'Kitchen Renovation',
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800&h=600&fit=crop',
      alt: 'Bathroom tile work',
      title: 'Bathroom Remodel',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 30
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
    },
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-black mb-4 tracking-tight">
            OUR WORK
          </h2>
          <div className="w-24 h-1 bg-lime mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-sans">
            Take a look at some of our recent projects showcasing quality craftsmanship and attention to detail.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setLightboxImage(image.src)}
            >
              {/* Curved Frame Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-lime/20 via-charcoal/10 to-medium-gray/20 rounded-lg transform rotate-1 group-hover:rotate-2 transition-transform duration-300 z-0"></div>
              <div className="absolute inset-1 bg-gradient-to-tl from-charcoal/10 via-lime/10 to-medium-gray/20 rounded-lg transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300 z-0"></div>
              
              {/* Image Container */}
              <div className="relative z-10 bg-white rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-w-4 aspect-h-3 relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className="text-white text-center"
                    >
                      <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                      <p className="text-sm font-display font-semibold">VIEW PROJECT</p>
                    </motion.div>
                  </div>
                </div>
                
                {/* Image Title */}
                <div className="p-4 bg-white">
                  <h3 className="text-lg font-display font-semibold text-black group-hover:text-lime transition-colors duration-300">
                    {image.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightboxImage}
                alt="Project detail"
                width={1200}
                height={800}
                className="rounded-lg"
              />
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 text-white hover:text-lime transition-colors duration-200"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Gallery; 