import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrainingExperience from './components/TrainingExperience'
import Benefits from './components/Benefits'
import Disciplines from './components/Disciplines'

import SchedulePricing from './components/SchedulePricing'
import FAQ from './components/FAQ'
import Location from './components/Location'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import FloatingWpp from './components/FloatingWpp'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrainingExperience />
        <Benefits />
        <Disciplines />
        <SchedulePricing />
        <FAQ />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWpp />
    </>
  )
}
