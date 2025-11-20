import { Link } from 'react-router-dom'
import { ArrowLeft, Calendar } from 'lucide-react'
import { useLanguage } from '../lib/LanguageContext'
import { translations } from '../lib/translations'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Whitepaper() {
  const { language } = useLanguage()
  const t = translations[language]

  const sections = [
    { id: 'executive', title: t.whitepaper.toc.executive, content: t.whitepaper.sections.executive },
    { id: 'introduction', title: t.whitepaper.toc.introduction, content: t.whitepaper.sections.introduction },
    { id: 'enemyClause', title: t.whitepaper.toc.enemyClause, content: t.whitepaper.sections.enemyClause },
    { id: 'vision', title: t.whitepaper.toc.vision, content: t.whitepaper.sections.vision },
    { id: 'tokenomics', title: t.whitepaper.toc.tokenomics, content: t.whitepaper.sections.tokenomics },
    { id: 'technology', title: t.whitepaper.toc.technology, content: t.whitepaper.sections.technology },
    { id: 'roadmap', title: t.whitepaper.toc.roadmap, content: t.whitepaper.sections.roadmap },
    { id: 'team', title: t.whitepaper.toc.team, content: t.whitepaper.sections.team },
    { id: 'legal', title: t.whitepaper.toc.legal, content: t.whitepaper.sections.legal },
    { id: 'conclusion', title: t.whitepaper.toc.conclusion, content: t.whitepaper.sections.conclusion }
  ]

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            {t.whitepaper.backToHome}
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {t.whitepaper.title}
          </h1>
          
          <div className="flex items-center gap-2 text-gray-400">
            <Calendar className="w-5 h-5" />
            <span>{t.whitepaper.lastUpdated}: 2024-11-20</span>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 bg-black border-y border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6">{t.whitepaper.tableOfContents}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {sections.map((section, index) => (
                <a
                  key={index}
                  href={`#${section.id}`}
                  className="flex items-center gap-3 p-4 bg-gray-900 border border-gray-800 rounded-lg hover:border-red-600/50 transition-all"
                >
                  <span className="text-red-500 font-bold">{index + 1}.</span>
                  <span className="text-gray-300 hover:text-white">{section.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Executive Summary */}
            <div id="executive" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-white mb-6">{t.whitepaper.sections.executive.title}</h2>
              <p className="text-gray-300 leading-relaxed">{t.whitepaper.sections.executive.content}</p>
            </div>

            {/* Introduction */}
            <div id="introduction" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-white mb-6">{t.whitepaper.sections.introduction.title}</h2>
              <h3 className="text-xl font-bold text-white mb-3">{t.whitepaper.sections.introduction.subtitle21}</h3>
              <p className="text-gray-300 leading-relaxed mb-6">{t.whitepaper.sections.introduction.content21}</p>
              <h3 className="text-xl font-bold text-white mb-3">{t.whitepaper.sections.introduction.subtitle22}</h3>
              <p className="text-gray-300 leading-relaxed">{t.whitepaper.sections.introduction.content22}</p>
            </div>

            {/* Enemy Clause */}
            <div id="enemyClause" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-white mb-6">{t.whitepaper.sections.enemyClause.title}</h2>
              <h3 className="text-xl font-bold text-white mb-3">{t.whitepaper.sections.enemyClause.subtitle31}</h3>
              <p className="text-gray-300 leading-relaxed mb-6">{t.whitepaper.sections.enemyClause.content31}</p>
              <h3 className="text-xl font-bold text-white mb-3">{t.whitepaper.sections.enemyClause.subtitle32}</h3>
              <p className="text-gray-300 leading-relaxed mb-6">{t.whitepaper.sections.enemyClause.content32}</p>
              <h3 className="text-xl font-bold text-white mb-3">{t.whitepaper.sections.enemyClause.subtitle33}</h3>
              <p className="text-gray-300 leading-relaxed">{t.whitepaper.sections.enemyClause.content33}</p>
            </div>

            {/* Vision & Mission */}
            <div id="vision" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-white mb-6">{t.whitepaper.sections.vision.title}</h2>
              <h3 className="text-xl font-bold text-white mb-3">{t.whitepaper.sections.vision.subtitle41}</h3>
              <p className="text-gray-300 leading-relaxed mb-6">{t.whitepaper.sections.vision.content41}</p>
              <h3 className="text-xl font-bold text-white mb-3">{t.whitepaper.sections.vision.subtitle42}</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>{t.whitepaper.sections.vision.mission1}</li>
                <li>{t.whitepaper.sections.vision.mission2}</li>
                <li>{t.whitepaper.sections.vision.mission3}</li>
                <li>{t.whitepaper.sections.vision.mission4}</li>
              </ul>
            </div>

            {/* Tokenomics */}
            <div id="tokenomics" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-white mb-6">{t.whitepaper.sections.tokenomics.title}</h2>
              <h3 className="text-xl font-bold text-white mb-3">{t.whitepaper.sections.tokenomics.subtitle51}</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
                <li>{t.whitepaper.sections.tokenomics.name}</li>
                <li>{t.whitepaper.sections.tokenomics.symbol}</li>
                <li>{t.whitepaper.sections.tokenomics.network}</li>
                <li>{t.whitepaper.sections.tokenomics.supply}</li>
              </ul>
              <h3 className="text-xl font-bold text-white mb-3">{t.whitepaper.sections.tokenomics.subtitle52}</h3>
              <div className="space-y-4 mb-6">
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
                  <h4 className="text-white font-bold mb-2">{t.whitepaper.sections.tokenomics.liquidity}</h4>
                  <p className="text-gray-400">{t.whitepaper.sections.tokenomics.liquidityDesc}</p>
                </div>
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
                  <h4 className="text-white font-bold mb-2">{t.whitepaper.sections.tokenomics.community}</h4>
                  <p className="text-gray-400">{t.whitepaper.sections.tokenomics.communityDesc}</p>
                </div>
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
                  <h4 className="text-white font-bold mb-2">{t.whitepaper.sections.tokenomics.marketing}</h4>
                  <p className="text-gray-400">{t.whitepaper.sections.tokenomics.marketingDesc}</p>
                </div>
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
                  <h4 className="text-white font-bold mb-2">{t.whitepaper.sections.tokenomics.development}</h4>
                  <p className="text-gray-400">{t.whitepaper.sections.tokenomics.developmentDesc}</p>
                </div>
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
                  <h4 className="text-white font-bold mb-2">{t.whitepaper.sections.tokenomics.team}</h4>
                  <p className="text-gray-400">{t.whitepaper.sections.tokenomics.teamDesc}</p>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{t.whitepaper.sections.tokenomics.subtitle53}</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>{t.whitepaper.sections.tokenomics.utility1}</li>
                <li>{t.whitepaper.sections.tokenomics.utility2}</li>
                <li>{t.whitepaper.sections.tokenomics.utility3}</li>
                <li>{t.whitepaper.sections.tokenomics.utility4}</li>
                <li>{t.whitepaper.sections.tokenomics.utility5}</li>
              </ul>
            </div>

            {/* Technology */}
            <div id="technology" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-white mb-6">{t.whitepaper.sections.technology.title}</h2>
              <h3 className="text-xl font-bold text-white mb-3">{t.whitepaper.sections.technology.subtitle61}</h3>
              <p className="text-gray-300 leading-relaxed mb-3">{t.whitepaper.sections.technology.content61}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
                <li>{t.whitepaper.sections.technology.reason1}</li>
                <li>{t.whitepaper.sections.technology.reason2}</li>
                <li>{t.whitepaper.sections.technology.reason3}</li>
                <li>{t.whitepaper.sections.technology.reason4}</li>
              </ul>
              <h3 className="text-xl font-bold text-white mb-3">{t.whitepaper.sections.technology.subtitle62}</h3>
              <p className="text-gray-300 leading-relaxed mb-3">{t.whitepaper.sections.technology.content62}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
                <li>{t.whitepaper.sections.technology.feature1}</li>
                <li>{t.whitepaper.sections.technology.feature2}</li>
                <li>{t.whitepaper.sections.technology.feature3}</li>
                <li>{t.whitepaper.sections.technology.feature4}</li>
              </ul>
              <h3 className="text-xl font-bold text-white mb-3">{t.whitepaper.sections.technology.subtitle63}</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>{t.whitepaper.sections.technology.security1}</li>
                <li>{t.whitepaper.sections.technology.security2}</li>
                <li>{t.whitepaper.sections.technology.security3}</li>
                <li>{t.whitepaper.sections.technology.security4}</li>
              </ul>
            </div>

            {/* Roadmap */}
            <div id="roadmap" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-white mb-6">{t.whitepaper.sections.roadmap.title}</h2>
              <div className="space-y-6">
                <div className="bg-gray-900 border border-red-600 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-4">{t.whitepaper.sections.roadmap.phase1.title}</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>{t.whitepaper.sections.roadmap.phase1.item1}</li>
                    <li>{t.whitepaper.sections.roadmap.phase1.item2}</li>
                    <li>{t.whitepaper.sections.roadmap.phase1.item3}</li>
                    <li>{t.whitepaper.sections.roadmap.phase1.item4}</li>
                    <li>{t.whitepaper.sections.roadmap.phase1.item5}</li>
                  </ul>
                </div>
                <div className="bg-gray-900 border border-blue-600 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-4">{t.whitepaper.sections.roadmap.phase2.title}</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>{t.whitepaper.sections.roadmap.phase2.item1}</li>
                    <li>{t.whitepaper.sections.roadmap.phase2.item2}</li>
                    <li>{t.whitepaper.sections.roadmap.phase2.item3}</li>
                    <li>{t.whitepaper.sections.roadmap.phase2.item4}</li>
                    <li>{t.whitepaper.sections.roadmap.phase2.item5}</li>
                  </ul>
                </div>
                <div className="bg-gray-900 border border-green-600 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-4">{t.whitepaper.sections.roadmap.phase3.title}</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>{t.whitepaper.sections.roadmap.phase3.item1}</li>
                    <li>{t.whitepaper.sections.roadmap.phase3.item2}</li>
                    <li>{t.whitepaper.sections.roadmap.phase3.item3}</li>
                    <li>{t.whitepaper.sections.roadmap.phase3.item4}</li>
                    <li>{t.whitepaper.sections.roadmap.phase3.item5}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Team */}
            <div id="team" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-white mb-6">{t.whitepaper.sections.team.title}</h2>
              <p className="text-gray-300 leading-relaxed mb-6">{t.whitepaper.sections.team.content}</p>
              <h3 className="text-xl font-bold text-white mb-3">{t.whitepaper.sections.team.subtitle81}</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
                <li>{t.whitepaper.sections.team.role1}</li>
                <li>{t.whitepaper.sections.team.role2}</li>
                <li>{t.whitepaper.sections.team.role3}</li>
                <li>{t.whitepaper.sections.team.role4}</li>
                <li>{t.whitepaper.sections.team.role5}</li>
              </ul>
              <h3 className="text-xl font-bold text-white mb-3">{t.whitepaper.sections.team.subtitle82}</h3>
              <p className="text-gray-300 leading-relaxed">{t.whitepaper.sections.team.content82}</p>
            </div>

            {/* Legal */}
            <div id="legal" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-white mb-6">{t.whitepaper.sections.legal.title}</h2>
              <h3 className="text-xl font-bold text-white mb-3">{t.whitepaper.sections.legal.subtitle91}</h3>
              <p className="text-gray-300 leading-relaxed mb-6">{t.whitepaper.sections.legal.content91}</p>
              <h3 className="text-xl font-bold text-white mb-3">{t.whitepaper.sections.legal.subtitle92}</h3>
              <p className="text-gray-300 leading-relaxed mb-6">{t.whitepaper.sections.legal.content92}</p>
              <h3 className="text-xl font-bold text-white mb-3">{t.whitepaper.sections.legal.subtitle93}</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
                <li>{t.whitepaper.sections.legal.risk1}</li>
                <li>{t.whitepaper.sections.legal.risk2}</li>
                <li>{t.whitepaper.sections.legal.risk3}</li>
                <li>{t.whitepaper.sections.legal.risk4}</li>
              </ul>
              <h3 className="text-xl font-bold text-white mb-3">{t.whitepaper.sections.legal.subtitle94}</h3>
              <p className="text-gray-300 leading-relaxed">{t.whitepaper.sections.legal.content94}</p>
            </div>

            {/* Conclusion */}
            <div id="conclusion" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-white mb-6">{t.whitepaper.sections.conclusion.title}</h2>
              <p className="text-gray-300 leading-relaxed mb-6">{t.whitepaper.sections.conclusion.content}</p>
              <p className="text-gray-300 leading-relaxed mb-6">{t.whitepaper.sections.conclusion.content2}</p>
              <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-8 text-center">
                <p className="text-white text-xl font-bold">{t.whitepaper.sections.conclusion.callToAction}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
