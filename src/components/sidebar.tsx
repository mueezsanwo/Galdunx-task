'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import {
  LayoutDashboard,
  Users,
  UserCheck,
  UserX,
  ShieldCheck,
  FileBarChart,
  Settings,
  LogOut
} from 'lucide-react'
import clsx from 'clsx'

const topNavItems = [
  { label: 'Dashboard', href: '/dashboard', icon: <LayoutDashboard size={16} /> },
  { label: 'Approved Users', href: '/dashboard/approved', icon: <UserCheck size={16} /> },
  { label: 'Pending', href: '/dashboard/pending', icon: <Users size={16} /> },
  { label: 'Rejected', href: '/dashboard/rejected', icon: <UserX size={16} /> },
  { label: 'Flags/Reports', href: '/dashboard/reports', icon: <FileBarChart size={16} /> },
  { label: 'User Management', href: '/dashboard/users', icon: <ShieldCheck size={16} /> }
]

const bottomNavItems = [
  { label: 'Settings', href: '/dashboard/settings', icon: <Settings size={16} /> },
  { label: 'Logout', href: '/logout', icon: <LogOut size={16} /> }
]

export default function Sidebar({
  isOpen,
  onClose
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const pathname = usePathname()

  return (
    <>
      {/* Overlay on mobile */}
      <div
        className={clsx(
          'fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity lg:hidden',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside
        className={clsx(
          'fixed top-0 left-0 z-50 h-full bg-[#0A0A0A] text-white flex flex-col justify-between border-r border-white/15 transform transition-transform duration-300',
          'w-64 xl:w-72 min-w-[16rem] max-w-[18rem]',
          isOpen ? 'translate-x-0' : '-translate-x-full',
          'lg:static lg:translate-x-0 lg:flex'
        )}
      >
        {/* Top Navigation */}
        <div className="p-6 pt-20 mt-5">
          <nav className="flex flex-col gap-3">
            {topNavItems.map(({ label, href, icon }) => {
              
              
              const isActive = label === 'Dashboard' 
  ? pathname.startsWith('/dashboard') 
  : pathname === href


              return (
                <Link
                  key={href}
                  href={href}
                  className={clsx(
                    'flex items-center gap-3 px-2 py-2 rounded transition-colors',
                    isActive ? 'bg-white rounded-[100px]' : 'hover:bg-gray-800'
                  )}
                >
                  {React.cloneElement(icon, {
                    className: clsx('h-4 w-4', isActive ? 'text-black' : 'text-white/40')
                  })}
                  <span
                    className={clsx(
                      'font-inter font-medium text-[13px] leading-[100%] tracking-[0]',
                      isActive ? 'text-black' : 'text-white/40'
                    )}
                  >
                    {label}
                  </span>
                </Link>
              )
            })}
          </nav>
        </div>

        {/* Bottom Navigation */}
        <div className="p-6 pb-20">
          <nav className="flex flex-col gap-3">
            {bottomNavItems.map(({ label, href, icon }) => {
              const isActive = pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  className={clsx(
                    'flex items-center gap-3 px-4 py-2 rounded-md transition-colors',
                    isActive ? 'bg-gray-700' : 'hover:bg-gray-800'
                  )}
                >
                  {React.cloneElement(icon, {
                    className: clsx('h-4 w-4', isActive ? 'text-white' : 'text-white/40')
                  })}
                  <span
                    className={clsx(
                      'font-inter font-medium text-[13px] leading-[100%] tracking-[0]',
                      isActive ? 'text-white' : 'text-white/40'
                    )}
                  >
                    {label}
                  </span>
                </Link>
              )
            })}
          </nav>
        </div>
      </aside>
    </>
  )
}
