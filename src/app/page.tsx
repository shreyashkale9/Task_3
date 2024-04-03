"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import VerticalNavbar from "@/components/VerticalNavbar";
import MainContent from "@/components/MainContent";

export default function Home() {
  const [val, setVal] = useState("hey");
  const change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVal(event.target.value);
  };

  return (
    <main className="flex flex-col">
      <div>
        <Navbar />
      </div>
      <div className="flex">
        <VerticalNavbar />
        <div className="flex m-4 p-3 bg-[#ffffff] w-full">
          <div className="w-full">
            <MainContent />
          </div>
        </div>
      </div>
    </main>
  );
}
