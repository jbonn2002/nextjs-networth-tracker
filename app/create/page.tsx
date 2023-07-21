"use client";

import CreateForm from "@/components/CreateForm";
import FrontPageChart from "@/components/FrontPageChart";

const page = () => {
  return (
    // <div className="container flex items-center h-full max-w-3xl mx-auto">
    //   <div className="relative bg-white w-full h-fit p-4 rounded-lg space-y-6">
    //     <div className="flex justify-between items-center">
    //       <h1 className="text-xl font-semibold">Create asset/liability</h1>
    //     </div>

    //     <hr className="bg-zinc-500 h-px" />

    //     <div className="flex justify-end">
    //       <FrontPageChart />
    //     </div>

    //     <CreateForm />
    //   </div>
    // </div>
    <div className="text-white">
      <div className="relative w-full h-fit p-4 space-y-6">
        <h1 className="text-xl font-semibold">Create asset/liability</h1>
      </div>

      <hr className="bg-zinc-500 h-px" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-x-4 py-6">
        <div className="md:col-span-2">
          <CreateForm />
        </div>
        <div className="overflow-hidden h-fit order-first md:order-last">
          <div className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
            <FrontPageChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
