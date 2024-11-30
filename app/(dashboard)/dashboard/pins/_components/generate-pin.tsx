"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Check, Copy, Rocket } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const GeneratePin = ({ userId, discordId }: { userId: string, discordId: string }) => {
  const [pin, setPin] = useState<string | null>(null);
  const [link, setLink] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const router = useRouter()

  const handleGeneratePin = async () => {
    setIsDisabled(true)
    try {
      const res = await fetch("/api/v1/pin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: discordId,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to generate pin");
      }

      const newPin = await res.json();
      setPin(newPin.pin);
      setLink(newPin.link);
      router.refresh();
    } catch (error) {
      console.error("Error generating pin:", error);
    } finally {
      setIsDisabled(false)
    }
  };

  const handleCopyPin = () => {
    if (pin) {
      navigator.clipboard.writeText(pin);
      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 5000);
    }
  };

  return (
    <Card className="w-full bg-muted/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="flex items-center justify-center bg-[rgba(150,29,225,.15)] rounded-md p-2">
            <Rocket className="h-5 w-5 text-skailar" />
          </span>
          Generate Pin
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className=" text-muted-foreground">
          Generate the FiveM pin to use it in your scan
        </p>
        <div className="flex items-center gap-2">
          <Input
            placeholder="Generated Pin"
            value={pin || ""}
            readOnly
          />
          <Button disabled={isCopied} variant="ghost" size="icon" onClick={handleCopyPin}>
            {isCopied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>
        <Button disabled={isCopied || isDisabled} variant="skailar" className="w-full" onClick={handleGeneratePin}>
          Generate Pin
        </Button>
      </CardContent>
    </Card>
  );
};
