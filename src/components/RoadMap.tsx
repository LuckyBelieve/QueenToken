import React from "react";
import Text from "./Text";

function RoadMap() {
  return (
    <section className="pt-12 bg-[url('/Bgs/bgImage2.png')] bg-cover">
      <div className="flex flex-col gap-3 items-center pb-5">
        <Text className="font-extrabold text-5xl md:text-xxl">Roadmap</Text>
        <Text className="font-extrabold text-base">
          Charting Our Kingdom's Future
        </Text>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 px-5 lg:px-10 border-t-4 border-t-secondary border-b-4 border-b-black">
        <div className="flex flex-col gap-6 border-x-4 border-secondary px-8 py-5">
          <Text className="font-extrabold text-xl md:text-2xl text-center">
            1. Launch and Establishment (Q1 2024)
          </Text>
          <div className="flex flex-col gap-6">
            <Text className="font-normal text-base md:text-xl text-center">
              Token Launch: Official release of QUEEN Token on the Binance Smart
              Chain.
            </Text>
            <Text className="font-normal text-base md:text-xl text-center">
              Website Launch: Introduction of our interactive and informative
              platform.
            </Text>
            <Text className="font-normal text-base md:text-xl text-center">
              Initial Marketing Campaign: Spreading the word across various
              channels to build our community.
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-6 border-r-4 border-l-4 md:border-l-0 border-t-4 md:border-t-0 border-secondary px-8 py-5">
          <Text className="font-extrabold text-xl md:text-2xl text-center">
            2. Community Growth and Partnerships (Q2 2024)
          </Text>
          <div className="flex flex-col gap-6">
            <Text className="font-normal text-base md:text-xl text-center">
              Community Engagement Initiatives: Launch of forums, social media
              events, and AMAs to foster community involvement.
            </Text>
            <Text className="font-normal text-base md:text-xl text-center">
              Strategic Partnerships: Form alliances with key industry players
              to enhance token utility and ecosystem growth.
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-6 border-r-4  border-l-4 lg:border-l-0 border-t-4 lg:border-t-0 border-secondary px-8 py-5">
          <Text className="font-extrabold text-xl md:text-2xl text-center">
            3. Ecosystem Expansion (Q3 2024)
          </Text>
          <div className="flex flex-col gap-6">
            <Text className="font-normal text-base md:text-xl text-center">
              Platform Development: Start development of exclusive platforms or
              applications utilizing QUEEN Token, enhancing its utility.
            </Text>
            <Text className="font-normal text-base md:text-xl text-center">
              Listing on Additional Exchanges: Broaden accessibility and
              liquidity by listing on more crypto exchanges.
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-6 border-r-4 border-l-4 md:border-l-0 border-t-4 lg:border-t-0 border-secondary  px-8 py-5">
          <Text className="font-extrabold text-xl md:text-2xl text-center">
            4. Long-term Vision and Sustainability (Q4 2024 and Beyond)
          </Text>
          <div className="flex flex-col gap-6">
            <Text className="font-normal text-base md:text-xl text-center">
              Sustainable Growth Strategies: Implement long-term plans for
              steady growth and stability of the token.
            </Text>
            <Text className="font-normal text-base md:text-xl text-center">
              Ongoing Improvements and Innovations: Continuous enhancement of
              the platform and token features based on community feedback and
              technological advancements.
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoadMap;
