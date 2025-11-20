```tsx
import { BookOpen, Users, Shield, Globe } from 'lucide-react'
import { useLanguage } from '../lib/LanguageContext'
import { translations } from '../lib/translations'

export default function WhyChooseUs() {
  const { language } = useLanguage()
  const t = translations[language]

  const features = [
    {
      icon: BookOpen,
      title: t.whyChooseUs.feature1Title,
      description: t.whyChooseUs.feature1Desc,
      color: 'bg-red-600/10 text-red-500'
    },
    {
      icon: Users,
      title: t.whyChooseUs.feature2Title,
      description: t.whyChooseUs.feature2Desc,
      color: 'bg-blue-600/10 text-blue-500'
    },
    {
      icon: Shield,
      title: t.whyChooseUs.feature3Title,
      description: t.whyChooseUs.feature3Desc,
      color: 'bg-green-600/10 text-green-500'
    },
    {
      icon: Globe,
      title: t.whyChooseUs.feature4Title,
      description: t.whyChooseUs.feature4Desc,
      color: 'bg-purple-600/10 text-purple-500'
    }
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.whyChooseUs.title}
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto"></div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-red-600/50 transition-all group"
              >
                <div className={`w-16 h-16 rounded-lg ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
```
