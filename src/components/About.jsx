import { motion } from 'framer-motion';

const points = [
  {
    num: '1',
    title: 'One person, all your home tasks',
    desc: 'No more juggling multiple vendors or app-hopping. Your Home Manager is your single point of contact for everything at home.',
  },
  {
    num: '2',
    title: 'They know your home inside out',
    desc: "Over time, your manager learns your preferences, trusted vendors, and routines — so nothing has to be explained twice.",
  },
  {
    num: '3',
    title: 'Transparent & simple pricing',
    desc: 'Flat monthly plans. No hidden charges. No surprise bills. Just seamless home care you can count on.',
  },
];

const tasks = [
  { icon: '🔧', label: 'Plumber booked & confirmed', status: 'inprogress', statusLabel: 'In progress' },
  { icon: '💡', label: 'Electricity bill paid on time', status: 'done', statusLabel: '✓ Done' },
  { icon: '🧹', label: 'Deep cleaning team confirmed', status: 'done', statusLabel: '✓ Done' },
  { icon: '❄️', label: 'AC service scheduled Sunday', status: 'scheduled', statusLabel: 'Scheduled' },
];

const statusStyle = {
  inprogress: 'bg-bark-700/20 text-bark-400 border border-bark-700/30',
  done: 'bg-forest-600/20 text-forest-300 border border-forest-600/30',
  scheduled: 'bg-forest-800/30 text-forest-400 border border-forest-700/30',
};

export default function About() {
  return (
    <section id="about" className="py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Dashboard Mockup */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="bg-white rounded-3xl shadow-2xl shadow-forest-900/10 border border-forest-100 overflow-hidden">
            {/* Header */}
            <div className="bg-forest-900 px-5 py-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-forest-600 flex items-center justify-center text-white font-bold text-sm">P</div>
              <div className="flex-1">
                <div className="text-white font-semibold text-sm">Priya Sharma</div>
                <div className="text-white/50 text-xs flex items-center gap-1">
                  Your Home Manager ·
                  <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
                  <span className="text-green-400">Online</span>
                </div>
              </div>
              <span className="text-xs text-white/40 bg-white/10 px-2.5 py-1 rounded-full">Today</span>
            </div>

            {/* Tasks */}
            <div className="divide-y divide-forest-50">
              {tasks.map((task, i) => (
                <div key={i} className="px-5 py-3.5 flex items-center gap-3 hover:bg-forest-50/50 transition-colors">
                  <span className="text-xl">{task.icon}</span>
                  <span className="flex-1 text-forest-800 text-sm font-medium">{task.label}</span>
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${statusStyle[task.status]}`}>
                    {task.statusLabel}
                  </span>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="px-5 py-3 bg-forest-50 flex items-center justify-between text-xs text-forest-600">
              <span>4 tasks active · 2 done today</span>
              <span className="flex items-center gap-1 text-green-600 font-medium">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                WhatsApp update sent
              </span>
            </div>
          </div>
          {/* Decorative glow */}
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-forest-500/10 rounded-full blur-3xl -z-10" />
        </motion.div>

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-bark-600" />
            <span className="text-bark-600 text-xs font-semibold tracking-widest uppercase">What is LumoraFamily?</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-forest-900 leading-tight">
            Your home, <em className="text-bark-600 not-italic italic">perfectly cared for.</em>
          </h2>

          <p className="text-forest-700/70 text-lg leading-relaxed">
            LumoraFamily pairs you with a dedicated Home Manager — your personal problem-solver who handles the endless list of home tasks that steal your time and peace of mind.
          </p>

          <div className="space-y-6">
            {points.map((p, i) => (
              <motion.div 
                key={p.num} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + (i * 0.1) }}
                className="flex gap-4 items-start group"
              >
                <div className="w-8 h-8 rounded-full bg-forest-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0 group-hover:bg-bark-700 transition-colors duration-300">
                  {p.num}
                </div>
                <div>
                  <h4 className="font-semibold text-forest-900 mb-1">{p.title}</h4>
                  <p className="text-forest-700/65 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
