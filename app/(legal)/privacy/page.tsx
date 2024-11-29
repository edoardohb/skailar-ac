"use client";

import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <>
      <div className="bg-black pb-16">
        <div className="bg-black py-16">
          <div className="mx-auto max-w-screen-md px-4 sm:px-6 lg:px-8">
            <h1 className="font-display text-center text-4xl font-extrabold leading-[1.15] text-white sm:text-6xl sm:leading-[1.15]">
              Privacy Policy
            </h1>
          </div>
        </div>

        <div className="mx-auto max-w-screen-md px-6 py-12 sm:px-8 lg:px-12">
          <article className="prose-headings:font-display prose prose-invert prose-lg max-w-none space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Introduction</h2>
              <p>
                At Skailar, we value your privacy and are committed to protecting the information you share with us. This Privacy Policy outlines how we collect, use, and protect your data while you use our platform and services.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Data We Collect</h2>
              <p>
                We collect data necessary for the functionality and security of our services, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Personal information such as your name, email address, and contact details when you create an account.</li>
                <li>Usage data, including IP address, device information, and activity logs, for security and analytics purposes.</li>
                <li>Content and communications shared through our platform to ensure compliance with our Terms of Service.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">How We Use Your Data</h2>
              <p>
                The data we collect is used to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, operate, and improve our services.</li>
                <li>Enhance platform security and detect unauthorized activities.</li>
                <li>Communicate updates, promotional offers, and important notices.</li>
              </ul>
              <p>
                For more detailed information, see our{' '}
                <Link
                  href="/terms"
                  className={buttonVariants({
                    variant: "footer_link",
                    className: 'underline !text-[16px]'
                  })}
                >
                  Terms of Service
                </Link>.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Data Sharing and Disclosure</h2>
              <p>
                We do not sell or rent your personal data. However, we may share your information with:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Service providers who assist in delivering our services.</li>
                <li>Legal authorities when required by law or to protect our rights.</li>
                <li>
                  Third parties for integration or collaboration, with your explicit consent.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Your Rights</h2>
              <p>
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal data we hold about you.</li>
                <li>Request corrections or updates to your data.</li>
                <li>Delete your data or withdraw consent for its processing.</li>
              </ul>
              <p>
                To exercise your rights, contact us at{' '}
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

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Security</h2>
              <p>
                We implement industry-standard security measures to protect your data. However, no online platform is completely secure, and we cannot guarantee absolute data security.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Retention</h2>
              <p>
                We retain your personal data only as long as necessary to fulfill the purposes outlined in this policy or to comply with legal obligations.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Updates to This Policy</h2>
              <p>
                This Privacy Policy may be updated periodically to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review it regularly.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Contact Information</h2>
              <p>
                For questions about this Privacy Policy, please contact us at{' '}
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

          <div className="mt-12 w-full border-t border-zinc-700 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Last updated: October 29, 2024
            </p>
          </div>
        </div>
      </div>
    </>
  );
}