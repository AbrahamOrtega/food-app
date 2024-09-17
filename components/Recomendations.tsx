import Image from "next/image";
import Food from "@/public/resources/Food.png";
import { IoTime } from "react-icons/io5";
import { PiForkKnifeFill } from "react-icons/pi";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

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

export default function Recomendations() {
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
            <Link
              className="flex flex-col gap-y-[24px]"
              href={`/recipe/${recipe.id}`}
            >
              <h3 className="text-[20px] font-semibold">
                Big and Juicy Wagyu Beef Cheeseburger
              </h3>
              <div className="flex gap-x-[24px] text-[14px]">
                <div className="flex items-center gap-x-[8px]">
                  <span className="text-[16px]">
                    <IoTime />
                  </span>
                  <span className="text-gray-600 font-medium">30 Minutos</span>
                </div>
                <div className="flex items-center gap-x-[8px]">
                  <span className="text-[16px]">
                    <PiForkKnifeFill />
                  </span>
                  <span className="text-gray-600 font-medium">Snack</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
