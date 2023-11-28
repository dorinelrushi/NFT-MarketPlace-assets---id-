import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain="mumbai"
      clientId="c1358b113e3d37ad3419c0608fbc9784" // You can get a client id from dashboard settings
    >
      <Component />
    </ThirdwebProvider>
  );
}

export default MyApp;
