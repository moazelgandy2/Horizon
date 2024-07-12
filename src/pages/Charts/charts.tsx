import { findMonthlyPeaks, summarizeTransactions } from "@/lib/data";
import { AreaChartPage } from "./_components/area-chart";
import { SummaryItem } from "@/lib/data";
import { Component } from "./_components/peak-chart";
import { useStore } from "@/lib/store";

export const ChartsPage = () => {
  const { data } = useStore();
  const summary: SummaryItem[] = summarizeTransactions(data);
  const monthlyPeaks = findMonthlyPeaks(data);
  return (
    <>
      <div className="py-8 min-h-[100vh]">
        <div className="flex flex-col gap-16">
          <div className="my-4">
            <AreaChartPage summary={summary} />
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 px-2">
            <Component
              peaks={monthlyPeaks["2024"]}
              year={2024}
            />
            <Component
              peaks={monthlyPeaks["2023"]}
              year={2023}
            />
            <Component
              peaks={monthlyPeaks["2022"]}
              year={2022}
            />
          </div>
        </div>
      </div>
    </>
  );
};
