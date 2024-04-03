"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import VerticalNavbar from "@/components/VerticalNavbar";
import DocumentPreview from "@/components/DocumentPreview";
import ButtonsTab from "@/components/ButtonsTab";
import LargeButtonsTab from "@/components/LargeButtonsTab";
import InputField from "@/components/userComponents/InputField";

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
        <div className="flex m-4 p-2 bg-[#efefef] w-full">
          <div className="w-full">
            <DocumentPreview />
            <div className="flex">
              <ButtonsTab />
              <InputField value={val} onChange={change} />
            </div>
            <LargeButtonsTab />
          </div>
        </div>
      </div>
    </main>
  );
}
