import { TrendingUp, Users, DollarSign, Flame } from 'lucide-react'
import { useLanguage } from '../lib/LanguageContext'
import { translations } from '../lib/translations'

export default function Stats() {
  const { language } = useLanguage()
  const t = translations[language]

  const stats = [
    {
      icon: DollarSign,
      label: t.stats.totalSupply,
      value: '1B',
      color: 'text-red-500'
    },
    {
      icon: Users,
      label: t.stats.holders,
      value: '10K+',
      color: 'text-blue-500'
    },
    {
      icon: TrendingUp,
      label: t.stats.marketCap,
      value: '$5M',
      color: 'text-green-500'
    },
    {
      icon: Flame,
      label: t.stats.burned,
      value: '50M',
      color: 'text-orange-500'
    }
  ]

  return (
    <section className="py-20 bg-black/50 border-y border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-red-600/50 transition-all"
              >
                <Icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

