import {
  ConnectWallet,
  useDirectListings,
  useContract,
  MediaRenderer,
} from "@thirdweb-dev/react";

import { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  const { contract } = useContract(
    "0xA84597c9574B43c1EbCCCd9EB0F781c54C86949A",
    "marketplace-v3"
  );
  const {
    data: directListings,
    isLoading,
    error,
  } = useDirectListings(contract, { start: 0, count: 100 });

  return (
    <main>
      <div className="flexHeader">
        <div>
          <h1>
            Welcome to{" "}
            <span>
              <Link
                href="https://thirdweb.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                thirdweb.
              </Link>
            </span>
          </h1>
        </div>
        <ConnectWallet className="my-custom-class" />
      </div>

      {isLoading && <div>Loading...</div>}
      <div className="nftGrid">
        {!isLoading &&
          directListings &&
          directListings.map((nft) => (
            <div className="nftDrop" key={nft.id}>
              <a href={`/assets/${nft.id}`}>
                  
                <MediaRenderer
                  width="100%"
                  className="images"
                  src={nft.asset.image}
                />
                <p>#{nft.asset.name}</p>
                <p> Price {nft.currencyValuePerToken.displayValue} Matic</p>
              </a>
            </div>
          ))}
      </div>
    </main>
  );
};

export default Home;
