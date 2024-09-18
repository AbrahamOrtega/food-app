import { IoTime } from "react-icons/io5";
import { PiForkKnifeFill } from "react-icons/pi";
import Image from "next/image";
const Food = "/resources/food.png";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/router";

const recipesList = [
  {
    id: 1,
    name: "Big and Juicy Wagyu Beef Cheeseburger",
    time: "30 Minutos",
    type: "Snack",
    img: Food,
    fav: true,
  },
  {
    id: 2,
    name: "Big and Juicy Wagyu Beef Cheeseburger",
    time: "30 Minutos",
    type: "Snack",
    img: Food,
    fav: false,
  },
  {
    id: 3,
    name: "Big and Juicy Wagyu Beef Cheeseburger",
    time: "30 Minutos",
    type: "Snack",
    img: Food,
    fav: false,
  },
  {
    id: 4,
    name: "Big and Juicy Wagyu Beef Cheeseburger",
    time: "30 Minutos",
    type: "Snack",
    img: Food,
    fav: false,
  },
  {
    id: 5,
    name: "Big and Juicy Wagyu Beef Cheeseburger",
    time: "30 Minutos",
    type: "Snack",
    img: Food,
    fav: false,
  },
  {
    id: 6,
    name: "Big and Juicy Wagyu Beef Cheeseburger",
    time: "30 Minutos",
    type: "Snack",
    img: Food,
    fav: false,
  },
  {
    id: 7,
    name: "Big and Juicy Wagyu Beef Cheeseburger",
    time: "30 Minutos",
    type: "Snack",
    img: Food,
    fav: false,
  },
  {
    id: 8,
    name: "Big and Juicy Wagyu Beef Cheeseburger",
    time: "30 Minutos",
    type: "Snack",
    img: Food,
    fav: false,
  },
  {
    id: 9,
    name: "Big and Juicy Wagyu Beef Cheeseburger",
    time: "30 Minutos",
    type: "Snack",
    img: Food,
    fav: false,
  },
];

export default function RecipesSection() {
  const router = useRouter();
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
      <div className="flex flex-col w-full justify-center items-center">
        <h1 className="font-semibold text-center text-[28px] lg:text-[56px]">
          Recetas simples y deliciosas
        </h1>
        <p className="text-center flex w-fit pt-[24px] lg:pt-[48px] lg:text-[18px]">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut <br /> labore et dolore magna aliqut enim ad
          minim.
        </p>
        <div className="w-full grid grid-cols-1 mt-[32px] lg:mt-[64px] gap-[16px] md:grid-cols-2 md:gap-[24px] lg:grid-cols-3 lg:gap-[36px]">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="flex flex-col p-[16px] rounded-[24px] gap-y-[24px]"
              style={{
                background: `linear-gradient(to top, rgba(231,249,253, 1), rgba(231,249,253, 0))`,
              }}
            >
              <div className="relative pb-[66%]">
                <Image
                  className="absolute h-full w-full object-cover rounded-[24px] z-0"
                  width={1000}
                  height={1000}
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
              <button
                className="flex flex-col text-left gap-y-[24px]"
                onClick={() => router.push(`/recipe/${recipe.id}`)}
              >
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
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
