import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { getAllPins } from "@/server/actions/get-pins";
import { auth } from "@/server/auth";
import { StackIcon } from "@radix-ui/react-icons";
import { Rocket, Server } from "lucide-react";
import { TableSectionServer } from "./_components/table-section-server";
import { GeneratePin } from "./_components/generate-pin";
import { HaveIssue } from "./_components/have-issue";
import { getAccountByUserId } from "@/server/actions/get-accounts";

export default async function PinsPage() {
  const pins = await getAllPins();
  const session = await auth()
  const userId = session?.user?.id;
  const account = await getAccountByUserId(userId ?? '');

  const data = [
    { id: 1, title: 'Pins Generated', icon: Rocket, value: pins.filter(pin => pin.userId === account?.providerAccountId).length },
    { id: 2, title: 'Used Pins', icon: Server, value: pins.filter(pin => pin.userId === account?.providerAccountId && pin.isUsed).length },
    { id: 3, title: 'Total Pins Used', icon: StackIcon, value: pins.filter(pin => pin.isUsed).length },
  ]
  return (
    <>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Pins</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>

      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 h-20">
          {data.map(card => (
            <div key={card.id} className="flex items-center gap-4 rounded-md bg-muted/50 p-4 shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-skailar/15">
                {<card.icon className="size-5 text-skailar" />}
              </div>
              <div>
                <h4 className="text-sm font-medium text-muted-foreground">{card.title}</h4>
                <p className="text-lg font-semibold">{card.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-lg p-4 bg-muted/50 text-center">
          Our actual version is <span className="text-skailar font-bold">BETA</span>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr,300px]">
          <TableSectionServer />

          <div className="space-y-8">
            <GeneratePin userId={session?.user?.id as string} discordId={account?.providerAccountId ?? ''} />
            <HaveIssue />
          </div>
        </div>
      </div>
    </>
  );
}