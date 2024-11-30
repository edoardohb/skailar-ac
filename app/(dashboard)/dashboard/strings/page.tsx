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
import { getExeByUserId } from "@/server/actions/get-exe";
import { auth } from "@/server/auth";
import { ShowUser } from "../../_components/show-user";
import { AddString } from "./_components/add-string";
import { CustomSuspiciousEditor } from "./_components/custom-suspicious-editor";
import { Detections } from "./_components/detections";
import { ProcessList } from "./_components/process-list";
import { StringExport } from "./_components/string-export";
import { FileProcessor } from "./_components/string-extractor";
import { StringImport } from "./_components/string-import";
import { StringList } from "./_components/string-list";
import { UploadSection } from "./_components/upload-section";
import { UploadedFiles } from "./_components/uploaded-files";

export default async function StringsPage() {
  const session = await auth();
  const exes = await getExeByUserId(session?.user?.id ?? "");

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
          <FileProcessor />
          <Detections />
        </div>
        <UploadSection userId={session?.user?.id ?? ""} />
        <UploadedFiles exes={exes} />

        <div className="grid gap-6 md:grid-cols-2">
          <ProcessList />
          <AddString />
        </div>

        <StringList />

        <div className="grid gap-6 md:grid-cols-2">
          <StringImport />
          <StringExport />
        </div>

        <div className="gap-6">
          <CustomSuspiciousEditor />
        </div>
      </div>
    </>
  );
}