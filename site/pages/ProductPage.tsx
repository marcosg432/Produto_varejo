'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Star, ShoppingBag, ArrowLeft, Check } from 'lucide-react'
import Header from '@/site/components/Header'
import Footer from '@/site/components/Footer'
import Image from 'next/image'
import { getProductById } from '@/site/data/categories'
import Button from '@/shared/ui/Button'

interface ProductPageProps {
  productId: number
}

export default function ProductPage({ productId }: ProductPageProps) {
  const router = useRouter()
  const product = getProductById(productId)
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState<string | null>(null)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [addedToCart, setAddedToCart] = useState(false)

  if (!product) {
    return (
      <div className="min-h-screen bg-dark-bg">
        <Header />
        <main className="pt-24 pb-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Produto não encontrado</h1>
          <button
            onClick={() => router.push('/site/produtos')}
            className="text-neon-primary hover:underline"
          >
            Voltar para produtos
          </button>
        </main>
        <Footer />
      </div>
    )
  }

  const images = product.images || [product.image]

  const handleAddToCart = () => {
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  return (
    <div className="min-h-screen bg-dark-bg">
      <Header />

      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar
          </motion.button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="relative h-[600px] bg-dark-surface rounded-2xl overflow-hidden mb-4">
                <Image
                  src={images[selectedImage]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Thumbnails */}
              {images.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative h-24 bg-dark-surface rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === index
                          ? 'border-neon-primary'
                          : 'border-transparent hover:border-dark-border'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-neon-warning text-neon-warning'
                          : 'text-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-400">({product.rating})</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4">{product.name}</h1>

              <p className="text-3xl font-bold text-neon-primary mb-8">
                R${' '}
                {product.price.toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                })}
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Colors */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Cor
                  </label>
                  <div className="flex gap-3">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-4 py-2 rounded-lg border-2 transition-all ${
                          selectedColor === color
                            ? 'border-neon-primary bg-neon-primary/20 text-neon-primary'
                            : 'border-dark-border text-gray-400 hover:border-dark-hover hover:text-white'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Sizes */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Tamanho
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-6 py-3 rounded-lg border-2 transition-all font-medium ${
                          selectedSize === size
                            ? 'border-neon-primary bg-neon-primary/20 text-neon-primary'
                            : 'border-dark-border text-gray-400 hover:border-dark-hover hover:text-white'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Stock Info */}
              <div className="mb-8">
                <p
                  className={`text-sm font-medium ${
                    product.stock > 10
                      ? 'text-neon-success'
                      : product.stock > 0
                      ? 'text-neon-warning'
                      : 'text-neon-danger'
                  }`}
                >
                  {product.stock > 10
                    ? 'Em estoque'
                    : product.stock > 0
                    ? `Apenas ${product.stock} unidades restantes`
                    : 'Fora de estoque'}
                </p>
              </div>

              {/* Add to Cart Button */}
              <Button
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className="w-full py-4 text-lg"
                variant={addedToCart ? 'secondary' : 'primary'}
              >
                {addedToCart ? (
                  <>
                    <Check className="w-5 h-5 mr-2" />
                    Adicionado ao Carrinho!
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-5 h-5 mr-2" />
                    Adicionar ao Carrinho
                  </>
                )}
              </Button>

              {/* Additional Info */}
              <div className="mt-8 pt-8 border-t border-dark-border space-y-4">
                <div>
                  <h3 className="font-bold mb-2">Informações do Produto</h3>
                  <ul className="text-gray-400 space-y-1 text-sm">
                    <li>• Categoria: {product.category}</li>
                    <li>• Estoque: {product.stock} unidades</li>
                    <li>• Avaliação: {product.rating}/5.0</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
