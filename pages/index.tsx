import Hero from "@/components/HomePage/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="w-full px-[20px] md:px-[40px] xl:px-[80px]">
        <Hero />
      </div>
    </>
  );
}
