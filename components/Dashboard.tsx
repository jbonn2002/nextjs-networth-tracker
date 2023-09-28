import {
  Card,
  Grid,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@tremor/react";
import AssetCard from "./AssetCard";
import DashboardNetworth from "./DashboardNetworth";
import DebtCard from "./DebtCard";
import EntryTable from "./EntryTable";
import LiabilityCard from "./LiabilityCard";

const Dashboard = async () => {
  return (
    <main>
      <TabGroup className="mt-6">
        <TabList>
          <Tab className="text-white">Dashboard Charts</Tab>
          <Tab className="text-white">Asset/Liablity Table</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Grid numItemsMd={1} numItemsLg={3} className="gap-6 mt-6">
              <Card>
                <AssetCard />
              </Card>
              <Card>
                <LiabilityCard />
              </Card>
              <Card>
                <DebtCard />
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
                <EntryTable />
              </Card>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </main>
  );
};

export default Dashboard;
