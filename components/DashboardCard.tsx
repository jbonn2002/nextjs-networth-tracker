"use client";

import {
  BarList,
  Card,
  Metric,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Text,
} from "@tremor/react";
import React, { useState } from "react";

const runners = [
  {
    id: 1,
    name: "Assets",
    data: [
      { name: "Stocks/Bonds", value: 45 },
      { name: "Checking", value: 35 },
      { name: "Savings", value: 71 },
      { name: "Real estate", value: 120 },
      { name: "Autos", value: 91 },
    ],
  },
  {
    id: 2,
    name: "Liabilities",
    data: [
      { name: "Consumer debt", value: 15 },
      { name: "Personal loans", value: 35 },
      { name: "Student loans", value: 71 },
      { name: "Mortgages", value: 120 },
      { name: "Auto loans", value: 41 },
    ],
  },
  {
    id: 3,
    name: "Networth",
    data: [
      { name: "Assets", value: 28 },
      { name: "Liabilities", value: 29 },
      { name: "Total debt", value: 23 },
    ],
  },
];

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}h`;

const DashboardCard = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>();

  const headings = runners.map((runner, index) => (
    <Tab key={index}>{runner.name}</Tab>
  ));

  return (
    <Card>
      <Text>Activity Summary</Text>
      <Metric className="mt-2">$355,652</Metric>
      <TabGroup index={selectedIndex} onIndexChange={setSelectedIndex}>
        <TabList variant="line">{headings}</TabList>
        <TabPanels>
          <TabPanel>
            <div
              className="relative border pl-2 py-2 pr-4 border-dashed rounded-lg
                                border-slate-400"
            >
              <div
                className="absolute top-0 right-2.5 px-2 -translate-y-1/2 bg-white text-sm
                                    font-normal text-slate-400"
              >
                BarList
              </div>
              <BarList
                data={runners.filter((runner) => runner.id === 1)[0].data}
                valueFormatter={valueFormatter}
                showAnimation={false}
              />
            </div>
          </TabPanel>
          <TabPanel>
            <div
              className="relative border pl-2 py-2 pr-4 border-dashed rounded-lg
                                border-slate-400"
            >
              <div
                className="absolute top-0 right-2.5 px-2 -translate-y-1/2 bg-white text-sm
                                    font-normal text-slate-400"
              >
                BarList
              </div>
              <BarList
                data={runners.filter((runner) => runner.id === 2)[0].data}
                valueFormatter={valueFormatter}
                showAnimation={false}
              />
            </div>
          </TabPanel>
          <TabPanel>
            <div
              className="relative border pl-2 py-2 pr-4 border-dashed rounded-lg
                                border-slate-400"
            >
              <div
                className="absolute top-0 right-2.5 px-2 -translate-y-1/2 bg-white text-sm
                                    font-normal text-slate-400"
              >
                BarList
              </div>
              <BarList
                data={runners.filter((runner) => runner.id === 3)[0].data}
                valueFormatter={valueFormatter}
                showAnimation={false}
              />
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </Card>
  );
};

export default DashboardCard;
