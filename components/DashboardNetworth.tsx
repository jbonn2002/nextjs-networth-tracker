import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { Card, Text, Title } from "@tremor/react";
import Linechart from "./LineChart";

interface Items {
  id: string;
  createdAt: Date;
  name: string;
  type: string;
  description: string;
  value: string;
  networth: string;
  creatorId: string;
}

const formatDate = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
  day: "numeric",
});

const DashboardNetworth = async () => {
  const session = await getAuthSession();

  const items = await db.item.findMany({
    where: {
      creatorId: session?.user.id,
    },
  });

  const transformedData = items.map((item: Items) => {
    const date = new Date(item.createdAt);
    // @ts-ignore
    item.createdAt = formatDate.format(date);

    return item;
  });

  return (
    <Card>
      <div className="block sm:flex sm:justify-between">
        <div>
          <Title>Networth</Title>
          <Text>Total networth over time</Text>
        </div>
      </div>

      <Linechart
        className="mt-8 p-0"
        data={transformedData}
        categories={["networth"]}
        index={"createdAt"}
        colors={["teal"]}
        curveType={"monotone"}
        maxValue={2500000}
      />
    </Card>
  );
};

export default DashboardNetworth;
