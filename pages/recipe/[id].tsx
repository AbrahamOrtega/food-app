import Navbar from "@/components/Navbar";
import Image from "next/image";
import Author from "@/public/resources/author.png";
import { IoTime } from "react-icons/io5";
import { PiForkKnifeFill } from "react-icons/pi";
import { LuPrinter } from "react-icons/lu";
import { IoShareOutline } from "react-icons/io5";
import Video from "@/public/resources/video.png";
import { FaPlay } from "react-icons/fa";
import Directions from "@/public/resources/directions.png";
import { FaCircleCheck } from "react-icons/fa6";
import { useState } from "react";
import Food from "@/public/resources/food.png";
import SubscribeSection from "@/components/SubscribeSection";
import Footer from "@/components/Footer";
import Link from "next/link";
import Recomendations from "@/components/Recomendations";

const recipeGet = {
  title: "Health Japanese Fried Rice",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.",
  ingredients: [
    {
      title: "Plato principal",
      items: [
        {
          name: "Arroz",
          quantity: "1/2 taza",
          check: false,
        },
        {
          name: "Pollo",
          quantity: "1/2 taza",
          check: false,
        },
        {
          name: "Cebolla",
          quantity: "1/2 taza",
          check: false,
        },
        {
          name: "Huevo",
          quantity: "1/2 taza",
          check: false,
        },
        {
          name: "Sal",
          quantity: "1/2 taza",
          check: false,
        },
      ],
    },
    {
      title: "Salsa",
      items: [
        {
          name: "Soya",
          quantity: "1/2 taza",
          check: false,
        },
        {
          name: "Ajo",
          quantity: "1/2 taza",
          check: false,
        },
        {
          name: "Cebolla",
          quantity: "1/2 taza",
          check: false,
        },
        {
          name: "Sal",
          quantity: "1/2 taza",
          check: false,
        },
      ],
    },
  ],
  directions: [
    {
      title: "Lorem ipsum dolor sit.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus cum similique delectus officiis culpa libero voluptatem natus, labore laudantium maxime. Eligendi vitae aut asperiores facilis. Maiores tenetur possimus deserunt quis minima saepe ea voluptatum veritatis quisquam iusto ullam, libero ipsam tempore itaque dolore inventore corporis, voluptates molestiae laboriosam voluptatem pariatur error? Incidunt fuga repellendus accusamus, vitae distinctio delectus animi.",
      image: Directions,
      check: false,
    },
    {
      title: "Paso 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea aspernatur eligendi tempora incidunt fugiat natus est voluptatibus excepturi ratione, nemo nostrum laboriosam voluptatum quis repellat dolorum magni? Explicabo earum dignissimos non impedit aspernatur minus dolorem quidem, sit facilis reiciendis error corrupti! Doloremque necessitatibus minus nam, nulla error quaerat eos, sint officia tempora numquam amet accusantium cumque fuga illum quis animi.",
      check: false,
    },
    {
      title: "Paso 3",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, voluptatum recusandae excepturi natus ipsum iste, placeat iusto nesciunt eos officia, praesentium saepe. Deleniti eaque ab iure repellat odio totam tenetur harum doloribus possimus, nemo, aspernatur eligendi autem aliquid? Voluptate eveniet aperiam earum nisi doloribus ipsum repellat, in nemo alias dolorum cupiditate rerum velit odio mollitia dignissimos iste laboriosam veniam inventore.",
      check: false,
    },
  ],
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

export default function Recipe() {
  const recipes = recipesList;
  // handle ingredients check
  const [recipe, setRecipe] = useState(recipeGet);
  const handleIngredientsCheck = (index: number, subindex: number) => {
    const newRecipe = { ...recipe };
    newRecipe.ingredients[index].items[subindex].check =
      !newRecipe.ingredients[index].items[subindex].check;
    setRecipe(newRecipe);
  };

  // handle directions check
  const handleDirectionsCheck = (index: number) => {
    const newRecipe = { ...recipe };
    newRecipe.directions[index].check = !newRecipe.directions[index].check;
    setRecipe(newRecipe);
  };

  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col px-[20px] gap-y-[32px] md:gap-y-[56px] md:px-[40px] xl:px-[80px] lg:gap-y-[76px]">
        {/* Desktop Hero */}
        <div className="w-full hidden lg:flex flex-col lg:flex-row items-center">
          <div className="flex flex-col w-2/3 pt-[64px] gap-y-[64px]">
            <h1 className="flex text-[48px]  font-semibold">{recipe.title}</h1>
            <div className="flex gap-x-[24px]">
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
              <div className="flex w-[2px] bg-gray-200"></div>
              <div className="flex items-center gap-x-[12px]">
                <IoTime className="text-[24px]" />
                <div className="text-center">
                  <p className="text-[14px] font-medium">PREPARACIÓN</p>
                  <p className="text-[14px] font-medium text-gray-500">
                    15 Minutos
                  </p>
                </div>
              </div>
              <div className="flex w-[2px] bg-gray-200"></div>
              <div className="flex items-center gap-x-[12px]">
                <IoTime className="text-[24px]" />
                <div className="text-center">
                  <p className="text-[14px] font-medium">COCCIÓN</p>
                  <p className="text-[14px] font-medium text-gray-500">
                    15 Minutos
                  </p>
                </div>
              </div>
              <div className="flex w-[2px] bg-gray-200"></div>
              <div className="flex items-center gap-x-[16px]">
                <PiForkKnifeFill className="text-[24px]" />
                <p className="text-[14px] font-medium text-gray-500">Pollo</p>
              </div>
            </div>
          </div>
          <div className="flex w-1/3 gap-x-[24px] justify-end">
            <div className="flex flex-col items-center gap-y-[12px]">
              <button className="p-[24px] bg-[#E7FAFE] rounded-[50%] text-[28px]">
                <LuPrinter />
              </button>
              <span className="font-medium text-[12px]">Imprimir</span>
            </div>

            <div className="flex flex-col items-center gap-y-[12px]">
              <button className="p-[24px] bg-[#E7FAFE] rounded-[50%] text-[28px]">
                <IoShareOutline />
              </button>
              <span className="font-medium text-[12px]">Compartir</span>
            </div>
          </div>
        </div>

        {/* Mobile Hero */}
        <div className="w-full flex lg:hidden flex-col gap-y-[18px] mt-[32px]">
          <h3 className="text-[24px] font-semibold">{recipe.title}</h3>
          <div className="flex items-center gap-x-[16px]">
            <Image className="w-[50px] h-[50px]" src={Author} alt="Author" />
            <div className="flex flex-col gap-y-[2px]">
              <span className="text-[14px] font-bold">Autor Author</span>
              <span className="text-[12px] text-black/60 font-medium">
                15 March 2022
              </span>
            </div>
          </div>
          <div className="flex gap-x-[8px] text-[10px]">
            <div className="flex items-center gap-x-[6px]">
              <IoTime className="text-[18px]" />
              <div className="text-center">
                <p className="font-medium">PREPARACIÓN</p>
                <p className="font-medium text-gray-500">15 Minutos</p>
              </div>
            </div>
            <div className="flex w-[2px] bg-gray-200"></div>
            <div className="flex items-center gap-x-[6px]">
              <IoTime className="text-[18px]" />
              <div className="text-center">
                <p className="font-medium">COCCIÓN</p>
                <p className="font-medium text-gray-500">15 Minutos</p>
              </div>
            </div>
            <div className="flex w-[2px] bg-gray-200"></div>
            <div className="flex items-center gap-x-[6px]">
              <PiForkKnifeFill className="text-[18px]" />
              <p className="font-medium text-gray-500">Pollo</p>
            </div>
          </div>
          <div className="flex w-full justify-end gap-x-[16px]">
            <div className="flex flex-col items-center gap-y-[12px]">
              <button className="p-[12px] bg-[#E7FAFE] rounded-[50%] text-[20px]">
                <LuPrinter />
              </button>
              <span className="font-medium text-[8px]">Imprimir</span>
            </div>

            <div className="flex flex-col items-center gap-y-[12px]">
              <button className="p-[12px] bg-[#E7FAFE] rounded-[50%] text-[20px]">
                <IoShareOutline />
              </button>
              <span className="font-medium text-[8px]">Compartir</span>
            </div>
          </div>
        </div>

        {/* Destop and mobile video */}
        <div className="flex flex-col lg:flex-row w-full gap-y-[32px] gap-x-[40px]">
          <div className="flex lg:w-2/3 relative">
            <Image className="rounded-[24px]" src={Video} alt="Food" />
            <div className="flex w-fit absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-[24px] bg-slate-300 rounded-[50%]">
              <FaPlay className="text-[18px] lg:text-[24px]" />
            </div>
          </div>
          <div className="flex flex-col flex:w-1/3 rounded-[24px] p-[32px] gap-y-[32px] bg-[#E7FAFE]">
            <h3 className="text-[18px] lg:text-[24px] font-semibold">
              Información Nutrimental
            </h3>
            <div className="flex flex-col w-full gap-y-[12px] lg:gap-y-[18px] text-[14px]">
              <div className="flex w-full justify-between">
                <span className="font-medium text-gray-500">Calorias</span>
                <span className="font-medium">219.9 kcal</span>
              </div>
              <div className="w-full flex h-[2px] bg-gray-200"></div>
              <div className="flex w-full justify-between">
                <span className="font-medium text-gray-500">Calorias</span>
                <span className="font-medium">219.9 kcal</span>
              </div>
              <div className="w-full flex h-[2px] bg-gray-200"></div>
            </div>
            <p className="flex w-full h-full items-end text-[12px] lg:text-[14px] text-gray-500">
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>
        </div>
        <p className="flex w-full text-[14px] lg:text-[16px] text-gray-500 lg:mt-[-32px]">
          {recipe.description}
        </p>

        {/* Ingredients and directions; desktop and mobile */}
        <div className="flex w-full flex-col lg:flex-row gap-x-[64px]">
          <div className="flex w-full flex-col lg:w-2/3 gap-y-[16px] lg:gap-y-[32px]">
            {/*Ingredients */}
            <h3 className="font-semibold text-[24px]">Ingredientes</h3>
            {recipe.ingredients.map((ingredient, index) => (
              <div key={index} className="flex flex-col gap-y-[24px] mb-[16px]">
                <h4 className="font-semibold text-[18px]">
                  {ingredient.title}
                </h4>
                <ul className="flex w-full flex-col gap-y-[16px]">
                  {ingredient.items.map((item, subindex) => (
                    <li
                      key={subindex}
                      className="flex flex-col text-[16px] gap-y-[12px]"
                      onClick={() => handleIngredientsCheck(index, subindex)}
                    >
                      <div
                        className={`flex w-full justify-between ${
                          item.check && "line-through text-gray-500"
                        }`}
                      >
                        <div className="flex flex-row gap-x-[14px]">
                          {item.check ? (
                            <FaCircleCheck className="text-[24px] text-black" />
                          ) : (
                            <div className="w-[24px] h-[24px] rounded-full border-2 border-gray-200"></div>
                          )}
                          <span className="text-[14px]">{item.name}</span>
                        </div>
                        <span className="text-[14px]">{item.quantity}</span>
                      </div>

                      <div className="flex w-full h-[2px] bg-gray-200"></div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Directions */}
            <h3 className="font-semibold text-[24px]">Procedimiento</h3>
            {recipe.directions.map((step, index) => (
              <div key={index} className="flex gap-x-[24px]">
                <div className="hidden lg:flex">
                  {step.check ? (
                    <button
                      onClick={() => handleDirectionsCheck(index)}
                      className="flex justify-start"
                    >
                      <FaCircleCheck className="text-[24px] text-black lg:mt-[4px]" />
                    </button>
                  ) : (
                    <button
                      className="flex p-[10px] h-[10px] rounded-full border-2 border-gray-200 lg:mt-[4px]"
                      onClick={() => handleDirectionsCheck(index)}
                    />
                  )}
                </div>

                <div className="flex flex-col gap-y-[24px] mb-[16px] lg:mb-[32px]">
                  <button
                    className={`flex font-semibold text-[20px] gap-x-[8px] items-center ${
                      step.check && "line-through text-gray-500"
                    }`}
                    onClick={() => handleDirectionsCheck(index)}
                  >
                    <div className="flex lg:hidden">
                      {step.check ? (
                        <div className="flex justify-start">
                          <FaCircleCheck className="text-[24px] text-black lg:mt-[4px]" />
                        </div>
                      ) : (
                        <div className="flex p-[10px] h-[10px] rounded-full border-2 border-gray-200 lg:mt-[4px]" />
                      )}
                    </div>
                    <span>{index + 1}.</span>
                    <h3 className="text-left">{step.title}</h3>
                  </button>
                  <p className="text-[14px] text-gray-700">
                    {step.description}
                  </p>
                  {step.image && <Image src={step.image} alt="Directions" />}
                </div>
              </div>
            ))}
          </div>

          {/* Other recipes */}
          <div className="flex flex-col w-full lg:w-1/3 gap-y-[24px] mt-[16px] lg:mt-0">
            <h3 className="font-semibold text-[24px]">Otras Recetas</h3>
            {recipes.map((recipe) => (
              <Link
                href={`/recipe/${recipe.id}`}
                key={recipe.id}
                className="flex w-full gap-x-[16px] items-center"
              >
                <Image
                  src={Food}
                  alt="Recipe"
                  className="w-2/5 rounded-[16px]"
                />
                <div className="flex flex-col gap-y-[8px] md:gap-y-[24px] lg:gap-y-[16px]">
                  <h4 className="line-clamp-2 font-semibold text-[16px] md:text-[24px] lg:text-[18px]">
                    Chicken Meatball with Creamy Chees
                  </h4>
                  <p className="font-medium text-gray-500 text-[12px] md:text-[20px] lg:text-[14px]">
                    By Author Author
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <SubscribeSection />

        {/* Recipes recomendation */}
        <Recomendations />

        <Footer />
      </div>
    </>
  );
}
