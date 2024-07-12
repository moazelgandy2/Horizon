import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Transaction } from "@/pages/Home/_components/columns";

export function DataTable({ transactions }: { transactions: Transaction[] }) {
  return (
    <Table>
      <TableCaption>A list of users recent transactions.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[150px]">Transaction Id</TableHead>
          <TableHead>User</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead className="text-right">date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((transaction) => (
          <TableRow key={transaction.id}>
            <TableCell className="font-medium">{transaction.id}</TableCell>
            <TableCell>{transaction.name}</TableCell>
            <TableCell>
              {transaction.amount.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </TableCell>
            <TableCell className="text-right">
              {transaction.date.toString().split("T")[0]}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">
            {transactions
              .reduce((acc, transaction) => acc + transaction.amount, 0)
              .toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
