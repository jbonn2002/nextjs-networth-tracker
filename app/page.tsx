import Features from "@/components/Features";
import GetStarted from "@/components/GetStarted";
import OpenSource from "@/components/OpenSource";

export default function Home() {
  return (
    <section className="w-full text-white flex-center flex-col mt-20">
      <h1 className="head_text text-center text-black">
        All in one
        <br className="max-md:hidden" />
        <span className="green_gradient">Net Worth Tracker</span>
      </h1>
      <p className="desc text-center">
        Networth.io is an open-source personal finance tool that makes a
        streamlined process of checking your assets, liabitlites and net worth
      </p>
      <GetStarted />
      <h2 className="mb-8 mt-20 text-center text-3xl font-extrabold tracking-[-0.03em] text-black sm:text-4xl">
        Simple yet,{" "}
        <span className="green_gradient bg-clip-text text-transparent">
          Powerful
        </span>{" "}
        Features.
      </h2>
      <Features />
      <OpenSource />
    </section>
  );
}
