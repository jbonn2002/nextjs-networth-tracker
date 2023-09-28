"use client";

import { FC } from "react";
import { LineChart, LineChartProps } from "@tremor/react";

const dollarFormatter = (value: number) =>
  `$ ${Intl.NumberFormat("us").format(value).toString()}`;

const Linechart: FC<LineChartProps> = ({ ...props }) => {
  return (
    <LineChart
      data={props.data}
      categories={props.categories}
      index={props.index}
      colors={props.colors}
      curveType={props.curveType}
      maxValue={props.maxValue}
      valueFormatter={dollarFormatter}
      yAxisWidth={95}
    />
  );
};

export default Linechart;
