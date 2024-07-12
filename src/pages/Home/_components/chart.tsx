import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJs.register(ArcElement, Tooltip, Legend);

export const HomePageChart = ({ more, less }: { more: number; less: number }) => {
  const data = {
    datasets: [
      { label: "Transaction", data: [more, less], backgroundColor: ["#E23670", "#2662D9"] },
    ],
    labels: ["spent > $100", "spent < $100"],
  };

  return (
    <Doughnut
      data={data}
      options={{
        cutout: "60%",
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
    />
  );
};
