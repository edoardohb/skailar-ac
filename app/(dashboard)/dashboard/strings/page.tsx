import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { AddString } from "./_components/add-string";
import { CustomSuspiciousEditor } from "./_components/custom-suspicious-editor";
import { Detections } from "./_components/detections";
import { ExeUploader } from "./_components/exe-uploader";
import { ProcessList } from "./_components/process-list";
import { StringExport } from "./_components/string-export";
import { StringExtracted } from "./_components/string-extracted";
import { StringExtractor } from "./_components/string-extractor";
import { StringImport } from "./_components/string-import";
import { StringList } from "./_components/string-list";
import { UploadSection } from "./_components/upload-section";
import { UploadedFiles } from "./_components/uploaded-files";
import { ShowUser } from "../../_components/show-user";
import { auth } from "@/server/auth";

export default async function StringsPage() {
  const session = await auth();

  return (
    <>
      <header className="flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Strings</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="pr-4">
          <ShowUser id={session?.user?.id ?? ""} />
        </div>
      </header>

      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid gap-6 md:grid-cols-3">
          <StringExtractor />
          <StringExtracted />
          <Detections />
        </div>

        <UploadSection />
        <UploadedFiles />

        <div className="grid gap-6 md:grid-cols-2">
          <ProcessList />
          <AddString />
        </div>

        <StringList />

        <div className="grid gap-6 md:grid-cols-2">
          <StringImport />
          <StringExport />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <CustomSuspiciousEditor />
          <ExeUploader />
        </div>
      </div>
    </>
  );
}