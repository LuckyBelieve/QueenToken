import React, { useState } from "react";
import Text from "./Text";
import { FaCheck, FaFile } from "react-icons/fa6";
import { FaFileAlt, FaFileArchive } from "react-icons/fa";

function ContactAddress() {
  const [copied, setCopied] = useState(false);

  const CopyKey: string = "0x6a3df69787fcb463ed5ebbb9caf6445d6dc0e1e7";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CopyKey);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };
  return (
    <div className=" flex flex-col items-center lg:items-start">
      <Text className="font-bold uppercase text-lg text-center lg:text-start">
        CONTRACT ADRESS:
      </Text>
      <div className="w-full lg:w-fit mt-2 break-words rounded-lg flex justify-between p-3 gap-1 bg-gradient-to-b from-primary to-secondary">
        <p className="break-words w-[250px] sm:w-auto font-bold">{CopyKey}</p>
        <button onClick={handleCopy} className="">{copied ? <FaCheck /> : <FaFileAlt title="copy" />}</button>
      </div>
    </div>
  );
}

export default ContactAddress;
