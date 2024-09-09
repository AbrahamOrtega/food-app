import { IoTime } from "react-icons/io5";
import Image from "next/image";
import Food from "../../public/resources/food.png";
import { PiForkKnifeFill } from "react-icons/pi";
import { MdOutlinePlayCircle } from "react-icons/md";
import Author from "../../public/resources/author.png";

export default function Hero() {
  return (
    <>
      {/* Desktop Hero */}
      <div className="hidden xl:flex flex-row mt-[40px]">
        <div className="w-1/2 flex py-[50px] px-[50px] rounded-l-[24px]  bg-[#E7FAFE]">
          <div className="flex flex-col gap-y-[36px]">
            <div className="w-fit py-[10px] px-[20px] bg-[white] rounded-[16px] font-medium justify-center">
              🔥 Recomendado
            </div>
            <h1 className="text-[64px] font-semibold leading-[84px]">
              Spicy delicious chicken wings
            </h1>
            <p className="text-[16px] text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
              in eum error doloremque ad maiores cupiditate explicabo delectus
              incidunt dignissimos.
            </p>
            <div className="flex flex-wrap gap-y-[10px] gap-x-[16px] ">
              <div className="flex w-fit py-[8px] px-[16px] bg-black/5 rounded-[24px] justify-center items-center gap-x-[8px] text-[14px]">
                <span className="text-[20px]">
                  <IoTime />
                </span>
                <span className="text-gray-600 font-medium">30 minutos</span>
              </div>
              <div className="flex w-fit py-[8px] px-[16px] bg-black/5 rounded-[24px] justify-center items-center gap-x-[8px] text-[14px]">
                <span className="text-[20px]">
                  <PiForkKnifeFill />
                </span>
                <span className="text-gray-600 font-medium">Pollo</span>
              </div>
            </div>
            <div className="w-full flex justify-between items-end">
              <div className="flex items-center gap-x-[16px]">
                <Image
                  className="w-[50px] h-[50px]"
                  src={Author}
                  alt="Author"
                />
                <div className="flex flex-col gap-y-[2px]">
                  <span className="text-[14px] font-bold">Autor Author</span>
                  <span className="text-[12px] text-black/60 font-medium">
                    15 March 2022
                  </span>
                </div>
              </div>
              <button className="w-fit flex px-[32px] py-[18px] rounded-[16px] gap-x-[16px] bg-black text-white">
                <span className="font-semibold">Ver Receta</span>
                <span className="text-[24px]">
                  <MdOutlinePlayCircle />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="relative w-1/2 flex">
          <Image
            className="absolute h-full w-full object-cover rounded-r-[24px]"
            src={Food}
            alt="Preview"
          />
        </div>
      </div>

      {/* Mobile Hero */}
      <div className="flex flex-col mt-[20px] bg-[#E7F9FD] rounded-[24px] p-[16px] gap-y-[16px] xl:hidden">
        <div className="relative pb-[66%]">
          <Image
            className="absolute h-full w-full object-cover rounded-[24px]"
            src={Food}
            alt="Preview"
          />
        </div>
        <div className="w-fit py-[8px] px-[16px] bg-[white] rounded-[12px] font-medium justify-center text-[14px]">
          🔥 Recomendado
        </div>
        <h1 className="text-[28px] font-semibold">
          Spicy delicious chicken wings
        </h1>
        <p className="text-[14px] text-gray-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita in
          eum error doloremque ad maiores cupiditate explicabo delectus incidunt
          dignissimos.
        </p>
        <div className="flex flex-wrap gap-y-[10px]  gap-x-[10px] ">
          <div className="flex w-fit py-[8px] px-[16px] bg-black/5 rounded-[24px] justify-center items-center gap-x-[8px] text-[14px]">
            <span className="text-[16px]">
              <IoTime />
            </span>
            <span className="text-gray-600 font-medium">30 Minutos</span>
          </div>
          <div className="flex w-fit py-[8px] px-[16px] bg-black/5 rounded-[24px] justify-center items-center gap-x-[8px] text-[14px]">
            <span className="text-[16px]">
              <PiForkKnifeFill />
            </span>
            <span className="text-gray-600 font-medium">Pollo</span>
          </div>
        </div>
        <div className="w-full flex flex-wrap justify-between items-end gap-y-[16px]">
          <div className="flex items-center gap-x-[8px]">
            <Image className="w-[50px] h-[50px]" src={Author} alt="Author" />
            <div className="flex flex-col gap-y-[2px]">
              <span className="text-[12px] font-bold">Abraham Ortega</span>
              <span className="text-[10px] text-black/60 font-medium">
                15 March 2022
              </span>
            </div>
          </div>
          <button className="w-fit flex px-[12px] py-[12px] rounded-[16px] gap-x-[6px] bg-black text-white">
            <span className="font-semibold text-[14px]">Ver Receta</span>
            <span className="text-[20px]">
              <MdOutlinePlayCircle />
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
