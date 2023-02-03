import type { Region, TransactionRequest } from "./../types"
import type { SubmitHandler } from "react-hook-form";

export const submitTransaction: SubmitHandler<TransactionRequest> = (data: TransactionRequest) => {
  console.log(data);
  return
}
