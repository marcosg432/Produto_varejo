'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, ShoppingBag, Filter } from 'lucide-react'
import Header from '@/site/components/Header'
import Footer from '@/site/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { getAllProducts, categories } from '@/site/data/categories'

export default function SiteProducts() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const allProducts = getAllProducts()

  return (
    <div className="min-h-screen bg-dark-bg">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-5xl font-bold mb-4">Nossos Produtos</h1>
            <p className="text-gray-400 text-lg">Descubra nossa seleção premium</p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8 flex items-center gap-4"
          >
            <button className="flex items-center gap-2 px-4 py-2 bg-dark-surface border border-dark-border rounded-lg hover:border-neon-primary transition-colors">
              <Filter className="w-5 h-5" />
              Filtros
            </button>
            <div className="flex items-center gap-2 flex-wrap">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-neon-primary text-white'
                    : 'bg-dark-surface text-gray-400 hover:text-white'
                }`}
              >
                Todos
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    selectedCategory === cat.slug
                      ? 'bg-neon-primary text-white'
                      : 'bg-dark-surface text-gray-400 hover:text-white'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(selectedCategory === 'all'
              ? allProducts
              : allProducts.filter((p) => p.category === selectedCategory)
            ).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group"
              >
                <Link href={`/site/produtos/${product.id}`}>
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
                  <button className="w-full py-3 bg-dark-card border border-dark-border rounded-lg hover:border-neon-primary hover:bg-dark-hover transition-all duration-300 flex items-center justify-center gap-2">
                    <ShoppingBag className="w-5 h-5" />
                    Ver Detalhes
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
