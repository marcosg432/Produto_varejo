'use client'

import { motion } from 'framer-motion'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import Card from '@/shared/ui/Card'

const data = [
  { name: 'Jan', vendas: 45000, meta: 50000 },
  { name: 'Fev', vendas: 52000, meta: 50000 },
  { name: 'Mar', vendas: 48000, meta: 50000 },
  { name: 'Abr', vendas: 61000, meta: 55000 },
  { name: 'Mai', vendas: 55000, meta: 55000 },
  { name: 'Jun', vendas: 67000, meta: 60000 },
  { name: 'Jul', vendas: 72000, meta: 60000 },
  { name: 'Ago', vendas: 68000, meta: 65000 },
  { name: 'Set', vendas: 75000, meta: 65000 },
  { name: 'Out', vendas: 82000, meta: 70000 },
  { name: 'Nov', vendas: 78000, meta: 70000 },
  { name: 'Dez', vendas: 95000, meta: 80000 },
]

export default function SalesChart() {
  return (
    <Card variant="glass" hover={false}>
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Vendas Mensais</h2>
        <p className="text-sm text-gray-400">Evolução das vendas ao longo do ano</p>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorVendas" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00f5ff" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#00f5ff" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorMeta" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#7c3aed" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#252533" />
          <XAxis
            dataKey="name"
            stroke="#666"
            style={{ fontSize: '12px' }}
          />
          <YAxis
            stroke="#666"
            style={{ fontSize: '12px' }}
            tickFormatter={(value) => `R$ ${(value / 1000).toFixed(0)}k`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1a1a24',
              border: '1px solid #252533',
              borderRadius: '8px',
              color: '#fff',
            }}
            formatter={(value: number) => [`R$ ${value.toLocaleString('pt-BR')}`, '']}
          />
          <Area
            type="monotone"
            dataKey="vendas"
            stroke="#00f5ff"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorVendas)"
          />
          <Area
            type="monotone"
            dataKey="meta"
            stroke="#7c3aed"
            strokeWidth={2}
            strokeDasharray="5 5"
            fillOpacity={1}
            fill="url(#colorMeta)"
          />
        </AreaChart>
      </ResponsiveContainer>

      <div className="mt-6 flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-neon-primary rounded-full" />
          <span className="text-sm text-gray-400">Vendas</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-neon-secondary rounded-full" />
          <span className="text-sm text-gray-400">Meta</span>
        </div>
      </div>
    </Card>
  )
}
