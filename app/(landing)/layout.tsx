import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { auth } from "@/server/auth";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  const session = await auth();

  return (
    <>
      <SiteHeader session={session} />
      <main className="mx-auto flex-1 overflow-hidden">{children}</main>
      <SiteFooter />
    </>
  );
}
