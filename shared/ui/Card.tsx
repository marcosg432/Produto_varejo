'use client'

import { HTMLAttributes, forwardRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/shared/utils/cn'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'elevated'
  hover?: boolean
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', hover = true, children, ...props }, ref) => {
    const variants = {
      default: 'bg-dark-card border border-dark-border',
      glass: 'bg-glass-medium backdrop-blur-xl border border-dark-border',
      elevated: 'bg-dark-card border border-dark-border shadow-premium',
    }

    return (
      <motion.div
        ref={ref}
        className={cn(
          'rounded-xl p-6 transition-all duration-300',
          variants[variant],
          hover && 'hover:border-neon-primary/50 hover:shadow-neon-sm',
          className
        )}
        whileHover={hover ? { y: -4, scale: 1.01 } : {}}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

Card.displayName = 'Card'

export default Card
