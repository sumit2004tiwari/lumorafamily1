const testimonials = [
  {
    quote: "I travel 15 days a month. Coming back to a home that's serviced, stocked, and clean — that comfort is worth more than I can put a price on.",
    author: 'Ananya R.',
    role: 'CXO, Gurgaon',
    initial: 'A',
    bg: 'bg-bark-700'
  },
  {
    quote: "Everything from AC service to Diwali cleaning to birthday dinner reservations — my manager does it all. I just show up for the moments that matter.",
    author: 'Priya K.',
    role: 'Entrepreneur, Delhi',
    initial: 'P',
    bg: 'bg-forest-800'
  },
  {
    quote: "My parents are well cared for back home while I'm in Singapore. Having someone reliable managing their daily home needs gives me true peace of mind.",
    author: 'Vikram S.',
    role: 'NRI, Singapore',
    initial: 'V',
    bg: 'bg-forest-600'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-forest-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-px bg-bark-500" />
            <span className="text-bark-400 text-xs font-semibold tracking-widest uppercase">What Our Clients Say</span>
            <div className="w-8 h-px bg-bark-500" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white">
            Trusted by <em className="text-bark-400 not-italic italic">thousands of families.</em>
          </h2>
        </div>

        {/* Featured Testimonial */}
        <div className="bg-forest-800/50 backdrop-blur-sm border border-forest-700 rounded-3xl p-8 md:p-12 mb-8 relative max-w-4xl mx-auto text-center">
          <div className="absolute top-6 left-8 text-6xl text-forest-600/30 font-serif leading-none">"</div>
          <p className="text-white/90 text-lg md:text-xl leading-relaxed italic mb-8 relative z-10 font-serif">
            Managing our home while both of us work full time felt impossible. Since LumoraFamily, that anxiety is completely gone. My Home Manager just handles everything — I get a WhatsApp summary every evening. It has genuinely changed how I experience our home.
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-forest-600 flex items-center justify-center text-white font-bold text-lg">S</div>
            <div className="text-left">
              <div className="text-white font-semibold">Siddharth M.</div>
              <div className="text-white/50 text-sm">Software Engineer, Bangalore</div>
            </div>
          </div>
          <div className="text-yellow-500 text-sm mt-3 tracking-widest">★★★★★</div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-forest-800/30 border border-forest-700/50 rounded-2xl p-6 relative">
              <div className="absolute top-4 left-4 text-4xl text-forest-600/30 font-serif leading-none">"</div>
              <p className="text-white/80 text-sm leading-relaxed mb-6 mt-4 relative z-10 italic">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${t.bg}`}>{t.initial}</div>
                <div>
                  <div className="text-white text-sm font-semibold">{t.author}</div>
                  <div className="text-white/40 text-xs">{t.role}</div>
                </div>
              </div>
              <div className="text-yellow-500 text-xs mt-2 tracking-widest">★★★★★</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
