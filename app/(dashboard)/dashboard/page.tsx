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
import { getAllSubscriptions } from "@/server/actions/get-subscriptions";
import { getAllUsers } from "@/server/actions/get-users";
import { auth } from "@/server/auth";
import { CheckCircle2, CreditCard, Pin, Users } from "lucide-react";
import { ShowUser } from "../_components/show-user";

export default async function DashboardPage() {
  const session = await auth();
  const pins = await getAllPins();
  const subscriptions = await getAllSubscriptions();
  const users = await getAllUsers();

  const dataCards = [
    {
      icon: <Pin className="size-5 text-skailar" />,
      title: "Total Pins",
      value: pins.length ?? 0,
    },
    {
      icon: <CheckCircle2 className="size-5 text-skailar" />,
      title: "Total Results",
      value: 0,
    },
    {
      icon: <CreditCard className="size-5 text-skailar" />,
      title: "Total Subscriptions",
      value: subscriptions.length ?? 0,
    },
    {
      icon: <Users className="size-5 text-skailar" />,
      title: "Total Users",
      value: users.length ?? 0,
    },
  ];

  return (
    <>
      <header className="flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Dashboard</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="pr-4">
          <ShowUser id={session?.user?.id ?? ""} />
        </div>
      </header>

      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {dataCards.map((card, index) => (
            <div key={index} className="flex items-center gap-4 rounded-md bg-muted/50 p-4 shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-skailar/15">
                {card.icon}
              </div>
              <div>
                <h4 className="text-sm font-medium text-muted-foreground">{card.title}</h4>
                <p className="text-lg font-semibold">{card.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="min-h-[100vh] flex-1 rounded-md bg-muted/50 md:min-h-min" />
      </div>
    </>
  );
}