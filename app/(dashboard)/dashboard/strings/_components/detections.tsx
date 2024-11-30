import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield } from "lucide-react"

export const Detections = () => {
  return (
    <Card className="bg-muted/50">
      <CardHeader className="flex flex-row items-center gap-2">
        <span className="flex items-center justify-center bg-skailar/15 rounded-md p-2">
          <Shield className="h-5 w-5 text-skailar" />
        </span>
        <CardTitle>Detections</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex h-[200px] items-center justify-center">
          <p className="text-sm text-muted-foreground">No detections yet</p>
        </div>
      </CardContent>
    </Card>
  )
}