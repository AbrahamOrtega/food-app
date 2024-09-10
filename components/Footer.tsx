import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="flex flex-col w-full gap-y-[16px] lg:gap-y-[32px]">
        <div className="flex flex-col w-full gap-y-[16px] items-center lg:flex-row">
          <div className="flex flex-col w-full lg:w-2/3">
            <h3>Logo</h3>
            <p className="text-[14px] lg:text-[18px] text-gray-500">
              Lorem ipsum dolor sit amet, consectetuipisicing elit,
            </p>
          </div>
          <ul className="flex w-full flex-raw justify-between text-[16px] font-medium lg:w-1/3">
            <li>
              <Link href="/recipes">Recetas</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contacto</Link>
            </li>
            <li>
              <Link href="/about">Acerca de</Link>
            </li>
          </ul>
        </div>

        <div className="flex w-full h-[2px] bg-gray-200"></div>
        <div className="flex flex-col-reverse lg:flex-row w-full items-center lg:justify-center lg:relative gap-y-[18px] pb-[16px] lg:pb-[32px]">
          <p className="text-[12px] text-gray-500 font-medium">
            © 2024 Abraham Ortega.
          </p>
          <div className="flex gap-x-[32px] text-[20px] lg:absolute right-0">
            <FaFacebookF />
            <FaTwitter />
            <IoLogoInstagram />
          </div>
        </div>
      </div>
    </>
  );
}
