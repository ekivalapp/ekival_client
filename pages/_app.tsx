
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import client from '../apollo-client'
import { WalletProvider } from '../contexts/wallet';
import "../styles/css/main.css";
import "../styles/css/theme.css";
import "../styles/sass/app.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <WalletProvider>
        <Component {...pageProps} />
     </WalletProvider>
    </ApolloProvider>
  )
}
export default MyApp
