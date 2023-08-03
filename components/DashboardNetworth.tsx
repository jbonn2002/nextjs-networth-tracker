import { useQuery } from "@tanstack/react-query";
import { Card, Text, Title } from "@tremor/react";
import axios from "axios";
import Linechart from "./LineChart";
import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";

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

  console.log(items);

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
