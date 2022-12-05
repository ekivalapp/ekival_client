import { useEffect, useState } from "react";
import useWallet from '../../contexts/wallet';
import Spinner from "../spinner/Spinner";

const InitWallet = () => {
    const { connecting, walletNameConnected, connectWallet, walletConnected, wallet, connectedAddress, handlockContrat, handSendAda } = useWallet();
    const [currentNetwork, setCurrentNetwork] = useState<"Testnet" | "Mainnet" | "Not Connected">("Not Connected");
    const [loading, setLoading] = useState<boolean>(false);
    const [assets, setAssets] = useState<null | any>(null);

    useEffect(() => {
        const fetchNetwork = async () => {
            const _network = await wallet.getNetworkId();
            if (_network === 0) {
                setCurrentNetwork("Testnet")
            }
            else if (_network === 1) {
                setCurrentNetwork("Mainnet")
            }
            setLoading(false);
        }
        const fetchAssets = async () => {
            setLoading(true);
            const _assets = await wallet.getAssets();
            setAssets(_assets);
            setLoading(false);
        }

        if (walletConnected) {
            setLoading(true);
            fetchNetwork();
            fetchAssets();
        }
    }, [walletConnected])
    return (
        <div className="relative  gap-4 text-center w-full h-full bg-white">
            <span className=" text-3xl text-blue-900 justify-center items-center font-medium"> Connecte the wallet</span>
            {loading ? (<div className="flex items-center justify-center">
                <Spinner />
            </div>) : (<div>
                <>
                    <button className="w-40 h-8 bg-sky-500 text-white rounded-full font-medium" onClick={handlockContrat}>
                        Contrat inteligent
                    </button>

                </>
            </div>)}

            <div>
            </div>
            <div className=" h-96 shadow-lg shadow-sky-400 rounded-sm">
                <span className="font-medium text-sky-500 uppercase  text-justify m-2">If Wallet is Connected, View a list of all Assets in the Wallet</span>
                <div className="justify-center items-center m-3 flex">
                    <input className="bg-gray-200 w-64 h-8 rounded font-medium outline-sky-200" >
                    </input>
                    <button className="bg-sky-400 w-40 uppercase text-white font-medium rounded-full" onClick={handSendAda}>Send lovelace</button>
                     {walletConnected?JSON.stringify(assets, null, 2):""}
                </div>
               
            </div>
        </div>
    )
}

export default InitWallet