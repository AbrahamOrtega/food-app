import Navbar from "../../components/Navbar";
import Image from "next/image";
import Author from "../../public/resources/author.png";
import BlogImg from "../../public/resources/blog.png";
import Directions from "../../public/resources/directions.png";
import SubscribeSection from "@/components/SubscribeSection";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import Footer from "@/components/Footer";
import Food from "../../public/resources/Food.png";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { PiForkKnifeFill } from "react-icons/pi";

const blog = {
  title: "Blog 1",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  image: "Food",
  author: "Author Author",
  date: "12 de diciembre de 2021",
};

const recipesList = [
  {
    id: 1,
    name: "Big and Juicy Wagyu Beef Cheeseburger",
    img: Food,
    author: "Author Author",
    time: "30 Minutos",
    type: "Snack",
    fav: false,
  },
  {
    id: 2,
    name: "Big and Juicy Wagyu Beef Cheeseburger",
    img: Food,
    author: "Author Author",
    time: "30 Minutos",
    type: "Snack",
    fav: false,
  },
  {
    id: 3,
    name: "Big and Juicy Wagyu Beef Cheeseburger",
    img: Food,
    author: "Author Author",
    time: "30 Minutos",
    type: "Snack",
    fav: false,
  },
  {
    id: 4,
    name: "Big and Juicy Wagyu Beef Cheeseburger",
    img: Food,
    author: "Author Author",
    time: "30 Minutos",
    type: "Snack",
    fav: false,
  },
];

export default function Blog() {
  // Handle favorite recipe
  const [recipes, setRecipes] = useState(recipesList);
  const handleFavorite = (id: number) => {
    const newRecipes = recipes.map((recipe) => {
      if (recipe.id === id) {
        return { ...recipe, fav: !recipe.fav };
      }
      return recipe;
    });
    setRecipes(newRecipes);
  };

  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col px-[20px] gap-y-[24px] md:gap-y-[56px] md:px-[40px] xl:px-[80px] lg:gap-y-[76px]">
        <div className="flex flex-col text-center items-center mt-[24px] gap-y-[16px]">
          <h1 className="text-[24px] lg:text-[48px] font-semibold">
            {blog.title}
          </h1>

          <div className="flex gap-y-[4px] text-[12px] lg:text-[14px] text-gray-500 items-center gap-x-[8px]">
            <div className="flex flex-row gap-x-[8px] items-center">
              <Image
                className="rounded-full w-[24px]"
                src={Author}
                alt="author"
              />
              <p className="font-semibold text-black">{blog.author}</p>
            </div>
            <div className="flex h-[18px] w-[1px] bg-gray-500" />
            <p>{blog.date}</p>
          </div>
          <p className="text-[14px]">{blog.content}</p>
        </div>

        <div className="flex w-full h-[180px] md:h-[350px] lg:h-[600px] relative">
          <Image
            src={BlogImg}
            alt="blog"
            className="rounded-[26px] absolute w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col lg:flex-row w-full">
          <div className="flex w-full justify-between items-center mb-[32px] lg:hidden">
            <span className="text-[16px] font-semibold">Compartir en:</span>
            <div className="flex gap-x-[24px] text-[18px]">
              <FaFacebookF />
              <FaTwitter />
              <IoLogoInstagram />
            </div>
          </div>
          <div className="flex flex-col lg:w-3/4 gap-y-[16px]">
            <h3 className="text-[18px] font-semibold">
              How did you start out in the food industry?
            </h3>
            <p className="text-[14px] text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
              vehicula sed velit a faucibus. In feugiat vestibulum velit vel
              pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut
              suscipit.
            </p>
            <br />
            <h3 className="text-[18px] font-semibold">
              What do you like most about your job?
            </h3>
            <p className="text-[14px] text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
              vehicula sed velit a faucibus. In feugiat vestibulum velit vel
              pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut
              suscipit.
            </p>
            <br />
            <h3 className="text-[18px] font-semibold">
              Do you cook at home on your days off?
            </h3>
            <Image src={Directions} alt="blog" className="rounded-[24px]" />
            <p className="text-[14px] text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
              vehicula sed velit a faucibus. In feugiat vestibulum velit vel
              pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut
              suscipit.
            </p>
            <br />
            <h3 className="text-[18px] font-semibold">
              What would your advice be to young people looking to get their
              foot in the door?
            </h3>
            <p className="text-[14px] text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
              vehicula sed velit a faucibus. In feugiat vestibulum velit vel
              pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut
              suscipit.
            </p>
            <br />
            <h3 className="text-[18px] font-semibold">
              What is the biggest misconception that people have about being a
              professional chef?
            </h3>
            <p className="text-[14px] text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
              vehicula sed velit a faucibus. In feugiat vestibulum velit vel
              pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut
              suscipit.
            </p>
          </div>
          <div className="lg:flex flex-col lg:w-1/4 hidden items-center gap-y-[24px]">
            <span className="text-[18px] font-semibold">Compartir en:</span>
            <div className="flex flex-col gap-y-[24px] text-[22px]">
              <FaFacebookF />
              <FaTwitter />
              <IoLogoInstagram />
            </div>
          </div>
        </div>
        <SubscribeSection />
        <div className="flex flex-col w-full">
          <h3 className="text-[24px] lg:text-[36px] w-full text-center font-semibold">
            Mira estas recetas deliciosas
          </h3>
          <div className="w-full grid grid-cols-1 mt-[8px] lg:mt-[56px] gap-[16px] md:grid-cols-2 md:gap-[24px] lg:grid-cols-4 lg:gap-[36px]">
            {recipes.map((recipe) => (
              <div
                key={recipe.id}
                className="flex flex-col rounded-[24px] py-[24px] gap-y-[24px]"
              >
                <div className="relative pb-[66%]">
                  <Image
                    className="absolute h-full w-full object-cover rounded-[24px] z-0"
                    src={Food}
                    alt="Preview"
                  />
                  <div className="flex w-full justify-end pt-[14px] pr-[14px] absolute z-10">
                    <button
                      onClick={() => handleFavorite(recipe.id)}
                      className="text-[20px] p-[10px] bg-white rounded-full"
                      style={{ color: recipe.fav ? "#FF6363" : "#DBE2E5" }}
                    >
                      <FaHeart />
                    </button>
                  </div>
                </div>
                <h3 className="text-[20px] font-semibold">
                  Big and Juicy Wagyu Beef Cheeseburger
                </h3>
                <div className="flex gap-x-[24px] text-[14px]">
                  <div className="flex items-center gap-x-[8px]">
                    <span className="text-[16px]">
                      <IoTime />
                    </span>
                    <span className="text-gray-600 font-medium">
                      30 Minutos
                    </span>
                  </div>
                  <div className="flex items-center gap-x-[8px]">
                    <span className="text-[16px]">
                      <PiForkKnifeFill />
                    </span>
                    <span className="text-gray-600 font-medium">Snack</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
