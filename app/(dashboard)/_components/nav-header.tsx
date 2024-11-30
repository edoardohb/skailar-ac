"use client"


import {
  DropdownMenu
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuItem
} from "@/components/ui/sidebar"
import Image from "next/image"
import Link from "next/link"

export function NavHeader({ subscription }: { subscription: any }) {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <Link href="/" className="flex items-center space-x-4 p-2 hover:bg-sidebar-accent rounded-md">
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-skailar/15">
              <Image src="https://cdn.skailar.ac/v1/assets/img/logo.png" alt="Logo" width={32} height={32} />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight ml-2">
              <span className="truncate font-semibold text-skailar">
                skailar.ac
              </span>
              <span className="truncate text-xs">{subscription?.plan ?? 'Free Plan'}</span>
            </div>
          </Link>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
