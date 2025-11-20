```tsx
import { Link } from 'react-router-dom'
import { ArrowRight, FileText } from 'lucide-react'
import { useLanguage } from '../lib/LanguageContext'
import { translations } from '../lib/translations'

export default function Hero() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-gray-900 via-black to-black">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-red-100 to-red-200 bg-clip-text text-transparent">
            {t.hero.title}
          </h1>

          {/* Subtitle */}
          <p className="text-2xl md:text-3xl text-gray-300 mb-4">
            {t.hero.subtitle}
          </p>

          {/* Description */}
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            {t.hero.description}
          </p>

          {/* Network Badge */}
          <div className="inline-block bg-red-600/10 border border-red-600/30 rounded-full px-6 py-2 mb-12">
            <span className="text-red-400">{t.hero.network}</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105">
              {t.hero.buyToken}
              <ArrowRight className="w-5 h-5" />
            </button>
            <Link
              to="/whitepaper"
              className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105"
            >
              <FileText className="w-5 h-5" />
              {t.hero.readWhitepaper}
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-gray-600 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}
```
