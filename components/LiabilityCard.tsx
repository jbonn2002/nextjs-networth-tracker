import {
  AreaChart,
  BadgeDelta,
  Card,
  DeltaType,
  Flex,
  Metric,
  Text,
} from "@tremor/react";

const data = {
  relative: [
    {
      Date: "01.01.2021",
      "Customer Churn": 9.73,
    },
    {
      Date: "02.01.2021",
      "Customer Churn": 10.74,
    },
    // ...
    {
      Date: "13.03.2021",
      "Customer Churn": 8.82,
    },
    {
      Date: "25.03.2021",
      "Customer Churn": 9.73,
    },
    {
      Date: "02.04.2021",
      "Customer Churn": 10.74,
    },
    // ...
    {
      Date: "13.04.2021",
      "Customer Churn": 8.82,
    },
  ],
};

const dataFormatter = (number: number) => {
  return "$ " + Intl.NumberFormat("us").format(number).toString();
};
const numberFormatter = (value: number) =>
  Intl.NumberFormat("us").format(value).toString();

const LiabilityCard = () => {
  return (
    <div>
      <Card>
        <AreaChart
          className="h-72 mt-4"
          data={data.relative}
          index="date"
          categories={["Customer Churn"]}
          colors={["indigo", "cyan"]}
        />
      </Card>
    </div>
  );
};

export default LiabilityCard;
