"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import React from "react";

const pricingPlans = [
  {
    title: "One Month",
    description: "Basic starter plan.",
    price: "€10",
    features: [
      "Efficient Detections",
      "Bypass Alert",
      "+2.000 Strings",
      "Frequent Updates",
      "Active supports",
    ],
    popular: false,
  },
  {
    title: "Lifetime",
    description: "Permanent plan.",
    price: "€40",
    features: [
      "Efficient Detections",
      "Bypass Alerts",
      "+2.000 Strings",
      "Frequent Updates",
      "Custom-Strings",
      "Active supports",
    ],
    popular: true,
  },
  {
    title: "Tree Months",
    description: "Intermediate sequential plan.",
    price: "€25",
    features: [
      "Efficient Detections",
      "Bypass Alert",
      "+2.000 Strings",
      "Frequent Updates",
      "Active supports",
    ],
    popular: false,
  },
];

type Interval = "month" | "year";

const PlanCard: React.FC<{ plan: (typeof pricingPlans)[number] }> = ({
  plan,
}) => (
  <Card
    className={`flex flex-col ${plan.popular ? "border-2 border-skailar" : ""}`}
  >
    <CardHeader>
      <CardTitle className={plan.popular ? "text-skailar" : ""}>{plan.title}</CardTitle>
      <CardDescription>{plan.description}</CardDescription>
    </CardHeader>
    <CardContent className="flex-grow">
      <div className="mb-4 flex items-baseline gap-2">
        <span className="text-5xl font-bold">{plan.price}</span>
        <span className="text-sm text-muted-foreground">/month</span>
      </div>
      {plan.popular && <Badge className="mb-4">Most Popular</Badge>}
      <ul className="space-y-3">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
    <CardFooter className="mt-auto">
      <Button variant="skailar" className="w-full">Buy Now</Button>
    </CardFooter>
  </Card>
);

export function PricingSection() {
  return (
    <div id="pricing" className="mt-48 relative">
      <div className="container max-w-screen-xl w-full flex flex-col items-center justify-center">
        <div>
          <div className="flex items-center gap-2 bg-skailar/15 rounded-md p-2">
            <p className="text-sm text-skailar font-medium">Pricing</p>
          </div>
        </div>

        <h2 className="mt-4 mb-2 text-5xl font-bold tracking-tight text-black dark:text-white sm:text-6xl text-center">
          Simple{' '}
          <span className="bg-gradient-to-r from-purple-300 to-skailar bg-clip-text text-transparent">
            pricing
          </span>{' '}
          for everyone.
        </h2>

        <p className="text-center text-muted-foreground text-lg mt-2 font-medium max-w-xl mx-auto">
          Choose an <strong>affordable plan</strong> that&apos;s packed with
          the best features for engaging your audience, creating customer
          loyalty, and driving sales.
        </p>

        <div className="mx-auto mt-10 grid w-full justify-center sm:grid-cols-2 lg:grid-cols-3 flex-col gap-4">
          {pricingPlans.map((plan, index) => (
            <PlanCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </div>
  );
}
