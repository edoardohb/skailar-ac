import { TextHoverEffect } from "../aceternity/text-hover-effect";
import Particles from "../magicui/particles";
import { Button, buttonVariants } from "../ui/button";

export const CTASection = () => {
  return (
    <>
      <div className="bg-black pt-[4rem] pb-[4rem] md:pt-[8rem] md:pb-[8rem]">
        <div className="ml-auto mr-auto max-w-7xl pl-[1.5rem] pr-[1.5rem]">
          <div className="relative isolate overflow-hidden bg-opacity-100 border border-white/15 py-24 px-[1.5rem] shadow-lg shadow-black/25 ring-0 ring-offset-0 rounded-2xl">
            <h2 className="text-5xl md:text-6xl max-w-2xl mx-auto tracking-tighter text-center font-medium">Stay Updated on Our Launch</h2>
            <p className="text-center text-lg md:text-xl max-w-lg mx-auto text-white/70 px-4 mt-5 tracking-tight">Sign up to receive the latest news and updates about our upcoming launch.</p>
            <form className="ml-auto mr-auto mt-[2.5rem] flex max-w-md gap-4">
              <label htmlFor="email-address" className="absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0">Email address</label>
              <input id="email-address" name="email" type="email" required placeholder="Enter your email" autoComplete="off" className="min-w-0 flex-1 rounded-sm border-0 bg-white/5 pl-3.5 pr-3.5 pt-2 pb-2 text-white shadow-sm ring-1 focus:ring-skailar ring-inset ring-skailar/10 text-sm leading-6" />
              <Button type="submit" className={buttonVariants({ variant: "skailar", size: "md" })}>Notify me</Button>
            </form>

            <svg viewBox="0 0 1024 1024" aria-hidden="true" className="absolute shadow-lg top-[50%] -z-10 w-[64rem] h-[64rem]">
              <circle r="512" cx="512" cy="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7"></circle>
              <defs>
                <radialGradient r="1" cx="0" cy="0" id="759c1415-0410-454c-8f7c-9a820de03641" gradientUnits="userSpaceOnUse" gradientTransform="translate(512 512) rotate(90) scale(512)">
                  <stop stopColor="#7775D6"></stop>
                  <stop offset="1" stopColor="#961DE2" stopOpacity="0"></stop>
                </radialGradient>
              </defs>
            </svg>

            <Particles
              className="absolute inset-0 -z-10"
              quantity={100}
              ease={70}
              size={0.30}
              staticity={40}
              color={"#ffffff"}
            />
          </div>
        </div>
      </div>

      <TextHoverEffect text="SKAILAR" />
    </>
  )
};
