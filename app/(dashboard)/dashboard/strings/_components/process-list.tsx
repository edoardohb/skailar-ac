import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Globe, Plus } from "lucide-react"

export const ProcessList = () => {
  return (
    <Card className="bg-muted/50">
      <CardHeader className="flex flex-row items-center gap-2">
        <span className="flex items-center justify-center bg-skailar/15 rounded-md p-2">
          <Globe className="h-5 w-5 text-skailar" />
        </span>
        <CardTitle>Process List</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input placeholder="Process Name" />
        <Input placeholder="Process" />
        <Button variant="skailar" className="w-full gap-2">
          <Plus className="h-4 w-4" />
          Add Process
        </Button>
      </CardContent>
    </Card>
  )
}