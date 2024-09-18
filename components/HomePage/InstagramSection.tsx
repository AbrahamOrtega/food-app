import Image from "next/image";
import { IoLogoInstagram } from "react-icons/io5";
const Post1 = "/resources/instagram/post1.png";
const Post2 = "/resources/instagram/post2.png";
const Post3 = "/resources/instagram/post3.png";
const Post4 = "/resources/instagram/post4.png";

export default function InstagramSection() {
  return (
    <>
      <div
        className="w-full flex flex-col text-center justify-center items-center gap-y-[20px] md:gap-y-[36px] pb-[24px] rounded-[24px]"
        style={{
          background:
            "linear-gradient(to top, rgba(231,249,253, 1), rgba(231,249,253, 0))",
        }}
      >
        <h1 className="text-[28px] lg:text-[48px] font-semibold">
          Revisa nuestro Instagram
        </h1>
        <p className="text-[16px] lg:text-[20px] text-gray-500">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim
        </p>
        <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px]">
          <div className="flex w-full justify-center">
            <Image src={Post1} width={1000} height={1000} alt="Instagram" />
          </div>
          <div className="flex w-full justify-center">
            <Image src={Post2} width={1000} height={1000} alt="Instagram" />
          </div>
          <div className="flex w-full justify-center">
            <Image src={Post3} width={1000} height={1000} alt="Instagram" />
          </div>
          <div className="flex w-full justify-center">
            <Image src={Post4} width={1000} height={1000} alt="Instagram" />
          </div>
        </div>
        <button className="flex w-fit bg-black p-[16px] gap-x-[14px] rounded-[16px]">
          <p className="text-[14px] font-semibold text-white  ">
            Siguenos en Instagram
          </p>
          <IoLogoInstagram className="text-white text-[24px]" />
        </button>
      </div>
    </>
  );
}
