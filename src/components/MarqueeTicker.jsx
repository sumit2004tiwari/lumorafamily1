const services = ['🔧 Plumbing', '⚡ Electrical', '❄️ AC Servicing', '🧹 Deep Cleaning', '🪵 Carpentry', '🎨 Painting', '🏠 Home Renovation', '🐛 Pest Control', '🪴 Garden Care', '🔒 Security', '🖥️ Appliance Repair', '🚿 Bathroom Fitting', '🔧 Plumbing', '⚡ Electrical', '❄️ AC Servicing', '🧹 Deep Cleaning', '🪵 Carpentry', '🎨 Painting', '🏠 Home Renovation', '🐛 Pest Control'];

export default function MarqueeTicker() {
  return (
    <div className="bg-forest-600 py-4 overflow-hidden select-none">
      <div className="flex animate-marquee whitespace-nowrap">
        {services.map((s, i) => (
          <span key={i} className="inline-flex items-center gap-3 mx-4">
            <span className="text-white font-medium text-sm tracking-wide uppercase">{s}</span>
            {i < services.length - 1 && (
              <span className="text-forest-300 text-sm">•</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
