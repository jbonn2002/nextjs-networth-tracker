import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import {
  AreaChart,
  BadgeDelta,
  Card,
  DeltaType,
  Flex,
  Metric,
  Text,
} from "@tremor/react";
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

const AssetCard = async () => {
  const session = await getAuthSession();

  const items = await db.item.findMany({
    where: {
      creatorId: session?.user.id,
      type: "asset",
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
      <Flex alignItems="start">
        <Text>Assets</Text>
        <BadgeDelta deltaType="moderateIncrease">12.3%</BadgeDelta>
      </Flex>

      <Linechart
        className="p-0"
        data={transformedData}
        index="createdAt"
        categories={["value"]}
        colors={["green"]}
        autoMinValue={true}
        maxValue={2500000}
        curveType={"monotone"}
      />
    </Card>
  );
};

export default AssetCard;
