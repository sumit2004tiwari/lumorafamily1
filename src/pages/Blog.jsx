import { motion } from 'framer-motion';

const posts = [
  {
    id: 1,
    title: 'The Hidden Cost of Managing Your Own Home',
    excerpt: 'Why spending your weekends coordinating with plumbers and electricians is costing you more than just time.',
    date: 'Oct 12, 2026',
    category: 'Lifestyle',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    title: '5 Signs Your AC Needs Servicing Before Summer',
    excerpt: 'Don\'t wait for a breakdown. Here are the subtle signs that your air conditioner is struggling.',
    date: 'Oct 05, 2026',
    category: 'Home Maintenance',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    title: 'How a Dedicated Home Manager Changes Everything',
    excerpt: 'We explore the psychological shift that happens when you finally delegate your household tasks to a professional.',
    date: 'Sep 28, 2026',
    category: 'Lumora Life',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800'
  }
];

export default function Blog() {
  return (
    <main className="pt-24 pb-16 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-px bg-bark-600" />
            <span className="text-bark-600 text-xs font-semibold tracking-widest uppercase">The Journal</span>
            <div className="w-8 h-px bg-bark-600" />
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-forest-900 leading-tight">
            Insights on <em className="text-bark-600 not-italic italic">better living.</em>
          </h1>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-forest-900/5 border border-forest-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
            >
              <div className="h-48 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-bark-600 uppercase tracking-wider">{post.category}</span>
                  <span className="text-xs text-forest-400">{post.readTime}</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-forest-900 mb-2 group-hover:text-forest-600 transition-colors">{post.title}</h3>
                <p className="text-sm text-forest-700/70 mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center gap-2 text-xs font-medium text-forest-500">
                  <span className="w-4 h-px bg-forest-300" />
                  {post.date}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}
