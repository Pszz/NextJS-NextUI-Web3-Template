import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
  Link,
  Image,
} from '@nextui-org/react'

import { link as linkStyles } from '@nextui-org/theme'
import NextLink from 'next/link'
import clsx from 'clsx'

import { SiteConfig } from '@/constant/site'
import { ConnectButton } from '@rainbow-me/rainbowkit'

export const Header = () => {
  return (
    <NextUINavbar maxWidth="xl" className="h-[76px] bg-black bg-opacity-20" isBlurred={false}>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="max-w-fit gap-3">
          <NextLink className="flex items-center justify-start gap-1" href="/">
            <Image src="/imgs/logo.svg" alt="logo" width={30} />
            {SiteConfig.name}
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="center">
        <ul className="ml-2 hidden flex-1 justify-center gap-12 lg:flex">
          {SiteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: 'foreground' }),
                  'data-[active=true]:font-medium data-[active=true]:text-primary',
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent justify="end">
        <ConnectButton
          chainStatus="icon"
          showBalance={false}
          accountStatus={{
            smallScreen: 'avatar',
            largeScreen: 'full',
          }}
        />
        <NavbarMenuToggle className="md:hidden" />
      </NavbarContent>

      <NavbarMenu className="bg-opacity-90">
        <div className="mx-4 mt-4 flex flex-col gap-4">
          {SiteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link href="#" size="lg" className="text-2xl font-bold text-white">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  )
}
