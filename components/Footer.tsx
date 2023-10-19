"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Icons } from "./Icons";
import Github from "./logos/Github";
import LinkedIn from "./logos/LinkedIn";
import Twitter from "./logos/Twitter";

const navigation = {
  product: [{ name: "Pricing", href: "/pricing" }],
  company: [{ name: "Blog", href: "/blog" }],
  resources: [
    { name: "Help Center", href: "/help" },
    { name: "Metatags API", href: "/metatags" },
  ],
  legal: [
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
  ],
};

export default function Footer() {
  const { domain = "dub.sh" } = useParams() as { domain: string };

  const createHref = (href: string) =>
    domain === "dub.sh" ? href : `https://dub.sh${href}`;

  return (
    <footer className="mt-20 p-10 border-t text-white bg-bgGray bg-[url('/grid.svg')] border-zinc-300 py-8 backdrop-blur-lg">
      <div className="xl:grid xl:grid-cols-5 xl:gap-8">
        <div className="space-y-8 xl:col-span-2">
          <Link href={createHref("/")}>
            <span className="sr-only">Dub.sh Logo</span>
            <Icons.logo className="h-7 text-green-400" />
          </Link>
          <p className="max-w-xs text-sm text-white">
            Making it possible for everyone to know the state of there financial
            journey
          </p>
          <div className="flex items-center space-x-2">
            <a
              href="https://twitter.com/dubdotsh"
              target="_blank"
              rel="noreferrer"
              className="group rounded-md p-2 transition-colors  active:bg-gray-200"
            >
              <span className="sr-only">Twitter</span>
              <Twitter className="h-5 w-5 text-white" />
            </a>
            <div className="h-8 border-l border-gray-200" />
            <a
              href="https://github.com/steven-tey/dub"
              target="_blank"
              rel="noreferrer"
              className="rounded-md p-2 transition-colors   active:bg-gray-200"
            >
              <span className="sr-only">Github</span>
              <Github className="h-5 w-5 text-white" />
            </a>
            <div className="h-8 border-l border-gray-200" />
            <a
              href="https://www.linkedin.com/company/dubhq/"
              target="_blank"
              rel="noreferrer"
              className="rounded-md p-2 transition-colors  active:bg-gray-200"
            >
              <span className="sr-only">LinkedIn</span>
              <LinkedIn className="h-5 w-5" fill="#ffffff" />
            </a>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-3 xl:mt-0">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 className="text-sm font-semibold text-green-400">Product</h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.product.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={createHref(item.href)}
                      className="text-sm text-white hover:text-green-400"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 md:mt-0">
              <h3 className="text-sm font-semibold text-green-400">Company</h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={createHref(item.href)}
                      className="text-sm text-white hover:text-green-400"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 className="text-sm font-semibold text-green-400">
                Resources
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={createHref(item.href)}
                      className="text-sm text-white hover:text-green-400"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 md:mt-0">
              <h3 className="text-sm font-semibold text-green-400">Legal</h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={createHref(item.href)}
                      className="text-sm text-white hover:text-green-400"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
        <p className="text-sm leading-5 text-white">
          © {new Date().getFullYear()} Networth.io
        </p>
      </div>
    </footer>
  );
}
