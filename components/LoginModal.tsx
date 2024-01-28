import React from "react";
import InputField from "./InputField";
import CustomButton from "./CustomButton";
interface LoginModalProps {
  onSignUpClick: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({onSignUpClick}) => {

  return (
      <div className="flex flex-col justify-between rounded-[20px] bg-semiDarkBlue w-[400px] h-[373px] p-[32px]">
        <h1 className="heading-l text-white">Login</h1>
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
        <CustomButton text="Login" bgcolor="red" textcolor="white" />
          <p className="body-m text-white text-center">Don&apos;t have an account?
            <span className="body-m text-red cursor-pointer" onClick={onSignUpClick} > Sign Up</span>
          </p>
      </div>
  );
};

export default LoginModal;
