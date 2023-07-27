"use server";

import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { AreaChart, Card, LineChart, Text, Title } from "@tremor/react";

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

  const transformedData = items.map((item) => {
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

      <LineChart
        className="mt-8 h-80"
        data={transformedData}
        categories={["value"]}
        index="createdAt"
        // valueFormatter={dollarFormatter}
        curveType="monotone"
      />
    </Card>
  );
};

export default DashboardNetworth;
