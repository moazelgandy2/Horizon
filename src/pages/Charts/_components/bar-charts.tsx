import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { MonthlyTotals } from "@/lib/data";

const chartConfig = {
  year1: {
    label: "2022",
    color: "hsl(var(--chart-1))",
  },
  year2: {
    label: "2023",
    color: "hsl(var(--chart-2))",
  },
  year3: {
    label: "2024",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

export function BarChartPage({ transactions }: { transactions: MonthlyTotals[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Transactions count per Month</CardTitle>
        <CardDescription>January 2022 - December 2024</CardDescription>
      </CardHeader>
      <CardContent className="h-full overflow-hidden">
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={transactions}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={true}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar
              dataKey="year1"
              fill="var(--color-year1)"
              radius={4}
            />
            <Bar
              dataKey="year2"
              fill="var(--color-year2)"
              radius={4}
            />{" "}
            <Bar
              dataKey="year3"
              fill="var(--color-year3)"
              radius={4}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
