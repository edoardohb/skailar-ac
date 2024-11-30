"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Cloud, Upload } from "lucide-react"
import { useRouter } from "next/navigation"
import { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"
import { toast } from "sonner"

export const UploadSection = ({ userId }: { userId: string }) => {
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null)
  const [clientName, setClientName] = useState<string>("")
  const [isUploading, setIsUploading] = useState<boolean>(false)
  const [uploadSuccess, setUploadSuccess] = useState<boolean | null>(null)
  const router = useRouter()

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setUploadedFileName(acceptedFiles[0].name)
    }
  }, [])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "application/x-msdownload": [".exe"],
    },
  })

  const handleUpload = async () => {
    if (!uploadedFileName || !clientName) {
      toast.error("Please upload a file and provide a client name.")
      return
    }

    setIsUploading(true)
    setUploadSuccess(null)

    try {
      const response = await fetch("/api/v1/exe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          name: uploadedFileName,
          clientName
        }),
      })

      if (response.ok) {
        setUploadSuccess(true)
        toast.success("File uploaded successfully!")
      } else {
        setUploadSuccess(false)
        const error = await response.json()
        toast.error(`Error: ${error.message || "Failed to upload the file."}`)
      }
      router.refresh()
    } catch (error) {
      console.error("Upload error:", error)
      setUploadSuccess(false)
      toast.error("An unexpected error occurred. Please try again.")
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <Card className="bg-muted/50">
      <CardHeader className="flex flex-row items-center gap-2">
        <span className="flex items-center justify-center bg-skailar/15 rounded-md p-2">
          <Upload className="h-5 w-5 text-skailar" />
        </span>
        <CardTitle>Upload exe</CardTitle>
      </CardHeader>
      <CardContent>
        <div
          {...getRootProps()}
          className="flex h-[200px] cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-muted-foreground/25 transition-colors hover:border-muted-foreground/50"
        >
          <input {...getInputProps()} />
          <Cloud className="mb-2 h-10 w-10 text-muted-foreground" />
          {uploadedFileName ? (
            <p className="text-center text-sm text-muted-foreground">
              File uploaded: <strong>{uploadedFileName}</strong>
            </p>
          ) : (
            <>
              <p className="text-center text-sm text-muted-foreground">Click to upload</p>
              <p className="text-center text-xs text-muted-foreground">EXE</p>
            </>
          )}
        </div>
        {uploadedFileName && (
          <div className="mt-4">
            <label htmlFor="clientName" className="block text-sm text-muted-foreground mb-1">
              Client Name
            </label>
            <Input
              id="clientName"
              placeholder="Enter client name"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              autoComplete="off"
              className="w-full"
            />
          </div>
        )}
        <Button
          variant="skailar"
          className="mt-4 w-full gap-2"
          onClick={handleUpload}
          disabled={isUploading}
        >
          <Upload className="h-4 w-4" />
          {isUploading ? "Uploading..." : "Upload"}
        </Button>
      </CardContent>
    </Card>
  )
}