'use client'

import { motion } from 'framer-motion'
import { Award, Users, Heart, Target } from 'lucide-react'
import Header from '@/site/components/Header'
import Footer from '@/site/components/Footer'
import Image from 'next/image'

const values = [
  {
    icon: Award,
    title: 'Qualidade Premium',
    description: 'Selecionamos apenas os melhores produtos do mercado',
  },
  {
    icon: Users,
    title: 'Atendimento Excepcional',
    description: 'Nossa equipe está sempre pronta para ajudar você',
  },
  {
    icon: Heart,
    title: 'Paixão pelo que Fazemos',
    description: 'Amamos o que fazemos e isso reflete em cada detalhe',
  },
  {
    icon: Target,
    title: 'Foco no Cliente',
    description: 'Sua satisfação é nossa prioridade número um',
  },
]

export default function SiteAbout() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Header />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mb-20">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&q=80&fm=jpg"
              alt="About"
              fill
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/80 via-dark-bg/60 to-dark-bg" />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Nossa História
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300"
            >
              Criando experiências premium desde o primeiro dia
            </motion.p>
          </div>
        </section>

        {/* Story Section */}
        <section className="max-w-4xl mx-auto px-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-invert max-w-none"
          >
            <h2 className="text-4xl font-bold mb-6">Nossa Missão</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Somos uma marca dedicada a oferecer produtos de altíssima qualidade, 
              selecionados com cuidado extremo para proporcionar uma experiência única 
              e memorável aos nossos clientes.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Acreditamos que cada produto deve ser mais do que apenas um item - 
              deve ser uma declaração de estilo, qualidade e sofisticação.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Nossa jornada começou com uma visão simples: criar um espaço onde 
              qualidade, design e excelência se encontram para criar algo verdadeiramente especial.
            </p>
          </motion.div>
        </section>

        {/* Values Section */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Nossos Valores</h2>
            <p className="text-gray-400 text-lg">O que nos move todos os dias</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-neon-primary/20 rounded-2xl mb-4">
                    <Icon className="w-8 h-8 text-neon-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </section>

        {/* Image Section */}
        <section className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-96 rounded-2xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&q=80&fm=jpg"
              alt="Team"
              fill
              className="object-cover"
            />
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
