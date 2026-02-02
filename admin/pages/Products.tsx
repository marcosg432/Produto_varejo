'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Search, Edit, Trash2, Image as ImageIcon } from 'lucide-react'
import Sidebar from '@/admin/components/Sidebar'
import Header from '@/admin/components/Header'
import Card from '@/shared/ui/Card'
import Button from '@/shared/ui/Button'
import Input from '@/shared/ui/Input'

const products = [
  { id: 1, name: 'Produto Premium A', price: 450.00, stock: 25, category: 'Categoria 1', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80&fm=jpg' },
  { id: 2, name: 'Produto Premium B', price: 890.50, stock: 12, category: 'Categoria 2', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80&fm=jpg' },
  { id: 3, name: 'Produto Premium C', price: 320.00, stock: 8, category: 'Categoria 1', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&q=80&fm=jpg' },
  { id: 4, name: 'Produto Premium D', price: 1250.00, stock: 5, category: 'Categoria 3', image: 'https://images.unsplash.com/photo-1542291026-7eec32c3ed50?w=400&q=80&fm=jpg' },
  { id: 5, name: 'Produto Premium E', price: 680.00, stock: 15, category: 'Categoria 2', image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&q=80&fm=jpg' },
]

export default function AdminProducts() {
  const [search, setSearch] = useState('')

  return (
    <div className="flex h-screen bg-dark-bg overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Produtos</h1>
              <p className="text-gray-400">Gerencie seu catálogo de produtos</p>
            </div>
            <Button>
              <Plus className="w-5 h-5 mr-2" />
              Novo Produto
            </Button>
          </div>

          <Card className="mb-6">
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Buscar produtos..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  icon={<Search className="w-5 h-5" />}
                />
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hover className="overflow-hidden">
                  <div className="relative h-48 bg-dark-surface mb-4 rounded-lg overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        product.stock < 10
                          ? 'bg-neon-danger/20 text-neon-danger'
                          : 'bg-neon-success/20 text-neon-success'
                      }`}>
                        {product.stock} em estoque
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                  <p className="text-gray-400 text-sm mb-2">{product.category}</p>
                  <p className="text-2xl font-bold text-neon-primary mb-4">
                    R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </p>
                  
                  <div className="flex items-center gap-2">
                    <Button variant="secondary" size="sm" className="flex-1">
                      <Edit className="w-4 h-4 mr-2" />
                      Editar
                    </Button>
                    <Button variant="danger" size="sm">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
