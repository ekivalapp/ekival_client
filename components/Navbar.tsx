import useWallet from '../contexts/wallet'
import useDarkMode from "../hooks/useDarkMode";

export default function Navbar() {
  const { connecting, walletNameConnected, connectWallet, walletConnected, connectedAddress, currentNetwork,currentbalence,lockContrat } = useWallet();
  const [colorTheme, setTheme] = useDarkMode();

  return (
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
            <li
              className="desktop-header__list-item active"
            >
              <a href="href"> Offers </a>
            </li>

            <li
              className="desktop-header__list-item"
            >
              <a href="href"> Orders </a>
            </li>

            <li
              className="desktop-header__list-item"
            >
              <a href="href"> History </a>
            </li>
        </ul>
      </section>
      <section>
        <div className="header-pills__container">
          { walletConnected ? (
          <div className="header-pills__connected-pills">
            <button className="header-pills__network">
              <img
                src="data:image/png;base64,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"
              />
              <span>
                { currentNetwork }
              </span>
            </button>
            <div className="profileDropdown__container">
              <button
                className="profileDropdown__button pillButton"
              >
                <span>{ connectedAddress }</span>
              </button>

            </div>
          </div>
          ) : (
            <button
              className="header-pills__connect-btn"
            >
              { connecting ? (
              <span>
                Connecting
              </span>
              ) : (
                <span > Connect Wallet </span>
              ) }
            </button>
          ) }

          <button className="header-pills__user-settings">
            {/* <svg viewBox="0 0 24 24" width="1.2em" height="1.2em" data-v-30300f61=""><path fill="currentColor" d="M21.64 13a1 1 0 0 0-1.05-.14a8.05 8.05 0 0 1-3.37.73a8.15 8.15 0 0 1-8.14-8.1a8.59 8.59 0 0 1 .25-2A1 1 0 0 0 8 2.36a10.14 10.14 0 1 0 14 11.69a1 1 0 0 0-.36-1.05Zm-9.5 6.69A8.14 8.14 0 0 1 7.08 5.22v.27a10.15 10.15 0 0 0 10.14 10.14a9.79 9.79 0 0 0 2.1-.22a8.11 8.11 0 0 1-7.18 4.32Z"></path></svg> */}
            <svg viewBox="0 0 24 24" width="1.2em" height="1.2em" data-v-30300f61="">
              <path fill="currentColor" d="m5.64 17l-.71.71a1 1 0 0 0 0 1.41a1 1 0 0 0 1.41 0l.71-.71A1 1 0 0 0 5.64 17ZM5 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1Zm7-7a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v1a1 1 0 0 0 1 1ZM5.64 7.05a1 1 0 0 0 .7.29a1 1 0 0 0 .71-.29a1 1 0 0 0 0-1.41l-.71-.71a1 1 0 0 0-1.41 1.41Zm12 .29a1 1 0 0 0 .7-.29l.71-.71a1 1 0 1 0-1.41-1.41l-.64.71a1 1 0 0 0 0 1.41a1 1 0 0 0 .66.29ZM21 11h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm-9 8a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-1a1 1 0 0 0-1-1Zm6.36-2A1 1 0 0 0 17 18.36l.71.71a1 1 0 0 0 1.41 0a1 1 0 0 0 0-1.41ZM12 6.5a5.5 5.5 0 1 0 5.5 5.5A5.51 5.51 0 0 0 12 6.5Zm0 9a3.5 3.5 0 1 1 3.5-3.5a3.5 3.5 0 0 1-3.5 3.5Z"></path>
            </svg>
          </button>
        </div>
      </section>
    </nav>
  </nav>
  )
}