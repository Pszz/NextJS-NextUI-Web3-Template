import clsx from 'clsx'
import React from 'react'

type StepType = {
  title: React.ReactNode
  desc?: React.ReactNode
  action?: React.ReactNode
}
type StepsProps = {
  steps: StepType[]
  activeId?: number
}
export function Steps({ steps, activeId = -1 }: StepsProps) {
  return (
    <div className="flex justify-between gap-3">
      {steps.map((v, i) => {
        const isBefore = activeId < i
        const isAfter = activeId > i
        return (
          <React.Fragment key={i}>
            <div className="flex w-28 flex-col gap-3 text-center text-white">
              <h6
                className={clsx('text-xl font-bold', {
                  'opacity-50': isBefore,
                  'text-blue-600': isAfter,
                })}
              >
                {v.title}
              </h6>
              <p className={clsx('text-xs', { 'opacity-30': isBefore })}>{v?.desc}</p>
              {activeId === i && v?.action}
            </div>
            {i < steps.length - 1 && (
              <div
                className={clsx('mx-3 mt-3 w-14 border-t-1 border-dashed', {
                  'border-white opacity-50': isBefore,
                  'border-blue-600': isAfter,
                })}
              />
            )}
          </React.Fragment>
        )
      })}
    </div>
  )
}
