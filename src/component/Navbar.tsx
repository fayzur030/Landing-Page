import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
const Navbar = () => {
  const [open, setOpen] = useState()
  const links = ['Home', 'Features', 'Pricing', 'Contact']
  return (
    <nav className='fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-gradient-to-b from-gray-900 to-black border-b border-gray-700'>
      <div className='max-w-7xl mx-auto p-6 py-4 flex items-center justify-between'>
        {/* logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className='text-2xl font-bold text-white'
        >
          MotionX
        </motion.div>
        {/* Desktop Menu */}
        <div className='hidden md:flex items-center gap-8 text-white'>
          {links.map((link, idx) => (
            <motion.a
              key={idx}
              href='#'
              whileHover={{ scale: 1.1 }}
              className='relative text-lg'
            >
              {link}
              {/* Underline Animation */}
              <motion.span
                className='absolute left-0 bottom-0 h-[2px]  w-0'
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>
        {/* Mobile Menu Button */}
        <button
          className='md:hidden text-gray-800'
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className='md:hidden bg-black text-white backdrop-blur-xl p-4 space-y-4'
          >
            {links.map((link, idx) => (
              <a
                key={idx}
                href='#'
                className='block text-lg border-b border-white/10 pb-2'
              >
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
