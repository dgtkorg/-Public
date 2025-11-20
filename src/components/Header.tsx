import { Link } from 'react-router-dom'
import { Menu, X, Globe } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from '../lib/LanguageContext'
import { translations } from '../lib/translations'
import Logo from './Logo'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, toggleLanguage } = useLanguage()
  const t = translations[language]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              {t.nav.home}
            </Link>
            <Link to="/whitepaper" className="text-gray-300 hover:text-white transition-colors">
              {t.nav.whitepaper}
            </Link>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <Globe className="w-5 h-5" />
              <span>{language === 'zh' ? 'EN' : '中文'}</span>
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors">
              {t.nav.buyNow}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800 pt-4">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.home}
              </Link>
              <Link
                to="/whitepaper"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.whitepaper}
              </Link>
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-left"
              >
                <Globe className="w-5 h-5" />
                <span>{language === 'zh' ? 'EN' : '中文'}</span>
              </button>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors">
                {t.nav.buyNow}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
