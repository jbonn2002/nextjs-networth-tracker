"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import XCircleFill from "./logos/XCircleFill";
import CheckCircleFill from "./logos/CheckCircleFill";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Switch from "./ui/Switch";
import Tooltip, { SimpleTooltipContent } from "./ui/Tooltip";

import { cn, nFormatter } from "@/lib/utils";
import { HelpCircle, MinusCircle } from "lucide-react";

const pricingItems = [
  {
    plan: "Free",
    tagline: "For startups & side projects",
    quota: 500,
    features: [
      { text: "lorem ipsum lorem" },
      {
        text: "lorem ipsum lorem",
      },
      {
        text: "lorem ipsum lorem",
      },
      {
        text: "lorem ipsum lorem",
        footnote: (
          <SimpleTooltipContent
            title="Password protection, link expiration, device targeting, custom social media cards, etc."
            cta="Learn more."
            href="/help/article/how-to-create-link#the-dub-link-builder"
          />
        ),
      },
      { text: "lorem ipsum lorem", neutral: true },

      {
        text: "lorem ipsum lorem",
        footnote: (
          <SimpleTooltipContent
            title="Redirect vistors that land on the root of your domain (e.g. yourdomain.com) to a page of your choice."
            cta="Learn more."
            href="/help/article/how-to-redirect-root-domain"
          />
        ),
        negative: true,
      },
      {
        text: "lorem ipsum lorem",
        footnote: (
          <SimpleTooltipContent
            title="Set a custom logo for your links' QR codes."
            cta="Learn more."
            href="/help/article/custom-qr-codes"
          />
        ),
        negative: true,
      },
    ],
    cta: "Start for free",
  },
  {
    plan: "Pro",
    tagline: "For larger teams with increased usage",
    quota: 1000,
    features: [
      { text: "Lorem ipsum lorem" },

      {
        text: "Lorem ipsum lorem",
      },
      {
        text: "Lorem ipsum lorem",
        footnote: (
          <SimpleTooltipContent
            title="Password protection, link expiration, device targeting, custom social media cards, etc."
            cta="Learn more."
            href="/help/article/how-to-create-link#the-dub-link-builder"
          />
        ),
      },

      {
        text: "Lorem ipsum lorem",
        footnote: (
          <SimpleTooltipContent
            title="Set a custom logo for your links' QR codes."
            cta="Learn more."
            href="/help/article/custom-qr-codes"
          />
        ),
      },
      {
        text: "Lorem ipsum lorem",
        footnote: "Under development. ETA: September 2023",
      },
      { text: "Lorem ipsum lorem", negative: true },
      { text: "Lorem ipsum lorem", negative: true },
    ],
    cta: "Get started",
  },
  {
    plan: "Enterprise",
    tagline: "For businesses with custom needs",
    quota: "750",
    features: [
      { text: "Lorem ipsum lorem" },
      {
        text: "Lorem ipsum lorem",
      },

      {
        text: "Lorem ipsum lorem",
        footnote: (
          <SimpleTooltipContent
            title="Password protection, link expiration, device targeting, custom social media cards, etc."
            cta="Learn more."
            href="/help/article/how-to-create-link#the-dub-link-builder"
          />
        ),
      },
      { text: "Lorem ipsum lorem" },
      { text: "Lorem ipsum lorem" },

      {
        text: "Lorem ipsum lorem",
        footnote: (
          <SimpleTooltipContent
            title="Set a custom logo for your links' QR codes."
            cta="Learn more."
            href="/help/article/custom-qr-codes"
          />
        ),
      },

      {
        text: "Lorem ipsum lorem",
        footnote: "Email & chat support within 24 hours.",
      },
    ],
    cta: "Get started",
  },
];

const Pricing = () => {
  const [annualBilling, setAnnualBilling] = useState(false);
  const period = useMemo(
    () => (annualBilling ? "yearly" : "monthly"),
    [annualBilling]
  );

  return (
    <MaxWidthWrapper className="mb-8 mt-16 text-center">
      <div className="mx-auto mb-10 sm:max-w-lg">
        <h1 className="font-display text-4xl font-extrabold text-white sm:text-5xl">
          Simple,{" "}
          <span className="bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
            affordable
          </span>{" "}
          pricing
        </h1>
        <p className="mt-5 text-white sm:text-lg">
          Keep track of your networth and financial journey. <br />
          Start for free, no credit card required.
        </p>
      </div>

      <div className="relative mx-auto mb-14 flex max-w-fit items-center space-x-2">
        <p className={cn(annualBilling ? "text-gray-400" : "text-white")}>
          Billed Monthly
        </p>
        <Switch
          fn={setAnnualBilling}
          checked={annualBilling}
          trackDimensions="h-6 w-12"
          thumbDimensions="h-5 w-5"
          thumbTranslate="translate-x-6"
        />
        <p className={cn(annualBilling ? "text-white" : "text-gray-400")}>
          Billed Annually
        </p>
        <span className="absolute -right-12 -top-8 rounded-full bg-purple-200 px-3 py-1 text-sm text-purple-700 sm:-right-[9.5rem] sm:-top-2">
          🎁 2 months FREE
        </span>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        {pricingItems.map(({ plan, tagline, quota, features, cta }) => {
          const price = 10;
          return (
            <div
              key={plan}
              className={`relative rounded-2xl bg-white ${
                plan === "Pro"
                  ? "border-2 border-green-600 shadow-green-200"
                  : "border border-gray-200"
              } shadow-lg`}
            >
              {plan === "Pro" && (
                <div className="absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-gradient-to-r from-green-400 to-green-500 px-3 py-2 text-sm font-medium text-white">
                  Popular
                </div>
              )}

              <div className="p-5">
                <h3 className="my-3 text-center font-display text-3xl font-bold">
                  {plan}
                </h3>
                <p className="text-gray-500">{tagline}</p>
                <p className="my-5 font-display text-6xl font-semibold">
                  ${period === "yearly" ? nFormatter(price / 12) : price}
                </p>
                <p className="text-gray-500">
                  per {period === "yearly" ? "month, billed annually" : "month"}
                </p>
              </div>
              <div className="flex h-20 items-center justify-center border-b border-t border-gray-200 bg-gray-50">
                <div className="flex items-center space-x-1">
                  <p className="text-gray-600">
                    {plan === "Enterprise"
                      ? "Unlimited link clicks"
                      : // @ts-ignore
                        `Up to ${nFormatter(quota)} link clicks/mo`}
                  </p>
                  {plan !== "Enterprise" && (
                    <Tooltip content="If you exceed your monthly usage, your existing links will still work, but you need to upgrade to view their stats/add more links.">
                      <HelpCircle className="h-4 w-4 text-gray-600" />
                    </Tooltip>
                  )}
                </div>
              </div>
              <ul className="my-10 space-y-5 px-8">
                {/* @ts-ignore */}
                {features.map(({ text, footnote, neutral, negative }) => (
                  <li key={text} className="flex space-x-5">
                    <div className="flex-shrink-0">
                      {neutral ? (
                        <MinusCircle
                          fill="#D4D4D8"
                          className="h-6 w-6 text-white"
                        />
                      ) : negative ? (
                        <XCircleFill className="h-6 w-6 text-gray-300" />
                      ) : (
                        <CheckCircleFill className="h-6 w-6 text-green-500" />
                      )}
                    </div>
                    {footnote ? (
                      <div className="flex items-center space-x-1">
                        <p
                          className={
                            negative ? "text-gray-400" : "text-gray-600"
                          }
                        >
                          {text}
                        </p>
                        <Tooltip content={footnote}>
                          <HelpCircle className="h-4 w-4 text-gray-600" />
                        </Tooltip>
                      </div>
                    ) : (
                      <p
                        className={negative ? "text-gray-400" : "text-gray-600"}
                      >
                        {text}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
              <div className="border-t border-gray-200" />
              <div className="p-5">
                <Link
                  href={`/register`}
                  className={`${
                    plan === "Pro"
                      ? "border border-transparent bg-gradient-to-r from-green-400 to-green-500 text-white hover:border-green-700 hover:bg-white hover:bg-clip-text hover:text-transparent"
                      : "border border-gray-200 bg-black text-white hover:border-black hover:bg-white hover:text-black"
                  } block w-full rounded-full py-2 font-medium transition-all`}
                >
                  {cta}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </MaxWidthWrapper>
  );
};

export default Pricing;
