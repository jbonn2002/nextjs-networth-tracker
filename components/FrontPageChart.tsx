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
            <Metric>$149,940</Metric>
          </div>
          <BadgeDelta deltaType="moderateIncrease" className="pr-2">
            13.2%
          </BadgeDelta>
        </Flex>
        <Flex className="mt-4">
          <Text className="truncate">68% ($101,959)</Text>
          <Text>$149,940</Text>
        </Flex>
        <ProgressBar value={68} className="mt-2" color="green" />
      </Card>
      <Card className="max-w-lg mx-auto">
        <Flex alignItems="start">
          <div>
            <Text>Liabilities</Text>
            <Metric>$20,699</Metric>
          </div>
          <BadgeDelta deltaType="moderateDecrease">3.2%</BadgeDelta>
        </Flex>
        <Flex className="mt-4">
          <Text className="truncate">34% ($7,037)</Text>
          <Text>$20,699</Text>
        </Flex>
        <ProgressBar value={34} className="mt-2" color="red" />
      </Card>
    </div>
  );
}
