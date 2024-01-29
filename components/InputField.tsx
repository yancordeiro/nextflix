import React from "react";
import Image from "next/image";

interface InputFIeldProps {
  type: string;
  placeholder: string;
  showImage: boolean;
  showBorder: boolean;
}

const InputFIeld: React.FC<InputFIeldProps> = ({
  type,
  placeholder,
  showImage,
  showBorder
}) => {
  return (
    <div className="flex flex-row gap-[24px]">
      {showImage && (
        <Image
          className=""
          src="/icon-search.svg"
          alt="logo"
          width={32}
          height={32}
        />
      )}
      {showBorder ?
        <input className="bg-[transparent] body-m text-heading-m text-white border-b border-lightBlue w-full placeholder:opacity-50 outline-none focus:border-b focus:border-lightBlue" type={type} placeholder={placeholder} />
        :
        <input className="bg-[transparent] body-m text-heading-m text-white w-full placeholder:opacity-50 outline-none focus:border-b focus:border-lightBlue" type={type} placeholder={placeholder} />
      }
    </div>
  );
};

export default InputFIeld;
