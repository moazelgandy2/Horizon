import { useStore } from "@/lib/store";
import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";
import { UsersCard } from "./_components/users-card";
import { Skeleton } from "@/components/ui/skeleton";
import toast from "react-hot-toast";

export const Home = () => {
  const { data, isLoading } = useStore();
  return (
    <>
      <section className=" flex w-full flex-row max-xl:max-h-screen">
        {isLoading &&
          toast("Loading data, please wait...", {
            icon: "🔃",
          })}

        <div className="flex w-full flex-1 flex-col gap-8 px-5 sm:px-8 py-7 lg:py-12 xl:max-h-screen ">
          <div className="flex flex-col justify-between gap-8">
            <div className="header flex flex-col gap-1">
              <h1 className="text-24 lg:text-[30px] leading-[38px] font-semibold text-gray-900">
                Welcome, <span className="text-primary">User</span>
              </h1>
              <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] font-normal text-gray-600">
                Here you can find all the information about users transactions.
              </p>
            </div>
            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-3">
              <div className="flex flex-col gap-4 max-md:grid-cols-1">
                {isLoading == true && <Skeleton className="w-full h-44" />}
                {!isLoading && (
                  <UsersCard
                    users={data}
                    data={true}
                  />
                )}
                {!isLoading && (
                  <UsersCard
                    users={data}
                    data={false}
                  />
                )}
                {isLoading == true && <Skeleton className="w-full h-96" />}
              </div>
              <div className=" gap-4 max-md:grid-cols-1">
                Recent Transactions
                {isLoading && (
                  <>
                    <div className="flex flex-col py-4 gap-4">
                      <div className="grid grid-cols-5 gap-4">
                        <div className="col-span-4 flex gap-4">
                          <Skeleton className="w-full h-9" />
                          <Skeleton className="w-full h-9" />
                        </div>
                        <div className="col-span-1">
                          <Skeleton className="w-full h-9" />
                        </div>
                      </div>
                      <div className="w-full">
                        <Skeleton className="w-full h-[65vh] mb-4" />
                        <div className="flex gap-3 justify-end">
                          <Skeleton className="w-1/4 h-10" />
                          <Skeleton className="w-1/4 h-10" />
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {!isLoading && (
                  <DataTable
                    columns={columns}
                    data={data}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
