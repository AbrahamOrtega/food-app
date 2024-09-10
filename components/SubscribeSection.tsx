import Image from "next/image";
import Salad1 from "../public/resources/salad1.png";
import Salad2 from "../public/resources/salad2.png";

export default function SubscribeSection() {
  return (
    <>
      <div className="flex flex-col w-full relative bg-[#E7F9FD] p-[20px] rounded-[36px] items-center overflow-hidden">
        <div className="flex flex-col gap-y-[16px] lg:gap-y-[42px] z-10 text-center py-[32px] max-w-[500px] lg:max-w-[700px] ">
          <h1 className="text-[24px] lg:text-[40px] font-semibold">
            Delicias en tu bandeja de entrada
          </h1>
          <p className="text-gray-500 lg:text-[16px]">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </p>
          <div className="flex flex-row bg-white p-[10px] rounded-[16px] mx-[16px]">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="w-full p-[10px] text-[12px] lg:text-[16px] outline-none"
            />
            <button className="w-fit bg-black p-[10px] rounded-[16px]">
              <p className="text-white text-[12px] lg:text-[16px] font-semibold">
                Suscribirse
              </p>
            </button>
          </div>
        </div>
        <div className="flex w-full h-full absolute flex-row z-0 ">
          <Image
            src={Salad2}
            alt=""
            className="absolute left-[-120px] bottom-[-80px] w-[320px] lg:w-[400px]"
          />
          <Image
            src={Salad1}
            alt=""
            className="absolute right-[-150px] bottom-[-130px] w-[320px] lg:w-[400px]"
          />
        </div>
      </div>
    </>
  );
}
