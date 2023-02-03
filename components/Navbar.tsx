import Spinner from "./Spinner";
import useWallet from "../contexts/wallet";
import useDarkMode from "../hooks/useDarkMode";
import { getCookie, setCookie } from "cookies-next";
import { useEffect, useRef, useState } from "react";
import { showSwalMessage } from "./../utils/ui-utils";
import useClickOutside from "../hooks/useClickOutside";
import ConnectModal from "../components/Wallet/ConnectModal";
import { capitalizeFirstLetter } from "./../utils/str-utils";
import Image from "next/image";

export default function Navbar() {
  const {
    connecting,
    disconnect,
    connectWallet,
    currentNetwork,
    refreshBalance,
    walletConnected,
    connectedAddress,
    formattedAddress,
    walletNameConnected,
  } = useWallet();

  const profileDropdownWrapperRef = useRef(null);

  const [theme, setTheme] = useDarkMode();

  const [isModalOpened, setModalOpened] = useState<boolean>(false);
  const [showProfileDropdown, toggleProfileDropdown] = useState<boolean>(false);

  function toggleModal(val: boolean) {
    setModalOpened(val);
  }

  function logout() {
    disconnect();
    setCookie("wallet", null);
  }

  useClickOutside(profileDropdownWrapperRef, () => {
    toggleProfileDropdown(false);
  });

  useEffect(() => {
    if (walletConnected) {
      showSwalMessage(
        `${capitalizeFirstLetter(walletNameConnected)} - wallet connected`,
        `Connected address - ${connectedAddress}!`
      );
      refreshBalance();
      toggleModal(false);
    }
  }, [walletConnected]);

  useEffect(() => {
    function init() {
      const walletName = getCookie("wallet") as string;
      if (walletName) {
        connectWallet(walletName);
      }
    }
    init();
  }, []);

  return (
    <>
      <nav className="header__container">
        <nav className="desktop-header__container">
          <section>
            <button className="desktop-header__bars mobile-icon">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fal"
                data-icon="bars"
                className="svg-inline--fa fa-bars"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M0 80C0 71.16 7.164 64 16 64H432C440.8 64 448 71.16 448 80C448 88.84 440.8 96 432 96H16C7.164 96 0 88.84 0 80zM0 240C0 231.2 7.164 224 16 224H432C440.8 224 448 231.2 448 240C448 248.8 440.8 256 432 256H16C7.164 256 0 248.8 0 240zM432 416H16C7.164 416 0 408.8 0 400C0 391.2 7.164 384 16 384H432C440.8 384 448 391.2 448 400C448 408.8 440.8 416 432 416z"
                ></path>
              </svg>
            </button>
            <a className="desktop-header__header-link" href="/">
              <img src="/images/logo-dark.png" />
            </a>
            <ul>
              <li className="desktop-header__list-item active">
                <a href="href"> Offers </a>
              </li>

              <li className="desktop-header__list-item">
                <a href="href"> Orders </a>
              </li>

              <li className="desktop-header__list-item">
                <a href="href"> History </a>
              </li>
            </ul>
          </section>
          <section>
            <div className="header-pills__container">
              {walletConnected ? (
                <div className="header-pills__connected-pills">
                  <button className="header-pills__network">
                    <img src="/images/cardano.svg" />
                    <span>{currentNetwork}</span>
                  </button>
                  <div className="profileDropdown__container">
                    <button
                      onClick={() => toggleProfileDropdown(true)}
                      className="profileDropdown__button pillButton"
                    >
                      <span>{formattedAddress}</span>
                    </button>
                    {showProfileDropdown && (
                      <div
                        ref={profileDropdownWrapperRef}
                        className="profileDropdown__menu"
                      >
                        <div className="profileDropdown__dropdown">
                          <div className="banner">
                            <img
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAMdJREFUWEdjvFmZ/J8BD9hcqoAi69v9AJ9yBlLVM446YMBD4EXaXpQ08FF4Gd44plSS/20UihGMow4Y8BDoedeMkgbQ8zl6nBFKI4TUo5cTjKMOGPAQQC+I0OMopsIKJd+SmgaWdBzDW5dg1AWjDqB7CBAqiNDzNal1AXqaIbkuGHUAzUOAUDlAqG5ATxPocU6ojUiwHBh1AM1DAL0cIJTPSa0LCJmH0SYkpGHUAVQPAfQGCan1P6EoQy/I0NsHGG3CUQfQOwQADsMo+D8/Gw4AAAAASUVORK5CYII="
                              alt="Profile Banner"
                            />
                          </div>
                          <img
                            className="icon"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAMdJREFUWEdjvFmZ/J8BD9hcqoAi69v9AJ9yBlLVM446YMBD4EXaXpQ08FF4Gd44plSS/20UihGMow4Y8BDoedeMkgbQ8zl6nBFKI4TUo5cTjKMOGPAQQC+I0OMopsIKJd+SmgaWdBzDW5dg1AWjDqB7CBAqiNDzNal1AXqaIbkuGHUAzUOAUDlAqG5ATxPocU6ojUiwHBh1AM1DAL0cIJTPSa0LCJmH0SYkpGHUAVQPAfQGCan1P6EoQy/I0NsHGG3CUQfQOwQADsMo+D8/Gw4AAAAASUVORK5CYII="
                            alt="Profile Dropdown Icon"
                          />
                          <div className="address">
                            <span>{formattedAddress}</span>
                            <span>
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="far"
                                data-icon="clone"
                                className="svg-inline--fa fa-clone"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  fill="currentColor"
                                  d="M64 464H288C296.8 464 304 456.8 304 448V384H352V448C352 483.3 323.3 512 288 512H64C28.65 512 0 483.3 0 448V224C0 188.7 28.65 160 64 160H128V208H64C55.16 208 48 215.2 48 224V448C48 456.8 55.16 464 64 464zM160 64C160 28.65 188.7 0 224 0H448C483.3 0 512 28.65 512 64V288C512 323.3 483.3 352 448 352H224C188.7 352 160 323.3 160 288V64zM224 304H448C456.8 304 464 296.8 464 288V64C464 55.16 456.8 48 448 48H224C215.2 48 208 55.16 208 64V288C208 296.8 215.2 304 224 304z"
                                ></path>
                              </svg>
                            </span>
                          </div>
                          <div className="menuItems">
                            <a className="menuButton" href="#">
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="far"
                                data-icon="arrow-down-to-bracket"
                                className="svg-inline--fa fa-arrow-down-to-bracket"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                              >
                                <path
                                  fill="currentColor"
                                  d="M352 512H96c-53.02 0-96-42.98-96-96v-72C0 330.7 10.75 320 24 320c13.26 0 24 10.75 24 24V416c0 26.4 21.6 48 48 48h256c26.4 0 48-21.6 48-48v-72c0-13.25 10.75-24 24-24c13.26 0 24 10.75 24 24V416C448 469 405 512 352 512zM240.4 345.5l136-128c9.688-9.094 10.12-24.28 1.031-33.91c-9.062-9.656-24.25-10.12-33.91-1.031L248 272.4V24C248 10.75 237.3 0 224 0S200 10.75 200 24v248.4L104.4 182.5C94.78 173.4 79.59 173.9 70.53 183.6C66.16 188.2 64 194.1 64 200c0 6.375 2.531 12.75 7.562 17.47l136 128C216.8 354.2 231.2 354.2 240.4 345.5z"
                                ></path>
                              </svg>
                              <span>View deposits</span>
                            </a>
                            <button
                              onClick={() => logout()}
                              className="menuButton"
                            >
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="far"
                                data-icon="power-off"
                                className="svg-inline--fa fa-power-off"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  fill="currentColor"
                                  d="M280 264C280 277.3 269.3 288 256 288C242.7 288 232 277.3 232 264V24C232 10.75 242.7 0 256 0C269.3 0 280 10.75 280 24V264zM56 262C56 368 141.1 454 248 454C354 454 440 368 440 262C440 198.6 409.3 142.3 361.8 107.3C351.1 99.46 348.8 84.43 356.7 73.76C364.5 63.09 379.6 60.82 390.2 68.68C449.5 112.3 488 182.7 488 262C488 394.6 380.5 502 248 502C115.5 502 8 394.6 8 262C8 182.7 46.52 112.3 105.8 68.68C116.4 60.82 131.5 63.09 139.3 73.76C147.2 84.43 144.9 99.46 134.2 107.3C86.74 142.3 55.1 198.6 55.1 262H56z"
                                ></path>
                              </svg>
                              <span>Disconnect</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => toggleModal(true)}
                  className="header-pills__connect-btn"
                >
                  {connecting ? (
                    <span>
                      Connecting &nbsp;
                      <Spinner />
                    </span>
                  ) : (
                    <span> Connect Wallet </span>
                  )}
                </button>
              )}

              {theme === "light" ? (
                <button
                  onClick={() => setTheme("light")}
                  className="header-pills__user-settings"
                >
                  <Image
                    className="theme-icon"
                    src="/images/theme/sun_icon.svg"
                    width="28"
                    height="28"
                  />
                </button>
              ) : (
                <button
                  onClick={() => setTheme("dark")}
                  className="header-pills__user-settings"
                >
                  <Image
                    className="theme-icon"
                    src="/images/theme/moon_icon.svg"
                    width="28"
                    height="28"
                  />
                </button>
              )}
            </div>
          </section>
        </nav>
      </nav>
      {isModalOpened && <ConnectModal closeModal={toggleModal} />}
    </>
  );
}
