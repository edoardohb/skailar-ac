
"use client";

import { buttonVariants } from "@/components/ui/button";
import { UserNavbar } from "@/components/user-navbar";
import Image from "next/image";
import Link from "next/link";

export function SiteHeader({ session, user }: { session: any, user: any }) {
  return (
    <>
      <nav className="bg-black flex sticky top-0 z-20 w-full max-w-full flex-initial items-center justify-center border-b border-gs-gray-alpha-200 backdrop-blur-[12px] [--animation-delay:600ms]">
        <header className="flex w-full flex-col gap-3 p-3 md:h-16 md:flex-row md:items-center lg:px-4 backdrop-blur justify-center">
          <div className="flex w-full max-w-screen-xl items-center justify-center xl:px-0">
            <div className="flex gap-x-2">
              <Link href="/">
                <Image
                  src="https://cdn.skailar.ac/v1/assets/img/logo.png"
                  alt="Skailar"
                  width={80}
                  height={80}
                  className="object-contain w-12 h-12"
                />
              </Link>
            </div>
            <div className="ml-auto flex items-center gap-x-2">
              <Link className={buttonVariants({ variant: "secondary" })} href="/dashboard">
                Get Started
              </Link>

              {session ? (
                <UserNavbar session={session} user={user} />
              ) : (
                <Link className={buttonVariants({ variant: "skailar" })} href="/login">
                  Log in
                </Link>
              )}
            </div>
          </div>
        </header>
        <div className="absolute left-0 top-full flex justify-center"></div>
      </nav>
    </>
  );
}
