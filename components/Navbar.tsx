import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  //asidebar for mobile device
  const [aside, setAside] = useState(false);
  const handleAside = () => {
    setAside(!aside);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div className="w-full hidden lg:flex justify-between py-[24px] px-[80px]">
        <h1>Logo</h1>
        <ul className="w-fit flex lg:gap-x-[56px] font-medium text-[16px]">
          <li>
            <Link href={"/"}>Inicio</Link>
          </li>
          <li>
            <Link href={"/recipes"}>Recetas</Link>
          </li>
          <li>
            <Link href={"/blogs"}>Blog</Link>
          </li>
          <li>
            <Link href={"/about"}>Acerca de</Link>
          </li>
        </ul>
        <div className="w-fit lg:flex gap-x-[36px] text-[18px]">
          <FaFacebookF />
          <FaTwitter />
          <IoLogoInstagram />
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="flex flex-col lg:hidden">
        <div className="w-full flex lg:hidden justify-between px-[40px] py-[20px]">
          <h1>Logo</h1>
          <button onClick={handleAside} className="text-[24px]">
            {aside ? <IoClose /> : <RxHamburgerMenu />}
          </button>
        </div>
        {aside && (
          <div>
            <ul className="w-full flex flex-col font-medium text-[18px] items-center mb-[24px] ">
              <li className="w-full flex">
                <Link
                  className="w-full flex justify-center py-[10px]"
                  href={"/"}
                >
                  Inicio
                </Link>
              </li>
              <li className="w-full flex">
                <Link
                  className="w-full flex justify-center py-[10px]"
                  href={"/recipes"}
                >
                  Recetas
                </Link>
              </li>
              <li className="w-full flex">
                <Link
                  className="w-full flex justify-center py-[10px]"
                  href={"/blogs"}
                >
                  Blog
                </Link>
              </li>
              <li className="w-full flex">
                <Link
                  className="w-full flex justify-center py-[10px]"
                  href={"/about"}
                >
                  Acerca de
                </Link>
              </li>
            </ul>
            <div className="w-full flex gap-x-auto text-[18px] justify-between px-[100px] mb-[18px]">
              <FaFacebookF />
              <FaTwitter />
              <IoLogoInstagram />
            </div>
          </div>
        )}
      </div>

      <div className="w-full h-[2px] bg-slate-200"></div>
    </>
  );
}
