import { useEffect, useState } from 'react';
import useWallet from '../../contexts/wallet';
import { BrowserWallet } from '@martifylabs/mesh';
import type { Wallet } from '@martifylabs/mesh';
// import { Button } from '@chakra-ui/react';

export default function ConnectWallet() {
    const { connecting, walletNameConnected, connectWallet } = useWallet();
    const [availableWallets, setAvailableWallets] = useState<Wallet[]>([]);
    useEffect(() => {
        async function init() {
            setAvailableWallets(BrowserWallet.getInstalledWallets());
        }
        init();
    }, []);

    return (
        <>
            {availableWallets
                ? availableWallets.length == 0
                    ? 'No wallets found'
                    : availableWallets.map((wallet, i) => (
                        <div key={i} className='relative ml-1 flex h-9 w-52 items-center gap-2 text-sky-300 shadow-2xl rounded-full text-center bg-white font-medium m-1 mr-3 cursor-pointer shadow-sky-400'>
                            <img className='h-6 justify-center rounded-full items-center' src={wallet.icon} />
                            <button key={i} onClick={() => connectWallet(wallet.name)} >
                                {wallet.name}
                            </button>
                        </div>
                    ),)
                : ''}
        </>
    );
}