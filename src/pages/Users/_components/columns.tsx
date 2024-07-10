import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, ArrowUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export type User = {
  id: string;
  name: string;
};

export type Transaction = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  name: string;
};

interface CustomerTotal {
  id: string;
  name: string;
  customer_id: string;
  totalAmount: number;
}
export const columns: ColumnDef<CustomerTotal>[] = [
  {
    accessorKey: "id",
    header: "UserId",
  },
  {
    accessorKey: "name",
    header: "name",
  },
  {
    accessorKey: "totalAmount",
    header: ({ column }) => {
      return (
        <Button
          className="text-center flex justify-center w-full"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Total Transactions Amount
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("totalAmount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-center flex justify-center w-full font-medium">{formatted}</div>;
    },
  },

  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const navigate = useNavigate();
      const transaction = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-8 w-8 p-0"
            >
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {
                toast.success("User ID copied to clipboard");
                navigator.clipboard.writeText(transaction.id);
              }}
            >
              Copy user ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                navigate(`/users/${transaction.customer_id}`);
              }}
            >
              View transaction details
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
