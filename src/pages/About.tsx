import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="relative py-32 bg-stone-950 text-white overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="/wgm-1.webp" 
          alt="Masonry work background" 
          className="w-full h-full object-cover opacity-40 grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-stone-950/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl font-display tracking-widest text-gold-500 mb-4">ABOUT WILL GORDON</h2>
          <h3 className="text-5xl md:text-6xl lg:text-7xl font-display text-white mb-8 leading-tight text-3d-sm">
            CRAFTING ENDURING BEAUTY IN STONE <br/>
            <span className="text-neon-500">REDDING, CALIFORNIA</span>
          </h3>
          
          <div className="space-y-6 text-lg md:text-2xl text-stone-300 font-sans font-light leading-relaxed max-w-4xl mx-auto">
            <p>
              I've spent my entire life in Northern California, and I understand the unique architectural styles, climate challenges, and aesthetic preferences of our community.
            </p>
            <p>
              Masonry isn't just a job for me; it's a craft that has been honed over years of dedicated service to the Redding area. Whether it's restoring a historic brick facade, building a robust retaining wall, or designing a custom outdoor kitchen, my team and I approach every project with the same commitment to excellence.
            </p>
            <p>
              When you hire Will Gordon Masonry, you're not just getting a contractor—you're partnering with a local expert who cares deeply about the structural integrity and beauty of your home.
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-2 gap-8 pt-12 border-t-2 border-stone-800 max-w-2xl mx-auto">
            <div>
              <div className="text-6xl font-display text-gold-500 mb-2 text-3d-sm">20+</div>
              <div className="text-lg font-display uppercase tracking-widest text-stone-400">YEARS EXPERIENCE</div>
            </div>
            <div>
              <div className="text-6xl font-display text-gold-500 mb-2 text-3d-sm">100%</div>
              <div className="text-lg font-display uppercase tracking-widest text-stone-400">SATISFACTION</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
