```tsx
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'
import { useLanguage } from '../lib/LanguageContext'
import { translations } from '../lib/translations'

export default function TokenBreakdown() {
  const { language } = useLanguage()
  const t = translations[language]

  const data = [
    { name: t.tokenomics.liquidity, value: 40, color: '#DC2626' },
    { name: t.tokenomics.community, value: 30, color: '#3B82F6' },
    { name: t.tokenomics.marketing, value: 15, color: '#10B981' },
    { name: t.tokenomics.development, value: 10, color: '#F59E0B' },
    { name: t.tokenomics.team, value: 5, color: '#8B5CF6' }
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.tokenomics.title}
          </h2>
          <p className="text-gray-400 text-lg">{t.tokenomics.total}</p>
          <div className="w-20 h-1 bg-red-600 mx-auto mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Pie Chart */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              {t.tokenomics.distribution}
            </h3>
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Breakdown List */}
          <div className="space-y-4">
            {data.map((item, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-red-600/50 transition-all"
              >
                <div className="flex items-center gap-4 mb-2">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-bold text-lg">{item.name}</span>
                      <span className="text-gray-400 font-bold">{item.value}%</span>
                    </div>
                  </div>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2 mt-3">
                  <div
                    className="h-2 rounded-full transition-all"
                    style={{
                      width: `${item.value}%`,
                      backgroundColor: item.color
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
```
