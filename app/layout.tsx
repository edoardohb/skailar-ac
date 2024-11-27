import BanComponent from "@/components/bans/ban";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { getAllBansByUserId, getBanByUserId } from "@/server/actions/get-bans";
import { auth } from "@/server/auth";
import type { Metadata } from "next";
import { Montserrat } from 'next/font/google';
import "./globals.css";

const monserratSans = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Skailar",
  description: "Revolutionize Cheaters Detection Like Never Before!",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  const ban = await getBanByUserId(session?.user?.id ?? "");
  const allBans = await getAllBansByUserId(session?.user?.id ?? "");
  const isBanned = ban?.expires_at && new Date(ban.expires_at).getTime() > Date.now();

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          monserratSans.variable
        )}
      >
        {isBanned ? (
          <BanComponent ban={ban} allBans={allBans} />
        ) : (
          <>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              disableTransitionOnChange
            >
              {children}
              <Toaster />
            </ThemeProvider>
          </>
        )}
      </body>
    </html>
  );
}