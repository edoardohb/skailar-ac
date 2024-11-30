import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { FileUp, Plus } from "lucide-react"

export const StringImport = () => {
  return (
    <Card className="bg-muted/50">
      <CardHeader className="flex flex-row items-center gap-2">
        <span className="flex items-center justify-center bg-skailar/15 rounded-md p-2">
          <FileUp className="h-5 w-5 text-skailar" />
        </span>
        <CardTitle>Import strings</CardTitle>
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
        <Select defaultValue="detect">
          <SelectTrigger>
            <SelectValue placeholder="Severity" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="detect">Detect</SelectItem>
          </SelectContent>
        </Select>
        <Textarea
          className="min-h-[148px] resize-none bg-muted/50"
          placeholder="Client Name::String"
        />
        <Button variant="skailar" className="w-full gap-2">
          <Plus className="h-4 w-4" />
          Import
        </Button>
      </CardContent>
    </Card>
  )
}