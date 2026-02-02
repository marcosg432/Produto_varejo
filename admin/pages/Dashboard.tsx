'use client'

import { motion } from 'framer-motion'
import { TrendingUp, DollarSign, ShoppingBag, Users } from 'lucide-react'
import Sidebar from '@/admin/components/Sidebar'
import Header from '@/admin/components/Header'
import StatCard from '@/shared/ui/StatCard'
import Card from '@/shared/ui/Card'
import SalesChart from '@/admin/components/SalesChart'
import TopProducts from '@/admin/components/TopProducts'
import RecentOrders from '@/admin/components/RecentOrders'
import StockAlerts from '@/admin/components/StockAlerts'

export default function AdminDashboard() {
  return (
    <div className="flex h-screen bg-dark-bg overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <StatCard
                title="Faturamento do Dia"
                value={45230}
                icon={DollarSign}
                prefix="R$ "
                trend={{ value: 12.5, isPositive: true }}
                delay={0.1}
              />
              <StatCard
                title="Faturamento Semanal"
                value={287450}
                icon={TrendingUp}
                prefix="R$ "
                trend={{ value: 8.3, isPositive: true }}
                delay={0.2}
              />
              <StatCard
                title="Faturamento Mensal"
                value={1245670}
                icon={ShoppingBag}
                prefix="R$ "
                trend={{ value: 15.2, isPositive: true }}
                delay={0.3}
              />
              <StatCard
                title="Faturamento Anual"
                value={15234560}
                icon={Users}
                prefix="R$ "
                trend={{ value: 22.1, isPositive: true }}
                delay={0.4}
              />
            </div>

            {/* Charts and Data Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="lg:col-span-2"
              >
                <SalesChart />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <TopProducts />
              </motion.div>
            </div>

            {/* Bottom Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <RecentOrders />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <StockAlerts />
              </motion.div>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  )
}
