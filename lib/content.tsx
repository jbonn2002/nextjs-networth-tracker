import { Icons } from "@/components/Icons";
import { CandlestickChart, UserCog } from "lucide-react";
import React from "react";

export const POPULAR_ARTICLES = [
  "what is networth",
  "what is a asset",
  "what is a liability",
  "report issue to github",
  "free plan",
  "pro plan",
];

export const HELP_CATEGORIES: {
  title: string;
  slug: "overview" | "getting-started" | "networth-tracking";
  description: string;
  icon: React.JSX.Element;
}[] = [
  {
    title: "Networth.io",
    slug: "overview",
    description: "Learn about Dub and how it can help you.",
    icon: <Icons.logo className="h-8 w-8 sm:h-6 sm:w-6" />,
  },
  {
    title: "Getting Started",
    slug: "getting-started",
    description: "Learn how to get started with Dub.",
    icon: <UserCog className="group-hover:text-green-500" />,
  },
  {
    title: "Networth Tracking",
    slug: "networth-tracking",
    description: "Learn how to manage your links on Dub.",
    icon: <CandlestickChart className="group-hover:text-green-500" />,
  },
];
