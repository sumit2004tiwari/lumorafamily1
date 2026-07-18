import { motion } from 'framer-motion';

export default function About() {
  return (
    <main className="pt-24 pb-16 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 space-y-4"
        >
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-px bg-bark-600" />
            <span className="text-bark-600 text-xs font-semibold tracking-widest uppercase">About Us</span>
            <div className="w-8 h-px bg-bark-600" />
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-forest-900 leading-tight">
            Restoring the <em className="text-bark-600 not-italic italic">joy of home.</em>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          
          {/* Mission & Vision */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-12"
          >
            <div>
              <h2 className="font-serif text-3xl font-bold text-forest-900 mb-4 border-b border-forest-200 pb-4">Our Mission</h2>
              <p className="text-forest-700/80 text-lg leading-relaxed">
                To eliminate the friction of home management by providing every household with a dedicated, intelligent, and highly capable Home Manager. We believe that a well-run home is the foundation of a well-lived life.
              </p>
            </div>
            
            <div>
              <h2 className="font-serif text-3xl font-bold text-forest-900 mb-4 border-b border-forest-200 pb-4">Our Vision</h2>
              <p className="text-forest-700/80 text-lg leading-relaxed">
                To build a future where 'running the house' is no longer a second job for working professionals, but a seamless, invisible service that operates flawlessly in the background.
              </p>
            </div>
          </motion.div>

          {/* Founder Story */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-forest-900/5 border border-forest-100 relative"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-bark-100 rounded-bl-full -z-10" />
            <span className="text-bark-600 text-xs font-semibold tracking-widest uppercase mb-4 block">Founder's Story</span>
            <h2 className="font-serif text-3xl font-bold text-forest-900 mb-6">Born from exhaustion, built for peace.</h2>
            <div className="space-y-4 text-forest-700/80 leading-relaxed text-sm">
              <p>
                In 2021, my wife and I were working 60-hour weeks. We had just moved into a new home, and the sheer volume of coordination required to keep it running was staggering. Plumbers, AC mechanics, deep cleaners, painters — our weekends were spent on the phone, chasing vendors who never showed up on time.
              </p>
              <p>
                We realized that while technology had optimized our work lives, our personal lives were still running on disjointed phone calls and WhatsApp chats with random handymen. We didn't want an app to find a plumber; we wanted a person to just handle the plumbing.
              </p>
              <p>
                That's when LumoraFamily was born. We created the service we desperately needed: one dedicated, intelligent Home Manager who learns your home, remembers your preferences, and handles every task from end to end.
              </p>
              <p className="font-serif italic text-lg text-forest-900 pt-4">
                "We don't just fix pipes or clean sofas. We give families their weekends back."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
