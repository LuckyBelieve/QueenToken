import React from "react";

interface Props {
  imageUrl: string;
  alt: string;
}
function SocialButton({ imageUrl, alt }: Props) {
  return (
    <button className=" z-30 border rounded-full p-2 border-[#A18451] hover:border-[#e4ad4d]">
      <img src={imageUrl} alt={alt} className="h-7 w-7" />
    </button>
  );
}

export default SocialButton;
