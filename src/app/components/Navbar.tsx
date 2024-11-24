"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../../assets/logo.svg"
import { usePathname } from 'next/navigation'
function Navbar() {
  const pathname = usePathname()
  const [showNavbar,setShowNavbar] = useState(false)
  return (
    <div className="flex justify-between items-center px-5 lg:px-12 py-4 bg-black max-md:relative">
      <div className="w-[20%] flex items-center">
        <Image src={Logo} alt="logo"/>
        <h1 className="font-bold text-2xl text-center text-white px-2">Landwind</h1>
      </div>
      <div className={`flex w-full md:w-[80%] ${showNavbar?"max-md:flex max-md:translate-y-[0%]":"max-md:hidden max-md:translate-y-[-150%]"} max-md:absolute top-[100%] left-0 max-md:py-5 max-md:items-center max-md:flex-col max-md:bg-black`}>
        <div className="w-full flex justify-center items-center max-md:flex-col max-md:px-5">
          <Link href={"/"} className={`px-2 lg:px-5 max-md:w-full max-md:my-1 max-md:py-2 max-md:text-center ${pathname=="/"?"text-purple-600 max-md:bg-purple-700 max-md:hover:bg-purple-800 max-md:text-white":"text-white md:hover:text-purple-600 max-md:bg-none max-md:hover:bg-purple-800 max-md:text-white"} font-semibold text-[15px]`}>Home</Link>
          <Link href={"/pages/pricing"} className={`px-2 lg:px-5 max-md:w-full max-md:my-1 max-md:py-2 max-md:text-center ${pathname=="/pages/pricing"?"text-purple-600 max-md:bg-purple-700 max-md:hover:bg-purple-800 max-md:text-white":"text-white md:hover:text-purple-600 max-md:bg-none max-md:hover:bg-purple-800 max-md:text-white"} font-semibold text-[15px]`}>Pricing</Link>
          <Link href={"/pages/contact"} className={`px-2 lg:px-5 max-md:w-full max-md:my-1 max-md:py-2 max-md:text-center ${pathname=="/pages/contact"?"text-purple-600 max-md:bg-purple-700 max-md:hover:bg-purple-800 max-md:text-white":"text-white md:hover:text-purple-600 max-md:bg-none max-md:hover:bg-purple-800 max-md:text-white"} font-semibold text-[15px]`}>Contact</Link>
        </div>
        <div className="w-full md:w-[30%] max-md:mt-3 flex justify-center md:justify-end items-center">
          <button className="py-1.5 px-5 text-white rounded-lg bg-purple-700 hover:bg-purple-800">Download</button>
        </div>
      </div>
      <div onClick={()=>setShowNavbar(!showNavbar)} className="relative hidden max-md:block right-5">
        <div className="h-0.5 w-7 bg-white my-1.5"></div>
        <div className="h-0.5 w-7 bg-white my-1.5"></div>
        <div className="h-0.5 w-7 bg-white my-1.5"></div>
      </div>
    </div>
  );
}

export default Navbar;
