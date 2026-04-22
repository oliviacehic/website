/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Mail, Instagram, Music, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import heroImage from '../assets/hero-image.jpg';
import podcastImage from '../assets/podcast-image.png';
import naludaLogo from '../assets/naluda-magazine.avif';
import canvasRebelLogo from '../assets/canvas-rebel.png';
import influencerLogo from '../assets/influencer-magazine.png';
import contactImage from '../assets/contact-image.jpg';

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section id="about" className="relative min-h-[90vh] md:min-h-screen flex flex-col md:flex-row items-center bg-brand-beige/50 overflow-hidden">
        {/* Soft decorative background shape */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-pink/30 rounded-full blur-3xl opacity-50 select-none pointer-events-none" />
        <div className="absolute top-1/2 -right-24 w-64 h-64 bg-brand-brown/10 rounded-full blur-3xl opacity-30 select-none pointer-events-none" />
        
        <div className="w-full md:w-1/2 px-6 md:px-24 py-16 md:py-20 z-10 text-center md:text-left relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-[4rem] sm:text-[6rem] md:text-[9rem] lg:text-[11rem] font-serif font-bold leading-[0.8] tracking-tighter mb-8 md:mb-12 relative group">
              Liv <br />
              <span className="relative">
                Merima
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '40%' }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="absolute -bottom-2 left-0 h-1 bg-brand-brown/20 rounded-full md:hidden" 
                />
              </span>
            </h1>
            <div className="relative">
              <div className="absolute -left-8 top-0 bottom-0 w-[1px] bg-brand-ink/10 hidden md:block" />
              <p className="text-brand-ink/70 max-w-sm mx-auto md:mx-0 text-sm md:text-base leading-relaxed mb-10 pl-0 md:pl-6">
                Liv is dedicated to empowering women by restoring healthy mindsets and providing solutions that create lasting change in their romantic relationships. She has reached over 30 million people through her deep understanding of personal development, bringing about massive transformation to the lives of individuals around the world.
              </p>
            </div>
          </motion.div>
        </div>
        <div className="w-full md:w-1/2 min-h-[500px] md:h-screen relative p-6 md:p-12 lg:p-24 overflow-hidden">
           <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 1.2, ease: "easeOut" }}
             className="w-full h-full relative"
           >
             <div className="absolute inset-0 border-[0.5px] border-brand-ink/10 rounded-2xl transform rotate-3 translate-x-4 translate-y-4" />
             <div className="absolute inset-0 bg-brand-brown/5 rounded-2xl" />
             <img
               src={heroImage}
               alt="Liv Merima"
               className="relative z-10 w-full h-full object-cover object-top rounded-2xl shadow-2xl"
               referrerPolicy="no-referrer"
             />
           </motion.div>
        </div>
      </section>

      {/* Brand Logos Block */}
      <section className="relative z-20 md:mt-0 px-6">
        <div className="max-w-5xl mx-auto bg-[#e5c9b8] rounded-sm py-10 md:py-14 px-6 md:px-12 shadow-sm -mt-12 md:mt-0">
          <div className="flex flex-col items-center gap-8">
            <span className="text-[10px] md:text-xs font-sans tracking-[0.4em] text-brand-ink/40 uppercase font-bold text-center">As Seen In</span>
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-24 w-full">
              <div className="flex-shrink-0 flex items-center justify-center">
                <img src={naludaLogo} alt="Naluda Magazine" className="h-12 md:h-16 object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
              </div>
              <div className="flex-shrink-0 flex items-center justify-center">
                <img src={canvasRebelLogo} alt="Canvas Rebel" className="h-14 md:h-20 object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
              </div>
              <div className="flex-shrink-0 flex items-center justify-center">
                {/* One-element Dual Color Logo using Linear Gradient + Mask */}
                <div 
                  className="h-24 md:h-40 w-48 md:w-80 opacity-80 hover:opacity-100 transition-opacity"
                  style={{ 
                    WebkitMaskImage: `url("${influencerLogo}")`,
                    maskImage: `url("${influencerLogo}")`,
                    WebkitMaskSize: 'contain',
                    maskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    maskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskPosition: 'center',
                    background: 'linear-gradient(to right, white 72%, #E11D48 72%)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Enrollment CTA */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-[#faf7f2]">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-pink/10 -skew-x-12 transform translate-x-1/4" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-[10px] font-sans font-bold tracking-[0.5em] uppercase text-brand-brown opacity-60 mb-6 block">Your Journey Starts Here</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight text-brand-ink">
              Call in the love you were <br className="hidden md:block" /> always meant for
            </h2>
            <p className="text-brand-ink/60 mb-12 max-w-2xl mx-auto leading-relaxed text-base md:text-lg italic">
              "Learn the exact formula thousands of my clients have used to call in the love and relationships of their dreams."
            </p>
            <a 
              href="https://stan.store/livmerima"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-4 px-12 py-5 bg-brand-ink text-white rounded-full hover:bg-brand-brown transition-all shadow-2xl shadow-brand-ink/20 text-sm font-bold uppercase tracking-widest"
            >
              <span>Enroll Now</span>
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="pb-32 md:pb-40 bg-white relative">
        <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-brand-beige/50 to-white" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center mb-20">
            <span className="text-[10px] font-sans font-bold tracking-[0.4em] uppercase text-brand-brown opacity-60 mb-4">The Offerings</span>
            <h2 className="text-4xl md:text-6xl font-serif text-center">Transform Your World</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10 md:gap-8">
            <ServiceCard
              title="The Love Manifestation Blueprint™"
              description="Learn the exact formula thousands of my clients have used to call in the love and relationships of their dreams."
              linkText="Start the Blueprint"
              href="https://stan.store/livmerima/p/the-love-manifestation-blueprint"
              index={0}
            />
            <ServiceCard
              title="Workshops & Masterclasses"
              description="Ready to access my library of resources with everything you need to manifest your dream life? Look no further."
              linkText="See all trainings"
              href="https://stan.store/livmerima"
              index={1}
            />
            <ServiceCard
              title="1:1 Private Coaching"
              description="This service is for individuals that are ready for massive transformation and want consistent support, feedback and guidance on an on-going basis."
              linkText="Apply now"
              href="https://form.typeform.com/to/LufDGuvi"
              index={2}
            />
          </div>
        </div>
      </section>

      {/* Podcast Section */}
      <section id="podcast" className="py-24 md:py-32 bg-brand-beige/30 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand-pink/20 rounded-full blur-3xl opacity-40 select-none pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl shadow-brand-ink/5 flex flex-col lg:flex-row items-stretch">
            <div className="w-full lg:w-[42%] relative group overflow-hidden">
               <img 
                 src={podcastImage}
                 alt="Busy Glowing Up" 
                 className="w-full h-full object-cover object-left transition-transform duration-1000 group-hover:scale-105 min-h-[450px]"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-brand-ink/5 group-hover:bg-transparent transition-colors duration-500" />
               <a 
                 href="https://open.spotify.com/show/6ERlaWcDoCmTuhCT0YjQQR?si=255c4e1e63b9448b"
                 target="_blank"
                 rel="noopener noreferrer" 
                 className="absolute top-8 left-8 flex items-center space-x-3 bg-white/95 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full shadow-xl hover:scale-105 transition-transform z-20"
               >
                 <SpotifyIcon className="w-4 h-4 text-[#1DB954]" />
                 <span className="text-brand-ink text-[10px] font-sans font-black uppercase tracking-widest">Streaming Now</span>
               </a>
            </div>
            <div className="w-full lg:w-[58%] p-8 md:p-16 lg:p-20 flex flex-col justify-center">
              <div className="flex flex-col items-center lg:items-start mb-12 text-center lg:text-left">
                <span className="text-[10px] font-sans font-bold tracking-[0.4em] uppercase text-brand-brown opacity-60 mb-10">Join the Conversation</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 leading-[1.1] tracking-tight">The Busy Glowing Up Podcast</h2>
                <p className="text-brand-ink/70 mb-12 leading-relaxed text-base md:text-lg max-w-lg">
                  With over 300k+ downloads and streams and over 500+ reviews, your one-stop shop for all things personal development and relationships.
                </p>
                
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 md:gap-12 w-full">
                  <a 
                    href="https://open.spotify.com/show/6ERlaWcDoCmTuhCT0YjQQR?si=255c4e1e63b9448b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center lg:flex-row lg:space-x-4 group cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-full bg-brand-beige flex items-center justify-center group-hover:bg-[#1DB954] group-hover:text-white transition-all duration-500 mb-3 lg:mb-0">
                      <SpotifyIcon className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col items-center lg:items-start">
                      <span className="text-[10px] font-sans font-bold uppercase opacity-40 mb-0.5">Spotify</span>
                      <span className="text-sm font-sans font-black uppercase tracking-tight">Listen Now</span>
                    </div>
                  </a>
                  <a 
                    href="https://podcasts.apple.com/ca/podcast/busy-glowing-up/id1732158444"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center lg:flex-row lg:space-x-4 group cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-full bg-brand-beige flex items-center justify-center group-hover:bg-[#872ec4] group-hover:text-white transition-all duration-500 mb-3 lg:mb-0">
                      <ApplePodcastsIcon className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col items-center lg:items-start">
                      <span className="text-[10px] font-sans font-bold uppercase opacity-40 mb-0.5">Apple</span>
                      <span className="text-sm font-sans font-black uppercase tracking-tight">Listen Now</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 bg-white flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="bg-brand-pink/20 rounded-[3rem] overflow-hidden flex flex-col md:flex-row items-center relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
            
            <div className="w-full md:w-3/5 p-8 md:p-16 lg:p-24 z-10 text-center md:text-left">
               <span className="inline-block px-4 py-1.5 bg-brand-brown/10 text-brand-brown uppercase tracking-[0.3em] font-bold text-[10px] mb-8 rounded-full">Get in Touch</span>
               <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight mb-12">
                 Ready to begin your <br className="hidden lg:block" /> private transformation?
               </h2>
               <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 group">
                  <a 
                    href="mailto:oliviamerimaa@gmail.com" 
                    className="flex items-center space-x-6 p-4 rounded-2xl hover:bg-white transition-all duration-500 group"
                  >
                    <div className="w-14 h-14 rounded-full bg-brand-ink text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                      <Mail size={24} />
                    </div>
                    <span className="text-xl md:text-2xl font-bold border-b border-brand-ink/10 group-hover:border-brand-ink transition-colors">
                      oliviamerimaa@gmail.com
                    </span>
                  </a>
               </div>
            </div>
            
            <div className="w-full md:w-2/5 p-12 lg:p-20 relative overflow-hidden flex items-center justify-center">
               <motion.div 
                 whileHover={{ rotate: 0, scale: 1.05 }}
                 className="relative z-10 w-full max-w-[300px] aspect-[3/4] bg-white shadow-2xl rounded-2xl p-3 md:p-5 rotate-6 transition-all duration-700"
               >
                  <img 
                    src={contactImage}
                    alt="Liv Merima" 
                    className="w-full h-full object-cover rounded-xl shadow-inner" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-brand-brown text-white rounded-full flex items-center justify-center shadow-lg font-serif italic text-xl">L</div>
                </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function SpotifyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm5.508 17.302c-.216.354-.67.466-1.026.25-2.887-1.764-6.52-2.164-10.798-1.186-.405.094-.813-.156-.906-.56-.094-.406.156-.814.56-.908 4.69-1.073 8.703-.615 11.92 1.352.355.215.467.67.25 1.026zm1.47-3.252c-.272.44-.848.578-1.288.307-3.305-2.03-8.345-2.62-12.253-1.433-.493.15-1.018-.124-1.168-.62-.15-.494.124-1.018.618-1.168 4.463-1.356 10.022-.68 13.797 1.636.438.272.576.848.306 1.288zm.126-3.358C14.697 8.06 7.387 7.82 3.12 9.113c-.642.195-1.315-.172-1.51-.814-.195-.642.172-1.315.814-1.51 4.904-1.488 13.003-1.21 18.2 1.874.577.344.767 1.09.424 1.666-.343.577-1.09.767-1.666.425z" />
    </svg>
  );
}

function ApplePodcastsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" className={className}>
      <rect width="512" height="512" rx="112" fill="url(#apple-gradient)" />
      <defs>
        <linearGradient id="apple-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#d866ff" />
          <stop offset="100%" stopColor="#872ec4" />
        </linearGradient>
      </defs>
      <path 
        fill="white"
        d="M255.9 146.5c-60.6 0-109.6 49.1-109.6 109.6 0 29.8 11.9 56.9 31.2 76.7 5.6 5.8 15.1 6.1 21.1.6 6.3-5.7 6.6-15.6.8-21.6-12.8-13.3-20.7-31.5-20.7-51.5 0-41.2 33.5-74.8 74.8-74.8s74.8 33.5 74.8 74.8c0 19.9-7.9 38.2-20.7 51.5-5.8 6-5.5 15.9.8 21.6 5.9 5.5 15.4 5.2 21.1-.6 19.3-19.8 31.2-46.9 31.2-76.7 0-60.6-49-109.6-109.6-109.6zM255.9 220.4c-25 0-45.3 20.3-45.3 45.3s20.3 45.3 45.3 45.3 45.3-20.3 45.3-45.3-20.3-45.3-45.3-45.3zm.1 113.6c-27 0-48.9 21.9-48.9 48.9v69.3c0 29.8 21.9 54.1 48.9 54.1s48.9-24.2 48.9-54.1v-69.3c0-27-21.9-48.9-48.9-48.9z" 
      />
    </svg>
  );
}

function ServiceCard({ title, description, linkText, href, index }: { title: string, description: string, linkText: string, href: string, index: number }) {
  const isExternal = href.startsWith('http') || href.startsWith('mailto:');
  
  const content = (
    <div className="flex flex-col items-center justify-between h-full w-full">
      <div className="flex flex-col items-center space-y-6">
        <div className="w-12 h-12 rounded-full border border-brand-ink/5 flex items-center justify-center text-xs font-serif italic mb-2">
          0{index + 1}
        </div>
        <h3 className="text-xl md:text-2xl font-serif leading-tight">{title}</h3>
        <p className="text-brand-ink/60 text-sm leading-relaxed max-w-[280px]">
          {description}
        </p>
      </div>
      <div className="mt-12">
        <div className="inline-flex items-center justify-center space-x-3 px-8 py-3.5 bg-brand-ink text-white rounded-full text-[10px] uppercase tracking-widest font-bold group transition-all duration-300 hover:bg-brand-brown">
          <span>{linkText}</span>
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      className="bg-[#fcf8f5] border border-brand-ink/5 rounded-3xl flex flex-col h-full overflow-hidden hover:shadow-2xl hover:shadow-brand-ink/5 transition-all duration-700"
    >
      {isExternal ? (
        <a 
          href={href} 
          target={href.startsWith('mailto:') ? undefined : "_blank"} 
          rel={href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
          className="p-10 md:p-14 flex flex-col h-full items-center text-center"
        >
          {content}
        </a>
      ) : (
        <Link to={href} className="p-10 md:p-14 flex flex-col h-full items-center text-center">
          {content}
        </Link>
      )}
    </motion.div>
  );
}
