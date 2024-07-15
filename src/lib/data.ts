import { Transaction } from "@/pages/Home/_components/columns";
import { HomeIcon, LucideIcon, PieChart, User2Icon } from "lucide-react";

interface SideBarLink {
  icon: LucideIcon;
  label: string;
  route: string;
}

export type Customer = {
  id: number;
  name: string;
};

export type TransactionOnly = {
  id: number;
  customerId: number;
  date: Date;
  amount: number;
};

interface CustomerTotal {
  id: string;
  name: string;
  customer_id: string;
  totalAmount: number;
}

export type SummaryItem = {
  date: string;
  [yearLabel: string]: number | string;
};
export type MonthlyPeaks = {
  month: string;
  day: string;
  transactions: number;
};
export type YearlyMonthlyPeaks = {
  [key: string]: MonthlyPeaks[];
};
export type MonthlyTotals = {
  month: string;
  year1: number;
  year2: number;
  year3: number;
};

export const sideBarLinks: SideBarLink[] = [
  {
    icon: HomeIcon,
    label: "Home",
    route: "/",
  },
  {
    icon: User2Icon,
    label: "Users",
    route: "/users",
  },
  {
    icon: PieChart,
    label: "Analytics",
    route: "/analytics",
  },
];

export function transformData(customers: Customer[], transactions: TransactionOnly[]) {
  const transformedData = transactions.map((transaction) => {
    const customer = customers.find((c) => c.id === transaction.customerId);
    return {
      id: transaction.id.toString(),
      name: customer ? customer.name : "Unknown Customer",
      customer_id: transaction.customerId.toString(),
      amount: transaction.amount,
      date: transaction.date,
    };
  });
  return transformedData;
}

export const getMonthlyTransactionData = (data: Transaction[]) => {
  const monthNames = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];
  const monthColors: { [key: string]: string } = {
    january: "var(--color-january)",
    february: "var(--color-february)",
    march: "var(--color-march)",
    april: "var(--color-april)",
    may: "var(--color-may)",
    june: "var(--color-june)",
    july: "var(--color-july)",
    august: "var(--color-august)",
    september: "var(--color-september)",
    october: "var(--color-october)",
    november: "var(--color-november)",
    december: "var(--color-december)",
  };

  const transactionsByMonth: { [key: string]: number } = data.reduce(
    (acc: { [key: string]: number }, transaction) => {
      const monthIndex = new Date(transaction.date).getMonth();
      const monthName = monthNames[monthIndex];
      if (!acc[monthName]) {
        acc[monthName] = 0;
      }
      acc[monthName]++;
      return acc;
    },
    {}
  );

  return monthNames.map((month) => ({
    month,
    transaction: transactionsByMonth[month] || 0,
    fill: monthColors[month],
  }));
};

export const calculateTotalAmountPerCustomer = (transactions: Transaction[]): CustomerTotal[] => {
  const totalAmounts: Record<string, number> = {};

  transactions.forEach((transaction) => {
    const { customer_id, amount } = transaction;
    if (totalAmounts[customer_id]) {
      totalAmounts[customer_id] += amount;
    } else {
      totalAmounts[customer_id] = amount;
    }
  });

  const result = Object.keys(totalAmounts).map((customer_id) => ({
    id: customer_id,
    name: transactions.find((t) => t.customer_id === customer_id)?.name || "",
    customer_id: customer_id,
    totalAmount: totalAmounts[customer_id],
  }));

  return result;
};

export const summarizeTransactions = (transactions: Transaction[]): SummaryItem[] => {
  const summary: { [dateKey: string]: SummaryItem } = {};

  // Get the current year
  const currentYear = new Date().getFullYear();

  transactions.forEach((transaction) => {
    const date = new Date(transaction.date);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const dateKey = `${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`;

    if (!summary[dateKey]) {
      summary[dateKey] = {
        date: `${year}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`,
      };
    }

    const yearLabel = `year${currentYear - year + 1}`;

    if (!summary[dateKey][yearLabel]) {
      summary[dateKey][yearLabel] = 0;
    }

    (summary[dateKey][yearLabel] as number) += 1;

    const existingDate = new Date(summary[dateKey].date);
    if (date > existingDate) {
      summary[dateKey].date = transaction.date.toString();
    }
  });

  const years = [
    ...new Set(transactions.map((transaction) => new Date(transaction.date).getFullYear())),
  ];
  const result: SummaryItem[] = Object.values(summary).map((item) => {
    const summaryItem: SummaryItem = {
      date: item.date,
    };
    years.forEach((year) => {
      const yearLabel = `year${currentYear - year + 1}`;
      summaryItem[yearLabel] = item[yearLabel] || 0;
    });
    return summaryItem;
  });

  // Sort result by month
  result.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA.getMonth() - dateB.getMonth() || dateA.getDate() - dateB.getDate();
  });

  return result;
};

export function findMonthlyPeaks(transactions: Transaction[]): YearlyMonthlyPeaks {
  const yearlyMonthlyPeaks: YearlyMonthlyPeaks = {};

  const groupedTransactions = transactions.reduce((acc, transaction) => {
    const date = new Date(transaction.date);
    const year = date.getFullYear().toString();
    const month = date.toLocaleString("en-US", { month: "long" });

    if (!acc[year]) {
      acc[year] = {};
    }
    if (!acc[year][month]) {
      acc[year][month] = [];
    }
    acc[year][month].push(transaction);
    return acc;
  }, {} as { [key: string]: { [key: string]: Transaction[] } });

  for (const year in groupedTransactions) {
    for (const month in groupedTransactions[year]) {
      const dailyCounts: { [key: string]: number } = {};
      groupedTransactions[year][month].forEach((transaction) => {
        const day = new Date(transaction.date).getDate().toString();
        if (!dailyCounts[day]) {
          dailyCounts[day] = 0;
        }
        dailyCounts[day]++;
      });

      let mostFrequentDay = "";
      let maxCount = 0;
      for (const day in dailyCounts) {
        if (dailyCounts[day] > maxCount) {
          mostFrequentDay = day;
          maxCount = dailyCounts[day];
        }
      }

      if (!yearlyMonthlyPeaks[year]) {
        yearlyMonthlyPeaks[year] = [];
      }

      yearlyMonthlyPeaks[year].push({ month, day: mostFrequentDay, transactions: maxCount });
    }
  }
  const peaks = sortMonthlyPeaks(yearlyMonthlyPeaks);
  return peaks;
}

function sortMonthlyPeaks(yearlyMonthlyPeaks: YearlyMonthlyPeaks): YearlyMonthlyPeaks {
  const sortedPeaks: YearlyMonthlyPeaks = {};

  for (const year in yearlyMonthlyPeaks) {
    sortedPeaks[year] = yearlyMonthlyPeaks[year].sort((a, b) => {
      const monthsOrder = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      return monthsOrder.indexOf(a.month) - monthsOrder.indexOf(b.month);
    });
  }

  return sortedPeaks;
}

export const getMonthlyTransactionCounts = (transactions: Transaction[]): MonthlyTotals[] => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const years = [2022, 2023, 2024];

  const monthlyTotals: MonthlyTotals[] = months.map((month, monthIndex) => {
    const totals = { month, year1: 0, year2: 0, year3: 0 };

    transactions.forEach((transaction) => {
      const transactionDate = new Date(transaction.date);
      const transactionMonth = transactionDate.getMonth();
      const transactionYear = transactionDate.getFullYear();

      if (transactionMonth === monthIndex) {
        if (transactionYear === years[0]) {
          totals.year1 += 1;
        } else if (transactionYear === years[1]) {
          totals.year2 += 1;
        } else if (transactionYear === years[2]) {
          totals.year3 += 1;
        }
      }
    });

    return totals;
  });

  return monthlyTotals;
};
