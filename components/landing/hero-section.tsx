"use client";

import { BorderBeam } from "@/components/magicui/border-beam";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedGradientText from "../magicui/animated-gradient-text";
import GridPattern from "../magicui/grid-pattern";
import SparklesText from "../magicui/sparkles-text";

export default function HeroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <GridPattern
        width={50}
        height={50}
        x={30}
        y={30}
        className={cn(
          "[mask-image:radial-gradient(100%_100%_at_top_center,grey,transparent)]",
        )}
      />

      <section
        id="hero"
        className="relative mx-auto mt-32 max-w-[80rem] px-6 text-center md:px-8"
      >
        <AnimatedGradientText>
          🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
          <span
            className={cn(
              `inline animate-gradient bg-gradient-to-r from-purple-200 via-[#9c40ff] to-napse bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
            )}
          >
            Introducing Napse
          </span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedGradientText>
        <h1 className="bg-gradient-to-br dark:from-white/80 from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <SparklesText text="Napse Cheaters Detection" />
        </h1>
        <p className="mb-12 text-lg tracking-tight text-gray-400 md:text-xl text-balance translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          With the most powerful detections to keep your server and community
          <br className="hidden md:block" /> free of cheating.
        </p>
        <Button className="translate-y-[-1rem] animate-fade-in gap-1 rounded-lg text-white dark:text-black opacity-0 ease-in-out [--animation-delay:600ms]">
          <span>Get Started</span>
          <ArrowRightIcon className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
        </Button>
        <div
          ref={ref}
          className="relative mt-[8rem] animate-fade-up opacity-0 [--animation-delay:400ms] [perspective:2000px] after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,hsl(var(--background))_30%,transparent)]"
        >
          <div
            className={`rounded-xl border border-white/10 bg-white bg-opacity-[0.01] before:absolute before:bottom-1/2 before:left-0 before:top-0 before:h-full before:w-full before:opacity-0 before:[filter:blur(180px)] before:[background-image:linear-gradient(to_bottom,var(--color-one),var(--color-one),transparent_40%)] ${inView ? "before:animate-image-glow" : ""
              }`}
          >
            <BorderBeam
              size={200}
              duration={12}
              delay={11}
              colorFrom="var(--color-one)"
              colorTo="var(--color-two)"
            />

            <img
              src="/bg1.png"
              alt="Hero Image"
              className="hidden relative w-full h-full rounded-[inherit] border object-contain dark:block"
            />
            <img
              src="/bg1.png"
              alt="Hero Image"
              className="block relative w-full h-full  rounded-[inherit] border object-contain dark:hidden"
            />
          </div>
        </div>
      </section>
    </>
  );
}
