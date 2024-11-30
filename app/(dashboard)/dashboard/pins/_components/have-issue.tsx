import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { FaDiscord } from "react-icons/fa6"

export const HaveIssue = () => {
  return (
    <Card className="w-full bg-muted/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="flex items-center justify-center bg-discord/15 rounded-md p-2">
            <FaDiscord className="h-5 w-5 text-discord" />
          </span>
          Join Discord
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Have any issue? Join Discord.
        </p>
        <Button variant="discord" className="w-full" asChild>
          <Link href='https://discord.gg/skailar' target="_blank">
            Join Discord
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}