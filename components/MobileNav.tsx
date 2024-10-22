"use client"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { sidebarLinks } from "@/constants"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface MobileNavProps {
  user?: any // Replace 'any' with your actual user type
}

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname()

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image 
            src="/icons/hamburger.svg" 
            width={30} 
            height={30} 
            alt="menu" 
            className="cursor-pointer"
          />
        </SheetTrigger>

        <SheetContent side="left" className="border-none bg-white">
          <Link href="/" className="mb-12 flex cursor-pointer items-center gap-1 px-4">
            <Image 
              src="/icons/logo.svg" 
              width={34} 
              height={34} 
              alt="Horizon Logo" 
              className="size-[24px] max-xl:size-14"
            />
            <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
              Horizon
            </h1>
          </Link>
          <nav className="flex h-full flex-col gap-6 pt-8 text-white">
            {sidebarLinks.map((item) => {
              const isActive = 
                pathname === item.route || 
                pathname.startsWith(`${item.route}`)

              return (
                <SheetClose asChild key={item.route}>
                  <Link
                    href={item.route}
                    className={cn(
                      'mobilenav-sheet_close w-full flex gap-2 py-2 px-2 rounded',
                      {
                        'bg-bank-gradient': isActive
                      }
                    )}
                  >
                    <div className="relative size-6">
                      <Image
                        src={item.imgURL}
                        alt={item.label}
                        width={20}
                        height={20}
                        className={cn({
                          'brightness-[3] invert-0': isActive
                        })}
                      />
                    </div>
                    <p className={cn('text-16 font-semibold text-black-2', {
                      '!text-white': isActive
                    })}>
                      {item.label}
                    </p>
                  </Link>
                </SheetClose>
              )
            })}
            User
          </nav>
          Footer
        </SheetContent>
      </Sheet>
    </section>
  )
}

export default MobileNav
