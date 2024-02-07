import React, { useState } from "react";
import MenuItem from "./MenuItem";
import SocialButton from "./SocialButton";
import { Link } from "react-router-dom";
import { FaBars, FaX } from "react-icons/fa6";

const menuList = [
  {
    title: "Home",
    link: "#home",
  },
  {
    title: "About",
    link: "#about",
  },
  {
    title: "Roadmap",
    link: "#roadmap",
  },
  {
    title: "Tokenomics",
    link: "#tokenomics",
  },
  {
    title: "Buy",
    link: "#buy",
  },
];

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleClose = () => {
    setSidebarOpen(false);
  };
  return (
    <div className="z-50 flex item-center justify-between pt-8 px-5 md:px-8 lg:px-24">
      {/* logo */}
      <div>
        <img src="/logo/logo.png" alt="logo" className="w-16 h-16" />
      </div>
      {/* menulist */}
      <ul className="hidden md:flex items-center gap-6">
        {menuList.map((menu, index) => (
          <MenuItem key={index} menu={menu} />
        ))}
      </ul>
      {/* social media */}
      <div className=" hidden md:flex items-center gap-3">
        <SocialButton imageUrl="/social/Telegram.png" alt="telegram" />
        <SocialButton imageUrl="/social/Twitter.png" alt="twitter" />
      </div>
      <div className="flex items-center md:hidden">
        <button
          onClick={() => setSidebarOpen(true)}
          className="border rounded-full p-3 border-[#A18451] hover:border-[#e4ad4d]"
        >
          <FaBars color="#A18451" />
        </button>
      </div>

      {/* mobile screen */}
      <div
        id="sidebar"
        onClick={handleClose}
        className={` ${
          sidebarOpen ? "block" : "hidden"
        } absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm md:hidden z-30`}
      ></div>
      <div
        className={`${
          sidebarOpen ? "right-0 " : "-right-[100%]"
        } md:hidden z-30  flex flex-col fixed min-w-[320px] top-0 bottom-0 bg-black p-5  transition-all`}
      >
        <div className="flex items-center justify-between">
          <Link to={"/"}>
            <img src="/logo/logo.png" alt="logo" className="w-10 h-10" />
          </Link>
          <div
            onClick={() => setSidebarOpen(false)}
            className="flex items-center justify-center border rounded-full p-3 border-[#A18451] hover:border-[#e4ad4d] "
          >
            <FaX color="#A18451" />
          </div>
        </div>
        <ul className="pt-10 flex flex-col gap-5">
          {menuList.map((menu, index) => (
            <MenuItem
              menu={menu}
              key={index}
              handleClose={() => setSidebarOpen(false)}
            />
          ))}
        </ul>
        <div className=" flex-1 flex items-end gap-3">
          <SocialButton imageUrl="/social/Telegram.png" alt="telegram" />
          <SocialButton imageUrl="/social/Twitter.png" alt="twitter" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
