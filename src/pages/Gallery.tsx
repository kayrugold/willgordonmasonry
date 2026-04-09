import { motion } from 'motion/react';

export default function Gallery() {
  const images = [
    '/wgm-0.webp',
    '/wgm-1.webp',
    '/wgm-2.jpeg',
    '/wgm-3.webp',
    '/wgm-4.jpg',
    '/wgm-5.webp',
    '/wgm-6.webp',
    '/wgm-7.webp',
    '/wgm-8.webp',
    '/wgm-9.webp',
    '/wgm-10.webp',
    '/wgm-11.webp',
    '/wgm-12.webp',
    '/wgm-13.webp',
    '/wgm-14.webp',
    '/wgm-15.webp',
    '/wgm-16.webp',
    '/wgm-17.webp',
    '/wgm-18.webp',
    '/wgm-19.webp',
    '/wgm-20.webp',
    '/wgm-21.webp',
    '/wgm-22.webp',
    '/wgm-23.webp',
    '/wgm-24.webp',
    '/wgm-25.webp',
    '/wgm-26.webp',
    '/wgm-27.webp',
    '/wgm-28.webp',
    '/wgm-29.webp',
    '/wgm-30.webp',
    '/wgm-31.webp',
    '/wgm-32.webp',
    '/wgm-33.webp',
    '/wgm-34.webp',
    '/wgm-35.webp',
    '/wgm-36.webp',
    '/wgm-37.webp',
    '/wgm-38.webp',
  ];

  return (
    <div className="py-24 bg-stone-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-xl font-display tracking-widest text-gold-500 mb-3">OUR WORK</h2>
          <h3 className="text-5xl md:text-6xl font-display text-white text-3d-sm">RECENT PROJECTS</h3>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="aspect-square overflow-hidden rounded-sm bg-stone-900 border-2 border-stone-800 hover:border-neon-500 transition-colors group"
            >
              <img 
                src={src} 
                alt={`Masonry project ${index + 1}`} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
