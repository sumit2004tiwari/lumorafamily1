import { useState } from 'react';
import axios from 'axios';

export default function BookingCTA() {
  const [formData, setFormData] = useState({ name: '', phone: '', countryCode: '+91' });
  const [status, setStatus] = useState({ type: '', msg: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', msg: '' });

    try {
      const res = await axios.post('http://localhost:5000/api/bookings', formData);
      setStatus({ type: 'success', msg: res.data.message });
      setFormData({ name: '', phone: '', countryCode: '+91' });
    } catch (err) {
      setStatus({ type: 'error', msg: err.response?.data?.message || 'Something went wrong. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="booking" className="py-24 bg-cta-gradient relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-forest-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-bark-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <div className="mb-10 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-px bg-bark-400/50" />
            <span className="text-bark-300 text-xs font-semibold tracking-widest uppercase">Ready to get started?</span>
            <div className="w-8 h-px bg-bark-400/50" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Ready to take back<br />
            <em className="text-bark-300 not-italic italic">your time?</em>
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto mt-4">
            Book a free, no-obligation call. We'll understand your home and show you exactly how LumoraFamily can make your life simpler.
          </p>
        </div>

        {status.type === 'success' ? (
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 animate-fade-up">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">✅</div>
            <h3 className="text-2xl font-serif font-bold text-white mb-2">You're on the list!</h3>
            <p className="text-white/80">Our team will call you within 24 hours. Check your WhatsApp for confirmation.</p>
            <button onClick={() => setStatus({type:'',msg:''})} className="mt-6 text-sm text-bark-300 underline underline-offset-4">Book another call</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 sm:p-8 max-w-xl mx-auto flex flex-col gap-4 shadow-2xl">
            {status.type === 'error' && <div className="text-red-400 text-sm bg-red-400/10 p-3 rounded-lg border border-red-400/20">{status.msg}</div>}
            
            <input
              type="text"
              required
              placeholder="Your name"
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
              className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-3.5 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-bark-400 transition-all"
            />
            
            <div className="flex gap-3">
              <select
                value={formData.countryCode}
                onChange={e => setFormData({...formData, countryCode: e.target.value})}
                className="w-[100px] bg-white/10 border border-white/20 rounded-xl px-3 py-3.5 text-white focus:outline-none focus:ring-2 focus:ring-bark-400 transition-all appearance-none cursor-pointer"
              >
                <option value="+91" className="text-forest-900">🇮🇳 +91</option>
                <option value="+1" className="text-forest-900">🇺🇸 +1</option>
                <option value="+44" className="text-forest-900">🇬🇧 +44</option>
                <option value="+971" className="text-forest-900">🇦🇪 +971</option>
                <option value="+65" className="text-forest-900">🇸🇬 +65</option>
              </select>
              <input
                type="tel"
                required
                placeholder="Phone number"
                value={formData.phone}
                onChange={e => setFormData({...formData, phone: e.target.value})}
                className="flex-1 bg-white/10 border border-white/20 rounded-xl px-5 py-3.5 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-bark-400 transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 bg-white text-forest-900 font-bold py-4 rounded-xl hover:bg-cream transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
            >
              {loading ? 'Submitting...' : 'Book My Free Call →'}
            </button>
            <p className="text-white/40 text-xs text-center mt-2">By booking, you agree to our Terms & Privacy Policy.</p>
          </form>
        )}
      </div>
    </section>
  );
}
