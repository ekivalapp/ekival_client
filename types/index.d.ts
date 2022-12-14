export type PaymentMethod = "CASH" | "MOBILE";

export type TransactionState = "locked" | "accepted" | "expired" | "cancelled";


export interface Transaction {
  id: string;
  amount: number;
  amountInUsd: number;
  minimum: number;
  location: string;
  paymentMethod: PaymentMethod;
  validityInDays: number;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  expirationTime: string;
  state?: TransactionState;
}

export interface Notification {
  title: string;
  source: string;
  destination: string;
  status: string;
  amountInUsd: number;
  date: Date;
}
