'use client'

import { motion } from 'framer-motion'
import { TrendingUp } from 'lucide-react'
import Card from '@/shared/ui/Card'

const products = [
  { id: 1, name: 'Produto Premium A', vendas: 1245, crescimento: 12.5 },
  { id: 2, name: 'Produto Premium B', vendas: 980, crescimento: 8.3 },
  { id: 3, name: 'Produto Premium C', vendas: 756, crescimento: 15.2 },
  { id: 4, name: 'Produto Premium D', vendas: 642, crescimento: -2.1 },
  { id: 5, name: 'Produto Premium E', vendas: 521, crescimento: 5.7 },
]

export default function TopProducts() {
  return (
    <Card variant="glass" hover={false}>
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Top 5 Produtos</h2>
        <p className="text-sm text-gray-400">Mais vendidos este mês</p>
      </div>

      <div className="space-y-4">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-between p-4 bg-dark-surface rounded-lg hover:bg-dark-card transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-neon rounded-lg flex items-center justify-center text-white font-bold">
                {index + 1}
              </div>
              <div>
                <p className="font-medium text-white">{product.name}</p>
                <p className="text-sm text-gray-400">{product.vendas} vendas</p>
              </div>
            </div>
            <div
              className={`flex items-center gap-1 text-sm font-medium px-2 py-1 rounded ${
                product.crescimento > 0
                  ? 'bg-neon-success/20 text-neon-success'
                  : 'bg-neon-danger/20 text-neon-danger'
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              <span>{Math.abs(product.crescimento)}%</span>
            </div>
          </motion.div>
        ))}
      </div>
    </Card>
  )
}
