import CountUp from "react-countup";
import { HomePageChart } from "./chart";
import { HomePageChart2 } from "./chart2";
import { cn } from "@/lib/utils";
import { Transaction } from "./columns";

export const UsersCard = ({ data, users }: { data: boolean; users: Transaction[] }) => {
  const totalUsers = users.length;
  const moreThan100 = users.filter((user) => user.amount > 100).length;
  const lessThan100 = totalUsers - moreThan100;
  return (
    <>
      <section className="flex w-full items-center gap-4 rounded-xl border border-gray-200 shadow-chart sm:gap-6 sm:p-6">
        <div
          className={cn(
            "flex size-full  items-center",
            data ? "sm:max-w-[120px] max-w-[100px]" : "w-full"
          )}
        >
          {data ? (
            <HomePageChart
              more={moreThan100}
              less={lessThan100}
            />
          ) : (
            <HomePageChart2 />
          )}
        </div>
        {data && (
          <div className="flex flex-col gap-6">
            <h2 className="text-[18px] leading-[22px] font-semibold text-gray-900">
              Users: {totalUsers}
            </h2>
            <div className="flex flex-col gap-2">
              <p className="text-[14px] leading-[20px] font-medium text-gray-600">
                Total Users Transactions
              </p>
              <p className="text-[24px] leading-[30px] lg:text-[30px] lg:leading-[38px] flex-1 font-semibold text-gray-900 flex justify-center gap-2">
                <div className="w-full">
                  <CountUp
                    start={0}
                    end={totalUsers}
                    decimal=","
                    duration={2.5}
                  />
                </div>
              </p>
            </div>
          </div>
        )}
      </section>
    </>
  );
};
