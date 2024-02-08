import React from "react";
import SocialButton from "../components/SocialButton";
import Text from "../components/Text";

function Footer() {
  return (
    <footer className=" p-5 md:p-16">
      <div className="rounded-[20px] bg-[#3D321F] pt-5 px-5 pb-2">
        <div className="flex justify-between">
          <div className="mb-5">
            <img src="/logo/logo.png" alt="logo" className="md:w-28 md:h-28" />
          </div>
          <div className="flex gap-3 z-20">
            <SocialButton imageUrl="/social/Telegram.png" alt="telegram" />
            <SocialButton imageUrl="/social/Twitter.png" alt="twitter" />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <Text className="font-extrabold text-[23px]">
            QUEEN Token - Join the Crypto Royalty
          </Text>
          <div className="flex flex-col gap-3">
            <Text className="font-extrabold text-[15px]">Connect with Us</Text>
            <ul>
              <li className="flex items-center">
                <span className="mr-2 text-secondary text-2xl">•</span>
                <Text className="font-normal text-sm">
                  Email: support@queentoken.com - For all inquiries and support.
                </Text>
              </li>
              <li className="flex items-center ">
                <span className="mr-2 text-secondary text-2xl">•</span>
                <Text className="font-normal text-sm">
                  Telegram: QUEENTokenCommunity - Join our Telegram for live
                  updates and community discussions.
                </Text>
              </li>
              <li className="flex items-center ">
                <span className="mr-2 text-secondary text-2xl">•</span>
                <Text className="font-normal text-sm">
                  About Us: Learn more about the team and vision behind QUEEN
                  Token.
                </Text>
              </li>
              <li className="flex items-center ">
                <span className="mr-2 text-secondary text-2xl">•</span>
                <Text className="font-normal text-sm">
                  How to Buy: Step-by-step guide on purchasing QUEEN Token.
                </Text>
              </li>
              <li className="flex items-center ">
                <span className="mr-2 text-secondary text-2xl">•</span>
                <Text className="font-normal text-sm">
                  Roadmap: Explore our journey and future plans.
                </Text>
              </li>
              <li className="flex items-center ">
                <span className="mr-2 text-secondary text-2xl">•</span>
                <Text className="font-normal text-sm">
                  Tokenomics: Understand the distribution and economics of QUEEN
                  Token
                </Text>
              </li>
            </ul>
          </div>
          <h1 className="flex justify-center items-center">
            <Text className="font-normal text-xs flex items-center">
              <span className="mr-2 text-secondary text-xl">•</span>
              Email: support@queentoken.com - For all inquiries and support.
            </Text>
          </h1>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
