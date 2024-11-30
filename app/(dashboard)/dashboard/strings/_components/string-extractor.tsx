'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cloud, Code2 } from "lucide-react"
import { useCallback } from "react"
import { useDropzone } from "react-dropzone"

export const StringExtractor = () => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log('Dropped files:', acceptedFiles)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/x-msdownload': ['.exe'],
      'application/java-archive': ['.jar'],
    },
  })

  return (
    <Card className="bg-muted/50">
      <CardHeader className="flex flex-row items-center gap-2">
        <span className="flex items-center justify-center bg-skailar/15 rounded-md p-2">
          <Code2 className="h-5 w-5 text-skailar" />
        </span>
        <CardTitle>Strings Extractor</CardTitle>
      </CardHeader>
      <CardContent>
        <div
          {...getRootProps()}
          className="flex h-[200px] cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-muted-foreground/25 transition-colors hover:border-muted-foreground/50"
        >
          <input {...getInputProps()} />
          <Cloud className="mb-2 h-10 w-10 text-muted-foreground" />
          {isDragActive ? (
            <p className="text-sm text-muted-foreground">Drop your files here</p>
          ) : (
            <p className="text-sm text-muted-foreground text-center">
              Drag or drop your files here or click to upload
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}