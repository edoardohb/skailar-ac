'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Link1Icon } from "@radix-ui/react-icons"
import Link from "next/link"
import { useState } from "react"

interface Pin {
  id: string
  pin: string
  isUsed: boolean
  result: string | null
  link: string
  userId: string
  used_at: Date | null;
}

interface TableSectionClientProps {
  filteredPins: Pin[]
}

export const TableSection = ({ filteredPins }: TableSectionClientProps) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [recordsPerPage, setRecordsPerPage] = useState(6)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredAndSearchedPins = filteredPins.filter(pin =>
    pin.pin.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const totalPages = Math.ceil(filteredAndSearchedPins.length / recordsPerPage)

  const indexOfLastPin = currentPage * recordsPerPage
  const indexOfFirstPin = indexOfLastPin - recordsPerPage
  const currentPins = filteredAndSearchedPins.slice(indexOfFirstPin, indexOfLastPin)

  const handleEntriesChange = (value: string) => {
    const newRecordsPerPage = parseInt(value, 10)
    setRecordsPerPage(newRecordsPerPage)
    setCurrentPage(1)
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    setCurrentPage(1)
  }

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Show</span>
          <Select value={recordsPerPage.toString()} onValueChange={handleEntriesChange}>
            <SelectTrigger className="w-20">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="6">6</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
            </SelectContent>
          </Select>
          <span className="text-sm text-muted-foreground">entries</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Search by PIN:</span>
          <Input
            className="w-full sm:w-64"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search PIN"
          />
        </div>
      </div>

      <div className="rounded-lg border bg-muted/50">
        <Table className="min-w-full shadow-md rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="text-left text-sm font-semibold text-gray-700">
              <TableHead className="py-3 px-4">PIN</TableHead>
              <TableHead className="py-3 px-4">USED</TableHead>
              <TableHead className="py-3 px-4">RESULT</TableHead>
              <TableHead className="py-3 px-4">USED AT</TableHead>
              <TableHead className="py-3 px-4">SOFTWARE</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {currentPins.map(pin => (
              <TableRow
                key={pin.id}
                className="border-b transition duration-200 ease-in-out"
              >
                <TableCell className="py-3 px-4 text-sm text-muted-foreground">{pin.pin}</TableCell>
                <TableCell className="py-3 px-4 text-sm text-muted-foreground">
                  {pin.isUsed ? (
                    <span className="text-green-500 font-medium">Yes</span>
                  ) : (
                    <span className="text-red-500 font-medium">No</span>
                  )}
                </TableCell>
                <TableCell className="py-3 px-4 text-sm text-muted-foreground">
                  <Link href={`${pin.link}`} target="_blank">
                    <Link1Icon className="h-4 w-4 text-[rgb(150,29,225)] hover:text-purple-700 transition duration-200" />
                  </Link>
                </TableCell>
                <TableCell className="py-3 px-4 text-sm text-muted-foreground">
                  <p>{pin.used_at ? pin.used_at.toLocaleString() : 'None'}</p>
                </TableCell>
                <TableCell className="py-3 px-4">
                  <Link href={`https://dl.skailar.com/${pin.pin}`} className="text-purple hover:text-purple/80 transition duration-200" target="_blank">
                    Download Here
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="flex flex-col items-center justify-between gap-4 border-t p-4 sm:flex-row">
          <div className="text-sm text-muted-foreground">
            Showing {indexOfFirstPin + 1} to {indexOfLastPin} of {filteredAndSearchedPins.length} entries
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
