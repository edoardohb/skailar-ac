import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2 } from "lucide-react"

export const StringExtracted = () => {
  return (
    <Card className="bg-muted/50">
      <CardHeader className="flex flex-row items-center gap-2">
        <span className="flex items-center justify-center bg-skailar/15 rounded-md p-2">
          <Code2 className="h-5 w-5 text-skailar" />
        </span>
        <CardTitle>Strings Extracted</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between">
          <span className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-skailar" />
            File Name
          </span>
          <span className="text-muted-foreground">FILE</span>
        </div>
        <div className="flex justify-between">
          <span className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-skailar" />
            File Size
          </span>
          <span className="text-muted-foreground">BYTES</span>
        </div>
        <div className="flex justify-between">
          <span className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-red-500" />
            MD5
          </span>
          <span className="text-muted-foreground">MD5</span>
        </div>
        <div className="flex justify-between">
          <span className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-pink-500" />
            Sha256
          </span>
          <span className="text-muted-foreground">SHA256</span>
        </div>
        <div className="flex justify-between">
          <span className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-yellow-500" />
            PcaSvc
          </span>
          <span className="text-muted-foreground">PCA</span>
        </div>
        <div className="flex justify-between">
          <span className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500" />
            DPS
          </span>
          <span className="text-muted-foreground">DPS</span>
        </div>
      </CardContent>
    </Card>
  )
}