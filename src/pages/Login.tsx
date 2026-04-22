/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { auth, db } from '../lib/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { motion } from 'motion/react';

export default function Login() {
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      
      // Sync user to Firestore
      if (result.user) {
        const userRef = doc(db, 'users', result.user.uid);
        const userDoc = await getDoc(userRef);
        
        if (!userDoc.exists()) {
          await setDoc(userRef, {
            displayName: result.user.displayName,
            email: result.user.email,
            photoURL: result.user.photoURL,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
            enrollments: [],
            bio: ""
          });
        }
        
        navigate('/dashboard');
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white p-12 rounded-2xl shadow-xl shadow-brand-ink/5 border border-brand-ink/5 text-center"
      >
        <h2 className="text-4xl font-serif mb-4">Welcome back</h2>
        <p className="text-brand-ink/50 text-sm mb-12">Login to access your coaching dashboard, courses, and more.</p>
        
        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center space-x-3 px-8 py-4 border border-brand-ink/10 rounded-full hover:bg-brand-ink hover:text-white transition-all uppercase tracking-widest text-xs font-bold"
        >
          <img src="https://www.gstatic.com/firebase/anonymous-scan.png" alt="G" className="w-5 h-5 hidden" />
          <span>Continue with Google</span>
        </button>
        
        <p className="mt-12 text-[10px] uppercase tracking-widest text-brand-ink/30 font-bold">
          By joining, you agree to our Terms of Service.
        </p>
      </motion.div>
    </div>
  );
}
