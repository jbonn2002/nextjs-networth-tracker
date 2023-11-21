import { getAuthSession } from "@/lib/auth";
import Link from "next/link";
import FrontPageChart from "./FrontPageChart";
import { buttonVariants } from "./ui/Button";

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
              className: "bg-black border-none",
            })}
          >
            Get Started
          </Link>
        ) : (
          <Link
            href="/sign-in"
            className={buttonVariants({
              variant: "outline",
              className: "bg-black border-none",
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
