/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ChevronRight, 
  Hammer, 
  Ruler, 
  ShieldCheck, 
  Clock,
  CheckCircle2
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen font-sans text-stone-900 bg-stone-50 selection:bg-brick-500 selection:text-white">
      {/* Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div 
              className="flex items-center cursor-pointer"
              onClick={() => scrollTo('home')}
            >
              <div className={`font-serif text-2xl font-bold tracking-tight ${isScrolled ? 'text-stone-900' : 'text-white'}`}>
                Will Gordon <span className={isScrolled ? 'text-brick-600' : 'text-brick-500'}>Masonry</span>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['Services', 'About', 'Gallery'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className={`text-sm font-medium tracking-wide uppercase transition-colors ${
                    isScrolled ? 'text-stone-600 hover:text-brick-600' : 'text-stone-200 hover:text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
              <button 
                onClick={() => scrollTo('contact')}
                className={`px-6 py-2.5 rounded-sm text-sm font-medium uppercase tracking-wider transition-all ${
                  isScrolled 
                    ? 'bg-brick-600 text-white hover:bg-brick-700' 
                    : 'bg-white text-stone-900 hover:bg-stone-100'
                }`}
              >
                Get a Quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={isScrolled ? 'text-stone-900' : 'text-white'}
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-stone-900 pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col space-y-6 text-center">
              {['Home', 'Services', 'About', 'Gallery', 'Contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="text-2xl font-serif text-white hover:text-brick-500 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-bg.jpg" 
            alt="Will Gordon Masonry stacked stone fireplace" 
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback if the user hasn't uploaded the image yet
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1920";
            }}
          />
          <div className="absolute inset-0 bg-stone-900/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/80 via-stone-900/40 to-stone-900/90"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-[1.1]">
              Crafting Stone & Brick <br className="hidden md:block" />
              <span className="text-stone-300 italic font-light">with Precision</span>
            </h1>
            
            <div className="mb-6 flex justify-center">
              <span className="inline-flex items-center py-1.5 px-4 rounded-full bg-brick-500/20 text-brick-300 backdrop-blur-sm border border-brick-500/30 text-xs font-semibold tracking-widest uppercase">
                <MapPin className="w-3.5 h-3.5 mr-2" />
                Serving Redding, CA & Surrounding Areas
              </span>
            </div>
            
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-stone-200 font-light mb-8">
              Will Gordon Masonry brings decades of local experience to every project. From custom fireplaces to structural block walls, we build to last.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={() => scrollTo('contact')}
                className="px-8 py-4 bg-brick-600 text-white font-medium uppercase tracking-wider hover:bg-brick-700 transition-colors flex items-center justify-center group"
              >
                Request a Free Estimate
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollTo('services')}
                className="px-8 py-4 bg-white/10 text-white font-medium uppercase tracking-wider hover:bg-white/20 backdrop-blur-sm transition-colors border border-white/20"
              >
                View Our Services
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-sm overflow-hidden relative z-10">
                <img 
                  src="https://picsum.photos/seed/mason-working/800/1000" 
                  alt="Will Gordon working on masonry" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-2/3 aspect-square bg-brick-100 rounded-sm z-0"></div>
              <div className="absolute -top-8 -left-8 w-32 h-32 border-t-2 border-l-2 border-brick-600 z-20"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold tracking-widest text-brick-600 uppercase mb-3">About Will Gordon</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6 leading-tight">
                Born and Raised in <br/>
                <span className="italic text-stone-500 font-light">Redding, California</span>
              </h3>
              <div className="space-y-6 text-lg text-stone-600 font-light leading-relaxed">
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
              
              <div className="mt-10 grid grid-cols-2 gap-6 pt-10 border-t border-stone-200">
                <div>
                  <div className="text-4xl font-serif text-brick-600 mb-2">20+</div>
                  <div className="text-sm font-medium uppercase tracking-wider text-stone-500">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-serif text-brick-600 mb-2">100%</div>
                  <div className="text-sm font-medium uppercase tracking-wider text-stone-500">Satisfaction</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold tracking-widest text-brick-500 uppercase mb-3">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-serif mb-6">Comprehensive Masonry Services</h3>
            <p className="text-stone-400 text-lg font-light">
              From structural necessities to aesthetic enhancements, we provide a full range of masonry services tailored to your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Brickwork & Pointing',
                desc: 'New brick installations, repairs, and tuckpointing to restore the structural integrity and appearance of aging brick.',
                icon: <Hammer className="w-8 h-8 text-brick-500" />,
                img: 'https://picsum.photos/seed/brickwork/600/400'
              },
              {
                title: 'Custom Stonework',
                desc: 'Beautiful natural and manufactured stone veneers for home exteriors, accent walls, and elegant entryways.',
                icon: <Ruler className="w-8 h-8 text-brick-500" />,
                img: 'https://picsum.photos/seed/stonework/600/400'
              },
              {
                title: 'Block Walls & Retaining',
                desc: 'Sturdy, engineered concrete block walls for property lines, structural support, and landscape terracing.',
                icon: <ShieldCheck className="w-8 h-8 text-brick-500" />,
                img: 'https://picsum.photos/seed/blockwall/600/400'
              },
              {
                title: 'Fireplaces & Chimneys',
                desc: 'Custom indoor and outdoor fireplace design, construction, and comprehensive chimney repair services.',
                icon: <Clock className="w-8 h-8 text-brick-500" />,
                img: 'https://picsum.photos/seed/fireplace/600/400'
              },
              {
                title: 'Patios & Walkways',
                desc: 'Durable and attractive flagstone, brick, or paver patios and walkways that enhance your outdoor living space.',
                icon: <MapPin className="w-8 h-8 text-brick-500" />,
                img: 'https://picsum.photos/seed/patio/600/400'
              },
              {
                title: 'Restoration & Repair',
                desc: 'Expert diagnosis and repair of cracked, leaning, or deteriorating masonry structures to prevent further damage.',
                icon: <CheckCircle2 className="w-8 h-8 text-brick-500" />,
                img: 'https://picsum.photos/seed/masonryrepair/600/400'
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-stone-800/50 border border-stone-700/50 hover:border-brick-500/50 transition-colors rounded-sm overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <div className="mb-4">{service.icon}</div>
                  <h4 className="text-xl font-serif mb-3">{service.title}</h4>
                  <p className="text-stone-400 font-light leading-relaxed text-sm">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us / Features */}
      <section className="py-24 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-brick-600 uppercase mb-3">The Local Advantage</h2>
              <h3 className="text-4xl font-serif text-stone-900 mb-8">Why Redding Chooses Will Gordon Masonry</h3>
              
              <div className="space-y-8">
                {[
                  { title: 'Deep Local Roots', desc: 'Born and raised in Redding, we understand the local climate, soil conditions, and building codes better than anyone.' },
                  { title: 'Uncompromising Quality', desc: 'We never cut corners. Every brick laid and stone set is done with meticulous attention to detail and structural integrity.' },
                  { title: 'Clear Communication', desc: 'From the initial estimate to project completion, we keep you informed every step of the way. No surprises.' },
                  { title: 'Clean Worksites', desc: 'We respect your property. Our team maintains a clean, safe worksite and leaves your home looking better than we found it.' }
                ].map((feature, idx) => (
                  <div key={idx} className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-brick-100 flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-brick-600" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-stone-900 mb-1">{feature.title}</h4>
                      <p className="text-stone-600 font-light">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative h-full min-h-[400px]">
              <img 
                src="https://picsum.photos/seed/masonry-details/800/800" 
                alt="Masonry details" 
                className="absolute inset-0 w-full h-full object-cover rounded-sm"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-stone-900/20 rounded-sm"></div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl rounded-sm max-w-xs border-t-4 border-brick-600">
                <div className="flex items-center mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-stone-600 font-light italic mb-3">
                  "Will and his team rebuilt our retaining wall. Professional, on-time, and the craftsmanship is incredible. Highly recommend to anyone in Redding."
                </p>
                <p className="text-xs font-bold uppercase tracking-wider text-stone-900">— Sarah T., Redding CA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery / CTA Section */}
      <section id="gallery" className="py-24 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://picsum.photos/seed/dark-stone-texture/1920/1080" 
            alt="Texture" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
            Ready to transform your <br className="hidden md:block" />
            <span className="italic font-light text-stone-400">property's exterior?</span>
          </h2>
          <p className="text-xl text-stone-300 font-light max-w-2xl mx-auto mb-10">
            Contact Will Gordon Masonry today for a free, no-obligation consultation and estimate on your next project.
          </p>
          <button 
            onClick={() => scrollTo('contact')}
            className="px-10 py-5 bg-brick-600 text-white font-medium uppercase tracking-widest hover:bg-brick-500 transition-colors inline-flex items-center"
          >
            Get Your Free Quote
            <ChevronRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-brick-600 uppercase mb-3">Get in Touch</h2>
              <h3 className="text-4xl font-serif text-stone-900 mb-6">Contact Will Gordon</h3>
              <p className="text-stone-600 font-light mb-10">
                Fill out the form below or reach out directly. We aim to respond to all inquiries within 24 hours.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-brick-600 mt-1" />
                  <div className="ml-4">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-stone-900">Phone</h4>
                    <p className="text-stone-600 font-light mt-1">(530) 555-0198</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-brick-600 mt-1" />
                  <div className="ml-4">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-stone-900">Email</h4>
                    <p className="text-stone-600 font-light mt-1">will@willgordonmasonry.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-brick-600 mt-1" />
                  <div className="ml-4">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-stone-900">Service Area</h4>
                    <p className="text-stone-600 font-light mt-1">Redding, CA & Shasta County</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-stone-50 p-8 rounded-sm border border-stone-200">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      className="w-full px-4 py-3 bg-white border border-stone-300 focus:border-brick-500 focus:ring-1 focus:ring-brick-500 outline-none transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      className="w-full px-4 py-3 bg-white border border-stone-300 focus:border-brick-500 focus:ring-1 focus:ring-brick-500 outline-none transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 bg-white border border-stone-300 focus:border-brick-500 focus:ring-1 focus:ring-brick-500 outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-3 bg-white border border-stone-300 focus:border-brick-500 focus:ring-1 focus:ring-brick-500 outline-none transition-colors"
                      placeholder="(530) 555-0000"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">Service Needed</label>
                  <select 
                    id="service" 
                    className="w-full px-4 py-3 bg-white border border-stone-300 focus:border-brick-500 focus:ring-1 focus:ring-brick-500 outline-none transition-colors text-stone-700"
                  >
                    <option value="">Select a service...</option>
                    <option value="brickwork">Brickwork & Pointing</option>
                    <option value="stonework">Custom Stonework</option>
                    <option value="block">Block Walls & Retaining</option>
                    <option value="fireplace">Fireplaces & Chimneys</option>
                    <option value="patio">Patios & Walkways</option>
                    <option value="repair">Restoration & Repair</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">Project Details</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-3 bg-white border border-stone-300 focus:border-brick-500 focus:ring-1 focus:ring-brick-500 outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full py-4 bg-stone-900 text-white font-medium uppercase tracking-wider hover:bg-brick-600 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 text-stone-400 py-12 border-t border-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="font-serif text-2xl font-bold tracking-tight text-white mb-4">
                Will Gordon <span className="text-brick-600">Masonry</span>
              </div>
              <p className="font-light text-sm max-w-xs">
                Premium masonry services in Redding, CA. Built on a foundation of quality, integrity, and local expertise.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm font-light">
                <li><button onClick={() => scrollTo('home')} className="hover:text-brick-500 transition-colors">Home</button></li>
                <li><button onClick={() => scrollTo('services')} className="hover:text-brick-500 transition-colors">Services</button></li>
                <li><button onClick={() => scrollTo('about')} className="hover:text-brick-500 transition-colors">About Will</button></li>
                <li><button onClick={() => scrollTo('contact')} className="hover:text-brick-500 transition-colors">Contact Us</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-4">Service Area</h4>
              <ul className="space-y-2 text-sm font-light">
                <li>Redding, CA</li>
                <li>Anderson, CA</li>
                <li>Shasta Lake, CA</li>
                <li>Palo Cedro, CA</li>
                <li>Surrounding Shasta County</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-stone-800 text-xs font-light flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Will Gordon Masonry. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Licensed, Bonded, and Insured in California.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
