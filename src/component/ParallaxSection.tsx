import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function ParallaxSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -150])

  return (
    <section ref={ref} className='h-screen relative overflow-hidden'>
      <motion.img
        src='https://images.unsplash.com/photo-1503264116251-35a269479413?q=80'
        style={{ y }}
        className='absolute inset-0 w-full h-full object-cover opacity-70'
      />

      <div className='relative z-10 flex h-full items-center justify-center bg-black/40'>
        <h2 className='text-white text-5xl font-bold'>Smooth Parallax</h2>
      </div>
    </section>
  )
}
