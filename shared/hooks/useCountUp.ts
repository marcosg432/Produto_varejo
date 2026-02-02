import { useEffect, useState } from 'react'

interface UseCountUpProps {
  end: number
  duration?: number
  start?: number
}

export function useCountUp({ end, duration = 2000, start = 0 }: UseCountUpProps) {
  const [count, setCount] = useState(start)

  useEffect(() => {
    let startTime: number | null = null
    const startValue = start
    const endValue = end

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const timeElapsed = currentTime - startTime
      const progress = Math.min(timeElapsed / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(startValue + (endValue - startValue) * easeOutQuart)

      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(endValue)
      }
    }

    requestAnimationFrame(animate)
  }, [end, duration, start])

  return count
}
