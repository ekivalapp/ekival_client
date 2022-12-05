import Spinner from './../Spinner'
import useWallet from '../../contexts/wallet';
import type { Wallet } from '@martifylabs/mesh';
import type { WalletAsset } from './../../contexts/wallet';
import { BrowserWallet } from '@martifylabs/mesh';
import { useEffect, useMemo, useState } from "react";

export default function BalanceCard() {
  const { refreshing, refreshBalance, walletAssets, currentbalance } = useWallet();
    const [availableWallets, setAvailableWallets] = useState<Wallet[]>([]);
    const [tEkivalAsset, setEkivalAsset] = useState<WalletAsset>();

    useEffect(() => {
      async function init() {
        setAvailableWallets(BrowserWallet.getInstalledWallets());
      }
      init();
    }, []);

    useEffect(() => {
      if (walletAssets && walletAssets.length > 0) {
        const tEkival = walletAssets.find(w => w.assetName === 'tekival')
        if (tEkival) {
          setEkivalAsset(tEkival)
        }
      }
    }, [walletAssets]);

    // On force le wallet en dure pour l'instant
  const currentWallet = useMemo(
    () => availableWallets.find(w => w.name === 'eternl'),
    [availableWallets]
  );

  return <>
  <div className="card balance-card">
    {
      currentWallet && (
        <div className="profile">
          <div className="image" >
            <img
              src={currentWallet.icon}
              alt={currentWallet.name}
            />
          </div>
          <p className="text-uppercase wallet-name">WALLET - { currentWallet.name }</p>
          <div className="balance">
            <img src="/images/sphere.jpg" alt="ball" />
            <p>ADA BALANCE</p>
            <h3>{ currentbalance ? currentbalance?.quantity : 0 }</h3>
            <p>{ tEkivalAsset?.assetName?.toUpperCase() || 'TEKIVAL' }</p>
            <h3>{ tEkivalAsset?.quantity || 0 }</h3>
            <div onClick={() => refreshBalance()} className="refresh cursor-pointer">
              { refreshing ? <Spinner /> : (
                <svg
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 458.186 458.186"
                  style={{ fill: '#fff' }}
                >
                  <g>
                    <g>
                      <path
                        d="M445.651,201.95c-1.485-9.308-10.235-15.649-19.543-14.164c-9.308,1.485-15.649,10.235-14.164,19.543
            c0.016,0.102,0.033,0.203,0.051,0.304c17.38,102.311-51.47,199.339-153.781,216.719c-102.311,17.38-199.339-51.47-216.719-153.781
            S92.966,71.232,195.276,53.852c62.919-10.688,126.962,11.29,170.059,58.361l-75.605,25.19
            c-8.944,2.976-13.781,12.638-10.806,21.582c0.001,0.002,0.002,0.005,0.003,0.007c2.976,8.944,12.638,13.781,21.582,10.806
            c0.003-0.001,0.005-0.002,0.007-0.002l102.4-34.133c6.972-2.322,11.675-8.847,11.674-16.196v-102.4
            C414.59,7.641,406.949,0,397.523,0s-17.067,7.641-17.067,17.067v62.344C292.564-4.185,153.545-0.702,69.949,87.19
            s-80.114,226.911,7.779,310.508s226.911,80.114,310.508-7.779C435.905,339.799,457.179,270.152,445.651,201.95z"
                      />
                    </g>
                  </g>
                </svg>
              )}

            </div>
          </div>
        </div>
      )
    }
    <div className="features">
      <div className="block-info">
        <div className="block-image">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1680531/money.png"
            alt="paid"
          />
        </div>
        <div className="block-txt">
          <p>LOCATION - GOMA</p>
          <span>Deadline - 3 days | Payment - CASH</span>
        </div>
        <div className="block-price">
          <p className="plus">$100</p>
        </div>
      </div>
      <div className="block-info">
        <div className="block-image">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1680531/money.png"
            alt="paid"
          />
        </div>
        <div className="block-txt">
          <p>LOCATION - GOMA</p>
          <span>Deadline - 5 days | Payment - CASH</span>
        </div>
        <div className="block-price">
          <p className="plus">$500</p>
        </div>
      </div>
      <div className="block-info">
        <div className="block-image">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1680531/money.png"
            alt="paid"
          />
        </div>
        <div className="block-txt">
          <p>LOCATION - TORONTO</p>
          <span>Deadline - 3 days | Payment - CASH</span>
        </div>
        <div className="block-price">
          <p className="plus">$10</p>
        </div>
      </div>
    </div>
    <button className="mybutton">
      <svg
        version="1.1"
        id="Capa_1"
        x="0px"
        y="0px"
        width="70%"
        height="70%"
        viewBox="0 0 44.238 44.238"
        style={{
          fill: 'white',
          transform: 'scale(1.7) rotate(45deg)'
        }}
      >
        <g>
          <g>
            <path
              d="M22.119,44.237C9.922,44.237,0,34.315,0,22.12C0,9.924,9.922,0.001,22.119,0.001S44.238,9.923,44.238,22.12
			S34.314,44.237,22.119,44.237z M22.119,1.501C10.75,1.501,1.5,10.751,1.5,22.12s9.25,20.619,20.619,20.619
			s20.619-9.25,20.619-20.619S33.488,1.501,22.119,1.501z"
            />
            <g>
              <path
                d="M31.434,22.869H12.805c-0.414,0-0.75-0.336-0.75-0.75s0.336-0.75,0.75-0.75h18.628c0.414,0,0.75,0.336,0.75,0.75
				S31.848,22.869,31.434,22.869z"
              />
            </g>
            <g>
              <path
                d="M22.119,32.183c-0.414,0-0.75-0.336-0.75-0.75V12.806c0-0.414,0.336-0.75,0.75-0.75s0.75,0.336,0.75,0.75v18.626
				C22.869,31.847,22.533,32.183,22.119,32.183z"
              />
            </g>
          </g>
        </g>
      </svg>
    </button>
  </div>
    </>;
}
