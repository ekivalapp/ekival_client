import type { Region, TransactionRequest } from "./../types";
import type { SubmitHandler } from "react-hook-form";
import { Transaction } from "@martifylabs/mesh";
import useWallet from "../contexts/wallet";
import { toLovelace } from "../utils/converter";

const ekivalAddress =
  "addr_test1qrqasyjrvff5skkxyf49t6feq0597exxzwu7sdszl89r64nsuygajm0vp4m29g85nr86sedq6rg4kmzt9c2ghmqld4ask5tdam";

export function useTransaction() {
  const { wallet } = useWallet();

  const submitTransaction: SubmitHandler<TransactionRequest> = async (
    data: TransactionRequest
  ) => {
    try {
      const lovelaceAmount = toLovelace(data.amountInAda);

      console.log(data);
      const tx = new Transaction({ initiator: wallet }).sendLovelace(
        ekivalAddress,
        lovelaceAmount.toString()
      );
      // .setMetadata(111111111, JSON.stringify(data));
      const unsignedTx = await tx.build();
      const signedTx = await wallet.signTx(unsignedTx);
      const txHash = await wallet.submitTx(signedTx);
      console.log("txHash", txHash);
      // setSuccessfulTxHash(txHash)
    } catch (error) {
      console.log("error", error);
    }
    return;
  };
  return [submitTransaction];
}
