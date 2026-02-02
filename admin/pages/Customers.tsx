'use client'

import { motion } from 'framer-motion'
import { User, ShoppingBag, DollarSign, Calendar } from 'lucide-react'
import Sidebar from '@/admin/components/Sidebar'
import Header from '@/admin/components/Header'
import Card from '@/shared/ui/Card'

const customers = [
  { id: 1, name: 'João Silva', email: 'joao@email.com', total: 4500.00, orders: 12, lastOrder: '2024-01-15' },
  { id: 2, name: 'Maria Santos', email: 'maria@email.com', total: 8900.50, orders: 25, lastOrder: '2024-01-14' },
  { id: 3, name: 'Pedro Costa', email: 'pedro@email.com', total: 3200.00, orders: 8, lastOrder: '2024-01-13' },
  { id: 4, name: 'Ana Oliveira', email: 'ana@email.com', total: 12500.00, orders: 35, lastOrder: '2024-01-15' },
  { id: 5, name: 'Carlos Souza', email: 'carlos@email.com', total: 6800.00, orders: 18, lastOrder: '2024-01-12' },
]

export default function AdminCustomers() {
  return (
    <div className="flex h-screen bg-dark-bg overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">Clientes</h1>
            <p className="text-gray-400">Gerencie seus clientes e histórico</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {customers.map((customer, index) => (
              <motion.div
                key={customer.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hover>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-neon rounded-full flex items-center justify-center">
                      <User className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{customer.name}</h3>
                      <p className="text-sm text-gray-400">{customer.email}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gray-400">
                        <DollarSign className="w-4 h-4" />
                        <span className="text-sm">Total gasto</span>
                      </div>
                      <span className="font-bold text-neon-primary">
                        R$ {customer.total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gray-400">
                        <ShoppingBag className="w-4 h-4" />
                        <span className="text-sm">Pedidos</span>
                      </div>
                      <span className="font-bold text-white">{customer.orders}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">Último pedido</span>
                      </div>
                      <span className="text-sm text-white">{customer.lastOrder}</span>
                    </div>
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
