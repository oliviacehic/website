/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { Instagram, Music, Video } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-beige py-16 md:py-20 border-t border-brand-ink/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center space-y-12 text-center">
          <Link to="/" className="group flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-serif tracking-[0.2em] hover:italic transition-all duration-700">
              Liv <span className="font-light opacity-30">Merima</span>
            </span>
          </Link>
          
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
            <Link to="/" className="text-sm uppercase tracking-widest font-medium hover:text-brand-brown">Home</Link>
            <Link to="/#about" className="text-sm uppercase tracking-widest font-medium hover:text-brand-brown">About</Link>
            <Link to="/#services" className="text-sm uppercase tracking-widest font-medium hover:text-brand-brown">Services</Link>
            <Link to="/#podcast" className="text-sm uppercase tracking-widest font-medium hover:text-brand-brown">Podcast</Link>
            <Link to="/#contact" className="text-sm uppercase tracking-widest font-medium hover:text-brand-brown">Contact</Link>
          </div>

          <div className="flex space-x-8 text-brand-ink/60">
            <a href="https://www.instagram.com/livmerima/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-ink transition-colors">
              <Instagram size={24} />
            </a>
            <a href="https://open.spotify.com/show/6ERlaWcDoCmTuhCT0YjQQR?si=255c4e1e63b9448b" target="_blank" rel="noopener noreferrer" className="hover:text-brand-ink transition-colors">
              <SpotifyIcon className="w-6 h-6" />
            </a>
            <a href="https://www.tiktok.com/@livmerima" target="_blank" rel="noopener noreferrer" className="hover:text-brand-ink transition-colors">
              <TikTokIcon className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-brand-ink/5 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] font-bold text-brand-ink/40">
          <p>Copyright © 2025 Liv Merima. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-ink transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-ink transition-colors">Confidentiality</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SpotifyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" className={className}>
      <rect width="512" height="512" rx="112" fill="black" />
      <path 
        fill="white"
        d="M256 112a144 144 0 1 0 0 288 144 144 0 1 0 0-288zm66.15 218.12c-1.19 1.95-3.76 2.6-5.71 1.41-29.93-18.29-67.58-22.42-111.96-12.3-.23.05-.47.08-.7.08-2.01 0-3.8-1.4-4.24-3.46-.52-2.45 1.07-4.87 3.53-5.39 49.1-11.22 90.63-6.51 124.33 14.1 1.95 1.2 2.6 3.77 1.41 5.72v.84zm18.55-39.22c-1.49 2.43-4.68 3.2-7.11 1.7-37.53-23.05-94.57-29.7-138.8-16.29-.24.07-.49.11-.73.11-2.55 0-4.81-1.78-5.36-4.33-.64-2.99 1.33-5.98 4.32-6.61 50.71-15.39 113.68-7.98 156.39 18.28 2.44 1.5 3.2 4.69 1.7 7.13v.02zm1.57-41.04c-44.97-26.69-119.33-29.15-162.63-16.02-.25.08-.51.11-.76.11-2.9 0-5.48-2.04-6.1-4.95-.73-3.43 1.45-6.84 4.88-7.58 49.63-15.05 131.51-12.16 183.31 18.57 3.36 2 4.46 6.33 2.46 9.69-1.99 3.36-6.33 4.46-9.69 2.45l-.21-.21z" 
      />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" className={className}>
      <rect width="512" height="512" rx="112" fill="currentColor" />
      <path 
        fill="white"
        d="M394 216c-48-1-66-22-68-38v107c0 53-33 93-84 93s-85-40-85-93 34-93 85-93c12 0 19 2 24 5v51c-4-2-9-3-15-3-24 0-41 19-41 41s17 41 41 41 41-19 41-41V96h51c1 31 22 53 51 55v65z" 
      />
    </svg>
  );
}
