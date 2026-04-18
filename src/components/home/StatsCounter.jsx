import AnimatedCounter from '../shared/AnimatedCounter';
import { motion } from 'framer-motion';

export default function StatsCounter() {
  const stats = [
    { label: 'Years Experience', value: '15', suffix: '+' },
    { label: 'Happy Patients', value: '10000', suffix: '+' },
    { label: 'Services Offered', value: '20', suffix: '+' },
    { label: 'Google Rating', value: '4.9', suffix: '★' },
  ];

  return (
    <section className="bg-light-teal py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="text-4xl md:text-5xl font-heading text-deep-teal mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-muted-text font-bold uppercase tracking-widest text-xs">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
