'use client'

import { motion } from 'framer-motion'
import { Clock, CheckCircle, XCircle, Package } from 'lucide-react'
import Card from '@/shared/ui/Card'

const orders = [
  { id: '#1234', cliente: 'João Silva', valor: 450.00, status: 'pendente', tempo: '2 min' },
  { id: '#1235', cliente: 'Maria Santos', valor: 890.50, status: 'processando', tempo: '5 min' },
  { id: '#1236', cliente: 'Pedro Costa', valor: 320.00, status: 'enviado', tempo: '1h' },
  { id: '#1237', cliente: 'Ana Oliveira', valor: 1250.00, status: 'entregue', tempo: '2h' },
  { id: '#1238', cliente: 'Carlos Souza', valor: 680.00, status: 'pendente', tempo: '10 min' },
]

const statusConfig = {
  pendente: { icon: Clock, color: 'text-neon-warning', bg: 'bg-neon-warning/20' },
  processando: { icon: Package, color: 'text-neon-primary', bg: 'bg-neon-primary/20' },
  enviado: { icon: CheckCircle, color: 'text-blue-400', bg: 'bg-blue-400/20' },
  entregue: { icon: CheckCircle, color: 'text-neon-success', bg: 'bg-neon-success/20' },
}

export default function RecentOrders() {
  return (
    <Card variant="glass" hover={false}>
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Pedidos Recentes</h2>
        <p className="text-sm text-gray-400">Últimas 5 transações</p>
      </div>

      <div className="space-y-3">
        {orders.map((order, index) => {
          const StatusIcon = statusConfig[order.status as keyof typeof statusConfig].icon
          const statusColor = statusConfig[order.status as keyof typeof statusConfig].color
          const statusBg = statusConfig[order.status as keyof typeof statusConfig].bg

          return (
            <motion.div
              key={order.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between p-4 bg-dark-surface rounded-lg hover:bg-dark-card transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-lg ${statusBg}`}>
                  <StatusIcon className={`w-5 h-5 ${statusColor}`} />
                </div>
                <div>
                  <p className="font-medium text-white">{order.id}</p>
                  <p className="text-sm text-gray-400">{order.cliente}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-white">R$ {order.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                <p className="text-xs text-gray-500">{order.tempo} atrás</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </Card>
  )
}
