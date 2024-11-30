"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const UploadedFiles = ({
  exes
}: {
  exes: {
    id: string;
    name: string;
    userId: string;
    clientName: string;
  }[]
}) => {
  const router = useRouter()

  const handleDelete = async (id: string) => {
    const response = await fetch(`/api/v1/exe`, {
      method: "DELETE",
      body: JSON.stringify({ id }),
    })

    if (response.ok) {
      toast.success("File deleted successfully!")
      return router.refresh()
    }

    toast.error("An unexpected error occurred. Please try again.")
  }

  return (
    <Card className="bg-muted/50">
      <CardHeader>
        <CardTitle>Your files uploaded</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-sm">Show</span>
            <Select defaultValue="10">
              <SelectTrigger className="w-20">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="25">25</SelectItem>
                <SelectItem value="50">50</SelectItem>
              </SelectContent>
            </Select>
            <span className="text-sm">entries</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">Search:</span>
            <Input className="w-64" />
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Filename</TableHead>
              <TableHead>Client Name</TableHead>
              <TableHead className="w-24">Delete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {exes.map((exe: any) => (
              <TableRow key={exe?.id}>
                <TableCell className="text-muted-foreground">
                  {exe?.name}
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {exe?.clientName}
                </TableCell>
                <TableCell className="w-24">
                  <Button onClick={() => handleDelete(exe?.id)} variant="danger" size="icon">
                    <Trash className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex items-center justify-between mt-4">
          <div className="text-sm text-muted-foreground">
            Showing 0 to 0 of {exes?.length} entries
          </div>
          <div className="flex gap-2">
            <Button variant="outline" disabled>
              Previous
            </Button>
            <Button variant="outline" disabled>
              Next
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}