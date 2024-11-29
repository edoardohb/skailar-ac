"use client"

import {
  type LucideIcon
} from "lucide-react"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

export function NavProjects({
  others,
}: {
  others: {
    name: string
    url: string
    icon: LucideIcon
  }[]
}) {
  const pathname = usePathname()
  
  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Others</SidebarGroupLabel>
      <SidebarMenu>
        {others.map((item) => (
          <SidebarMenuItem className={cn(item.url === pathname && "bg-sidebar-accent rounded-md text-skailar")} key={item.name}>
            <SidebarMenuButton asChild tooltip={item.name}>
              <a href={item.url}>
                {item.icon && <item.icon />}
                <span>{item.name}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
