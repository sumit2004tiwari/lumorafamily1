const steps = [
  { num: '01', title: 'Book a free discovery call', desc: "Tell us about your home and daily challenges. We'll match you with the right Home Manager." },
  { num: '02', title: 'Meet your dedicated manager', desc: 'Your Home Manager learns your home, vendors, and preferences — creating a living profile of your household.' },
  { num: '03', title: 'Just message — we\'ll handle it', desc: 'WhatsApp your manager any task. They coordinate, supervise, and report back. You just approve.' },
  { num: '04', title: "Sit back, it's handled", desc: 'Receive daily WhatsApp updates. Every task logged. Nothing slips through the cracks.' },
];

const messages = [
  { type: 'received', text: 'Hi! Your AC service is confirmed for Sunday 10 AM. Technician Ramu from TechCool will arrive. ✅', time: '9:02 AM' },
  { type: 'received', text: "Also, I've paid the electricity bill of ₹2,450 via your saved UPI. Receipt attached. 🧾", time: '9:04 AM' },
  { type: 'sent', text: 'Amazing, thanks! Can you also schedule deep cleaning before Diwali?', time: '9:15 AM ✓✓' },
  { type: 'received', text: "Absolutely! I'll book your preferred team — EcoClean for Oct 28. Shall I confirm? 🧹", time: '9:16 AM' },
  { type: 'sent', text: 'Yes please! 👍', time: '9:17 AM ✓✓' },
  { type: 'received', text: "Done! Deep cleaning booked for Oct 28, 9 AM. You'll get a reminder the evening before. 🌿", time: '9:18 AM' },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Steps */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-bark-600" />
              <span className="text-bark-600 text-xs font-semibold tracking-widest uppercase">How It Works</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-forest-900 leading-tight">
              Simple as a<br />
              <em className="text-bark-600 not-italic italic">WhatsApp message.</em>
            </h2>
          </div>

          <div className="relative space-y-0">
            {steps.map((step, i) => (
              <div key={step.num} className="relative flex gap-5">
                {/* Line connector */}
                {i < steps.length - 1 && (
                  <div className="absolute left-5 top-12 w-0.5 h-16 bg-forest-200" />
                )}
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-forest-600 text-white flex items-center justify-center text-xs font-bold z-10">
                  {step.num}
                </div>
                <div className="pb-10">
                  <h4 className="font-semibold text-forest-900 mb-1">{step.title}</h4>
                  <p className="text-forest-700/65 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* WhatsApp Mockup */}
        <div className="relative">
          <div className="bg-[#ECE5DD] rounded-3xl overflow-hidden shadow-2xl shadow-forest-900/15 border border-forest-100">
            {/* WA Header */}
            <div className="bg-forest-700 px-4 py-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-forest-500 flex items-center justify-center text-white font-bold text-xs">LF</div>
              <div>
                <div className="text-white font-semibold text-sm">LumoraFamily Manager</div>
                <div className="text-white/60 text-xs">Online</div>
              </div>
              <div className="ml-auto flex gap-3 text-white/60">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 13a19.79 19.79 0 01-3.07-8.67A2 2 0 013.6 2.22h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.91 9.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
              </div>
            </div>

            {/* Messages */}
            <div className="px-4 py-5 space-y-3 min-h-64 bg-[url('https://web.whatsapp.com/img/bg-chat-tile-dark_04fcacde539c58cca6745483d4858c52.png')] bg-repeat">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.type === 'sent' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[78%] px-3.5 py-2 rounded-2xl shadow-sm ${msg.type === 'sent' ? 'bg-[#DCF8C6] rounded-tr-none' : 'bg-white rounded-tl-none'}`}>
                    <p className="text-gray-800 text-xs leading-relaxed">{msg.text}</p>
                    <p className="text-gray-400 text-[10px] text-right mt-1">{msg.time}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Input bar */}
            <div className="bg-[#F0F0F0] px-4 py-3 flex items-center gap-3">
              <div className="flex-1 bg-white rounded-full px-4 py-2 text-gray-400 text-sm">Type a message</div>
              <div className="w-9 h-9 rounded-full bg-forest-600 flex items-center justify-center text-white">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
              </div>
            </div>
          </div>

          {/* Glow */}
          <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-forest-500/10 rounded-full blur-3xl -z-10" />
        </div>
      </div>
    </section>
  );
}
