const techCards = [
  { icon: '📁', title: 'A Living Home File', desc: 'One record of your home — vendors, warranties, appliances, routines, dates. Known once, never asked twice.' },
  { icon: '🔔', title: 'Anticipation, Not Reminders', desc: "The system surfaces what's coming. Your manager acts before you'd have to ask — AMC due, filter change, service gap." },
  { icon: '🔗', title: 'A Vetted Vendor Network', desc: 'Solve a problem once and every LumoraFamily home benefits. Our vendor network grows smarter at scale.' },
  { icon: '💬', title: 'Zero Apps. Just WhatsApp.', desc: 'You message one person. Everything else stays under the surface, where it belongs. No downloads. No dashboards.' },
];

export default function Technology() {
  return (
    <section id="technology" className="py-24 bg-tech-gradient text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-start">
          
          {/* Header */}
          <div className="md:w-1/3 space-y-6">
            <div className="inline-block px-3 py-1 rounded bg-forest-800/50 border border-forest-600/30 text-forest-300 text-xs font-semibold tracking-widest uppercase mb-2">
              Built on Smart Technology
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold leading-tight">
              One manager in front of you.<br />
              Smart systems behind them.
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              Our in-house platform keeps a living record of how your home runs — surfaces what's coming before it's urgent, and gets sharper every time we solve something new for you.
            </p>
            <a href="#technology" className="inline-block text-bark-400 hover:text-bark-300 font-medium transition-colors border-b border-bark-400/30 hover:border-bark-300 pb-0.5 mt-4">
              See the full system behind the service →
            </a>
          </div>

          {/* Grid */}
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {techCards.map((card, i) => (
              <div key={i} className="bg-forest-900/60 backdrop-blur-sm border border-forest-700/50 rounded-2xl p-6 hover:bg-forest-800/60 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-forest-800 border border-forest-600/30 flex items-center justify-center text-xl mb-4">
                  {card.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{card.title}</h4>
                <p className="text-white/55 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
