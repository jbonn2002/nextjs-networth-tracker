import {
  Card,
  Title,
  Text,
  LineChart,
  TabList,
  Tab,
  TabGroup,
  TabPanel,
  TabPanels,
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

const valueFormatterRelative = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}%`;

const valueFormatterAbsolute = (number: number) =>
  Intl.NumberFormat("us").format(number).toString();

const DashboardNetworth = () => {
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
        data={data.relative}
        index="Date"
        categories={["Customer Churn"]}
        colors={["blue"]}
        showLegend={false}
        valueFormatter={valueFormatterRelative}
        yAxisWidth={40}
      />
    </Card>
  );
};

export default DashboardNetworth;
