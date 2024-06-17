import { SiteConfig } from '@/constant/site'
import { Image, Link } from '@nextui-org/react'
import React from 'react'

const { links } = SiteConfig
export function Footer() {
  return (
    <footer className="flex w-full items-center justify-center py-3">
      <div className="flex flex-col gap-6 text-current">
        <p className="text-xl">Pszz | Copyright 2024 </p>
        <nav className="flex justify-center gap-5 text-white">
          {Object.keys(links).map((k) => (
            <Link isExternal href={String((links as any)[k])} key={k} color="foreground">
              <Image src={`/imgs/${k}.svg`} alt={k} width={24} />
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}
