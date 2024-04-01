"use client";
import Navbar from "@/components/navbar";
import VerticalNavbar from "@/components/verticalNavbar";
import Dropdown from "@/components/userComponents/dropdown";
import ButtonWithIconOnLeft from "@/components/userComponents/buttonWithIconOnLeft";
import IconButton from "@/components/userComponents/iconButton";
import ButtonWithIconOnTop from "@/components/userComponents/buttonWithIconOnTop";
import DocumentPreview from "@/components/documentPreview";
import ButtonsTab from "@/components/buttonsTab";
import LargeButtonsTab from "@/components/largeButtonsTab";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div>
        <Navbar />
      </div>
      <div className="flex">
        <VerticalNavbar />
        <div className="flex flex-col m-4 p-2 bg-[#efefef] w-full">
          <DocumentPreview />
          <ButtonsTab />
          <LargeButtonsTab />
        </div>
      </div>
    </main>
  );
}
