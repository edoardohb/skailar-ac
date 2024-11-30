import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cloud, Upload } from "lucide-react"

export const ExeUploader = () => {
  return (
    <Card className="bg-muted/50">
      <CardHeader className="flex flex-row items-center gap-2">
        <span className="flex items-center justify-center bg-skailar/15 rounded-md p-2">
          <Upload className="h-5 w-5 text-skailar" />
        </span>
        <CardTitle>Upload exe</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex h-[200px] cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-muted-foreground/25 transition-colors hover:border-muted-foreground/50">
          <Cloud className="mb-2 h-10 w-10 text-muted-foreground" />
          <p className="text-center text-sm text-muted-foreground">Click to upload</p>
          <p className="text-center text-xs text-muted-foreground">EXE, JAR</p>
        </div>
        <Button variant="skailar" className="w-full gap-2">
          <Upload className="h-4 w-4" />
          Upload
        </Button>
      </CardContent>
    </Card>
  )
}