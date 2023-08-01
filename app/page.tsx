import Footer from "@/components/Footer";
import FrontPageChart from "@/components/FrontPageChart";
import GetStarted from "@/components/GetStarted";
import { getAuthSession } from "@/lib/auth";
import Image from "next/image";

export default function Home() {
  return (
    <section className="w-full text-white flex-center flex-col mt-20">
      <h1 className="head_text text-center">
        All in one
        <br className="max-md:hidden" />
        <span className="green_gradient">Net Worth Tracker</span>
      </h1>
      <p className="desc text-center">
        Networth.io is an open-source personal finance tool that makes a
        streamlined process of checking your assets, liabitlites and net worth
      </p>
      <GetStarted />
      <Footer />
    </section>
  );
}
