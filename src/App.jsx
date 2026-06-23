import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import SolutionSection from './components/SolutionSection'
import InteractiveChat from './components/InteractiveChat'
import MethodSection from './components/MethodSection'
import TestimonialsSection from './components/TestimonialsSection'
import FAQSection from './components/FAQSection'
import Footer from './components/Footer'
import CTASection from './components/CTASection'
import OffersPage from './pages/OffersPage'
import PaymentPage from './pages/PaymentPage'

const Home = () => {
  return (
    <div className="app-wrapper">
      <Navbar />
      <HeroSection />
      <SolutionSection />
      <InteractiveChat />
      <MethodSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offres" element={<OffersPage />} />
        <Route path="/paiement" element={<PaymentPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
