"use client"

import {
  CommandIcon,
  Download,
  LucideIcon,
  PinIcon
} from "lucide-react"
import * as React from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { DashboardIcon } from "@radix-ui/react-icons"
import { NavHeader } from "./nav-header"
import { NavMain } from "./nav-main"
import { NavProjects } from "./nav-projects"
import { NavUser } from "./nav-user"

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: DashboardIcon,
    },
    {
      title: "Pins",
      url: "/dashboard/pins",
      icon: PinIcon,
    },
    {
      title: "Strings",
      url: "/dashboard/strings",
      icon: CommandIcon,
    }
  ],
  others: [
    {
      name: "Download",
      url: "https://dl.skailar.ac",
      icon: Download,
    }
  ],
}

export function AppSidebar({ user, subscription, ...props }: React.ComponentProps<typeof Sidebar> & { user: any, subscription: any }) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <NavHeader subscription={subscription} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain.map(item => ({ ...item, icon: item.icon as LucideIcon }))} />
        <NavProjects others={data.others.map(other => ({ ...other, icon: other.icon as LucideIcon }))} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} subscription={subscription} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
