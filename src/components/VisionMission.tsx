```tsx
import { Eye, Target, Check } from 'lucide-react'
import { useLanguage } from '../lib/LanguageContext'
import { translations } from '../lib/translations'

export default function VisionMission() {
  const { language } = useLanguage()
  const t = translations[language]

  const missions = [
    t.visionMission.mission1,
    t.visionMission.mission2,
    t.visionMission.mission3,
    t.visionMission.mission4
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Vision */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-red-600/50 transition-all">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center">
                <Eye className="w-6 h-6 text-red-500" />
              </div>
              <h2 className="text-3xl font-bold text-white">
                {t.visionMission.visionTitle}
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg">
              {t.visionMission.visionText}
            </p>
          </div>

          {/* Mission */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-red-600/50 transition-all">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-3xl font-bold text-white">
                {t.visionMission.missionTitle}
              </h2>
            </div>
            <ul className="space-y-4">
              {missions.map((mission, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-600/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-gray-300 leading-relaxed">{mission}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
```
