'use client'

import { usePathname, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Box,
  Users,
  BarChart3,
  Settings,
  LogOut,
} from 'lucide-react'
import { cn } from '@/shared/utils/cn'

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/admin' },
  { icon: Package, label: 'Produtos', path: '/admin/produtos' },
  { icon: ShoppingCart, label: 'Pedidos', path: '/admin/pedidos' },
  { icon: Box, label: 'Estoque', path: '/admin/estoque' },
  { icon: Users, label: 'Clientes', path: '/admin/clientes' },
  { icon: BarChart3, label: 'Relatórios', path: '/admin/relatorios' },
  { icon: Settings, label: 'Configurações', path: '/admin/configuracoes' },
]

export default function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <div className="w-64 h-screen bg-dark-surface border-r border-dark-border flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-dark-border">
        <h1 className="text-xl font-bold bg-gradient-to-r from-neon-primary to-neon-secondary bg-clip-text text-transparent">
          Admin Panel
        </h1>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item, index) => {
          const Icon = item.icon
          const isActive = pathname === item.path

          return (
            <motion.button
              key={item.path}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => router.push(item.path)}
              className={cn(
                'w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300',
                isActive
                  ? 'bg-neon-primary/20 text-neon-primary border border-neon-primary/50'
                  : 'text-gray-400 hover:text-white hover:bg-dark-card'
              )}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </motion.button>
          )
        })}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-dark-border">
        <motion.button
          onClick={() => router.push('/admin/login')}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:text-neon-danger hover:bg-dark-card transition-all duration-300"
          whileHover={{ x: 4 }}
          whileTap={{ scale: 0.98 }}
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Sair</span>
        </motion.button>
      </div>
    </div>
  )
}
