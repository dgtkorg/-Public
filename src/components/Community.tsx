import { Send, Twitter } from 'lucide-react'
import { useLanguage } from '../lib/LanguageContext'
import { translations } from '../lib/translations'

export default function Community() {
  const { language } = useLanguage()
  const t = translations[language]

  const socials = [
    {
      name: t.community.telegram,
      icon: Send,
      link: '#',
      color: 'bg-blue-500 hover:bg-blue-600',
      buttonText: t.community.joinTelegram
    },
    {
      name: t.community.twitter,
      icon: Twitter,
      link: '#',
      color: 'bg-sky-500 hover:bg-sky-600',
      buttonText: t.community.followTwitter
    }
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.community.title}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t.community.description}
          </p>
          <div className="w-20 h-1 bg-red-600 mx-auto mt-6"></div>
        </div>

        {/* Social Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {socials.map((social, index) => {
            const Icon = social.icon
            return (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-red-600/50 transition-all text-center"
              >
                <div className={`w-20 h-20 ${social.color} rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all transform hover:scale-110`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {social.name}
                </h3>
                <a
                  href={social.link}
                  className={`inline-block ${social.color} text-white px-8 py-3 rounded-lg transition-all transform hover:scale-105`}
                >
                  {social.buttonText}
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

