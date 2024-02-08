import React from "react";
import Navbar from "../components/Navbar";
import Text from "../components/Text";
import ContactAddress from "../components/ContactAddress";

function Home() {
  return (
    <section
      id="home"
      className="relative bg-black bg-[url('/Bgs/bgImage1.png')] bg-cover"
    >
      <Navbar />
      {/* home content */}
      <div className="z-20 relative  lg:flex px-5 lg:px-10 xl:px-16 pt-8 pb-5 md:pt-24 justify-between items-center">
        <div className=" z-30 lg:w-[49%] xl:w-[45%] flex flex-col items-center lg:items-start gap-10 xl:px-10">
          <div className="flex flex-col items-center lg:items-start">
            <Text className=" text-5xl md:text-xxl font-extrabold uppercase text-center lg:text-start">
              QUEEN TOKEN
            </Text>
            <Text className="font-extrabold text-2xl text-center lg:text-start">
              Unleash Your Crypto Royalty
            </Text>
            <p className="text-base md:text-xl pt-6 text-center lg:text-start text-primary">
              Introducing QUEEN Token, the latest innovation in meme
              cryptocurrency. Designed for the bold and visionary, QUEEN Token
              empowers its community with a unique blend of utility, rarity, and
              fun. Join us in our journey to revolutionize the digital economy,
              where every holder is royalty.
            </p>
          </div>
          <div className="w-full md:w-auto sm:px-5 md:px-0">
            <ContactAddress />
          </div>
        </div>
        <div className=" mt-5 lg:mt-0 z-20 flex justify-center lg:justify-start lg:w-1/2">
          <img
            src="/home/home1.png"
            alt="home"
            className="md:w-[70%] z-30 lg:w-auto"
            loading="lazy"
          />
        </div>
        <img
          src="/home/homebg.png"
          alt="home"
          className="absolute hidden lg:block right-0 z-10"
          loading="lazy"
        />
      </div>
    </section>
  );
}

export default Home;
