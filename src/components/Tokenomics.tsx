import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'
import { useLanguage } from '../lib/LanguageContext'

export default function Tokenomics() {
  const { t } = useLanguage()

  const data = [
    { name: t({ zh: '社区奖励', en: 'Community Rewards' }), value: 40, color: '#DC2626' },
    { name: t({ zh: '流动性池', en: 'Liquidity Pool' }), value: 30, color: '#EF4444' },
    { name: t({ zh: '团队与开发', en: 'Team & Development' }), value: 15, color: '#F87171' },
    { name: t({ zh: '市场营销', en: 'Marketing' }), value: 10, color: '#FCA5A5' },
    { name: t({ zh: '储备金', en: 'Reserve' }), value: 5, color: '#FECACA' }
  ]

  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-16 text-red-500">
          {t({ zh: '代币经济', en: 'Tokenomics' })}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-red-500 mb-2">{t({ zh: '总供应量', en: 'Total Supply' })}</h3>
              <p className="text-white">1,000,000,000 $EC</p>
            </div>
            <div>
              <h3 className="text-red-500 mb-2">{t({ zh: '区块链', en: 'Blockchain' })}</h3>
              <p className="text-white">BSC (Binance Smart Chain)</p>
            </div>
            <div>
              <h3 className="text-red-500 mb-2">{t({ zh: '代币类型', en: 'Token Type' })}</h3>
              <p className="text-white">BEP-20</p>
            </div>
            <div>
              <h3 className="text-red-500 mb-2">{t({ zh: '合约地址', en: 'Contract Address' })}</h3>
              <p className="text-white text-sm break-all">0x...</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
