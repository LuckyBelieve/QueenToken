import React from "react";
import Text from "./Text";
import { FaFile } from "react-icons/fa6";
import { FaFileAlt, FaFileArchive } from "react-icons/fa";
import ExpandableText from "./ExpandableText";

function ContactAddress() {
  const CopyKey: string = "0x6a3df69787fcb463ed5ebbb9caf6445d6dc0e1e7";
  return (
    <div className="flex flex-col">
      <Text className="font-bold uppercase text-lg text-center lg:text-start">
        CONTRACT ADRESS:
      </Text>
      <div className="w-full md:w-fit mt-5 break-words rounded-lg flex p-3 gap-1 bg-gradient-to-b from-primary to-secondary">
        <p className="text-sm break-words w-[250px] md:w-auto">{CopyKey}</p>
        <button>
          <FaFileAlt title="copy" className="" />
        </button>
      </div>
    </div>
  );
}

export default ContactAddress;
