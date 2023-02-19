import type { Region, TransactionRequest } from "./../types";
import type { SubmitHandler } from "react-hook-form";
import { resolveDataHash, Transaction } from "@martifylabs/mesh";
import useWallet from "../contexts/wallet";
import { toLovelace } from "../utils/converter";
import { useState } from "react";

const ekivalContractAddress =
  "addr_test1wznm03079t5dr5xeetd4vjq2p3he6k5t4v898zmdxn0n8dq506hhn";

export function useTransaction() {
  const { wallet } = useWallet();

  const [processing, setProcessing] = useState(false);
  const datumConstructor: Data = {
    alternative: 0,
    fields: ['33f68ec7c67e3d4f037807fd4c67469f4937202bf36c1fe0bbf5b8af', '33f68ec7c67e3d4f037807fd4c67469f4937202bf36c1fe0bbf5b8af', 800000000, 20000000, 1651025390000,  1, 0],
  };
  const ekivalDatumHash = resolveDataHash(datumConstructor);
  console.log("Datum Hash", ekivalDatumHash );
  const submitTransaction: SubmitHandler<TransactionRequest> = async (
    data: TransactionRequest
  ) => {
    try {
      const lovelaceAmount = toLovelace(data.amountInAda);

      setProcessing(true);
      const tx = new Transaction({ initiator: wallet })
      .sendLovelace(
        {
          address: ekivalContractAddress,
          datum: {
            value: datumConstructor,
            inline: true,
          },
        },
        lovelaceAmount.toString()
      );
      // .setMetadata(111111111, JSON.stringify(data));
      const unsignedTx = await tx.build();
      const signedTx = await wallet.signTx(unsignedTx);
      const txHash = await wallet.submitTx(signedTx);

      return txHash;
    } catch (error) {
      Promise.reject(error);
    } finally {
      setProcessing(false);
    }
    return;
  };
  return { processing, setProcessing, submitTransaction };
}
