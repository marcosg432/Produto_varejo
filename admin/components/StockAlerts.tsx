'use client'

import { motion } from 'framer-motion'
import { AlertTriangle } from 'lucide-react'
import Card from '@/shared/ui/Card'

const alerts = [
  { id: 1, produto: 'Produto Premium A', estoque: 5, minimo: 20, porcentagem: 25 },
  { id: 2, produto: 'Produto Premium B', estoque: 8, minimo: 30, porcentagem: 27 },
  { id: 3, produto: 'Produto Premium C', estoque: 12, minimo: 50, porcentagem: 24 },
  { id: 4, produto: 'Produto Premium D', estoque: 3, minimo: 15, porcentagem: 20 },
]

export default function StockAlerts() {
  return (
    <Card variant="glass" hover={false}>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold mb-2">Alertas de Estoque</h2>
          <p className="text-sm text-gray-400">Produtos com estoque baixo</p>
        </div>
        <div className="p-3 bg-neon-danger/20 rounded-lg">
          <AlertTriangle className="w-6 h-6 text-neon-danger" />
        </div>
      </div>

      <div className="space-y-4">
        {alerts.map((alert, index) => (
          <motion.div
            key={alert.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-4 bg-dark-surface rounded-lg"
          >
            <div className="flex items-center justify-between mb-3">
              <p className="font-medium text-white">{alert.produto}</p>
              <span className="text-sm font-bold text-neon-danger">
                {alert.estoque} unidades
              </span>
            </div>
            
            <div className="mb-2">
              <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                <span>Estoque atual</span>
                <span>Mínimo: {alert.minimo}</span>
              </div>
              <div className="w-full h-2 bg-dark-card rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${alert.porcentagem}%` }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  className={`h-full ${
                    alert.porcentagem < 30
                      ? 'bg-neon-danger'
                      : alert.porcentagem < 50
                      ? 'bg-neon-warning'
                      : 'bg-neon-success'
                  }`}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Card>
  )
}
