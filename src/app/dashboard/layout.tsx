'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Sidebar from '@/components/sidebar'
import Navbar from '@/components/navbar'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  
  const hideSidebarNavbar = pathname.startsWith('/dashboard/analytics')

  return (
    <div className="flex h-screen overflow-hidden bg-[#0A0A0A]">
      {!hideSidebarNavbar && <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />}
      <div className="flex-1 flex flex-col">
        {!hideSidebarNavbar && (
          <Navbar sidebarOpen={sidebarOpen} onSidebarToggle={() => setSidebarOpen(!sidebarOpen)} />
        )}
        <main className="flex-1 overflow-auto bg-[#0A0A0a] p-4">{children}</main>
      </div>
    </div>
  )
}
