import {
  AreaChart,
  BadgeDelta,
  Card,
  DeltaType,
  Flex,
  Metric,
  Text,
} from "@tremor/react";

import { FC } from "react";

export type DashboardCardType = {
  title: string;
  metric: string;
  metricPrev: string;
  delta: string;
  deltaType: DeltaType;
  data: any[];
  categories: string[];
};

const dataFormatter = (number: number) => {
  return "$ " + Intl.NumberFormat("us").format(number).toString();
};
const numberFormatter = (value: number) =>
  Intl.NumberFormat("us").format(value).toString();

const DashboardCard: FC<DashboardCardType> = ({ ...item }) => {
  let data = item.data;

  return (
    <div>
      <Card key={item.title}>
        <Flex alignItems="start">
          <Text>{item.title}</Text>
          <BadgeDelta deltaType={item.deltaType}>{item.delta}</BadgeDelta>
        </Flex>
        <Flex
          className="space-x-3 truncate"
          justifyContent="start"
          alignItems="baseline"
        >
          <Metric>{item.metric}</Metric>
          <Text>from {item.metricPrev}</Text>
        </Flex>
        <AreaChart
          className="mt-6 h-28"
          data={item.data}
          index="Month"
          valueFormatter={numberFormatter}
          categories={item.categories}
          colors={["blue"]}
          showXAxis={true}
          showGridLines={false}
          startEndOnly={true}
          showYAxis={false}
          showLegend={false}
        />
      </Card>
    </div>
  );
};

export default DashboardCard;
