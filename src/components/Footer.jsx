import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="contact" className="bg-forest-950 text-white/80 pt-24 pb-8 border-t border-forest-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-2 group inline-flex">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-forest-500 to-forest-700 flex items-center justify-center text-xl shadow-md group-hover:scale-105 transition-transform">🌿</div>
              <span className="font-serif font-semibold text-2xl text-white tracking-wide">LumoraFamily</span>
            </Link>
            <p className="font-serif italic text-xl text-bark-400">सेवा सिद्धि सुखम्</p>
            <p className="text-sm leading-relaxed max-w-sm">
              India's most trusted home services partner. One manager, every task, total peace of mind.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-forest-800/50 flex items-center justify-center hover:bg-bark-700 hover:text-white transition-colors border border-forest-700/50">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-forest-800/50 flex items-center justify-center hover:bg-bark-700 hover:text-white transition-colors border border-forest-700/50">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-forest-800/50 flex items-center justify-center hover:bg-bark-700 hover:text-white transition-colors border border-forest-700/50">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-forest-800/50 flex items-center justify-center hover:bg-bark-700 hover:text-white transition-colors border border-forest-700/50">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h5 className="text-white font-semibold mb-6 flex items-center gap-2 text-sm tracking-widest uppercase">
              <span className="w-4 h-px bg-bark-500" /> Company
            </h5>
            <div className="flex flex-col gap-4 text-sm">
              <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              <Link to="/about" className="hover:text-white transition-colors">Mission & Vision</Link>
              <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
              <Link to="/" className="hover:text-white transition-colors">Services</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Careers</Link>
            </div>
          </div>

          <div>
            <h5 className="text-white font-semibold mb-6 flex items-center gap-2 text-sm tracking-widest uppercase">
              <span className="w-4 h-px bg-bark-500" /> Contact
            </h5>
            <div className="flex flex-col gap-4 text-sm">
              <a href="mailto:hello@lumorafamily.com" className="hover:text-white transition-colors">hello@lumorafamily.com</a>
              <a href="tel:+918800000000" className="hover:text-white transition-colors">+91 88000 00000</a>
              <p className="pt-2 text-white/50">Gurgaon • Mumbai • Bengaluru</p>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-forest-800 text-sm text-center md:text-left flex flex-col md:flex-row justify-between gap-4 text-white/50">
          <p>© {new Date().getFullYear()} LumoraFamily. All rights reserved.</p>
          <div className="flex gap-6 justify-center">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
