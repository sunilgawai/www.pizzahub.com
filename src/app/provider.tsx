"use client";
import { SessionProvider } from "next-auth/react";

const AppProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AppProvider;
