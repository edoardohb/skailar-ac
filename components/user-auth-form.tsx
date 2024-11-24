"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import discordLogin from "@/server/actions/discord-login";
import { Loader2 } from "lucide-react";
import * as React from "react";
import { FaDiscord } from "react-icons/fa6";
import { toast } from "sonner";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isDiscordLoading, setIsDiscordLoading] = React.useState<boolean>(false);

  async function onSignInDiscord() {
    try {
      setIsDiscordLoading(true);
      await discordLogin();
    } catch (error) {
      toast.error("Discord sign in failed", {
        description: "Please try again.",
      });
    } finally {
      setIsDiscordLoading(false);
    }
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Button
        variant="discord"
        type="button"
        onClick={onSignInDiscord}
        disabled={isDiscordLoading}
      >
        {isDiscordLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <FaDiscord className="mr-2 h-4 w-4" />
        )}{" "}
        Continue with Discord
      </Button>
    </div>
  );
}
