import { ChevronLeft } from "lucide-react"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { UserAuthForm } from "@/components/user-auth-form"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Login | Napse",
  description: "Login to your Napse account for ScreenShare FiveM",
}

export default function LoginPage() {
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
              <Image src='/logo.png' alt="Napse" width={80} height={80} className="mb-2" />
            </Link>
          </div>
          <CardTitle className="text-2xl font-bold text-center">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-purple-400 to-napse bg-clip-text text-transparent">
              Napse
            </span>
          </CardTitle>
          <CardDescription className="text-center text-sm text-muted-foreground">
            Software for ScreenShare FiveM
          </CardDescription>
        </CardHeader>
        <CardContent>
          <UserAuthForm />
        </CardContent>
      </Card>
    </div>
  )
}

