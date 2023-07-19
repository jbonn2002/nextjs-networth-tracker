"use client";

import {
  BadgeDelta,
  Card,
  Flex,
  Metric,
  ProgressBar,
  Text,
} from "@tremor/react";

// Single KPI card in the demo dashboard with sample inputs
export default function FrontPageChart() {
  return (
    <div className="w-full">
      <Card className="max-w-lg mx-auto mb-5">
        <Flex alignItems="start">
          <div>
            <Text>Assets</Text>
            <Metric>$ 120,699</Metric>
          </div>
          <BadgeDelta deltaType="moderateIncrease">13.2%</BadgeDelta>
        </Flex>
        <Flex className="mt-4">
          <Text className="truncate">68% ($ 149,940)</Text>
          <Text>$ 220,500</Text>
        </Flex>
        <ProgressBar value={15.9} className="mt-2" />
      </Card>
      <Card className="max-w-lg mx-auto">
        <Flex alignItems="start">
          <div>
            <Text>Liabilities</Text>
            <Metric>$ 20,699</Metric>
          </div>
          <BadgeDelta deltaType="moderateDecrease">3.2%</BadgeDelta>
        </Flex>
        <Flex className="mt-4">
          <Text className="truncate">34% ($ 149,940)</Text>
          <Text>$ 220,500</Text>
        </Flex>
        <ProgressBar value={15.9} className="mt-2" />
      </Card>
    </div>
  );
}
