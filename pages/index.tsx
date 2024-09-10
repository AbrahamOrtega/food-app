import Footer from "@/components/Footer";
import { AdSection } from "@/components/HomePage/AdSection";
import Categories from "@/components/HomePage/Categories";
import Hero from "@/components/HomePage/Hero";
import InstagramSection from "@/components/HomePage/InstagramSection";
import RecipesRecomendation from "@/components/HomePage/RecipesRecomendation";
import RecipesSection from "@/components/HomePage/RecipesSection";
import Navbar from "@/components/Navbar";
import SubscribeSection from "@/components/SubscribeSection";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="w-full flex flex-col px-[20px] gap-y-[64px] md:px-[40px] xl:px-[80px] lg:gap-y-[160px]">
        <Hero />
        <Categories />
        <RecipesSection />
        <AdSection />
        <InstagramSection />
        <RecipesRecomendation />
        <SubscribeSection />
        <Footer />
      </div>
    </>
  );
}
