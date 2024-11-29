import { SiteFooter } from "@/components/site-footer";
import { getAccountByUserId } from "@/server/actions/get-accounts";
import { auth } from "@/server/auth";
import { SiteHeader } from "./_components/site-header";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  const session = await auth();
  const user = await getAccountByUserId(session?.user?.id ?? '');

  return (
    <>
      <SiteHeader session={session} user={user} />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </>
  );
}
