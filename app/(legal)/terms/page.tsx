"use client";

import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function TermsPage() {
  return (
    <>
      <div className="bg-black pb-16">
        <div className="bg-black py-16">
          <div className="mx-auto max-w-screen-md px-4 sm:px-6 lg:px-8">
            <h1 className="font-display text-center text-4xl font-extrabold leading-[1.15] text-white sm:text-6xl sm:leading-[1.15]">
              Terms of Service
            </h1>
            <p className="mt-6 text-center text-lg text-muted-foreground">
              This Addendum governs your use of Skailar.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-screen-md px-6 py-12 sm:px-8 lg:px-12">
          <article className="prose-headings:font-display prose prose-invert prose-lg max-w-none space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Introduction</h2>
              <p>
                Welcome to Skailar! These Terms of Service govern your access and use of the Skailar platform, services, and software. By accessing or using our Services, you agree to these Terms. If you do not agree, you may not use the Services.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Account and Access</h2>
              <p>
                To use Skailar, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for any activities conducted under your account. Skailar reserves the right to suspend or terminate accounts that violate these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Permitted Use</h2>
              <p>
                Skailar is designed to assist with anti-cheat measures in gaming and software environments. You agree to use the Services only for lawful purposes and in accordance with these Terms. Unauthorized access, modification, or misuse of the Services is strictly prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Data Collection and Privacy</h2>
              <p>
                Skailar collects and processes data necessary for its anti-cheat functionalities.
                By using our Services, you consent to the collection, storage, and processing of data
                as outlined in our{' '}
                <Link
                  href="/privacy"
                  className={buttonVariants({
                    variant: "footer_link",
                    className: 'underline !text-[16px]'
                  })}
                >
                  Privacy Policy
                </Link>.
                We are committed to protecting your information and ensuring transparency in how it is used.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Prohibited Activities</h2>
              <p>You agree not to engage in any of the following activities:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Attempting to bypass, disable, or interfere with Skailar’s anti-cheat mechanisms.</li>
                <li>Reverse engineering, decompiling, or otherwise analyzing the Services.</li>
                <li>Using the Services in ways that violate applicable laws or regulations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Limitation of Liability</h2>
              <p>
                Skailar is provided "as-is" without any warranties of any kind, express or implied. We are not liable for any indirect, incidental, or consequential damages arising from your use of the Services.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Termination</h2>
              <p>
                Skailar reserves the right to suspend or terminate your access to the Services at any time, with or without cause or notice. Upon termination, your rights to use the Services will cease immediately.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Changes to Terms</h2>
              <p>
                Skailar may update these Terms from time to time to reflect changes in our Services or legal obligations. We will notify users of significant updates, and your continued use of the Services constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Contact Information</h2>
              <p>
                For questions or concerns regarding these Terms, please contact us at <Link href="mailto:support@skailar.ac" className={buttonVariants({ variant: "footer_link", class: 'underline !text-[16px]' })}>support@skailar.ac</Link>.
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
