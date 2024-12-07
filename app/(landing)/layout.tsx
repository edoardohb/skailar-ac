import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getAccountByUserId } from "@/server/actions/get-accounts";
import { auth } from "@/server/auth";

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
      <main className="mx-auto flex-1 overflow-hidden">{children}</main>
      <SiteFooter />
    </>
  );
}
