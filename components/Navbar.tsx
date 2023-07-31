import Link from "next/link";
import { Icons } from "./Icons";
import { buttonVariants } from "./ui/Button";
import { getAuthSession } from "@/lib/auth";
import UserAccountNav from "./UserAccountNav";
import { db } from "@/lib/db";

const Navbar = async () => {
  const session = await getAuthSession();

  return (
    <div className="fixed top-0 inset-x-0 h-fit border-b text-white bg-bgGray border-zinc-300 z-[10] py-2">
      <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
        <Link href="/" className="flex gap-2 items-center">
          <Icons.logo className="h-8 w-8 sm:h-6 sm:w-6" />
          <p className="hidden text-sm font-medium md:block">Networth.io</p>
        </Link>
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
  );
};

export default Navbar;
