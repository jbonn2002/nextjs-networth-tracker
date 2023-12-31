import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { BadgeDelta, Card, Flex, Text } from "@tremor/react";
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

const DebtCard = async () => {
  const session = await getAuthSession();

  const items = await db.item.findMany({
    where: {
      creatorId: session?.user.id,
      type: "debt",
    },
  });

  const transformedData = items.map((item: Items) => {
    const date = new Date(item.createdAt);
    // @ts-ignore
    item.createdAt = formatDate.format(date);

    return item;
  });

  return (
    <div>
      <Card>
        <Flex alignItems="start">
          <Text>Debts</Text>
          <BadgeDelta deltaType="unchanged">12.3%</BadgeDelta>
        </Flex>
        <Linechart
          className="h-72 mt-4"
          data={transformedData}
          index="createdAt"
          categories={["value"]}
          colors={["orange"]}
          curveType={"monotone"}
          // valueFormatter={dataFormatter}
          autoMinValue={true}
          maxValue={100000}
        />
      </Card>
    </div>
  );
};

export default DebtCard;
