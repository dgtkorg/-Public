import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './lib/LanguageContext'
import Home from './pages/Home'
import Whitepaper from './pages/Whitepaper'

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/whitepaper" element={<Whitepaper />} />
        </Routes>
      </Router>
    </LanguageProvider>
  )
}

export default App

