import React from "react";

interface CustomButtonProps {
  text: string;
  textcolor: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  textcolor,
}) => {
  return (
    <div
      className={`flex items-center body-m justify-center cursor-pointer bg-red py-[14px] w-full text-${textcolor} rounded-[6px]`}
    >
      {text}
    </div>
  );
};

export default CustomButton;