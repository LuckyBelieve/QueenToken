import React from "react";
import Text from "../components/Text";

function Tokenomics() {
  return (
    <section id="tokenomics" className="pt-12 pb-5 px-5 lg:px-14 bg-[url('/Bgs/bgImage2.png')] bg-cover">
      <div className="flex flex-col justify-center items-center">
        <Text className="font-extrabold text-5xl md:text-xxl">Tokenomics</Text>
        <Text className="font-extrabold text-base">
          Built on Binance Smart Chain
        </Text>
      </div>
      <div className="flex flex-col lg:flex-row justify-between pt-16">
        <div className="flex flex-col items-center gap-10 pt-5 lg:w-[45%] justify-center">
          <Text className="font-black text-2xl">
            Total Supply: 1 Billion QUEEN Tokens
          </Text>
          <Text className="font-normal text-base md:text-2xl text-center">
            QUEEN Token leverages the power and efficiency of the Binance Smart
            Chain (BSC), known for its fast transaction speeds and low fees.
            This ensures a seamless and cost-effective experience for our users.
          </Text>
          <Text className="font-black text-2xl">Join the QUEEN Economy</Text>
          <Text className="font-normal text-base md:text-2xl text-center">
            By participating in the QUEEN Token ecosystem, you're not just
            investing; you're becoming a part of a movement that values
            transparency, community, and sustainable growth. Embrace the power
            of QUEEN Token and be a part of our journey on the Binance Smart
            Chain.
          </Text>
        </div>
        <div className="lg:w-1/2 flex flex-col justify-center xl:justify-start mt-10 lg:mt-0 items-center lg:items-end">
          <div className="w-fit">
            <Text className="font-black text-2xl text-center mb-5">
              Token Distribution
            </Text>
            <img src="/token/token.png" alt="tokenImage"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tokenomics;
