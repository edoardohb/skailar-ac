import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getPinByPinId } from "@/server/actions/get-pins";
import { format } from 'date-fns';
import { Box, Check, CheckCircle, Code, Monitor, Timer, XCircle } from 'lucide-react';
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaSteam } from "react-icons/fa6";

interface Params {
  pin: string;
}

export default async function PinResult({ params }: { params: { pinId: string } }) {
  const { pinId } = params;

  const pinComplete = await getPinByPinId(pinId)

  if (!pinComplete?.pin) return notFound();

  if (pinId !== pinComplete?.pin) return notFound();

  if (!pinComplete.isUsed) {
    return (
      <section
        className="flex flex-col justify-center items-center min-h-screen py-12 px-6 space-y-6"
        aria-live="polite"
      >
        <div
          className="flex justify-center items-center bg-danger/25 text-white p-3 rounded-md shadow-lg"
          role="alert"
        >
          <XCircle className="h-6 w-6 text-danger" />
        </div>

        <p className="text-2xl font-semibold text-muted-foreground mb-4 text-center">
          This PIN has not been used yet.
        </p>

        <p className="text-sm text-gray-600 mb-6 text-center">
          Please check back later or contact support for further assistance.
        </p>

        <Button variant="skailar" asChild>
          <Link
            href="/dashboard/pins"
            aria-label="Go to Pins dashboard"
          >
            Go to Pins
          </Link>
        </Button>

        <span className="text-gray-700 mt-10 text-[10px] font-bold flex flex-col items-center space-y-1">
          <p>Pin ID: {pinComplete.id} &mdash; Pin: {pinComplete.pin}</p>
          <p>Created At: {format(pinComplete.created_at, 'dd MMM yyyy - HH:mm:ss')}</p>
        </span>
      </section>
    );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 animate-in">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="border-border bg-background">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-semibold">System</CardTitle>
            <span className="bg-pink-600/20 p-2 rounded-md">
              <Monitor className="h-4 w-4 text-pink-400" />
            </span>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-center gap-2 border p-2 rounded-md">
              <Monitor className="h-4 w-4 text-pink-400" />
              <span className="text-sm text-muted-foreground">PIN:</span>
            </div>
            <div className="flex items-center gap-2 border p-2 rounded-md">
              <Monitor className="h-4 w-4 text-pink-400" />
              <span className="text-sm text-muted-foreground">Date:</span>
            </div>
            <div className="flex items-center gap-2 border p-2 rounded-md">
              <Monitor className="h-4 w-4 text-pink-400" />
              <span className="text-sm text-muted-foreground">PC Name: [username]</span>
            </div>
            <div className="flex items-center gap-2 border p-2 rounded-md">
              <Monitor className="h-4 w-4 text-pink-400" />
              <span className="text-sm text-muted-foreground">RecycleBin: [data]</span>
            </div>
            <div className="flex items-center gap-2 border p-2 rounded-md">
              <Monitor className="h-4 w-4 text-pink-400" />
              <span className="text-sm text-muted-foreground">HWID: [hwid]</span>
            </div>
            <div className="flex items-center gap-2 border p-2 rounded-md">
              <Monitor className="h-4 w-4 text-pink-400" />
              <span className="text-sm text-muted-foreground">OS: [os]</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border bg-background">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-semibold">Steam (1)</CardTitle>
            <span className="bg-blue-600/20 p-2 rounded-md">
              <FaSteam className="h-4 w-4 text-blue-400" />
            </span>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 border p-2 rounded-md">
              <FaSteam className="h-4 w-4 text-blue-400" />
              <span className="text-sm text-muted-foreground">
                ID: [steamId] - Account: [steamName]
              </span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border bg-background">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-semibold">Checks</CardTitle>
            <span className="bg-yellow-600/20 p-2 rounded-md">
              <Check className="h-4 w-4 text-yellow-400" />
            </span>
          </CardHeader>
          <CardContent className="space-y-2">
            {['Prefetch recreated in: [Data]', 'Recycle recreated in: [Data]', 'CrashDumps modified in: [Data]', 'FIVEM.EXE running at [min]'].map((process) => (
              <div key={process} className="flex items-center gap-2 border p-2 rounded-md">
                <Check className="h-4 w-4 text-yellow-400" />
                <span className="text-sm text-muted-foreground">{process}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-border bg-background">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-semibold">Process</CardTitle>
            <span className="bg-blue-600/20 p-2 rounded-md">
              <Box className="h-4 w-4 text-blue-400" />
            </span>
          </CardHeader>
          <CardContent className="space-y-2">
            {['PCASVC: Running', 'DPS: Running', 'DIAGTRACK: Running', 'SYSMAIN: Running', 'EVENTLOG: Running'].map((process) => (
              <div key={process} className="flex items-center gap-2 border p-2 rounded-md">
                <Box className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-muted-foreground">{process}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-border bg-background">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-semibold">Timers</CardTitle>
            <span className="bg-green-600/20 p-2 rounded-md">
              <Timer className="h-4 w-4 text-green-400" />
            </span>
          </CardHeader>
          <CardContent className="space-y-2">
            {[
              'Installer Windows: [data]',
              'Start System: [data]',
              'Explorer: [data]'
            ].map((timer) => (
              <div key={timer} className="flex items-center gap-2 border p-2 rounded-md">
                <Timer className="h-4 w-4 text-green-400" />
                <span className="text-sm text-muted-foreground">{timer}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-border bg-background">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-semibold">Prefetch (0)</CardTitle>
            <span className="bg-orange-600/20 p-2 rounded-md">
              <Code className="h-4 w-4 text-orange-400" />
            </span>
          </CardHeader>
          <CardContent className="space-y-2">
            {[
              'POWERSHELL.EXE - [data]',
              'CONHOST.EXE - [data]',
              'TASKKILL.EXE - [data]'
            ].map((prefetch) => (
              <div key={prefetch} className="flex items-center gap-2 border p-2 rounded-md">
                <Code className="h-4 w-4 text-orange-400" />
                <span className="text-sm text-muted-foreground">{prefetch}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-border bg-background">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-semibold">BAM Executed Files (0)</CardTitle>
            <span className="bg-[#9e28cc]/20 p-2 rounded-md">
              <CheckCircle className="h-4 w-4 text-[#9e28cc]" />
            </span>
          </CardHeader>
          <CardContent className="space-y-2">
            {[].map((prefetch) => (
              <div key={prefetch} className="flex items-center gap-2 border p-2 rounded-md">
                <Code className="h-4 w-4 text-[#9e28cc]" />
                <span className="text-sm text-muted-foreground">{prefetch}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-border bg-background">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-semibold">BAM Deleted Files (0)</CardTitle>
            <span className="bg-[#c500b5]/20 p-2 rounded-md">
              <Code className="h-4 w-4 text-[#c500b5]" />
            </span>
          </CardHeader>
          <CardContent className="space-y-2">
            {[].map((prefetch) => (
              <div key={prefetch} className="flex items-center gap-2 border p-2 rounded-md">
                <Code className="h-4 w-4 text-[#c500b5]" />
                <span className="text-sm text-muted-foreground">{prefetch}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
