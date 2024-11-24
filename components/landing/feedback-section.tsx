import Marquee from "@/components/magicui/marquee";
import { reviews } from "@/lib/feedbacks";
import { cn } from "@/lib/utils";
import Image from "next/image";

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image className="rounded-full" width="32" height="32" alt={name} src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function FeedbackSection() {
  return (
    <div id="feedbacks" className="mt-48 relative">
      <div className="container w-full flex flex-col items-center justify-center">
        <div>
          <div className="flex items-center gap-2 bg-skailar/15 rounded-md p-2">
            <p className="text-sm text-skailar font-medium">Customer Feedbacks</p>
          </div>
        </div>

        <h2 className="mt-4 mb-2 text-5xl font-bold tracking-tight text-black dark:text-white sm:text-6xl text-center">
          What Our{' '}
          <span className="bg-gradient-to-r from-purple-300 to-skailar bg-clip-text text-transparent">
            Customers
          </span>{' '}
          Are Saying
        </h2>

        <p className="text-center text-muted-foreground text-lg mt-2 font-medium max-w-xl mx-auto">
          Hear directly from our users about their experience with Skailar, before and after using our solution.
        </p>

        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
      </div>
    </div>
  );
}
