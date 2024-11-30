import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Tag, X } from "lucide-react"

export const AddString = () => {
  return (
    <Card className="bg-muted/50">
      <CardHeader className="flex flex-row items-center gap-2">
        <span className="flex items-center justify-center bg-skailar/15 rounded-md p-2">
          <Tag className="h-5 w-5 text-skailar" />
        </span>
        <CardTitle>Add String</CardTitle>
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
        <Input placeholder="Client Name" />
        <Input placeholder="String" />
        <Select defaultValue="detect">
          <SelectTrigger>
            <SelectValue placeholder="Severity" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="detect">Detect</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex gap-2">
          <Button variant="skailar" className="flex-1 gap-2">
            <Plus className="h-4 w-4" />
            Add String
          </Button>
          <Button variant="danger" size='icon' >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}