/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../lib/firebase';
import { Menu, X, Instagram, Music } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [user] = useAuthState(auth);
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Services', path: '/#services' },
    { name: 'Podcast', path: '/#podcast' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-brand-ink/[0.03]">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <Link to="/" className="group flex items-center">
          <span className="text-2xl md:text-3xl font-serif tracking-[0.1em] hover:italic transition-all duration-700 ease-in-out">
            Liv <span className="font-extralight opacity-30">Merima</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-sm uppercase tracking-widest font-medium hover:text-brand-brown transition-colors"
            >
              {link.name}
            </Link>
          ))}
          {user ? (
            <Link
              to="/dashboard"
              className="px-6 py-2 bg-brand-ink text-white rounded-full text-sm uppercase tracking-widest hover:bg-brand-brown transition-all"
            >
              Dashboard
            </Link>
          ) : (
            <Link
              to="/login"
              className="px-6 py-2 border border-brand-ink rounded-full text-sm uppercase tracking-widest hover:bg-brand-ink hover:text-white transition-all"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
