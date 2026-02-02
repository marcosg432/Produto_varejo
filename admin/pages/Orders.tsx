'use client'

import { motion } from 'framer-motion'
import { Clock, CheckCircle, Package, Truck, Filter } from 'lucide-react'
import Sidebar from '@/admin/components/Sidebar'
import Header from '@/admin/components/Header'
import Card from '@/shared/ui/Card'
import Button from '@/shared/ui/Button'

const orders = [
  { id: '#1234', cliente: 'João Silva', valor: 450.00, status: 'pendente', data: '2024-01-15', itens: 3 },
  { id: '#1235', cliente: 'Maria Santos', valor: 890.50, status: 'processando', data: '2024-01-15', itens: 5 },
  { id: '#1236', cliente: 'Pedro Costa', valor: 320.00, status: 'enviado', data: '2024-01-14', itens: 2 },
  { id: '#1237', cliente: 'Ana Oliveira', valor: 1250.00, status: 'entregue', data: '2024-01-14', itens: 7 },
  { id: '#1238', cliente: 'Carlos Souza', valor: 680.00, status: 'pendente', data: '2024-01-13', itens: 4 },
]

const statusConfig = {
  pendente: { icon: Clock, color: 'text-neon-warning', bg: 'bg-neon-warning/20', label: 'Pendente' },
  processando: { icon: Package, color: 'text-neon-primary', bg: 'bg-neon-primary/20', label: 'Processando' },
  enviado: { icon: Truck, color: 'text-blue-400', bg: 'bg-blue-400/20', label: 'Enviado' },
  entregue: { icon: CheckCircle, color: 'text-neon-success', bg: 'bg-neon-success/20', label: 'Entregue' },
}

export default function AdminOrders() {
  return (
    <div className="flex h-screen bg-dark-bg overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Pedidos</h1>
              <p className="text-gray-400">Gerencie todos os pedidos</p>
            </div>
            <Button variant="secondary">
              <Filter className="w-5 h-5 mr-2" />
              Filtros
            </Button>
          </div>

          <Card>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-dark-border">
                    <th className="text-left py-4 px-4 text-sm font-medium text-gray-400">ID</th>
                    <th className="text-left py-4 px-4 text-sm font-medium text-gray-400">Cliente</th>
                    <th className="text-left py-4 px-4 text-sm font-medium text-gray-400">Valor</th>
                    <th className="text-left py-4 px-4 text-sm font-medium text-gray-400">Status</th>
                    <th className="text-left py-4 px-4 text-sm font-medium text-gray-400">Data</th>
                    <th className="text-left py-4 px-4 text-sm font-medium text-gray-400">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, index) => {
                    const StatusIcon = statusConfig[order.status as keyof typeof statusConfig].icon
                    const statusColor = statusConfig[order.status as keyof typeof statusConfig].color
                    const statusBg = statusConfig[order.status as keyof typeof statusConfig].bg
                    const statusLabel = statusConfig[order.status as keyof typeof statusConfig].label

                    return (
                      <motion.tr
                        key={order.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="border-b border-dark-border hover:bg-dark-surface transition-colors"
                      >
                        <td className="py-4 px-4">
                          <span className="font-medium text-white">{order.id}</span>
                        </td>
                        <td className="py-4 px-4">
                          <span className="text-white">{order.cliente}</span>
                        </td>
                        <td className="py-4 px-4">
                          <span className="font-bold text-white">
                            R$ {order.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${statusBg} ${statusColor}`}>
                            <StatusIcon className="w-4 h-4" />
                            {statusLabel}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <span className="text-gray-400">{order.data}</span>
                        </td>
                        <td className="py-4 px-4">
                          <Button variant="ghost" size="sm">
                            Ver detalhes
                          </Button>
                        </td>
                      </motion.tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </Card>
        </main>
      </div>
    </div>
  )
}
