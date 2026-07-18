import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero3D from './Hero3D';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden pt-20"
    >
      {/* 3D Background */}
      <Hero3D />

      {/* Ambient circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-forest-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-bark-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 relative z-10">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 pointer-events-auto"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-forest-600/40 bg-forest-800/40 backdrop-blur-sm">
            <span className="text-forest-300 text-xs">★</span>
            <span className="text-forest-200 text-xs font-medium tracking-widest uppercase">
              Premium Home Services & Care
            </span>
          </div>

          {/* Heading */}
          <div>
            <h1 className="font-serif text-5xl sm:text-6xl xl:text-7xl font-bold text-white leading-tight">
              Your home deserves
            </h1>
            <h1 className="font-serif text-5xl sm:text-6xl xl:text-7xl font-bold italic text-bark-400 leading-tight">
              the best hands.
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-white/60 font-serif italic text-xl">
            One dedicated service manager. Every repair, every task — handled with care.
          </p>

          {/* Description */}
          <p className="text-white/55 text-base leading-relaxed max-w-lg">
            LumoraFamily connects you with trusted professionals for all your home needs — plumbers, electricians, deep cleaning, AC servicing, carpentry, and hundreds of everyday tasks. Backed by a smart system that remembers your preferences.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="flex items-center gap-2 px-7 py-3.5 bg-bark-700 hover:bg-bark-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-bark-900/40 hover:shadow-bark-800/50 hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              Book a Free Call
            </Link>
            <Link
              to="/about"
              className="flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white/80 hover:text-white hover:border-white/40 font-medium rounded-full transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-sm"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
              Learn More
            </Link>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 pt-4 border-t border-white/10">
            <div>
              <div className="text-2xl font-bold text-white font-serif">2000+</div>
              <div className="text-xs text-white/50 mt-0.5">Homes Served</div>
            </div>
            <div className="w-px h-10 bg-white/15" />
            <div>
              <div className="text-2xl font-bold text-white font-serif">12</div>
              <div className="text-xs text-white/50 mt-0.5">Cities</div>
            </div>
            <div className="w-px h-10 bg-white/15" />
            <div>
              <div className="text-2xl font-bold text-white font-serif">15K+</div>
              <div className="text-xs text-white/50 mt-0.5">Tasks Monthly</div>
            </div>
          </div>
        </motion.div>

        {/* Right — Floating Task Cards */}
        <div className="relative h-[480px] hidden lg:block pointer-events-none">
          {/* Manager Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute top-0 right-0 w-72 bg-forest-800/60 backdrop-blur-md rounded-2xl border border-forest-600/30 p-4 flex items-center gap-3 shadow-2xl animate-float"
          >
            <div className="w-10 h-10 rounded-full bg-forest-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">R</div>
            <div className="flex-1">
              <div className="text-white font-semibold text-sm">Ravi Kumar</div>
              <div className="text-white/50 text-xs flex items-center gap-1">
                Your Home Manager ·
                <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse-soft" />
                <span className="text-green-400">Online</span>
              </div>
            </div>
            <div className="text-green-400">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            </div>
          </motion.div>

          {/* Task Card 1 */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute top-28 left-0 w-64 bg-forest-800/70 backdrop-blur-md rounded-2xl border border-forest-600/30 p-4 shadow-xl animate-float-delay"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-forest-600/50 flex items-center justify-center text-lg">🔧</div>
              <div>
                <div className="text-white text-sm font-semibold">Plumber Visit</div>
                <div className="text-white/50 text-xs">Kitchen pipe fixed — 11 AM</div>
              </div>
            </div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-forest-600/30 text-forest-300 text-xs font-medium">
              <span>✓</span> Done
            </div>
          </motion.div>

          {/* Task Card 2 */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute top-60 right-4 w-68 bg-bark-800/60 backdrop-blur-md rounded-2xl border border-bark-600/30 p-4 shadow-xl animate-float"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-bark-700/50 flex items-center justify-center text-lg">❄️</div>
              <div>
                <div className="text-white text-sm font-semibold">AC Servicing</div>
                <div className="text-white/50 text-xs">All 3 units serviced</div>
              </div>
            </div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-forest-600/30 text-forest-300 text-xs font-medium">
              <span>✓</span> Done
            </div>
          </motion.div>

          {/* Task Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute bottom-10 left-8 w-64 bg-forest-800/70 backdrop-blur-md rounded-2xl border border-forest-600/30 p-4 shadow-xl animate-float-delay2"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-forest-700/50 flex items-center justify-center text-lg">🧹</div>
              <div>
                <div className="text-white text-sm font-semibold">Deep Cleaning</div>
                <div className="text-white/50 text-xs">Team arrives Saturday 9 AM</div>
              </div>
            </div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-bark-700/30 text-bark-300 text-xs font-medium">
              ⏰ Scheduled
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
