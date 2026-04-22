/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { auth, db } from '../lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { User, Book, Calendar, LogOut, ArrowRight, Star } from 'lucide-react';

export default function Dashboard() {
  const [user, loading] = useAuthState(auth);
  const [profile, setProfile] = useState<any>(null);
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
          setProfile(docSnap.data());
        }
      };
      fetchProfile();
    }
  }, [user, loading, navigate]);

  const handleLogout = () => {
    auth.signOut().then(() => navigate('/'));
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center font-serif italic">Loading...</div>;

  return (
    <div className="min-h-screen pt-20 px-6 max-w-7xl mx-auto">
      <header className="py-8 md:py-12 flex flex-col md:flex-row justify-between items-center md:items-center border-b border-brand-ink/5 gap-6 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-4xl md:text-5xl font-serif mb-2">Hello, {profile?.displayName?.split(' ')[0] || 'Member'}</h1>
          <p className="text-brand-ink/40 uppercase tracking-widest text-[9px] md:text-[10px] font-bold">Your Coaching Hub & Private Dashboard</p>
        </div>
        <div className="flex space-x-3 md:space-x-4">
           <button 
             onClick={() => navigate('/profile')}
             className="flex items-center space-x-2 px-5 md:px-6 py-2.5 md:py-3 border border-brand-ink/10 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-brand-beige active:scale-95 transition-all"
           >
             <User size={14} />
             <span>Profile</span>
           </button>
           <button 
             onClick={handleLogout}
             className="flex items-center space-x-2 px-5 md:px-6 py-2.5 md:py-3 bg-brand-ink text-white rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-brand-brown active:scale-95 transition-all shadow-md shadow-brand-ink/10"
           >
             <LogOut size={14} />
             <span>Logout</span>
           </button>
        </div>
      </header>

      <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Quick Stats */}
        <DashboardCard
          title="Manifestation Tracker"
          icon={<Star className="text-orange-400" size={20} />}
          value="85%"
          subtitle="Progress towards goal"
        />
        <DashboardCard
          title="Enrolled Courses"
          icon={<Book className="text-blue-400" size={20} />}
          value={profile?.enrollments?.length || 0}
          subtitle="Active programs"
        />
        <DashboardCard
          title="Coaching Sessions"
          icon={<Calendar className="text-brand-brown" size={20} />}
          value="2"
          subtitle="Remaining this month"
        />
      </div>

      <div className="pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Courses List */}
        <section className="bg-white p-8 md:p-12 rounded-3xl border border-brand-ink/5">
          <h3 className="text-2xl font-serif mb-8 flex items-center justify-between">
            <span>My Active Programs</span>
            <ArrowRight size={20} className="text-brand-ink/30" />
          </h3>
          <div className="space-y-6">
            <CourseItem title="The Love Manifestation Blueprint™" progress={45} />
            <CourseItem title="Self-Love & Boundaries Masterclass" progress={100} />
            <CourseItem title="Manifesting the One: 30 Day Challenge" progress={0} />
          </div>
        </section>

        {/* Resources */}
        <section className="bg-brand-pink/20 p-8 md:p-12 rounded-3xl border border-brand-ink/5">
          <h3 className="text-2xl font-serif mb-8">Exclusive Resources</h3>
          <div className="grid grid-cols-1 gap-4">
            <ResourceItem title="Meditation: Calling in the Divine Masculine" type="Audio" />
            <ResourceItem title="Journaling Prompts: Relationship Inventory" type="PDF" />
            <ResourceItem title="Workshop: Letting Go of the Past" type="Video" />
            <ResourceItem title="The Busy Glowing Up Workbook" type="Interactive" />
          </div>
        </section>
      </div>
    </div>
  );
}

function DashboardCard({ title, icon, value, subtitle }: { title: string, icon: any, value: any, subtitle: string }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="bg-white p-8 rounded-3xl border border-brand-ink/5 shadow-sm"
    >
      <div className="p-3 bg-brand-beige w-fit rounded-2xl mb-6">
        {icon}
      </div>
      <h4 className="text-xs font-bold uppercase tracking-widest text-brand-ink/40 mb-2">{title}</h4>
      <div className="text-4xl font-serif mb-2">{value}</div>
      <p className="text-sm font-medium text-brand-ink/60">{subtitle}</p>
    </motion.div>
  );
}

function CourseItem({ title, progress }: { title: string, progress: number }) {
  return (
    <div className="group cursor-pointer">
      <div className="flex justify-between items-center mb-4">
        <h5 className="font-serif text-lg group-hover:text-brand-brown transition-colors">{title}</h5>
        <span className="text-xs font-bold text-brand-ink/40">{progress}%</span>
      </div>
      <div className="w-full h-1.5 bg-brand-beige rounded-full overflow-hidden">
        <div 
          className="h-full bg-brand-ink group-hover:bg-brand-brown transition-all duration-700" 
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

function ResourceItem({ title, type }: { title: string, type: string }) {
  return (
    <div className="flex items-center justify-between p-5 bg-white rounded-2xl border border-brand-ink/5 hover:border-brand-brown transition-all cursor-pointer group">
      <div className="flex items-center space-x-4">
         <div className="p-2 bg-brand-beige/50 rounded-lg text-[10px] uppercase font-black tracking-widest text-brand-ink/30">
           {type}
         </div>
         <span className="text-sm font-medium group-hover:text-brand-brown">{title}</span>
      </div>
      <ArrowRight size={16} className="text-brand-ink/20 group-hover:text-brand-brown group-hover:translate-x-1 transition-all" />
    </div>
  );
}
