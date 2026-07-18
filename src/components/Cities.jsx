const cities = [
  'Delhi NCR', 'Mumbai', 'Bengaluru', 'Hyderabad', 'Pune', 'Chennai', 'Ahmedabad', 'Jaipur', 'Kolkata', 'Chandigarh', 'Lucknow'
];

export default function Cities() {
  return (
    <section id="cities" className="py-24 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="mb-14 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-px bg-bark-600" />
            <span className="text-bark-600 text-xs font-semibold tracking-widest uppercase">Where We Serve</span>
            <div className="w-8 h-px bg-bark-600" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-forest-900">
            Serving homes across <em className="text-bark-600 not-italic italic">India.</em>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {cities.map(c => (
            <div key={c} className="px-5 py-2.5 rounded-full bg-white border border-forest-100 shadow-sm text-forest-800 text-sm font-medium flex items-center gap-2 hover:border-forest-300 hover:shadow-md transition-all cursor-default">
              <span className="text-forest-400">📍</span> {c}
            </div>
          ))}
          <div className="px-5 py-2.5 rounded-full bg-forest-50 border border-forest-200 text-forest-700 text-sm font-semibold flex items-center gap-2">
            📍 + More Cities
          </div>
        </div>
      </div>
    </section>
  );
}
