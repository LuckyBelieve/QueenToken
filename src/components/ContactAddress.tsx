import React from "react";
import Text from "./Text";
import { FaFile } from "react-icons/fa6";
import { FaFileAlt, FaFileArchive } from "react-icons/fa";
import ExpandableText from "./ExpandableText";

function ContactAddress() {
  const CopyKey: string = "0x6a3df69787fcb463ed5ebbb9caf6445d6dc0e1e7";
  return (
    <div className=" flex flex-col items-center lg:items-start">
      <Text className="font-bold uppercase text-lg text-center lg:text-start">
        CONTRACT ADRESS:
      </Text>
      <div className="w-full lg:w-fit mt-2 break-words rounded-lg flex justify-between p-3 gap-1 bg-gradient-to-b from-primary to-secondary">
        <p className="break-words w-[250px] sm:w-auto font-bold">{CopyKey}</p>
        <button>
          <FaFileAlt title="copy" />
        </button>
      </div>
    </div>
  );
}

export default ContactAddress;
