import Dashboard from "@/components/Dashboard";

const page = () => {
  return (
    <div className="text-white">
      <div className="relative w-full h-fit p-4 rounded-lg space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">Dashboard</h1>
        </div>

        <hr className="bg-zinc-500 h-px" />

        <Dashboard />
      </div>
    </div>
  );
};

export default page;
