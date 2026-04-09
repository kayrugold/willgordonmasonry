import { motion } from 'motion/react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="py-24 bg-stone-950 text-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl font-display tracking-widest text-gold-500 mb-3">GET IN TOUCH</h2>
            <h3 className="text-5xl md:text-6xl font-display mb-8 text-3d-sm">REQUEST A QUOTE</h3>
            <p className="text-stone-400 text-xl font-sans font-light mb-12">
              Ready to start your masonry project? Contact us today for a free, no-obligation estimate. We look forward to working with you.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-stone-900 border border-stone-800 rounded-full flex items-center justify-center text-neon-500">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="ml-6">
                  <h4 className="text-xl font-display tracking-wide mb-1">PHONE</h4>
                  <p className="text-stone-400 font-sans text-lg">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-stone-900 border border-stone-800 rounded-full flex items-center justify-center text-neon-500">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="ml-6">
                  <h4 className="text-xl font-display tracking-wide mb-1">EMAIL</h4>
                  <p className="text-stone-400 font-sans text-lg">info@willgordonmasonry.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-stone-900 border border-stone-800 rounded-full flex items-center justify-center text-neon-500">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="ml-6">
                  <h4 className="text-xl font-display tracking-wide mb-1">LOCATION</h4>
                  <p className="text-stone-400 font-sans text-lg">Redding, CA & Surrounding Areas</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-stone-900 border-2 border-stone-800 p-8 md:p-12 shadow-2xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-display tracking-widest text-stone-400 mb-2">FIRST NAME</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full bg-stone-950 border border-stone-800 text-white px-4 py-3 focus:outline-none focus:border-neon-500 transition-colors font-sans"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-display tracking-widest text-stone-400 mb-2">LAST NAME</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full bg-stone-950 border border-stone-800 text-white px-4 py-3 focus:outline-none focus:border-neon-500 transition-colors font-sans"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-display tracking-widest text-stone-400 mb-2">EMAIL ADDRESS</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-stone-950 border border-stone-800 text-white px-4 py-3 focus:outline-none focus:border-neon-500 transition-colors font-sans"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-display tracking-widest text-stone-400 mb-2">PHONE NUMBER</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full bg-stone-950 border border-stone-800 text-white px-4 py-3 focus:outline-none focus:border-neon-500 transition-colors font-sans"
                  placeholder="(555) 123-4567"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-display tracking-widest text-stone-400 mb-2">PROJECT DETAILS</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full bg-stone-950 border border-stone-800 text-white px-4 py-3 focus:outline-none focus:border-neon-500 transition-colors font-sans resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full py-4 bg-transparent border-2 border-neon-500 text-neon-500 font-display text-xl tracking-widest hover:bg-neon-500 hover:text-stone-950 transition-all duration-300 shadow-[0_0_15px_rgba(163,230,53,0.2)] hover:shadow-[0_0_25px_rgba(163,230,53,0.6)]"
              >
                SEND MESSAGE
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
