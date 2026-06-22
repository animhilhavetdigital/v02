import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import SolutionSection from './components/SolutionSection'
import InteractiveChat from './components/InteractiveChat'
import MethodSection from './components/MethodSection'
import TestimonialsSection from './components/TestimonialsSection'
import FAQSection from './components/FAQSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <HeroSection />
      <SolutionSection />
      <InteractiveChat />
      <MethodSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  )
}

export default App
