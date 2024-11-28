import {
  Cloud,
  CreditCard,
  Keyboard,
  LifeBuoy,
  LogOut,
  User
} from "lucide-react"

import { FaDiscord } from "react-icons/fa6"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { DashboardIcon } from "@radix-ui/react-icons"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { logoutAction } from "@/server/actions/logout"
import { useEffect } from "react"

export const UserNavbar = ({ session }: { session: any }) => {
  const data = [
    { id: 1, label: "Profile", icon: User, shortcut: "⌘P", href: "/profile" },
    { id: 2, label: "Dashboard", icon: DashboardIcon, shortcut: "⌘D", href: "/dashboard" },
    { id: 3, label: "Billing", icon: CreditCard, shortcut: "⌘B", href: "/billing" },
  ]

  const handleSupport = () => {
    const mailtoLink = `mailto:support@skailar.ac`;
    window.location.href = mailtoLink;
  }

  const handleDiscord = () => {
    const mailtoLink = `https://discord.gg/skailar`;
    window.location.href = mailtoLink;
  }

  const handleElement = (href: string) => {
    window.location.href = href
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      data.forEach(item => {
        const key = item.shortcut.replace('⌘', '');
        if ((event.metaKey || event.ctrlKey) && event.key.toUpperCase() === key) {
          event.preventDefault();
          handleElement(item.href);
        }
      });
      if (event.shiftKey && event.key.toUpperCase() === 'Q') {
        event.preventDefault();
        logoutAction();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [data]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={session?.user?.image} />
          <AvatarFallback>
            {session?.user?.name?.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {data.map((item) => (
            <DropdownMenuItem key={item.id} onClick={() => handleElement(item.href)}>
              <item.icon />
              <span>{item.label}</span>
              <DropdownMenuShortcut>{item.shortcut}</DropdownMenuShortcut>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleDiscord}>
          <FaDiscord />
          <span>Discord</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleSupport}>
          <LifeBuoy />
          <span>Support</span>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <Cloud />
          <span>API</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => logoutAction()}>
          <LogOut />
          <span>Log out</span>
          <DropdownMenuShortcut>⇧Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
