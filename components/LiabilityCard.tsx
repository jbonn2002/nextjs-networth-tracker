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

const dataFormatter = (number: number) => {
  return "$ " + Intl.NumberFormat("us").format(number).toString();
};
const numberFormatter = (value: number) =>
  Intl.NumberFormat("us").format(value).toString();

const formatDate = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
  day: "numeric",
});

const LiabilityCard = async () => {
  const session = await getAuthSession();

  const items = await db.item.findMany({
    where: {
      creatorId: session?.user.id,
      type: "liability",
    },
  });

  const transformedData = items.map((item) => {
    const date = new Date(item.createdAt);
    // @ts-ignore
    item.createdAt = formatDate.format(date);

    return item;
  });
  return (
    <div>
      <Card>
        <Flex alignItems="start">
          <Text>Liabilities</Text>
          <BadgeDelta deltaType="moderateDecrease">12.3%</BadgeDelta>
        </Flex>

        <Linechart
          className="h-72 mt-4"
          data={transformedData}
          index="createdAt"
          categories={["value"]}
          colors={["red"]}
          maxValue={100000}
          curveType={"monotone"}
        />
      </Card>
    </div>
  );
};

export default LiabilityCard;
