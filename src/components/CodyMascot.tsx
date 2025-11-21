import Image from 'next/image'
import { cn } from '@/lib/utils'

type CodySize = 'sm' | 'md' | 'lg'
type CodyMood = 'idle' | 'working' | 'tired'

interface CodyMascotProps {
  size?: CodySize
  mood?: CodyMood
  className?: string
}

const sizeMap: Record<CodySize, string> = {
  sm: 'w-24 h-24',
  md: 'w-32 h-32',
  lg: 'w-48 h-48',
}

export function CodyMascot({ size = 'md', mood = 'idle', className }: CodyMascotProps) {
  return (
    <div className={cn('relative inline-block', className)}>
      <div className={cn('relative', sizeMap[size])}>
        <Image
          src="/cody.png"
          alt="Cody the Cherry Picker"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  )
}

