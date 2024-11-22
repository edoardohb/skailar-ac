import gridLines from "@/assets/grid-lines.png";
import starsBg from "@/assets/stars.png";
import { motion, useMotionTemplate, useMotionValue, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { RefObject, useEffect, useRef } from "react";
import { buttonVariants } from "../ui/button";

const useRelativeMousePosition = (to: RefObject<HTMLElement>) => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const updateMousePosition = (event: MouseEvent) => {
    if (!to.current) return;
    const { top, left } = to.current.getBoundingClientRect()

    mouseX.set(event.x - left);
    mouseY.set(event.y - top);
  }

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    }
  }, [])

  return [mouseX, mouseY]
}

export const CTASection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const borderedDivRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })

  const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300])

  const [mouseX, mouseY] = useRelativeMousePosition(borderedDivRef)

  const maskImage = useMotionTemplate`radial-gradient(20% 30% at ${mouseX}px ${mouseY}px, black, transparent)`

  return (
    <section className="py-20 md:py-24" ref={sectionRef}>
      <div className="container">
        <motion.div ref={borderedDivRef} className="border border-white/15 py-24 rounded-xl overflow-hidden relative group" animate={{ backgroundPositionX: starsBg.width }} transition={{ repeat: Infinity, duration: 60, ease: "linear" }} style={{ backgroundPositionY, backgroundImage: `url(${starsBg.src})` }}>
          <motion.div className="absolute inset-0 bg-napse bg-blend-overlay opacity-0 group-hover:opacity-100 transition duration-700" style={{ maskImage, backgroundImage: `url(${gridLines.src})` }} />
          <div className="relative">
            <h2 className="text-5xl md:text-6xl max-w-sm mx-auto tracking-tighter text-center font-medium">Join our Community</h2>
            <p className="text-center text-lg md:text-xl max-w-xs mx-auto text-white/70 px-4 mt-5 tracking-tight">Join our community to get the latest news, updates, and exclusive</p>
            <div className="flex justify-center mt-8">
              <Link className={buttonVariants({ variant: "outline" })} target="_blank" href="https://discord.gg/napse">Join Discord</Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
