"use client";

import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function CookiePolicyPage() {
  return (
    <div className="bg-black pb-16">
      <div className="bg-black py-16">
        <div className="mx-auto max-w-screen-md px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-center text-4xl font-extrabold leading-[1.15] text-white sm:text-6xl sm:leading-[1.15]">
            Cookie Policy
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-screen-md px-6 py-12 sm:px-8 lg:px-12">
        <article className="prose-headings:font-display prose prose-invert prose-lg max-w-none space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-white mb-4">What Are Cookies?</h2>
            <p>
              Cookies are small data files stored on your device to improve your browsing experience. They help us understand user behavior, enhance website performance, and deliver personalized content.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-4">Types of Cookies We Use</h2>
            <p>
              We use the following types of cookies:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Essential Cookies:</strong> Required for the website to function properly.</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how users interact with our site.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-4">Managing Cookies</h2>
            <p>
              You can manage or disable cookies through your browser settings. Note that disabling cookies may affect the functionality of certain features on our site.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>
            <p>
              If you have questions about our Cookie Policy, please contact us at{' '}
              <Link
                href="mailto:support@skailar.ac"
                className={buttonVariants({
                  variant: "footer_link",
                  className: 'underline !text-[16px]'
                })}
              >
                support@skailar.ac
              </Link>.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}