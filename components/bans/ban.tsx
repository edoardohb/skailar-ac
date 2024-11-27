"use client";

import { cn } from "@/lib/utils";
import { Ban, ShieldX } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Particles from "../magicui/particles";

export default function BanComponent({ ban, allBans }: { ban: any, allBans: any }) {
  const [mounted, setMounted] = useState(false);
  const banExpiration = new Date(ban?.expires_at);
  const [timeLeft, setTimeLeft] = useState<string>("");

  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      const now = new Date();
      const diff = banExpiration.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft("Ban expired");
        clearInterval(interval);
        router.refresh();
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, [banExpiration]);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden">
        <Particles
          quantity={200}
          ease={70}
          size={0.30}
          staticity={40}
          color={"#ff0000"}
        />
      </div>

      <div className={cn(
        "relative z-10 max-w-2xl w-full",
        "bg-black/40 backdrop-blur-lg rounded-xl p-8",
        "border border-red-500/20",
        "transform transition-all duration-1000",
        mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      )}>
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className={cn(
            "relative",
            "transform transition-all duration-1000 delay-300",
            mounted ? "scale-100 opacity-100" : "scale-50 opacity-0"
          )}>
            <div className="absolute -inset-1 bg-red-500 rounded-full blur-lg opacity-25 animate-pulse" />
            <Ban className="w-24 h-24 text-red-500 relative" />
          </div>

          <h1 className={cn(
            "text-4xl font-bold tracking-tight",
            "transform transition-all duration-1000 delay-500",
            mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          )}>
            Account Suspended
          </h1>

          <p className={cn(
            "text-gray-400 max-w-md",
            "transform transition-all duration-1000 delay-700",
            mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          )}>
            {ban?.reason ?? 'Your account has been temporarily suspended due to multiple violations of our community guidelines.'}
          </p>

          <div className={cn(
            "bg-black/40 rounded-lg p-4 w-full max-w-sm",
            "transform transition-all duration-1000 delay-900",
            mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          )}>
            <p className="text-sm text-gray-400 mb-2">Time Remaining</p>
            <p className="text-2xl font-mono text-red-400">{timeLeft}</p>
          </div>

          <button
            className={cn(
              "group relative px-8 py-3 mt-4",
              "bg-red-500/10 hover:bg-red-500/20",
              "border border-red-500/50 rounded-lg",
              "transition-all duration-300",
              "transform transition-all duration-1000 delay-1100",
              mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            )}
            disabled={!ban?.isAppealable}
            onClick={() => {
              if (ban?.isAppealable) {
                const subject = encodeURIComponent("Ban Appeal Request");
                const body = encodeURIComponent(
                  `Ban ID: ${ban?.id}\nReason: ${ban?.reason}\nExpires: ${ban?.expires_at}\nTotal Bans: ${allBans?.length}\n\nWhy should we unban you:`
                );
                const mailtoLink = `mailto:support@skailar.ac?subject=${subject}&body=${body}`;
                window.location.href = mailtoLink;
              }
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <ShieldX className="w-4 h-4" />
              Appeal Ban
            </span>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient" />
          </button>

          <p className={cn(
            "text-sm text-gray-600",
            "transform transition-all duration-1000 delay-1300",
            mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          )}>
            Ban ID: {ban?.id}
          </p>
        </div>
      </div>
    </div>
  );
}