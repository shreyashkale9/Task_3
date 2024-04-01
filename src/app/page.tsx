"use client";
import React, { useState } from "react";
import Navbar from "@/components/navbar";
import VerticalNavbar from "@/components/verticalNavbar";
import DocumentPreview from "@/components/documentPreview";
import ButtonsTab from "@/components/buttonsTab";
import LargeButtonsTab from "@/components/largeButtonsTab";
import InputField from "@/components/userComponents/inputField";

export default function Home() {

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
              <InputField value="hey" onChange={e => e} />
            </div>
            <LargeButtonsTab />
          </div>
        </div>
      </div>
    </main>
  );
}
