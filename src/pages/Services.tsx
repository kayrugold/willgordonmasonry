import { motion } from 'motion/react';
import { Hammer, Ruler, ShieldCheck, Clock, MapPin, CheckCircle2 } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Brickwork & Pointing',
      desc: 'New brick installations, repairs, and tuckpointing to restore the structural integrity and appearance of aging brick.',
      icon: <Hammer className="w-8 h-8 text-neon-500" />,
      img: '/wgm-3.webp'
    },
    {
      title: 'Custom Stonework',
      desc: 'Beautiful natural and manufactured stone veneers for home exteriors, accent walls, and elegant entryways.',
      icon: <Ruler className="w-8 h-8 text-neon-500" />,
      img: '/wgm-6.webp'
    },
    {
      title: 'Block Walls & Retaining',
      desc: 'Sturdy, engineered concrete block walls for property lines, structural support, and landscape terracing.',
      icon: <ShieldCheck className="w-8 h-8 text-neon-500" />,
      img: '/wgm-11.webp'
    },
    {
      title: 'Fireplaces & Chimneys',
      desc: 'Custom indoor and outdoor fireplace design, construction, and comprehensive chimney repair services.',
      icon: <Clock className="w-8 h-8 text-neon-500" />,
      img: '/wgm-16.webp'
    },
    {
      title: 'Patios & Walkways',
      desc: 'Durable and attractive flagstone, brick, or paver patios and walkways that enhance your outdoor living space.',
      icon: <MapPin className="w-8 h-8 text-neon-500" />,
      img: '/wgm-19.webp'
    },
    {
      title: 'Restoration & Repair',
      desc: 'Expert diagnosis and repair of cracked, leaning, or deteriorating masonry structures to prevent further damage.',
      icon: <CheckCircle2 className="w-8 h-8 text-neon-500" />,
      img: '/wgm-22.webp'
    }
  ];

  return (
    <div className="py-24 bg-stone-950 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xl font-display tracking-widest text-gold-500 mb-3">OUR EXPERTISE</h2>
          <h3 className="text-5xl md:text-6xl font-display mb-6 text-3d-sm">COMPREHENSIVE MASONRY</h3>
          <p className="text-stone-400 text-xl font-sans font-light">
            From structural necessities to aesthetic enhancements, we provide a full range of masonry services tailored to your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-stone-900 border border-stone-800 hover:border-neon-500 transition-colors rounded-sm overflow-hidden shadow-xl"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={service.img} 
                  alt={service.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-stone-950/40 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="p-8">
                <div className="mb-4">{service.icon}</div>
                <h4 className="text-2xl font-display mb-3 tracking-wide">{service.title}</h4>
                <p className="text-stone-400 font-sans font-light leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
