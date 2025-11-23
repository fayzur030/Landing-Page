import { useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { motion } from 'framer-motion'
const cards = [
  { title: 'Reliable', desc: 'Battle-tested motion components.' },
  { title: 'Flexible', desc: 'Fully customizable animations.' },
  { title: 'Innovative', desc: 'Modern interactions for web.' },
]
const StickyCards = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85])
  return (
    <section ref={ref} className='relative h-[250vh] bg-black text-white'>
      <div className='sticky top-0 h-screen flex items-center justify-center'>
        <motion.div style={{ scale }} className='space-y-6 w-full max-w-md'>
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.9 }}
              className='bg-gray-900 rounded-xl shadow-lg border border-gray-800 p-6'
            >
              <h3 className='text-2xl font-bold mb-3'>{card.title}</h3>
              <p className='text-gray-400'>{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default StickyCards
