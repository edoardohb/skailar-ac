import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { getAccountByUserId } from "@/server/actions/get-accounts";
import { auth } from "@/server/auth";
import { redirect } from "next/navigation";
import { AppSidebar } from "./_components/app-sidebar";
import { getSubscriptionByUserId } from "@/server/actions/get-subscriptions";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  const session = await auth();
  const user = await getAccountByUserId(session?.user?.id ?? '');
  const subscription = await getSubscriptionByUserId(session?.user?.id ?? '');

  if (!session || !user || subscription?.plan === 'Free Plan') {
    return redirect('/login');
  }

  return (
    <SidebarProvider>
      <AppSidebar user={session?.user} subscription={subscription} />
      <SidebarInset>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
