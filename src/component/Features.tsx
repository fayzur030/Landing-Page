import { motion } from 'framer-motion'

const Features = () => {
  const features = [
    { title: 'Fast', desc: 'Optimized animation performance.' },
    { title: 'Smooth', desc: 'Modern UI transitions.' },
    { title: 'Interactive', desc: 'User-friendly motion effects.' },
  ]
  return (
    <section className='bg-black text-white'>
      <div className='max-w-5xl mx-auto px-6'>
        <h2 className='text-4xl font-bold mb-10'>Features</h2>
        <div className='grid md:grid-cols-3 gap-8'>
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.8 }}
              className='p-6 bg-gray-900 rounded-xl shadow-lg border border-gray-800'
            >
              <h3 className='text-2xl font-semibold mb-2'>{f.title}</h3>
              <p className='text-gray-400'>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
