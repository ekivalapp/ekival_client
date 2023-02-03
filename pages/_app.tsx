import "animate.css";
import "../styles/css/main.css";
import "../styles/css/theme.css";
import "../styles/sass/app.scss";
import "../styles/sass/balance.scss";

import client from "../apollo-client";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import { ApolloProvider } from "@apollo/client";
import { WalletProvider } from "../contexts/wallet";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <WalletProvider>
        <div className="app-container">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </WalletProvider>
    </ApolloProvider>
  );
}
export default MyApp;
