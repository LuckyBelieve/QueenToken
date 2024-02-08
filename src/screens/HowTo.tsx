import React from "react";
import Text from "../components/Text";
import ContactAddress from "../components/ContactAddress";

function HowTo() {
  return (
    <section id="buy" className="px-5 pb-5 lg:px-14 bg-[url('/Bgs/bgImage2.png')] bg-cover">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className=" pt-10 flex flex-col gap-10 lg:w-[45%]">
          <Text className="font-extrabold text-5xl md:text-xxl text-center ">
            How to Buy
          </Text>
          <div className=" flex flex-col">
            <Text className="font-extrabold text-2xl">
              Step 1: Set Up a Crypto Wallet
            </Text>
            <ul>
              <li className="flex ">
                <span className="mr-2 text-secondary text-2xl">•</span>
                <Text className="font-normal text-base">
                  Create a Wallet: Start by setting up a digital wallet that
                  supports Binance Smart Chain (BSC) tokens. Popular choices
                  include Trust Wallet and MetaMask.
                </Text>
              </li>
              <li className="flex ">
                <span className="mr-2 text-secondary text-2xl">•</span>
                <Text className="font-normal text-base">
                  Secure Your Wallet: Make sure to securely store your wallet's
                  recovery phrases or private keys.
                </Text>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <Text className="font-extrabold text-2xl">
              Step 2: Add Binance Smart Chain to Your Wallet
            </Text>
            <ul>
              <li className="flex ">
                <span className="mr-2 text-secondary text-2xl">•</span>
                <Text className="font-normal text-base">
                  Configure Network Settings: Add Binance Smart Chain to your
                  wallet. This usually involves entering network details like
                  the RPC URL and Chain ID, which can be found on Binance's
                  official website or community guides
                </Text>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <Text className="font-extrabold text-2xl">
              Step 3: Purchase BNB
            </Text>
            <ul>
              <li className="flex ">
                <span className="mr-2 text-secondary text-2xl">•</span>
                <Text className="font-normal text-base">
                  Buy BNB: Acquire Binance Coin (BNB) through a cryptocurrency
                  exchange. BNB is required to trade for QUEEN Token and pay for
                  transaction fees on the Binance Smart Chain.
                </Text>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <Text className="font-extrabold text-2xl">
              Step 4: Swap BNB for QUEEN Token
            </Text>
            <ul>
              <li className="flex ">
                <span className="mr-2 text-secondary text-2xl">•</span>
                <Text className="font-normal text-base">
                  Use a DEX: Go to a decentralized exchange (DEX) like
                  PancakeSwap.
                </Text>
              </li>
              <li className="flex ">
                <span className="mr-2 text-secondary text-2xl">•</span>
                <Text className="font-normal text-base">
                  Connect Your Wallet: Link your digital wallet to the DEX.
                </Text>
              </li>
              <li className="flex ">
                <span className="mr-2 text-secondary text-2xl">•</span>
                <Text className="font-normal text-base">
                  Swap BNB for QUEEN: Select QUEEN Token as the token you wish
                  to receive, input the amount of BNB you want to swap, and
                  confirm the transaction.
                </Text>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:w-1/2 flex flex-col justify-center xl:justify-start mt-10 lg:mt-0 items-center lg:items-end">
          <div className="w-fit mt-5">
            <ContactAddress />
            <img
              src="/howTo/howToBuy.png"
              alt="howtoBuyImage"
              className="mt-5"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowTo;
