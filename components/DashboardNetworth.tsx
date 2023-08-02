"use client";
import { useQuery } from "@tanstack/react-query";
import { Card, Text, Title } from "@tremor/react";
import axios from "axios";
import Linechart from "./LineChart";

const dollarFormatter = (value: number) =>
  `$ ${Intl.NumberFormat("us").format(value).toString()}`;

const numberFormatter = (value: number) =>
  `${Intl.NumberFormat("us").format(value).toString()}`;

const formatDate = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
  day: "numeric",
});

const DashboardNetworth = () => {
  const { data: networth } = useQuery({
    queryKey: ["networth"],
    queryFn: async () => {
      const { data } = await axios.get("/api/networth");
      return data;
    },
  });

  console.log(networth);

  return (
    <Card>
      <div className="block sm:flex sm:justify-between">
        <div>
          <Title>Networth</Title>
          <Text>Total networth over time</Text>
        </div>
      </div>

      <Linechart
        className="mt-8 p-0"
        data={networth}
        categories={["networth", "value"]}
        index={"createdAt"}
        colors={["teal"]}
        curveType={"monotone"}
        maxValue={2500000}
      />
    </Card>
  );
};

export default DashboardNetworth;
