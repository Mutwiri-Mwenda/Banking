import MobileNav from "@/components/MobileNav"
import Sidebar from "@/components/Sidebar"
import Image from "next/image"

interface User {
  firstName: string
  lastName: string
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  const loggedIn: User = {
    firstName: 'Mutwiri',
    lastName: 'Mwenda'
  }

  return (
    <main className="flex h-screen w-full font-inter">
      {/* Sidebar for larger screens */}
      <Sidebar user={loggedIn} />

      {/* Main content area */}
      <div className="flex size-full flex-col">
        {/* Header area with logo and mobile nav */}
        <div className="root-layout">
          <Image 
            src="/icons/logo.svg" 
            width={30} 
            height={30} 
            alt="logo"
            priority
          />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>

        {/* Main content */}
        {children}
      </div>
    </main>
  )
}