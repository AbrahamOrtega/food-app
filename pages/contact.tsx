import Navbar from "../components/Navbar";
import Image from "next/image";
import Chef from "@/public/resources/chef2.png";
import SubscribeSection from "@/components/SubscribeSection";
import Footer from "@/components/Footer";
import Recomendations from "@/components/Recomendations";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col px-[20px] gap-y-[24px] md:gap-y-[56px] md:px-[40px] xl:px-[80px] lg:gap-y-[76px]">
        <div className="flex w-full justify-center text-[28px] mt-[24px] font-semibold">
          <h1>Contacto</h1>
        </div>
        <div className="flex flex-col lg:flex-row w-full gap-x-[48px] gap-y-[24px]">
          <div
            className="flex px-[24px] pt-[24px] rounded-[24px] justify-center"
            style={{
              background:
                "linear-gradient(to top, rgba(231, 249, 253, 1), rgba(231, 249, 253, 0))",
            }}
          >
            <Image src={Chef} alt="Contact Us" />
          </div>
          <div className="flex flex-col w-full gap-y-[18px]">
            <div className="flex flex-col lg:flex-row gap-y-[10px] gap-x-[48px]">
              <div className="flex w-full lg:w-1/2 flex-col gap-y-[8px]">
                <span className="text-[14px] font-medium text-gray-500">
                  Nombre
                </span>
                <input
                  type="text"
                  placeholder="Tu Nombre..."
                  className="border p-[12px] rounded-[12px] text-[12px]"
                />
              </div>
              <div className="flex w-full lg:w-1/2 flex-col gap-y-[8px]">
                <span className="text-[14px] font-medium text-gray-500">
                  Correo
                </span>
                <input
                  type="email"
                  placeholder="Tu Correo..."
                  className="border p-[12px] rounded-[12px] text-[12px]"
                />
              </div>
            </div>
            <div className="flex gap-x-[48px]">
              <div className="flex w-full lg:w-1/2 flex-col gap-y-[8px]">
                <span className="text-[14px] font-medium text-gray-500">
                  Asunto
                </span>
                <input
                  type="text"
                  placeholder="Asunto..."
                  className="border p-[12px] rounded-[12px] text-[12px]"
                />
              </div>
              <div className="lg:flex hidden w-1/2"></div>
            </div>
            <div className="flex w-full">
              <div className="flex flex-col w-full gap-y-[8px]">
                <span className="text-[14px] font-medium text-gray-500">
                  Mensaje
                </span>
                <textarea
                  placeholder="Mensaje..."
                  className="border p-[12px] rounded-[12px] text-[12px] h-[120px]"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-end lg:mt-[-48px]">
          <button className="px-[32px] py-[12px] bg-black text-white rounded-[16px] font-semibold">
            Enviar
          </button>
        </div>
        <SubscribeSection />
        <Recomendations />
        <Footer />
      </div>
    </>
  );
}
