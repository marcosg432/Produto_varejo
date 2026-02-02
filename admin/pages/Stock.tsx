'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, TrendingUp, TrendingDown, Package } from 'lucide-react'
import Sidebar from '@/admin/components/Sidebar'
import Header from '@/admin/components/Header'
import Card from '@/shared/ui/Card'

const stockItems = [
  { id: 1, name: 'Produto Premium A', current: 5, minimum: 20, maximum: 100, status: 'low' },
  { id: 2, name: 'Produto Premium B', current: 45, minimum: 30, maximum: 100, status: 'ok' },
  { id: 3, name: 'Produto Premium C', current: 12, minimum: 50, maximum: 200, status: 'low' },
  { id: 4, name: 'Produto Premium D', current: 85, minimum: 15, maximum: 100, status: 'ok' },
  { id: 5, name: 'Produto Premium E', current: 3, minimum: 10, maximum: 50, status: 'critical' },
  { id: 6, name: 'Produto Premium F', current: 120, minimum: 50, maximum: 200, status: 'ok' },
]

export default function AdminStock() {
  return (
    <div className="flex h-screen bg-dark-bg overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">Estoque</h1>
            <p className="text-gray-400">Monitore e gerencie o estoque de produtos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <Card>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-neon-danger/20 rounded-lg">
                  <AlertTriangle className="w-6 h-6 text-neon-danger" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Estoque Baixo</p>
                  <p className="text-2xl font-bold text-white">3</p>
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-neon-success/20 rounded-lg">
                  <Package className="w-6 h-6 text-neon-success" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Total de Itens</p>
                  <p className="text-2xl font-bold text-white">270</p>
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-neon-primary/20 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-neon-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Valor Total</p>
                  <p className="text-2xl font-bold text-white">R$ 125.000</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {stockItems.map((item, index) => {
              const percentage = (item.current / item.maximum) * 100
              const statusColor =
                item.status === 'critical'
                  ? 'bg-neon-danger'
                  : item.status === 'low'
                  ? 'bg-neon-warning'
                  : 'bg-neon-success'

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-bold text-lg mb-1">{item.name}</h3>
                        <p className="text-sm text-gray-400">
                          Mínimo: {item.minimum} | Máximo: {item.maximum}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-white">{item.current}</p>
                        <p className="text-sm text-gray-400">unidades</p>
                      </div>
                    </div>
                    
                    <div className="w-full h-3 bg-dark-surface rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${percentage}%` }}
                        transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                        className={`h-full ${statusColor}`}
                      />
                    </div>
                    
                    <div className="mt-4 flex items-center gap-2">
                      {item.status === 'critical' && (
                        <span className="px-3 py-1 bg-neon-danger/20 text-neon-danger rounded-full text-xs font-medium">
                          Crítico
                        </span>
                      )}
                      {item.status === 'low' && (
                        <span className="px-3 py-1 bg-neon-warning/20 text-neon-warning rounded-full text-xs font-medium">
                          Baixo
                        </span>
                      )}
                      {item.status === 'ok' && (
                        <span className="px-3 py-1 bg-neon-success/20 text-neon-success rounded-full text-xs font-medium">
                          Normal
                        </span>
                      )}
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </main>
      </div>
    </div>
  )
}
