import { cn } from "@/lib/utils";
import { CalendarIcon, File, MousePointer2, Pencil, Radar, Zap } from "lucide-react";
import { BentoCard, BentoGrid } from "../magicui/bento-grid";
import Globe from "../magicui/globe";
import GridPattern from "../magicui/grid-pattern";
import Meteors from "../magicui/meteors";
import { Calendar } from "../ui/calendar";
import Image from "next/image";


export default function FeatureSection() {
  const features = [
    {
      Icon: MousePointer2,
      name: "Easy To Use",
      description: "In just 3 clicks, you'll get unimaginable quality.",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
      Icon: Radar,
      name: "Public API",
      description: "The opportunity for developers to automate the tool to their liking.",
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
      background: <></>,
    },
    {
      Icon: Pencil,
      name: "Custom Strings",
      description: "We offer a clean and customizable service.",
      href: "/",
      cta: "Learn more",
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
      background: (
        <div className="hidden sm:block transition-all duration-300 opacity-60 group-hover:opacity-100">
          <Meteors number={40} />
        </div>),
    },
    {
      Icon: Zap,
      name: "Fast Scanner",
      description: "Skailar will take no longer than 3 minutes.",
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
      background: <GridPattern
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />,
    },
    {
      Icon: File,
      name: "Legal & Safe",
      description:
        "This software is safe and efficient for detecting cheats on FiveM.",
      href: "/",
      cta: "Learn more",
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
      background: (
        <div className="hidden sm:block transition-all duration-300 opacity-60 group-hover:opacity-100">
          <Image fill alt="Security" src="https://cdn.skailar.ac/v1/assets/background/security.png" className="absolute w-full top-7 -right-28 opacity-60" />
        </div>
      ),
    },
    {
      Icon: Radar,
      name: "Real Detections",
      description:
        "Our detections are verified by various minds and digital forensics services.",
      className: "col-span-3 lg:col-span-2",
      background: (
        <div className="absolute inset-0 mx-auto aspect-[1/1] max-w-[600px] top-0 h-[600px] w-[600px] transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_30%,#000_100%)] group-hover:scale-105 sm:left-40">
          <Globe className="h-full w-full opacity-1 transition-opacity duration-500" />
        </div>
      ),
    },
    {
      Icon: CalendarIcon,
      name: "24/7 support",
      description:
        "We offer enviable support.",
      href: "/",
      cta: "Learn more",
      className: "col-span-3 lg:col-span-1",
      background: (
        <div className="hidden sm:block transition-all duration-300 opacity-60 group-hover:opacity-100">
          <Calendar
            mode="single"
            selected={new Date()}
            className="absolute right-0 top-10 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
          />
        </div>),
    },
  ];

  return (
    <div id="features" className="mt-48 relative">
      <div className="container max-w-screen-xl w-full flex flex-col items-center justify-center">
        <div>
          <div className="flex items-center gap-2 bg-skailar/15 rounded-md p-2">
            <p className="text-sm text-skailar font-medium">Features</p>
          </div>
        </div>

        <h2 className="mt-4 mb-2 text-5xl font-bold tracking-tight text-black dark:text-white sm:text-6xl text-center">
          A reliable{' '}
          <span className="bg-gradient-to-r from-purple-300 to-skailar bg-clip-text text-transparent">
            solution
          </span>{' '}
          for cheaters
        </h2>

        <p className="text-center text-muted-foreground text-lg mt-2 font-medium max-w-xl mx-auto">
          Discover why Skailar&apos;s quality and service surpass everything.
        </p>

        <div className="py-28 relative flex max-w-[90rem] flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl">
          <BentoGrid className="lg:grid-rows-3">
            {features.map((feature) => (
              <BentoCard key={feature.name} {...feature} />
            ))}
          </BentoGrid>
        </div>
      </div>
    </div>
  )
}