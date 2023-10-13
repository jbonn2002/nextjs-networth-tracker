import { getAuthSession } from "@/lib/auth";
import Link from "next/link";
import UserAccountNav from "./UserAccountNav";
import { Button, buttonVariants } from "./ui/Button";
import { Github } from "lucide-react";
import FrontPageChart from "./FrontPageChart";

const GetStarted = async () => {
  const session = await getAuthSession();
  return (
    <div className="w-full">
      <div className="mt-16 mx-auto w-full max-w-xl flex justify-center items-center gap-2">
        {session?.user ? (
          <Link
            href="/dashboard"
            className={buttonVariants({
              variant: "outline",
              className: "text-green-400 bg-black border-none",
            })}
          >
            Get Started
          </Link>
        ) : (
          <Link
            href="/sign-in"
            className={buttonVariants({
              variant: "outline",
              className: "text-green-400 bg-black border-none",
            })}
          >
            Get Started
          </Link>
        )}
      </div>
      <div className="mt-16 mx-auto w-full max-w-xl flex justify-center items-center gap-2">
        <FrontPageChart />
      </div>
    </div>
  );
};

export default GetStarted;
