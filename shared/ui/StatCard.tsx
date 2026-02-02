'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { useCountUp } from '@/shared/hooks/useCountUp'
import Card from './Card'
import { cn } from '@/shared/utils/cn'

interface StatCardProps {
  title: string
  value: number
  icon: LucideIcon
  trend?: {
    value: number
    isPositive: boolean
  }
  prefix?: string
  suffix?: string
  delay?: number
}

export default function StatCard({
  title,
  value,
  icon: Icon,
  trend,
  prefix = '',
  suffix = '',
  delay = 0,
}: StatCardProps) {
  const count = useCountUp({ end: value, duration: 2000 })

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      <Card hover className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-neon-primary/5 rounded-full blur-3xl" />
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-neon-primary/10 rounded-lg">
              <Icon className="w-6 h-6 text-neon-primary" />
            </div>
            {trend && (
              <div
                className={cn(
                  'flex items-center gap-1 text-sm font-medium px-2 py-1 rounded',
                  trend.isPositive
                    ? 'bg-neon-success/20 text-neon-success'
                    : 'bg-neon-danger/20 text-neon-danger'
                )}
              >
                <span>{trend.isPositive ? '↑' : '↓'}</span>
                <span>{Math.abs(trend.value)}%</span>
              </div>
            )}
          </div>
          <h3 className="text-sm text-gray-400 mb-2">{title}</h3>
          <p className="text-3xl font-bold text-white">
            {prefix}
            {count.toLocaleString('pt-BR')}
            {suffix}
          </p>
        </div>
      </Card>
    </motion.div>
  )
}
