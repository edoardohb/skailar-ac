import { ChevronLeft } from "lucide-react"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { UserAuthForm } from "@/components/user-auth-form"
import { cn } from "@/lib/utils"
import { auth } from "@/server/auth"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "Login | Skailar",
  description: "Login to your Skailar account for ScreenShare FiveM",
}

export default async function LoginPage() {
  const session = await auth();
  if (session) {
    redirect("/");
  }

  return (
    <div className="container relative flex h-screen w-screen flex-col items-center justify-center">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-4 top-4 md:left-8 md:top-8"
        )}
      >
        <ChevronLeft className="mr-2 h-4 w-4" />
        Back
      </Link>
      <Card className="w-full max-w-[400px] shadow-lg">
        <CardHeader className="space-y-1">
          <div className="flex justify-center">
            <Link href="/">
              <Image src='https://cdn.skailar.ac/v1/assets/img/logo.png' alt="Skailar" width={80} height={80} className="mb-2" />
            </Link>
          </div>
          <CardTitle className="text-2xl font-bold text-center">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-purple-400 to-skailar bg-clip-text text-transparent">
              Skailar
            </span>
          </CardTitle>
          <CardDescription className="text-center text-sm text-muted-foreground">
            Software for FiveM ScreenShare
          </CardDescription>
        </CardHeader>
        <CardContent>
          <UserAuthForm />
        </CardContent>
      </Card>
    </div>
  )
}

