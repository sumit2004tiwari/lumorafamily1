import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const defaultServices = [
  { _id: '1', icon: '🔧', name: 'Home Repairs & Maintenance', description: 'Coordinate all home upkeep — plumbers, electricians, painters, pest control, and more.', tags: ['Plumbing', 'Electrical', 'Pest Control', 'Painting'] },
  { _id: '2', icon: '🧹', name: 'Cleaning & Sanitisation', description: 'Professional deep cleaning, sofa cleaning, bathroom scrubbing, move-in/out cleaning.', tags: ['Deep Clean', 'Sofa Wash', 'Move-in', 'Bathroom'] },
  { _id: '3', icon: '❄️', name: 'AC & Appliance Service', description: 'Annual AC servicing, gas refilling, appliance installation, and quick repairs.', tags: ['AC Service', 'Gas Refill', 'Installation', 'Repair'] },
  { _id: '4', icon: '🪵', name: 'Carpentry & Interiors', description: 'Furniture assembly, custom shelving, door repairs, modular kitchen fixes — crafted with precision.', tags: ['Furniture', 'Shelving', 'Doors', 'Modular'] },
  { _id: '5', icon: '🐛', name: 'Pest Control', description: 'Comprehensive pest management — cockroaches, termites, mosquitoes, rodents, and bed bugs.', tags: ['Cockroach', 'Termite', 'Rodents', 'Bed Bugs'] },
  { _id: '6', icon: '✨', name: 'Personal Errands & More', description: 'Bill payments, grocery management, doctor appointments, and a hundred other things.', tags: ['Bills', 'Groceries', 'Medical', 'Errands'] },
];

const iconBg = ['bg-forest-600/15', 'bg-bark-700/15', 'bg-forest-700/15', 'bg-bark-600/15', 'bg-forest-600/15', 'bg-bark-700/15'];

export default function Services() {
  const [services, setServices] = useState(defaultServices);

  useEffect(() => {
    axios.get('http://localhost:5000/api/services')
      .then(res => { if (res.data?.data?.length) setServices(res.data.data); })
      .catch(() => {}); // fallback to defaults
  }, []);

  return (
    <section id="services" className="py-24 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 space-y-4"
        >
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-px bg-bark-600" />
            <span className="text-bark-600 text-xs font-semibold tracking-widest uppercase">What We Handle</span>
            <div className="w-8 h-px bg-bark-600" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-forest-900">
            Every corner of your home,<br />
            <em className="text-bark-600 not-italic italic">taken care of.</em>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              id={`service-card-${i + 1}`}
              className="group bg-white rounded-2xl p-7 border border-forest-100 hover:border-forest-300 hover:shadow-xl hover:shadow-forest-900/8 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-2xl ${iconBg[i % iconBg.length]} flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="font-serif text-xl font-semibold text-forest-900 mb-2">{service.name}</h3>
              <p className="text-forest-700/65 text-sm leading-relaxed mb-4">{service.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {service.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-0.5 rounded-full bg-forest-50 border border-forest-200 text-forest-600 text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
