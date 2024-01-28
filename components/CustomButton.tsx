import React from "react";

interface CustomButtonProps {
  text: string;
  bgcolor: string;
  textcolor: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  bgcolor,
  textcolor,
}) => {
  return (
    <div
      className={`flex items-center body-m justify-center cursor-pointer py-[14px] w-full bg-${bgcolor} text-${textcolor} rounded-[6px]`}
    >
      {text}
    </div>
  );
};

export default CustomButton;
