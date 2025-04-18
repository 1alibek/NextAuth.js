"use client"
import { SessionProvider } from "next-auth/react";
import React from "react";
interface CustomAuthProviderType {
  children: React.ReactNode;
}
const CustomAuthProvider = ({ children }: CustomAuthProviderType) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default CustomAuthProvider;
