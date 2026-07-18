import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Starter',
    price: '2,999',
    tagline: 'Perfect for compact homes',
    features: [
      { text: 'Dedicated Home Manager', included: true },
      { text: 'Up to 15 tasks/month', included: true },
      { text: 'WhatsApp support (9AM–7PM)', included: true },
      { text: 'Vendor coordination', included: true },
      { text: 'Monthly home report', included: true },
      { text: 'Emergency support', included: false },
      { text: 'Priority vendor booking', included: false },
    ],
    featured: false,
  },
  {
    name: 'Family',
    price: '5,999',
    tagline: 'For homes that run on trust',
    features: [
      { text: 'Dedicated Home Manager', included: true },
      { text: 'Unlimited tasks', included: true },
      { text: 'WhatsApp support (7AM–10PM)', included: true },
      { text: 'Vendor coordination & supervision', included: true },
      { text: 'Weekly home reports', included: true },
      { text: 'Emergency support', included: true },
      { text: 'Priority vendor booking', included: true },
    ],
    featured: true,
  },
  {
    name: 'Premium',
    price: '9,999',
    tagline: 'For premium homes & estates',
    features: [
      { text: 'Senior Home Manager', included: true },
      { text: 'Unlimited tasks + errands', included: true },
      { text: '24/7 WhatsApp support', included: true },
      { text: 'Full vendor management', included: true },
      { text: 'Daily home reports', included: true },
      { text: '24/7 emergency support', included: true },
      { text: 'Exclusive vendor network', included: true },
    ],
    featured: false,
  },
];

export default function Plans() {
  return (
    <section id="plans" className="py-24 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 space-y-4"
        >
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-px bg-bark-600" />
            <span className="text-bark-600 text-xs font-semibold tracking-widest uppercase">Our Plans</span>
            <div className="w-8 h-px bg-bark-600" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-forest-900">
            Simple, transparent <em className="text-bark-600 not-italic italic">pricing.</em>
          </h2>
          <p className="text-forest-700/70 text-lg">No hidden fees. No surprise bills. Choose the plan that fits your home.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
          {plans.map((plan, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className={`relative bg-white rounded-3xl p-8 border ${plan.featured ? 'border-bark-500 shadow-2xl shadow-bark-900/10 md:-translate-y-4' : 'border-forest-100 shadow-lg'}`}
            >
              
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-bark-700 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="text-center border-b border-forest-50 pb-6 mb-6">
                <h3 className="font-serif text-2xl font-bold text-forest-900 mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-forest-900 flex justify-center items-start gap-1">
                  <span className="text-xl mt-1">₹</span>{plan.price}<span className="text-base text-forest-500/70 font-normal self-end mb-1">/mo</span>
                </div>
                <p className="text-forest-600/70 text-sm mt-3">{plan.tagline}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className={`flex items-start gap-3 text-sm ${f.included ? 'text-forest-800' : 'text-forest-400'}`}>
                    <span className="shrink-0 mt-0.5">{f.included ? '✅' : '⬜'}</span>
                    <span className={!f.included ? 'line-through opacity-70' : ''}>{f.text}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/contact"
                className={`block w-full text-center py-3 rounded-full font-semibold transition-colors ${
                  plan.featured 
                    ? 'bg-bark-700 hover:bg-bark-600 text-white' 
                    : 'bg-forest-50 hover:bg-forest-100 text-forest-900 border border-forest-200'
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
