"use client";

import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function RefundPolicyPage() {
  return (
    <div className="bg-black pb-16">
      <div className="bg-black py-16">
        <div className="mx-auto max-w-screen-md px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-center text-4xl font-extrabold leading-[1.15] text-white sm:text-6xl sm:leading-[1.15]">
            Refund Policy
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-screen-md px-6 py-12 sm:px-8 lg:px-12">
        <article className="prose-headings:font-display prose prose-invert prose-lg max-w-none space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-white mb-4">Eligibility for Refunds</h2>
            <p>
              Refunds are only issued under specific circumstances, such as a failure of the service to deliver as promised. Please contact support within 7 days of the issue to request a refund.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-4">Non-Refundable Items</h2>
            <p>
              The following are not eligible for refunds:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Services already delivered and consumed.</li>
              <li>Subscription fees after the start of a new billing cycle.</li>
              <li>Any issues arising from user error or misuse of the service.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-4">Requesting a Refund</h2>
            <p>
              To request a refund, please email us at{' '}
              <Link
                href="mailto:support@skailar.ac"
                className={buttonVariants({
                  variant: "footer_link",
                  className: 'underline !text-[16px]'
                })}
              >
                support@skailar.ac
              </Link>{' '}
              with the following information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your account information.</li>
              <li>A detailed explanation of the issue.</li>
              <li>Proof of purchase (e.g., receipt or order ID).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-4">Processing Time</h2>
            <p>
              Refund requests are typically processed within 5-7 business days. Approved refunds will be issued to the original payment method.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}