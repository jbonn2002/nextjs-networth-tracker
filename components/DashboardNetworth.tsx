import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { Card, LineChart, Text, Title } from "@tremor/react";
import Linechart from "./LineChart";

const dollarFormatter = (value: number) =>
  `$ ${Intl.NumberFormat("us").format(value).toString()}`;

const numberFormatter = (value: number) =>
  `${Intl.NumberFormat("us").format(value).toString()}`;

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

  // console.log(items);

  const transformedData = items.map((item) => {
    const date = new Date(item.createdAt);
    // @ts-ignore
    item.createdAt = formatDate.format(date);

    return item;
  });

  return (
    <Card className="h-[400px]">
      <div className="block sm:flex sm:justify-between">
        <div>
          <Title>Networth</Title>
          <Text>Total networth over time</Text>
        </div>
      </div>

      <Linechart
        className="mt-8 h-80"
        data={transformedData}
        categories={["value"]}
        index={"createdAt"}
        // valueFormatter={numberFormatter}
        colors={["teal"]}
        curveType={"monotone"}
        maxValue={2500000}
      />
    </Card>
  );
};

export default DashboardNetworth;
