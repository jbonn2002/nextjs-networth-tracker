import { getAuthSession } from "@/lib/auth";
import Link from "next/link";
import { Icons } from "./Icons";
import NavItems from "./NavItems";
import UserAccountNav from "./UserAccountNav";
import { buttonVariants } from "./ui/Button";

export const navItems = [
  {
    name: "Pricing",
    slug: "pricing",
  },
  {
    name: "Changelog",
    slug: "changelog",
  },
  {
    name: "Blog",
    slug: "blog",
  },
  {
    name: "Help",
    slug: "help",
  },
];

const Navbar = async () => {
  const session = await getAuthSession();

  return (
    <div className="fixed top-0 inset-x-0 border-b  text-white bg-bgGray bg-[url('/grid.svg')] border-zinc-300 z-[10] py-2">
      <div className="container max-w-7xl h-full mx-auto flex items-center gap-2">
        <Link href="/" className="flex gap-2 items-center">
          <Icons.logo className="h-8 w-8 sm:h-6 sm:w-6" />
          <p className="hidden text-sm font-medium md:block">Networth.io</p>
        </Link>
        <NavItems />
        <div className="w-full flex justify-end">
          {session?.user ? (
            <UserAccountNav user={session.user} />
          ) : (
            <Link
              href="/sign-in"
              className={buttonVariants({
                variant: "outline",
                className: "bg-black",
              })}
            >
              Sign in
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
