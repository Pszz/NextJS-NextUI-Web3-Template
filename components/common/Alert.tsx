import React, { useMemo } from 'react'
import { ReactComponent as InfoIcon } from '@/assets/icons/info.svg'
import clsx from 'clsx'
type AlertProps = {
  type?: 'error' | 'wran' | 'success'
  children: React.ReactNode
  variant?: 'none' | 'flat'
}
export function Alert({ type = 'wran', variant = 'none', children }: AlertProps) {
  const _className = useMemo(() => {
    const _class = []

    if (variant === 'flat') {
      _class.push('bg-opacity-10 border-1 border-opacity-20 py-3 px-2 rounded-xl')
    }

    if (type === 'success') {
      _class.push('text-[#EBFF00]')
      if (variant === 'flat') {
        _class.push('bg-[#EBFF00]  border-[#EBFF00]')
      }
    }

    if (type === 'error') {
      _class.push('text-red-600')
      if (variant === 'flat') {
        _class.push('bg-red-600 border-red-600')
      }
    }

    if (type === 'wran') {
      _class.push('text-white')
      if (variant === 'flat') {
        _class.push('bg-white border-white')
      }
    }

    return _class.join(' ')
  }, [type, variant])

  return (
    <div className={clsx('flex gap-2', _className)}>
      <div className="flex-initial">
        <InfoIcon />
      </div>
      <p className="text-sm">{children}</p>
    </div>
  )
}
