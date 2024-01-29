import React from "react";
import InputField from "./InputField";
import CustomButton from "./CustomButton";
interface SingUpModalProps {
    onLoginClick: () => void;
}

const SingUpModal: React.FC<SingUpModalProps> = ({onLoginClick}) => {

  return (
    <div className="flex flex-col justify-between rounded-[20px] bg-semiDarkBlue w-[400px] h-[373px] p-[32px]">
      <h1 className="heading-l text-white">Sign Up</h1>
      <InputField
        type="text"
        placeholder="Email address"
        showImage={false}
        showBorder={true}
      />
      <InputField
        type="Password"
        placeholder="Password"
        showImage={false}
        showBorder={true}
      />
      <InputField
        type="Password"
        placeholder="Repeat password"
        showImage={false}
        showBorder={true}
      />
      <CustomButton text="Create an account" bgcolor="bg-red" textcolor="white" />
      <p className="body-m text-white text-center">
        Already have an account?
        <span className="body-m text-red cursor-pointer" onClick={onLoginClick}> Login</span>
      </p>
    </div>
  );
};

export default SingUpModal;
