/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { auth, db } from '../lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { doc, getDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Save, Loader2 } from 'lucide-react';

export default function Profile() {
  const [user, loading] = useAuthState(auth);
  const [formData, setFormData] = useState({
    displayName: '',
    bio: '',
  });
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/login');
    }
    
    if (user) {
      const fetchProfile = async () => {
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setFormData({
            displayName: data.displayName || '',
            bio: data.bio || '',
          });
        }
      };
      fetchProfile();
    }
  }, [user, loading, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    
    setSaving(true);
    try {
      const userRef = doc(db, 'users', user.uid);
      await updateDoc(userRef, {
        ...formData,
        updatedAt: serverTimestamp(),
      });
      navigate('/dashboard');
    } catch (error) {
      console.error("Failed to update profile:", error);
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center font-serif italic">Loading...</div>;

  return (
    <div className="min-h-screen pt-20 px-6 max-w-3xl mx-auto py-24">
      <button 
        onClick={() => navigate('/dashboard')}
        className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-brand-ink/40 hover:text-brand-ink mb-12 transition-colors"
      >
        <ArrowLeft size={14} />
        <span>Back to Dashboard</span>
      </button>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-12 md:p-16 rounded-[40px] border border-brand-ink/5"
      >
        <h1 className="text-4xl font-serif mb-12">Edit Profile</h1>
        
        <form onSubmit={handleSubmit} className="space-y-10">
          <div>
            <label className="block text-[10px] uppercase tracking-widest font-black text-brand-ink/30 mb-4 ml-1">Display Name</label>
            <input
              type="text"
              value={formData.displayName}
              onChange={(e) => setFormData({ ...formData, displayName: e.target.value })}
              className="w-full px-6 py-4 bg-brand-beige border-none rounded-2xl focus:ring-2 focus:ring-brand-brown outline-none transition-all font-medium text-brand-ink"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-[10px] uppercase tracking-widest font-black text-brand-ink/30 mb-4 ml-1">Short Bio</label>
            <textarea
              rows={4}
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              className="w-full px-6 py-4 bg-brand-beige border-none rounded-2xl focus:ring-2 focus:ring-brand-brown outline-none transition-all font-medium text-brand-ink resize-none"
              placeholder="Tell us about yourself..."
            />
          </div>

          <button
            type="submit"
            disabled={saving}
            className="w-full flex items-center justify-center space-x-3 px-8 py-5 bg-brand-ink text-white rounded-2xl shadow-xl shadow-brand-ink/20 hover:bg-brand-brown transition-all disabled:opacity-50"
          >
            {saving ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              <>
                <Save size={20} />
                <span className="uppercase tracking-widest font-bold text-sm">Save Changes</span>
              </>
            )}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
