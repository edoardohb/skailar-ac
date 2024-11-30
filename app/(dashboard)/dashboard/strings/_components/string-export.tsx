import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { FileDown } from "lucide-react"

export const StringExport = () => {
  return (
    <Card className="bg-muted/50">
      <CardHeader className="flex flex-row items-center gap-2">
        <span className="flex items-center justify-center bg-skailar/15 rounded-md p-2">
          <FileDown className="h-5 w-5 text-skailar" />
        </span>
        <CardTitle>Export strings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Select defaultValue="DPS">
          <SelectTrigger>
            <SelectValue placeholder="Process" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="DPS">DPS</SelectItem>
          </SelectContent>
        </Select>
        <Textarea
          className="min-h-[200px] resize-none bg-muted/50"
          placeholder="Strings format: Client Name::String"
          readOnly
        />
        <Button variant="skailar" className="w-full gap-2">
          <FileDown className="h-4 w-4" />
          Export string
        </Button>
      </CardContent>
    </Card>
  )
}