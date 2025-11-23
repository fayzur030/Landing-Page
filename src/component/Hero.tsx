import { useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { motion } from 'framer-motion'
const Hero = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, -200])
  return (
    <section
      ref={ref}
      className='h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black'
    >
      <motion.div
        style={y}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className='text-center text-white px-6'
      >
        <h1 className='text-6xl font-bold mb-4'>
          Build Better <span className='text-yellow-300'>Experiences</span>
        </h1>
        <p className='text-gray-300 text-xl max-w-xl mx-auto'>
          Modern animations & smooth{' '}
          <span className='text-indigo-400'>
            interactions for next-gen web apps.
          </span>
        </p>
      </motion.div>
    </section>
  )
}

export default Hero
