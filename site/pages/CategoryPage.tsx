'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Star, ShoppingBag, Filter, X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Header from '@/site/components/Header'
import Footer from '@/site/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { getCategoryBySlug, type Product } from '@/site/data/categories'

interface CategoryPageProps {
  slug: string
}

export default function CategoryPage({ slug }: CategoryPageProps) {
  const router = useRouter()
  const category = getCategoryBySlug(slug)
  const [showFilters, setShowFilters] = useState(false)
  const [selectedColor, setSelectedColor] = useState<string>('all')
  const [selectedSize, setSelectedSize] = useState<string>('all')
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000])
  const [sortBy, setSortBy] = useState<'name' | 'price-asc' | 'price-desc' | 'rating'>('name')

  if (!category) {
    return (
      <div className="min-h-screen bg-dark-bg">
        <Header />
        <main className="pt-24 pb-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Categoria não encontrada</h1>
          <button
            onClick={() => router.push('/site/categorias')}
            className="text-neon-primary hover:underline"
          >
            Voltar para categorias
          </button>
        </main>
        <Footer />
      </div>
    )
  }

  // Coletar cores e tamanhos únicos
  const availableColors = useMemo(() => {
    const colors = new Set<string>()
    category.products.forEach((product) => {
      product.colors?.forEach((color) => colors.add(color))
    })
    return Array.from(colors)
  }, [category])

  const availableSizes = useMemo(() => {
    const sizes = new Set<string>()
    category.products.forEach((product) => {
      product.sizes?.forEach((size) => sizes.add(size))
    })
    return Array.from(sizes)
  }, [category])

  // Filtrar e ordenar produtos
  const filteredProducts = useMemo(() => {
    let filtered = [...category.products]

    // Filtro por cor
    if (selectedColor !== 'all') {
      filtered = filtered.filter((product) =>
        product.colors?.includes(selectedColor)
      )
    }

    // Filtro por tamanho
    if (selectedSize !== 'all') {
      filtered = filtered.filter((product) =>
        product.sizes?.includes(selectedSize)
      )
    }

    // Filtro por preço
    filtered = filtered.filter(
      (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
    )

    // Ordenação
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price
        case 'price-desc':
          return b.price - a.price
        case 'rating':
          return b.rating - a.rating
        default:
          return a.name.localeCompare(b.name)
      }
    })

    return filtered
  }, [category.products, selectedColor, selectedSize, priceRange, sortBy])

  return (
    <div className="min-h-screen bg-dark-bg">
      <Header />

      <main>
        {/* Hero Header */}
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-cover opacity-40"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/90 via-dark-bg/70 to-dark-bg" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              {category.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              {category.description}
            </motion.p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar Filters */}
              <aside className="lg:w-64 flex-shrink-0">
                <div className="lg:sticky lg:top-24">
                  <div className="bg-dark-surface rounded-2xl p-6 border border-dark-border">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-xl font-bold">Filtros</h2>
                      <button
                        onClick={() => setShowFilters(!showFilters)}
                        className="lg:hidden"
                      >
                        {showFilters ? (
                          <X className="w-5 h-5" />
                        ) : (
                          <Filter className="w-5 h-5" />
                        )}
                      </button>
                    </div>

                    <div
                      className={`space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}
                    >
                      {/* Ordenação */}
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Ordenar por
                        </label>
                        <select
                          value={sortBy}
                          onChange={(e) =>
                            setSortBy(
                              e.target.value as
                                | 'name'
                                | 'price-asc'
                                | 'price-desc'
                                | 'rating'
                            )
                          }
                          className="w-full px-4 py-2 bg-dark-bg border border-dark-border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-neon-primary/50"
                        >
                          <option value="name">Nome</option>
                          <option value="price-asc">Preço: Menor para Maior</option>
                          <option value="price-desc">Preço: Maior para Menor</option>
                          <option value="rating">Melhor Avaliação</option>
                        </select>
                      </div>

                      {/* Preço */}
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Preço: R$ {priceRange[0]} - R$ {priceRange[1]}
                        </label>
                        <div className="flex gap-2">
                          <input
                            type="range"
                            min="0"
                            max="2000"
                            step="50"
                            value={priceRange[0]}
                            onChange={(e) =>
                              setPriceRange([parseInt(e.target.value), priceRange[1]])
                            }
                            className="flex-1"
                          />
                          <input
                            type="range"
                            min="0"
                            max="2000"
                            step="50"
                            value={priceRange[1]}
                            onChange={(e) =>
                              setPriceRange([priceRange[0], parseInt(e.target.value)])
                            }
                            className="flex-1"
                          />
                        </div>
                      </div>

                      {/* Cores */}
                      {availableColors.length > 0 && (
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Cor
                          </label>
                          <div className="space-y-2">
                            <button
                              onClick={() => setSelectedColor('all')}
                              className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                                selectedColor === 'all'
                                  ? 'bg-neon-primary/20 text-neon-primary'
                                  : 'bg-dark-bg text-gray-400 hover:text-white'
                              }`}
                            >
                              Todas
                            </button>
                            {availableColors.map((color) => (
                              <button
                                key={color}
                                onClick={() => setSelectedColor(color)}
                                className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                                  selectedColor === color
                                    ? 'bg-neon-primary/20 text-neon-primary'
                                    : 'bg-dark-bg text-gray-400 hover:text-white'
                                }`}
                              >
                                {color}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Tamanhos */}
                      {availableSizes.length > 0 && (
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Tamanho
                          </label>
                          <div className="flex flex-wrap gap-2">
                            <button
                              onClick={() => setSelectedSize('all')}
                              className={`px-3 py-2 rounded-lg transition-colors ${
                                selectedSize === 'all'
                                  ? 'bg-neon-primary/20 text-neon-primary border border-neon-primary'
                                  : 'bg-dark-bg border border-dark-border text-gray-400 hover:text-white'
                              }`}
                            >
                              Todos
                            </button>
                            {availableSizes.map((size) => (
                              <button
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                className={`px-3 py-2 rounded-lg transition-colors ${
                                  selectedSize === size
                                    ? 'bg-neon-primary/20 text-neon-primary border border-neon-primary'
                                    : 'bg-dark-bg border border-dark-border text-gray-400 hover:text-white'
                                }`}
                              >
                                {size}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </aside>

              {/* Products Grid */}
              <div className="flex-1">
                <div className="mb-6 flex items-center justify-between">
                  <p className="text-gray-400">
                    {filteredProducts.length} produto{filteredProducts.length !== 1 ? 's' : ''} encontrado{filteredProducts.length !== 1 ? 's' : ''}
                  </p>
                </div>

                {filteredProducts.length === 0 ? (
                  <div className="text-center py-20">
                    <p className="text-gray-400 text-lg mb-4">
                      Nenhum produto encontrado com os filtros selecionados
                    </p>
                    <button
                      onClick={() => {
                        setSelectedColor('all')
                        setSelectedSize('all')
                        setPriceRange([0, 2000])
                      }}
                      className="text-neon-primary hover:underline"
                    >
                      Limpar filtros
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product, index) => (
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
                              <span className="text-sm text-gray-400">
                                {product.rating}
                              </span>
                            </div>
                          </div>
                          <p className="text-2xl font-bold text-neon-primary mb-4">
                            R${' '}
                            {product.price.toLocaleString('pt-BR', {
                              minimumFractionDigits: 2,
                            })}
                          </p>
                          <button className="w-full py-3 bg-dark-card border border-dark-border rounded-lg hover:border-neon-primary hover:bg-dark-hover transition-all duration-300 flex items-center justify-center gap-2">
                            <ShoppingBag className="w-5 h-5" />
                            Ver Detalhes
                          </button>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
