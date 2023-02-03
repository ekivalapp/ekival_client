import Spinner from "./../Spinner";
import { setCookie } from "cookies-next";
import { useEffect, useState } from "react";
import useWallet from "../../contexts/wallet";
import type { Wallet } from "@martifylabs/mesh";
import { BrowserWallet } from "@martifylabs/mesh";
import { capitalizeFirstLetter } from "../../utils/str-utils";

export default function ConnectModal({ closeModal }) {
  const { connecting, connectWallet } = useWallet();
  const [availableWallets, setAvailableWallets] = useState<Wallet[]>([]);
  const [selectedWallet, setSelectedWallet] = useState<Wallet>();

  const isEnabled = (wallet: Wallet) => {
    // On force le wallet en dure pour l'instant
    return wallet.name === "eternl";
  };

  useEffect(() => {
    if (selectedWallet) {
      const walletName = selectedWallet?.name;
      if (isEnabled(selectedWallet)) {
        setCookie("wallet", walletName);
        connectWallet(walletName);
      }
    }
  }, [selectedWallet]);

  useEffect(() => {
    async function init() {
      setAvailableWallets(BrowserWallet.getInstalledWallets());
    }
    init();
  }, []);

  return (
    <div role="presentation" className="MuiModal-root css-8ndowl">
      <div
        onClick={() => closeModal(false)}
        aria-hidden="true"
        className="MuiBackdrop-root css-919eu4"
        style={{
          opacity: "1",
          transition: "opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        }}
      ></div>
      <div data-test="sentinelStart"></div>
      <div className="wallet-connector__container animate__animated animate__jackInTheBox">
        <h1 className="wallet-connector__header">Connect your wallet</h1>
        <ul className="wallet-connector__wallet-container">
          {availableWallets
            ? availableWallets.length == 0
              ? "No wallets found"
              : availableWallets.map((wallet, i) => {
                  return (
                    <li
                      className={!isEnabled(wallet) ? "disabled" : ""}
                      key={i}
                      onClick={() => setSelectedWallet(wallet)}
                    >
                      <div className="wallet-connector__wallet-info">
                        <img src={wallet.icon} alt={wallet.name} />
                        <span>{capitalizeFirstLetter(wallet.name)}</span>
                      </div>
                      {connecting && selectedWallet?.name === wallet.name ? (
                        <Spinner />
                      ) : (
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fal"
                          data-icon="chevron-right"
                          className="svg-inline--fa fa-chevron-right"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                        >
                          <path
                            fill="currentColor"
                            d="M85.14 475.8c-3.438-3.141-5.156-7.438-5.156-11.75c0-3.891 1.406-7.781 4.25-10.86l181.1-197.1L84.23 58.86c-6-6.5-5.625-16.64 .9062-22.61c6.5-6 16.59-5.594 22.59 .8906l192 208c5.688 6.156 5.688 15.56 0 21.72l-192 208C101.7 481.3 91.64 481.8 85.14 475.8z"
                          ></path>
                        </svg>
                      )}
                    </li>
                  );
                })
            : ""}
        </ul>
        <div className="wallet-connector__suggest">
          <span>More wallet options coming soon.</span>
          <a target="_blank" href="//ekival.com" rel="noreferrer">
            Suggest a wallet
          </a>
        </div>
      </div>
      <div data-test="sentinelEnd"></div>
    </div>
  );
}
