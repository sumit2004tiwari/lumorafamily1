import { motion } from 'framer-motion';
import BookingCTA from '../components/BookingCTA';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <main className="pt-24 pb-16 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-px bg-bark-600" />
            <span className="text-bark-600 text-xs font-semibold tracking-widest uppercase">Get in Touch</span>
            <div className="w-8 h-px bg-bark-600" />
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-forest-900 leading-tight">
            We're here to <em className="text-bark-600 not-italic italic">help.</em>
          </h1>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl p-6 text-center shadow-md shadow-forest-900/5 border border-forest-100"
          >
            <div className="w-12 h-12 bg-forest-50 text-forest-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail size={24} />
            </div>
            <h3 className="font-semibold text-forest-900 mb-1">Email Us</h3>
            <a href="mailto:hello@lumorafamily.com" className="text-sm text-forest-600 hover:text-bark-600 transition-colors">hello@lumorafamily.com</a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl p-6 text-center shadow-md shadow-forest-900/5 border border-forest-100"
          >
            <div className="w-12 h-12 bg-forest-50 text-forest-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone size={24} />
            </div>
            <h3 className="font-semibold text-forest-900 mb-1">Call Us</h3>
            <a href="tel:+918800000000" className="text-sm text-forest-600 hover:text-bark-600 transition-colors">+91 88000 00000</a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-2xl p-6 text-center shadow-md shadow-forest-900/5 border border-forest-100"
          >
            <div className="w-12 h-12 bg-forest-50 text-forest-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin size={24} />
            </div>
            <h3 className="font-semibold text-forest-900 mb-1">HQ Address</h3>
            <p className="text-sm text-forest-600">DLF Cyber City, Phase 2, Gurugram, Haryana</p>
          </motion.div>
        </div>

        {/* The Booking Form reused from earlier */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <BookingCTA />
        </motion.div>

      </div>
    </main>
  );
}
