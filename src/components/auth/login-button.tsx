"use client";
import { useRouter } from "next/navigation";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

import React from "react";

const LoginButton: React.FC<LoginButtonProps> = ({
  children,
  asChild,
  mode,
}) => {
  const router = useRouter();
  const onClick = () => {
    console.log("LOGIN BUTTON CLICKED");
    router.push("/auth/login");
  };

  if (mode === "modal") {
    return (
      <span onClick={onClick} className="cursor-pointer">
        {children}
      </span>
    );
  }
  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};

export default LoginButton;
