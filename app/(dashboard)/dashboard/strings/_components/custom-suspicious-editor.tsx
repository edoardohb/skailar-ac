import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea";
import { CloudUpload, Wand2, X } from "lucide-react"

export const CustomSuspiciousEditor = (props: any) => {
  return (
    <Card className="bg-muted/50">
      <CardHeader className="flex flex-row items-center gap-2">
        <span className="flex items-center justify-center bg-skailar/15 rounded-md p-2">
          <Wand2 className="h-5 w-5 text-skailar" />
        </span>
        <CardTitle>Custom Suspicious</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Textarea
          className="min-h-[200px] flex-1 resize-none h-full rounded-md p-4 font-mono text-sm flex"
        />

        <div className="flex justify-center">
          <div className="w-1/2 flex justify-center gap-2 items-center">
            <Button variant="skailar" className="w-full gap-2">
              <CloudUpload className="h-4 w-4 text-skailar" />
              Upload
            </Button>
            <Button variant="danger" className="w-full gap-2">
              <X className="h-4 w-4 text-danger" />
              Clear
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}