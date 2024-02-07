import React from "react";
import Text from "../components/Text";

function AboutUs() {
  return (
    <section
      id="about"
      className="relative bg-black bg-[url('/Bgs/bgImage1.png')] bg-cover py-24 px-5 lg:px-10  xl:px-16"
    >
      <div className="lg:flex justify-between">
        <div className="lg:w-[55%] flex flex-col justify-center items-center">
          <img
            src="/about/about.png"
            alt="about"
            className="md:w-[70%] lg:w-auto"
          />
        </div>
        <div className="lg:w-[45%] pl-4 xl:pl-0 flex flex-col items-center gap-5">
          <Text className="font-extrabold text-5xl mt-5 md:text-xxl">About Us</Text>
          <Text className="font-normal text-base">
            Enter the Kingdom of QUEEN Token
          </Text>
          <Text className="font-normal text-base md:text-xl text-center">
            Founded by a team of crypto enthusiasts and blockchain experts,
            QUEEN Token is more than a cryptocurrency – it's a revolution in
            digital finance. We are dedicated to creating a token that embodies
            innovation, community, and a touch of regality.
          </Text>
          <Text className="font-black text-xl">Our Mission</Text>
          <Text className="font-normal text-base md:text-xl text-center">
            At QUEEN Token, we prioritize community engagement, transparency,
            and continuous innovation. Our mission is to democratize finance
            with a token that is not just an investment, but an experience - a
            token that makes every holder feel like royalty.
          </Text>
          <Text className="font-black text-xl">Join the Royal Legacy</Text>
          <Text className="font-normal text-base md:text-xl text-center">
            Be part of the QUEEN Token story – a journey towards a future where
            finance is fun, accessible, and empowering. Join us in ruling the
            crypto world.
          </Text>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
