import Header from '../components/Header'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Features from '../components/Features'
import VisionMission from '../components/VisionMission'
import Tokenomics from '../components/Tokenomics'
import Community from '../components/Community'
import Roadmap from '../components/Roadmap'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Hero />
      <Stats />
      <Features />
      <VisionMission />
      <Tokenomics />
      <Community />
      <Roadmap />
      <Footer />
    </div>
  )
}
