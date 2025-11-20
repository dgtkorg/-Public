import { Shield, Users, TrendingUp, Globe } from 'lucide-react'
import { useLanguage } from '../lib/LanguageContext'

export default function Features() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Shield,
      title: { zh: '历史正义', en: 'Historical Justice' },
      description: { zh: '基于联合国宪章，推广国际法和历史真相', en: 'Based on UN Charter, promoting international law and historical truth' }
    },
    {
      icon: Users,
      title: { zh: '社区驱动', en: 'Community Driven' },
      description: { zh: '由全球社区共同治理和发展', en: 'Governed and developed by global community' }
    },
    {
      icon: TrendingUp,
      title: { zh: '透明公平', en: 'Transparent & Fair' },
      description: { zh: '完全透明的代币分配和治理机制', en: 'Fully transparent token distribution and governance' }
    },
    {
      icon: Globe,
      title: { zh: '全球影响', en: 'Global Impact' },
      description: { zh: '连接世界各地关注和平与正义的人们', en: 'Connecting people worldwide who care about peace and justice' }
    }
  ]

  return (
    <section className="py-20 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-16 text-red-500">
          {t({ zh: '核心特性', en: 'Core Features' })}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-gray-900 rounded-lg hover:bg-gray-750 transition-colors">
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-red-500" />
              <h3 className="mb-3 text-white">{t(feature.title)}</h3>
              <p className="text-gray-400">{t(feature.description)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
