'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Star, ShoppingBag } from 'lucide-react'
import Header from '@/site/components/Header'
import Footer from '@/site/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { getAllProducts, categories } from '@/site/data/categories'

// Pegar os primeiros 4 produtos como destaque
const featuredProducts = getAllProducts().slice(0, 4)

export default function SiteHome() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80&fm=jpg"
              alt="Hero"
              fill
              className="object-cover opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/80 via-dark-bg/60 to-dark-bg" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent"
            >
              Experiência Premium
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Descubra produtos de altíssima qualidade, selecionados com cuidado para você
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Link
                href="/site/produtos"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-neon text-white rounded-lg font-medium hover:shadow-neon-lg transition-all duration-300"
              >
                Explorar Produtos
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Produtos em Destaque</h2>
              <p className="text-gray-400 text-lg">Seleção especial dos nossos melhores produtos</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group"
                >
                  <div className="relative h-80 bg-dark-surface rounded-2xl overflow-hidden mb-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg">{product.name}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-neon-warning text-neon-warning" />
                      <span className="text-sm text-gray-400">{product.rating}</span>
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-neon-primary mb-4">
                    R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </p>
                  <Link href={`/site/produtos/${product.id}`}>
                    <button className="w-full py-3 bg-dark-card border border-dark-border rounded-lg hover:border-neon-primary hover:bg-dark-hover transition-all duration-300 flex items-center justify-center gap-2">
                      <ShoppingBag className="w-5 h-5" />
                      Ver Detalhes
                    </button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20 px-6 bg-dark-surface">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Categorias</h2>
              <p className="text-gray-400 text-lg">Explore nossas categorias premium</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {categories.slice(0, 3).map((category, index) => (
                <Link key={category.slug} href={`/site/categorias/${category.slug}`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer"
                  >
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                      <p className="text-gray-400">{category.products.length} produtos</p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
