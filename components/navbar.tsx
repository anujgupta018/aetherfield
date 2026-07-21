"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 mx-auto flex max-w-7xl items-center justify-between rounded-full bg-white/10 px-6 py-4 backdrop-blur-xl">
      <h1 className="font-bold tracking-tighter leading-tight text-2xl ">
        Aetherfield
      </h1>
      <div className=" gap-4 text-shadow-md text-md hidden md:flex">
        <span>Product</span>
        <span>Journal</span>
        <span>About</span>
        <span>Carrers</span>
        <span>Get Started</span>
      </div>
      <button className="flex md:hidden" onClick={() => setOpen(!open)}>
        <Plus
          className={`text-black transition-transform duration-300 ${
            open ? "rotate-45" : "rotate-0"
          }`}
        />
      </button>
      {open && (
        <div className="absolute right-4 top-16 flex w-52 flex-col rounded-xl border border-gray-200 bg-white p-4 shadow-xl md:hidden">
          <span className="cursor-pointer py-2">Product</span>
          <span className="cursor-pointer py-2">Journal</span>
          <span className="cursor-pointer py-2">About</span>
          <span className="cursor-pointer py-2">Careers</span>
          <span className="cursor-pointer py-2">Get Started</span>
        </div>
      )}
    </nav>
  );
}
