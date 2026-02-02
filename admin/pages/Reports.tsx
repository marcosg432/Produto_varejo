'use client'

import { motion } from 'framer-motion'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts'
import Sidebar from '@/admin/components/Sidebar'
import Header from '@/admin/components/Header'
import Card from '@/shared/ui/Card'

const salesData = [
  { month: 'Jan', vendas: 45000 },
  { month: 'Fev', vendas: 52000 },
  { month: 'Mar', vendas: 48000 },
  { month: 'Abr', vendas: 61000 },
  { month: 'Mai', vendas: 55000 },
  { month: 'Jun', vendas: 67000 },
]

const categoryData = [
  { name: 'Categoria 1', value: 35, color: '#00f5ff' },
  { name: 'Categoria 2', value: 28, color: '#7c3aed' },
  { name: 'Categoria 3', value: 22, color: '#f59e0b' },
  { name: 'Categoria 4', value: 15, color: '#10b981' },
]

export default function AdminReports() {
  return (
    <div className="flex h-screen bg-dark-bg overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">Relatórios</h1>
            <p className="text-gray-400">Análises detalhadas e insights</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Card variant="glass" hover={false}>
                <h2 className="text-xl font-bold mb-4">Vendas por Mês</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#252533" />
                    <XAxis dataKey="month" stroke="#666" />
                    <YAxis stroke="#666" tickFormatter={(value) => `R$ ${(value / 1000).toFixed(0)}k`} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1a1a24',
                        border: '1px solid #252533',
                        borderRadius: '8px',
                        color: '#fff',
                      }}
                      formatter={(value: number) => [`R$ ${value.toLocaleString('pt-BR')}`, '']}
                    />
                    <Bar dataKey="vendas" fill="#00f5ff" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Card variant="glass" hover={false}>
                <h2 className="text-xl font-bold mb-4">Vendas por Categoria</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1a1a24',
                        border: '1px solid #252533',
                        borderRadius: '8px',
                        color: '#fff',
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </Card>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <h3 className="text-lg font-bold mb-2">Taxa de Conversão</h3>
              <p className="text-3xl font-bold text-neon-primary mb-1">3.2%</p>
              <p className="text-sm text-gray-400">+0.5% vs mês anterior</p>
            </Card>
            <Card>
              <h3 className="text-lg font-bold mb-2">Ticket Médio</h3>
              <p className="text-3xl font-bold text-neon-primary mb-1">R$ 450</p>
              <p className="text-sm text-gray-400">+R$ 25 vs mês anterior</p>
            </Card>
            <Card>
              <h3 className="text-lg font-bold mb-2">Clientes Ativos</h3>
              <p className="text-3xl font-bold text-neon-primary mb-1">1.245</p>
              <p className="text-sm text-gray-400">+120 vs mês anterior</p>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
