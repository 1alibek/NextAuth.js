import Header from "@/components/header";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className=" w-[90%] mx-auto min-[1440px]:w-[1440px]">
    <Header/>
      <div className="text-center font-semibold mt-5 ">
        Home
      </div>
    </div>
  );
};

export default Home;
