import { Modal as NextModal, ModalProps } from '@nextui-org/react'
import React from 'react'

export function Modal(props: ModalProps) {
  return (
    <NextModal
      classNames={{
        closeButton: 'border-2 border-white border-opacity-10 top-5 right-5',
        header: 'pb-0',
        body: 'py-6',
      }}
      {...props}
    />
  )
}
