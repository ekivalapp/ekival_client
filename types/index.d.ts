export type PaymentMethod = "CASH" | "MOBILE";

export type TransactionState = "locked" | "accepted" | "expired" | "cancelled";

export type ModalTrigger = (val: boolean) => void;

export interface Transaction {
  id: string;
  amount: number;
  amountInAda: number;
  currency: string;
  exchangeRate: number;
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

export type TransactionRequest = Omit<
  Transaction,
  "id" | "expirationTime" | "state"
>;

export interface Notification {
  title: string;
  source: string;
  destination: string;
  status: string;
  amountInUsd: number;
  date: Date;
}

export interface Region {
  id: string;
  designation: string;
  active: boolean;
  created_at: Date;
}
