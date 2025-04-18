import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <img className="w-[50px] h-[50px]" src="/favicon.ico" alt="logo" />
      <Link className="font-semibold" href={"/login"}>
        Login
      </Link>
    </div>
  );
};

export default Header;
