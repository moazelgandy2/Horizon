import { findMonthlyPeaks, getMonthlyTransactionCounts, summarizeTransactions } from "@/lib/data";
import { AreaChartPage } from "./_components/area-chart";
import { SummaryItem } from "@/lib/data";
import { Component } from "./_components/peak-chart";
import { useStore } from "@/lib/store";
import { BarChartPage } from "./_components/bar-charts";
import { Skeleton } from "@/components/ui/skeleton";

export const ChartsPage = () => {
  const { data, isLoading } = useStore();
  const summary: SummaryItem[] = summarizeTransactions(data);
  const monthlyTotal = getMonthlyTransactionCounts(data);
  const monthlyPeaks = findMonthlyPeaks(data);
  return (
    <>
      <div className="py-8 min-h-[100vh]">
        <div className="flex flex-col gap-16">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 px-2 justify-center">
            <div className="col-span-3">
              {isLoading == true && <Skeleton className="w-full h-[700px]" />}
              {!isLoading == true && <BarChartPage transactions={monthlyTotal} />}
            </div>
          </div>
          <div className="px-2">
            {isLoading == true && <Skeleton className="w-full h-[600px]" />}
            {!isLoading == true && <AreaChartPage summary={summary} />}
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 px-2">
            {isLoading == true && <Skeleton className="w-full h-[300px]" />}
            {isLoading == true && <Skeleton className="w-full h-[300px]" />}
            {isLoading == true && <Skeleton className="w-full h-[300px]" />}
            {!isLoading == true && (
              <Component
                peaks={monthlyPeaks["2024"]}
                year={2024}
              />
            )}
            {!isLoading == true && (
              <Component
                peaks={monthlyPeaks["2023"]}
                year={2023}
              />
            )}
            {!isLoading == true && (
              <Component
                peaks={monthlyPeaks["2022"]}
                year={2022}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
