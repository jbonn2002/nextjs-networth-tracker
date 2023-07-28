import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { formSchemaReq } from "@/lib/validators/formSchema";
import {
  AreaChart,
  BadgeDelta,
  Card,
  DeltaType,
  Flex,
  Metric,
  Text,
} from "@tremor/react";

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

const DebtCard = async () => {
  const session = await getAuthSession();

  const items = await db.item.findMany({
    where: {
      creatorId: session?.user.id,
      type: "debt",
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
          <Text>Debts</Text>
          <BadgeDelta deltaType="unchanged">12.3%</BadgeDelta>
        </Flex>
        <AreaChart
          className="h-72 mt-4"
          data={transformedData}
          index="createdAt"
          categories={["value"]}
          colors={["orange"]}
          // valueFormatter={dataFormatter}
          autoMinValue={true}
          maxValue={100000}
        />
      </Card>
    </div>
  );
};

export default DebtCard;
