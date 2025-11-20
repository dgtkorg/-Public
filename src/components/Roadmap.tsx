import { Rocket, TrendingUp, Globe, CheckCircle } from 'lucide-react'
import { useLanguage } from '../lib/LanguageContext'
import { translations } from '../lib/translations'

export default function Roadmap() {
  const { language } = useLanguage()
  const t = translations[language]

  const phases = [
    {
      icon: Rocket,
      title: t.roadmap.phase1.title,
      items: [
        t.roadmap.phase1.item1,
        t.roadmap.phase1.item2,
        t.roadmap.phase1.item3,
        t.roadmap.phase1.item4
      ],
      color: 'bg-red-600',
      borderColor: 'border-red-600'
    },
    {
      icon: TrendingUp,
      title: t.roadmap.phase2.title,
      items: [
        t.roadmap.phase2.item1,
        t.roadmap.phase2.item2,
        t.roadmap.phase2.item3,
        t.roadmap.phase2.item4
      ],
      color: 'bg-blue-600',
      borderColor: 'border-blue-600'
    },
    {
      icon: Globe,
      title: t.roadmap.phase3.title,
      items: [
        t.roadmap.phase3.item1,
        t.roadmap.phase3.item2,
        t.roadmap.phase3.item3,
        t.roadmap.phase3.item4
      ],
      color: 'bg-green-600',
      borderColor: 'border-green-600'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.roadmap.title}
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto"></div>
        </div>

        {/* Roadmap Phases */}
        <div className="grid md:grid-cols-3 gap-8">
          {phases.map((phase, index) => {
            const Icon = phase.icon
            return (
              <div
                key={index}
                className={`bg-gray-900 border-2 ${phase.borderColor} rounded-2xl p-8 hover:scale-105 transition-all`}
              >
                <div className={`w-16 h-16 ${phase.color} rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  {phase.title}
                </h3>
                <ul className="space-y-4">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

