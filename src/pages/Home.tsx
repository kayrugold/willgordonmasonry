import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const Block3D = ({ w, h, d, frontImg, sideImg, topImg, rotateX = -12, rotateY = -24, overlayFront = null, overlaySide = null, overlayTop = null }: any) => {
  return (
    <div className="relative group cursor-pointer z-10" style={{ width: w, height: h, perspective: '1200px' }}>
      <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-105" style={{ transformStyle: 'preserve-3d', transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`, transformOrigin: 'bottom center' }}>
        
        {/* Front */}
        <div className="absolute border border-black/50" style={{ width: w, height: h, transform: `translateZ(${d/2}px)` }}>
          <img src={frontImg} className="w-full h-full object-cover" alt="Front face" referrerPolicy="no-referrer" />
          {overlayFront}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/30"></div>
        </div>

        {/* Right */}
        <div className="absolute border border-black/50" style={{ width: d, height: h, left: w/2 - d/2, transform: `rotateY(90deg) translateZ(${w/2}px)` }}>
          <img src={sideImg} className="w-full h-full object-cover" alt="Side face" referrerPolicy="no-referrer" />
          {overlaySide}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Top */}
        <div className="absolute border border-black/50" style={{ width: w, height: d, top: h/2 - d/2, transform: `rotateX(90deg) translateZ(${h/2}px)` }}>
          <img src={topImg} className="w-full h-full object-cover" alt="Top face" referrerPolicy="no-referrer" />
          {overlayTop}
          <div className="absolute inset-0 bg-white/20"></div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const concreteOverlayFront = (
    <div className="absolute inset-0 opacity-60 mix-blend-multiply" style={{
      backgroundImage: 'linear-gradient(to right, #000 2px, transparent 2px), linear-gradient(to bottom, #000 2px, transparent 2px)',
      backgroundSize: '50% 25%'
    }}></div>
  );
  const concreteOverlayTop = (
    <div className="absolute inset-0 opacity-60 mix-blend-multiply" style={{
      backgroundImage: 'linear-gradient(to right, #000 2px, transparent 2px), linear-gradient(to bottom, #000 2px, transparent 2px)',
      backgroundSize: '50% 50%'
    }}></div>
  );

  return (
    <div className="relative flex-grow flex flex-col items-center justify-center overflow-hidden py-4 md:py-8 min-h-[calc(100vh-80px)]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/stone_2.webp" 
          alt="Dark stone wall background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(12,10,9,0.7)_100%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/40 via-transparent to-stone-950/80"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 flex flex-col items-center text-center h-full justify-center">
        
        {/* Main Title Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 md:mb-10 w-full mt-4"
        >
          <h1 className="text-[3.5rem] sm:text-8xl md:text-[8rem] lg:text-[10rem] font-display text-white leading-[0.85] tracking-tight mb-4 md:mb-6 flex flex-col items-center">
            <span className="text-3d-stone block mb-1 md:mb-2 whitespace-nowrap">WILL GORDON</span>
            <span className="text-3d-stone block">MASONRY</span>
          </h1>
          
          <h2 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-display text-stone-300 tracking-widest leading-tight mt-4 md:mt-8">
            CRAFTING ENDURING<br/>BEAUTY IN STONE
          </h2>
        </motion.div>

        {/* Neon Separator Line */}
        <div className="w-full max-w-3xl h-1 bg-neon-500 shadow-[0_0_15px_rgba(163,230,53,0.8)] my-4 md:my-8"></div>

        {/* Services Section Preview */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full flex flex-col items-center mt-2 md:mt-4 pb-8 md:pb-12"
        >
          <h3 className="text-2xl md:text-4xl font-display text-white tracking-wider mb-4 md:mb-4">
            OUR SERVICES
          </h3>

          {/* Pillars */}
          <div className="relative w-full flex justify-center items-end gap-2 sm:gap-3 md:gap-4 mb-8 md:mb-20 h-40 sm:h-64 md:h-56 pr-1 sm:pr-2 md:pr-2 scale-75 sm:scale-100 origin-bottom">
            
            {/* Left Block: Stone 1 */}
            <Block3D 
              w={60} h={150} d={60}
              frontImg="/stone_1.webp"
              sideImg="/stone_1.webp"
              topImg="/stone_1.webp"
            />
            
            {/* Center Block: Stone 2 */}
            <Block3D 
              w={75} h={200} d={75}
              frontImg="/stone_6.webp"
              sideImg="/stone_6.webp"
              topImg="/stone_6.webp"
            />
            
            {/* Right Block: Stone 3 */}
            <Block3D 
              w={60} h={150} d={60}
              frontImg="/stone_3.webp"
              sideImg="/stone_3.webp"
              topImg="/stone_3.webp"
            />
          </div>

          {/* CTA Button */}
          <Link 
            to="/contact"
            className="relative px-8 md:px-12 py-3 md:py-4 bg-stone-950/30 backdrop-blur-md border-2 border-neon-500 rounded-full text-neon-500 font-display text-xl md:text-2xl tracking-widest uppercase hover:bg-neon-500 hover:text-stone-950 transition-all duration-300 shadow-[0_0_20px_rgba(163,230,53,0.4)] hover:shadow-[0_0_30px_rgba(163,230,53,0.8)] -mt-16 md:-mt-24 z-20"
          >
            GET A QUOTE
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
