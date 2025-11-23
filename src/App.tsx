import './App.css'
import Features from './component/Features'
import Footer from './component/Footer'
import Hero from './component/Hero'
import Navbar from './component/Navbar'
import ParallaxSection from './component/ParallaxSection'
import StickyCards from './component/StickyCards'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <StickyCards />
      <ParallaxSection />
      <Footer />
    </>
  )
}

export default App
