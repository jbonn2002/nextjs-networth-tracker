import {
  Card,
  Grid,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@tremor/react";
import DashboardNetworth from "./DashboardNetworth";
import EntryTable from "./EntryTable";
import { getAuthSession } from "@/lib/auth";
import AssetCard from "./AssetCard";
import LiabilityCard from "./LiabilityCard";
import DebtCard from "./DebtCard";

const Dashboard = async () => {
  return (
    <main>
      <TabGroup className="mt-6">
        <TabList>
          <Tab className="text-white">Page 1</Tab>
          <Tab className="text-white">Page 2</Tab>
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
