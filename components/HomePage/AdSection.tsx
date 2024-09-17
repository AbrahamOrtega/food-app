import Image from "next/image";
import Chef from "@/public/resources/chef.png";

export const AdSection = () => {
  return (
    <>
      {/* Ad Section mobile */}
      <div
        className="w-full flex lg:hidden flex-col items-center relative justify-center rounded-[24px] p-[16px] md:p-[32px] gap-y-[16px]"
        style={{
          background:
            "linear-gradient(to top, rgba(231,249,253, 1), rgba(231,249,253, 0))",
        }}
      >
        <Image src={Chef} alt="Ad" className="w-[220px]" />
        <h1 className="text-[20px] font-semibold">
          Todos pueden ser un chef en su propia cocina
        </h1>
        <p className="text-gray-500 text-[16px]">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim
        </p>
        <div className="flex w-full justify-end">
          <button className="w-fit px-[16px] py-[10px] bg-black rounded-[16px]">
            <p className="text-[14px] font-semibold text-white">Saber más</p>
          </button>
        </div>
      </div>

      {/* Ad Section Desktop */}
      <div className="hidden lg:flex w-full gap-x-[120px] items-center">
        <div className="flex flex-col w-1/2 h-full gap-y-[32px]">
          <h1 className="text-[40px] leading-[48px] font-semibold">
            Todos pueden ser un chef en su propia cocina
          </h1>
          <p className="text-gray-500 text-[20px]">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </p>
          <button className="w-fit px-[24px] py-[16px] bg-black rounded-[16px]">
            <p className="text-[16px] font-semibold text-white">Saber más</p>
          </button>
        </div>
        <div
          className="w-1/2 relative rounded-[24px]"
          style={{
            background:
              "linear-gradient(to top, rgba(231,249,253, 1), rgba(231,249,253, 0))",
          }}
        >
          <Image src={Chef} alt="Ad" className="right-[46px] relative" />
        </div>
      </div>
    </>
  );
};
