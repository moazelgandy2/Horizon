import axios from "axios";
import { create } from "zustand";
import { transformData } from "./data";
import { Transaction } from "@/pages/Home/_components/columns";
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

type Store = {
  data: Transaction[];
  isLoading: boolean;
  update: () => void;
};

export const initializeStore = create<Store>((set) => ({
  data: [],
  isLoading: false,
  update: async () => {
    set({ isLoading: true });
    const customersData = await axios.get("http://localhost:3000/customers");
    const transactionsData = await axios.get("http://localhost:3000/transactions");
    const customers: Customer[] = customersData.data;
    const transactions: TransactionOnly[] = transactionsData.data;

    const transformedData: Transaction[] = transformData(customers, transactions);

    set({ data: transformedData, isLoading: false });
  },
}));

export const useStore = initializeStore;
