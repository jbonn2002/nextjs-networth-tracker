import {
  Card,
  Grid,
  Title,
  Text,
  Tab,
  TabList,
  TabGroup,
  TabPanel,
  TabPanels,
} from "@tremor/react";
import DashboardCard from "./DashboardCard";
import DashboardChart from "./DashboardChart";
import DashboardNetworth from "./DashboardNetworth";

const data = [
  {
    Month: "Jan 21",
    Sales: 2890,
    Profit: 2400,
    Customers: 4938,
  },
  {
    Month: "Feb 21",
    Sales: 1890,
    Profit: 1398,
    Customers: 2938,
  },
  {
    Month: "Jul 21",
    Sales: 3490,
    Profit: 4300,
    Customers: 2345,
  },
  {
    Month: "Jul 21",
    Sales: 3490,
    Profit: 4300,
    Customers: 2345,
  },
];

const Dashboard = () => {
  return (
    <main>
      <TabGroup className="mt-6">
        <TabList>
          <Tab className="text-white">Page 1</Tab>
          <Tab className="text-white">Page 2</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Grid numItemsMd={2} numItemsLg={3} className="gap-6 mt-6">
              <Card>
                <DashboardCard
                  title="Networth"
                  metric="$12,567"
                  metricPrev="$9,532"
                  delta="1.4%"
                  deltaType="moderateIncrease"
                  data={data}
                  categories={["Sales"]}
                />
              </Card>
              <Card>
                <DashboardCard
                  title="Assets"
                  metric="$12,567"
                  metricPrev="$9,532"
                  delta="0%"
                  deltaType="unchanged"
                  data={data}
                  categories={["Customers"]}
                />
              </Card>
              <Card>
                <DashboardCard
                  title="Liabilities"
                  metric="$12,567"
                  metricPrev="$9,532"
                  delta="5.4%"
                  deltaType="moderateDecrease"
                  data={data}
                  categories={["Customers"]}
                />
              </Card>
            </Grid>
            <div className="mt-6">
              <Card>
                <DashboardNetworth />
              </Card>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-6">
              <Card>
                <div className="h-96" />
              </Card>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </main>
  );
};

export default Dashboard;
