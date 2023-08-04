"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, useSelectedLayoutSegment } from "next/navigation";

export const navItems = [
  {
    name: "Pricing",
    slug: "pricing",
  },
  {
    name: "Help",
    slug: "help",
  },
];

const NavItems = () => {
  const { domain = "https://nextjs-networth-tracker.vercel.app/" } =
    useParams() as { domain: string };
  const selectedLayout = useSelectedLayoutSegment();

  return (
    <div className="">
      {navItems.map(({ name, slug }) => (
        <Link
          id={`nav-${slug}`}
          key={slug}
          href={
            domain === "nextjs-networth-tracker.vercel.app"
              ? `/${slug}`
              : `https://nextjs-networth-tracker.vercel.app/${slug}`
          }
          className={cn(
            "z-10 rounded-full px-4 py-1.5 text-sm font-medium capitalize text-white/75 transition-colors ease-out hover:text-green-400",
            {
              "text-black": selectedLayout === slug,
            }
          )}
        >
          {name}
        </Link>
      ))}
    </div>
  );
};

export default NavItems;
