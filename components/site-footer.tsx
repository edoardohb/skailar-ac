import Image from "next/image";
import Link from "next/link";

import { FaDiscord } from "react-icons/fa6";
import { buttonVariants } from "./ui/button";

const footerNavs = [
  {
    label: "Community",
    items: [
      {
        href: "https://docs.skailar.ac/",
        name: "Docs"
      },
      {
        href: "https://discord.gg/skailar",
        name: "Discord",
      },
    ],
  },
  {
    label: "Legal",
    items: [
      {
        href: "/terms",
        name: "Terms",
      },
    ],
  },
];

const footerSocials = [
  {
    href: "https://discord.gg/skailar",
    name: "Discord",
    icon: <FaDiscord className="h-4 w-4" />,
  },
];

export function SiteFooter() {
  return (
    <>
      <footer className="border-t">
        <div className="mx-auto w-full max-w-screen-xl xl:pb-2">
          <div className="md:flex md:justify-between px-8 p-4 py-16 sm:pb-16 gap-4">
            <div className="mb-12 flex-col flex gap-4">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="https://cdn.skailar.ac/v1/assets/img/logo.png"
                  alt="Skailar"
                  width={40}
                  height={40}
                  className="h-10 w-10 text-primary"
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-skailar">
                  Skailar
                </span>
              </Link>
              <p className="max-w-xs text-muted-foreground">
                Developed by{' '}
                <Link className={buttonVariants({ variant: "footer_link" })} href="https://discord.com/users/194131617629995010" target="_blank">
                  Edo
                </Link>,{' '}
                <Link className={buttonVariants({ variant: "footer_link" })} href="https://discord.com/users/927923698927804466" target="_blank">
                  Rugo
                </Link>{' '}
                &amp;{' '}
                <Link className={buttonVariants({ variant: "footer_link" })} href="https://discord.com/users/504669379653533708" target="_blank">
                  FxMoon
                </Link>
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:gap-10 sm:grid-cols-3">
              <div />
              {footerNavs.map((nav) => (
                <div key={nav.label}>
                  <h2 className="mb-6 text-sm tracking-tighter font-medium text-gray-900 uppercase dark:text-white">
                    {nav.label}
                  </h2>
                  <ul className="gap-2 grid">
                    {nav.items.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:flex sm:items-center sm:justify-between rounded-md border-neutral-700/20 py-4 px-8 gap-2">
            <div className="flex space-x-5 sm:justify-center sm:mt-0">
              {footerSocials.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-600 fill-gray-500 hover:fill-gray-900 dark:hover:fill-gray-600"
                >
                  {social.icon}
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              &copy;{new Date().getFullYear()}{" "}
              <Link href="/" className="cursor-pointer hover:text-skailar duration-1000">
                Skailar
              </Link>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
