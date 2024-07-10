import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { SummaryItem } from "@/lib/data";

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  year1: {
    label: "2024",
    color: "hsl(var(--chart-1))",
  },
  year2: {
    label: "2023",
    color: "hsl(var(--chart-2))",
  },
  year3: {
    label: "2022",
    color: "hsl(var(--chart-6))",
  },
} satisfies ChartConfig;

export function AreaChartPage({ summary }: { summary: SummaryItem[] }) {
  return (
    <Card className="w-full border-0">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Detailed Transactions Overview</CardTitle>
          <CardDescription>Overall transactions performance.</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6 w-full ">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto w-full h-[70vh] "
        >
          <AreaChart
            accessibilityLayer
            data={summary}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="year3"
              type="natural"
              fill="url(#fillYear3)"
              fillOpacity={0.4}
              stroke="var(--color-year3)"
              stackId="a"
            />
            <Area
              dataKey="year2"
              type="natural"
              fill="url(#fillYear2)"
              fillOpacity={0.4}
              stroke="var(--color-year2)"
              stackId="a"
            />
            <Area
              dataKey="year1"
              type="natural"
              fill="url(#fillYear1)"
              fillOpacity={0.4}
              stroke="var(--color-year1)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
