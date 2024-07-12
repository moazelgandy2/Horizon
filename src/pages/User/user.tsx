import { useParams } from "react-router-dom";
import { DataTable } from "./_components/transactions-table";
import { UserAreaChart } from "./_components/area-chart";
import { useStore } from "@/lib/store";

export const UserPage = () => {
  const { data } = useStore();
  const params = useParams();
  const { id } = params;
  const transactions = data.filter((t) => t.customer_id === id);

  return (
    <>
      <section className=" flex w-full flex-row max-xl:max-h-screen">
        <div className=" flex w-full flex-1 flex-col gap-2 px-5 sm:px-8 py-7 lg:py-12 xl:max-h-screen ">
          <div className="w-full">
            <UserAreaChart chartData={transactions} />
          </div>
          <div className="w-full h-full py-8">
            <DataTable transactions={transactions} />
          </div>
        </div>
      </section>
    </>
  );
};
