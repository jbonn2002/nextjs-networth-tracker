import {
  AreaChart,
  Card,
  Metric,
  TabList,
  Tab,
  TabGroup,
  TabPanels,
  TabPanel,
} from "@tremor/react";

const data = [
  {
    Month: "Jan 22",
    Assets: 1012,
    Liabilities: 289,
    "Bounce Rate": 0.5,
  },
  //...
  {
    Month: "Jan 23",
    Assets: 1232,
    Liabilities: 389,
    "Bounce Rate": 0.51,
  },
];

const numberFormatter = (value: number) =>
  Intl.NumberFormat("us").format(value).toString();
const percentageFormatter = (value: number) =>
  `${Intl.NumberFormat("us")
    .format(value * 100)
    .toString()}%`;
function sumArray(array: any[], metric: string) {
  return array.reduce(
    (accumulator, currentValue) => accumulator + currentValue[metric],
    0
  );
}

const DashboardChart = () => {
  return (
    <Card className="p-0">
      <TabGroup>
        <TabList>
          <Tab className="p-4 sm:p-6 text-left">
            <p className="text-sm sm:text-base">Assets</p>
            <Metric className="mt-2 text-inherit">
              {numberFormatter(sumArray(data, "Assets"))}
            </Metric>
          </Tab>
          <Tab className="p-4 sm:p-6 text-left">
            <p className="text-sm sm:text-base">Liabilities</p>
            <Metric className="mt-2 text-inherit">
              {numberFormatter(sumArray(data, "Liabilities"))}
            </Metric>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel className="p-6">
            <AreaChart
              className="h-80 mt-10"
              data={data}
              index="Month"
              categories={["Assets"]}
              colors={["blue"]}
              valueFormatter={numberFormatter}
              showLegend={false}
              yAxisWidth={50}
            />
          </TabPanel>
          <TabPanel className="p-6">
            <AreaChart
              className="h-80 mt-10"
              data={data}
              index="Month"
              categories={["Liabilities"]}
              colors={["blue"]}
              valueFormatter={numberFormatter}
              showLegend={false}
              yAxisWidth={50}
            />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </Card>
  );
};

export default DashboardChart;
