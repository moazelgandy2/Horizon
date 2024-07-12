import { faker } from "@faker-js/faker";
import { Transaction } from "@/pages/Home/_components/columns";

function generateRandomAmount() {
  const ranges = [
    { min: 1, max: 99 }, // Amounts below 100
    { min: 100, max: 500 },
    { min: 1000, max: 5000 },
  ];

  const { min, max } = ranges[Math.floor(Math.random() * ranges.length)];
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate transactions data
export const generateTransactions = (
  numberOfTransactionsPerCustomer: number,
  numberOfCustomers: number
) => {
  const transactions: Transaction[] = [];
  let customerId = 1;

  for (let i = 0; i < numberOfCustomers; i++) {
    const customerName = faker.name.findName();
    const customerTransactions = [];

    for (let j = 0; j < numberOfTransactionsPerCustomer; j++) {
      const amount = generateRandomAmount();
      const date = new Date(
        faker.date.between("2022-01-01", "2024-12-31").toISOString().split("T")[0]
      );
      customerTransactions.push({
        id: (transactions.length + 1).toString(),
        name: customerName,
        customer_id: `728ed52f${customerId}`,
        amount: amount,
        date: date, // Format date as YYYY-MM-DD
      });

      transactions.push({
        id: (transactions.length + 1).toString(),
        name: customerName,
        customer_id: `728ed52f${customerId}`,
        amount: amount,
        date: date, // Format date as YYYY-MM-DD
      });
    }

    customerId++;
  }

  return transactions;
};
