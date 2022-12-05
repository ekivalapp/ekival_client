
import React, {
  createContext,
  useState,
  useContext,
  useMemo,
  ReactNode,
} from "react";
import { Asset, BrowserWallet, UTxO, Transaction } from "@martifylabs/mesh";
import { Console } from "console";

const WalletContext = createContext({
  wallet: {} as BrowserWallet,
  connecting: false,
  walletNameConnected: '',
  walletConnected: false,
  connectWallet: async (walletName: string) => { },
  handlockContrat: async () => { },
  handSendAda: async () => { },
  connectedAddress: '',
  currentNetwork: '',
  currentbalence: '',
  currentERROR: ''
});


export const WalletProvider = ({ children }: { children: ReactNode }) => {

  const [currentbalence, setBalance] = useState<Asset>();

  const [currentUtxos, setUtxos] = useState<UTxO>({} as UTxO)
  const [wallet, setWallet] = useState<BrowserWallet>({} as BrowserWallet);
  const [walletConnected, setWalletConnected] = useState<boolean>(false);
  const [connecting, setConnecting] = useState<boolean>(false);
  const [walletNameConnected, setWalletNameConnected] = useState<string>("");
  const [connectedAddress, setConnectedAddress] = useState<string>('');
  const [currentNetwork, setCurrentNetwork] = useState<string | undefined>(undefined)
  const [currentChangeAddress, setChangeAddress] = useState<string>('')

  const [currentloveLace, setloveLace] = useState<string>('')
  const [currentbuild, setBuild] = useState<string>('');
  const [currentsignTx, setSignTx] = useState<string>('');
  const [currentSubmitTx, setSubmitTx] = useState<string>('');
  const [currenttxHash, settxHash] = useState<string | null>(null);
  const [currentERROR, setError] = useState<string | null>('')
  const [currentConnect, setConnect] = useState<boolean>(false)
  const tokensTolock = [
    {
      unit: "64af286e2ad0df4de2e7de15f8ff5b3d27faecf4ab2757056d860a424d657368546f6b656e",
      quantity: "1",
    }
  ]
  const handSendAda = async () => {
    try {
      if (walletConnected) {
        const transaction = new Transaction({ initiator: wallet }).sendLovelace(
          "addr_test1qrqasyjrvff5skkxyf49t6feq0597exxzwu7sdszl89r64nsuygajm0vp4m29g85nr86sedq6rg4kmzt9c2ghmqld4ask5tdam", "5000000"
        );
        const build = await transaction.build();
        const sign = await wallet.signTx(build);
        const hash = await wallet.submitTx(sign)
     console.log(hash);
      } else {
        alert("please connect a wallet")
      }

    } catch (error:any) {
      alert(error.any)
    }
  }

  const handlockContrat = async () => {
    setConnecting(true);
    if (walletConnected) {
      try {
        const netWork = await wallet.getNetworkId();

        const tx = new Transaction({
          initiator: wallet, parameters: {
            epoch: 0,
            coinsPerUTxOSize: '34482',
            priceMem: 0.0577,
            priceStep: 0.0000721,
            minFeeA: 44,
            minFeeB: 155381,
            keyDeposit: '2000000',
            maxTxSize: 16384,
            maxValSize: '5000',
            poolDeposit: '500000000',
            maxCollateralInputs: 3,
            maxBlockSize: 65536,
            collateralPercent: 150,
            maxBlockHeaderSize: 1100,
            minPoolCost: '0',
            maxTxExMem: '10000000',
            maxTxExSteps: '10000000000',
            maxBlockExMem: '50000000',
            maxBlockExSteps: '40000000000',
          }, era: 'ALONZO'
        })
          .sendAssets(
            "addr_test1wpnlxv2xv9a9ucvnvzqakwepzl9ltx7jzgm53av2e9ncv4sysemm8",
            tokensTolock,
            { datum: 'supersecret' });

        const unsignedTx = await tx.build();
        const signedTx = await wallet.signTx(unsignedTx);
        const txHash = await wallet.submitTx(signedTx);
        settxHash(txHash);
        setConnecting(false);
      } catch (error: any) {
        setError(error);
      }
    } else {
      setConnect(false);
    }
  }
  const connectWallet = async (walletName: string) => {
    setConnecting(true);
    const _wallet = await BrowserWallet.enable(walletName);
    const _lovelace = await _wallet.getLovelace();
    const _address = await _wallet.getUsedAddresses();
    const _network = await _wallet.getNetworkId();
    const _balance = await _wallet.getBalance();
    if (_wallet) {
      setWallet(_wallet);
      setWalletNameConnected(walletName);
      setWalletConnected(true);
      setConnectedAddress(_address[0]);
      setBalance(_balance[0]);
      setloveLace(_lovelace);
      if (_network == 0) setCurrentNetwork("Testnet");
      if (_network == 1) setCurrentNetwork("Mainnet");

    }
    setConnecting(false);
  };


  const memoedValue = useMemo(
    () => ({
      wallet,
      connecting,
      walletNameConnected,
      walletConnected,
      connectWallet,
      handlockContrat,
      handSendAda,
      connectedAddress,
      currentNetwork,
      currentbalence,
      currenttxHash,
      currentConnect,
      currentERROR

    }),
    [wallet, walletConnected, connecting, walletNameConnected, connectedAddress, currentNetwork, currentbalence, currenttxHash, currentConnect, currentERROR]
  );

  return (
    <WalletContext.Provider value={memoedValue}>
      {children}
    </WalletContext.Provider>
  );
};

export default function useWallet() {
  return useContext(WalletContext);
}

