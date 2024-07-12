import { calculateTotalAmountPerCustomer } from "@/lib/data";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import { useStore } from "@/lib/store";
export const UsersPage = () => {
  const { data } = useStore();
  const transactions = calculateTotalAmountPerCustomer(data);
  console.log(transactions);
  return (
    <>
      <section className=" flex w-full flex-row max-xl:max-h-screen">
        <div className=" flex w-full flex-1 flex-col gap-8 px-5 sm:px-8 py-7 lg:py-12 xl:max-h-screen ">
          <DataTable
            data={transactions}
            columns={columns}
          />
        </div>
      </section>
    </>
  );
};
