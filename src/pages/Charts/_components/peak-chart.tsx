import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { MonthlyPeaks } from "@/lib/data";

const chartConfig = {
  transactions: {
    label: "Transactions",
    color: "hsl(var(--chart-2))",
  },
  day: {
    label: "Day",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

export function Component({ peaks, year }: { peaks: MonthlyPeaks[]; year: number }) {
  return (
    <Card className="w-full h-full flex justify-center flex-col p-0 m-0">
      <CardHeader>
        <CardTitle>{year} Monthly Peaks</CardTitle>
        <CardDescription>January - December {year}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={peaks}
            margin={{
              top: 28,
            }}
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
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey="transactions"
              fill="var(--color-transactions)"
              radius={8}
            >
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
