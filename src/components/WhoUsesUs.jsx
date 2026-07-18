const personas = [
  { emoji: '👨‍💼', title: 'Busy Professionals', desc: 'No time to chase vendors or track repairs. Your manager handles it all while you focus on what matters.' },
  { emoji: '👨‍👩‍👧‍👦', title: 'Growing Families', desc: "School runs, home repairs, appliance upkeep — one manager handles the chaos so your family doesn't have to." },
  { emoji: '✈️', title: 'Frequent Travellers', desc: "Come back to a home that's in order — stocked, serviced, and ready. Peace of mind wherever you are." },
  { emoji: '🏡', title: 'Senior Homeowners', desc: 'A trusted partner to manage home upkeep, coordinate care services, and ensure nothing ever falls behind.' },
];

export default function WhoUsesUs() {
  return (
    <section id="who" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-px bg-bark-600" />
            <span className="text-bark-600 text-xs font-semibold tracking-widest uppercase">Who Uses LumoraFamily</span>
            <div className="w-8 h-px bg-bark-600" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-forest-900">
            Built for people who value <em className="text-bark-600 not-italic italic">their home.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {personas.map((p, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-forest-100 hover:border-forest-300 transition-colors group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform origin-left">{p.emoji}</div>
              <h4 className="font-serif text-xl font-semibold text-forest-900 mb-2">{p.title}</h4>
              <p className="text-forest-700/65 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
