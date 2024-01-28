'use client' // 👈 use it here

import Image from "next/image";
import LoginModal from "../components/LoginModal";
import SignUpModal from "@/components/SignUpModal";
import { useState } from "react";

export default function Home() {
  const [showLogin, setShowLogin] = useState(true);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleLoginClick = () => {
    console.log("Login clicked");

    setShowLogin(true);
    setShowSignUp(false);
  };

  const handleSignUpClick = () => {
    console.log("sign clicked");

    setShowLogin(false);
    setShowSignUp(true);
  };
  return (
    <main className="flex flex-col justify-center items-center select-none">
      <div className="flex justify-center items-center pt-[78px] pb-[82px]">
        <Image
          className=""
          src="/logo.svg"
          alt="logo"
          width={32}
          height={25.6}
        />
      </div>
      <>
      {showLogin && (
        <LoginModal onSignUpClick={handleSignUpClick} />
      )}
      {showSignUp && (
        <SignUpModal onLoginClick={handleLoginClick} />
      )}
      </>
    </main>
  );
}
