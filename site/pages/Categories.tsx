'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Header from '@/site/components/Header'
import Footer from '@/site/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { categories } from '@/site/data/categories'

export default function SiteCategories() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-4">Categorias</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Explore nossa seleção cuidadosa de produtos organizados por categorias premium
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h2 className="text-3xl font-bold mb-2">{category.name}</h2>
                  <p className="text-gray-300 mb-4">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">{category.products.length} produtos</span>
                    <Link
                      href={`/site/categorias/${category.slug}`}
                      className="flex items-center gap-2 text-neon-primary hover:gap-4 transition-all"
                    >
                      Explorar
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
