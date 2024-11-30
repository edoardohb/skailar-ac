'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cloud, Code2 } from "lucide-react"
import { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"
import crypto from "crypto" // For generating hash values

const StringExtractor = ({ onFileExtract }: { onFileExtract: (fileInfo: any) => void }) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const fileData = acceptedFiles.map(async (file) => {
        const fileContent = await file.arrayBuffer()
        const buffer = Buffer.from(new Uint8Array(fileContent))
        const md5 = crypto.createHash("md5").update(buffer).digest("hex")
        const sha256 = crypto.createHash("sha256").update(buffer).digest("hex")
        const pcaSvc = buffer.byteLength % 10
        const dps = Array.from(buffer).reduce((sum, byte) => sum + byte, 0) % 100

        return {
          name: file.name,
          size: file.size,
          md5,
          sha256,
          pcaSvc,
          dps,
        }
      })

      Promise.all(fileData).then((files) => onFileExtract(files))
    },
    [onFileExtract]
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/x-msdownload": [".exe"],
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
            <p className="text-sm text-muted-foreground text-center mx-px">
              Drag or drop your files here or click to upload
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

const StringExtracted = ({ fileInfo }: { fileInfo: any[] }) => {
  const hasFiles = fileInfo && fileInfo.length > 0

  return (
    <Card className="bg-muted/50">
      <CardHeader className="flex flex-row items-center gap-2">
        <span className="flex items-center justify-center bg-skailar/15 rounded-md p-2">
          <Code2 className="h-5 w-5 text-skailar" />
        </span>
        <CardTitle>Strings Extracted</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {hasFiles
          ? fileInfo.map((file) => (
            <div key={file.name} className="space-y-4">
              <div className="flex justify-between">
                <span className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-skailar" />
                  File Name
                </span>
                <span className="text-muted-foreground">{file.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-skailar" />
                  File Size
                </span>
                <span className="text-muted-foreground">{`${file.size} bytes`}</span>
              </div>
              <div className="flex justify-between">
                <span className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-500" />
                  MD5
                </span>
                <span className="text-muted-foreground truncate ml-2">{file.md5}</span>
              </div>
              <div className="flex justify-between">
                <span className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-pink-500" />
                  Sha256
                </span>
                <span className="text-muted-foreground truncate ml-2">{file.sha256}</span>
              </div>
              <div className="flex justify-between">
                <span className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-yellow-500" />
                  PcaSvc
                </span>
                <span className="text-muted-foreground">{file.pcaSvc}</span>
              </div>
              <div className="flex justify-between">
                <span className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                  DPS
                </span>
                <span className="text-muted-foreground">{file.dps}</span>
              </div>
            </div>
          ))
          :
          [
            { label: "File Name", value: "FILE" },
            { label: "File Size", value: "BYTES" },
            { label: "MD5", value: "MD5" },
            { label: "Sha256", value: "SHA256" },
            { label: "PcaSvc", value: "PCA" },
            { label: "DPS", value: "DPS" },
          ].map((item) => (
            <div key={item.label} className="flex justify-between">
              <span className="flex items-center gap-2">
                <div
                  className={`h-2 w-2 rounded-full ${item.label === "MD5"
                      ? "bg-red-500"
                      : item.label === "Sha256"
                        ? "bg-pink-500"
                        : item.label === "PcaSvc"
                          ? "bg-yellow-500"
                          : item.label === "DPS"
                            ? "bg-green-500"
                            : "bg-skailar"
                    }`}
                />
                {item.label}
              </span>
              <span className="text-muted-foreground">{item.value}</span>
            </div>
          ))}
      </CardContent>
    </Card>
  )
}

export const FileProcessor = () => {
  const [fileInfo, setFileInfo] = useState<any[]>([])

  return (
    <>
      <StringExtractor onFileExtract={setFileInfo} />
      <StringExtracted fileInfo={fileInfo} />
    </>
  )
}