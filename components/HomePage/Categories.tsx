import Image from "next/image";
import { useState, useEffect } from "react";
const Rice = "/resources/categories/rice.png";
const Vegan = "/resources/categories/vegan.png";
const Meat = "/resources/categories/meat.png";
const Cake = "/resources/categories/cake.png";
const Shandwich = "/resources/categories/sandwich.png";
const Chocolate = "/resources/categories/chocolate.png";

const categories = [
  {
    id: 1,
    name: "Desayuno",
    img: Rice,
    color: "112,130,70",
  },
  {
    id: 2,
    name: "Vegetariano",
    img: Vegan,
    color: "108,198,63",
  },
  {
    id: 3,
    name: "Carne",
    img: Meat,
    color: "204,38,27",
  },
  {
    id: 4,
    name: "Postre",
    img: Cake,
    color: "240,158,0",
  },
  {
    id: 5,
    name: "Lunch",
    img: Shandwich,
    color: "0,0,0",
  },
  {
    id: 6,
    name: "Chocolate",
    img: Chocolate,
    color: "122,55,7",
  },
];

export default function Categories() {
  //Show all categories
  const [categoriesToShow, setCategoriesToShow] = useState(categories);
  const [showAllCategories, setShowAllCategories] = useState(false);

  const handleShowCategories = () => {
    setShowAllCategories(!showAllCategories);
  };

  //Hidde categories cards when the screen is small
  const [wrapperIndex, setWrapperIndex] = useState(categories.length);
  useEffect(() => {
    const container = document.getElementById("categoriesContainer");

    const checkFlexWrap = () => {
      const boxes = container?.children || [];
      if (boxes.length === 0) return;

      const firstBoxTop = boxes[0].getBoundingClientRect().top;

      for (let i = 1; i < boxes.length; i++) {
        if (boxes[i].getBoundingClientRect().top !== firstBoxTop) {
          setWrapperIndex(i);
          console.log(i);
          break;
        }
      }
    };

    // Check wrap on load and window resize
    checkFlexWrap();
    window.addEventListener("resize", checkFlexWrap);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", checkFlexWrap);
    };
  }, []);

  useEffect(() => {
    if (!showAllCategories) {
      setCategoriesToShow(categories.slice(0, wrapperIndex));
    } else {
      setCategoriesToShow(categories);
    }
  }, [showAllCategories, wrapperIndex]);

  return (
    <>
      <div className="flex flex-col w-full gap-y-[30px] lg:gap-y-[80px]">
        <div className="flex flex-wrap w-full justify-between gap-y-[16px] items-center">
          <h3 className="text-[28px] lg:text-[48px] font-semibold">
            Categorías
          </h3>
          <button
            onClick={handleShowCategories}
            className="w-fit h-fit px-[16px] py-[10px] lg:px-[20px] lg:py-[14px] bg-[#E7FAFE] rounded-[16px]"
          >
            <p className="text-[14px] lg:text-[16px] font-semibold">
              {showAllCategories ? "Ocultar" : "Ver todo"}
            </p>
          </button>
        </div>
        <div
          id="categoriesContainer"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-[16px] gap-y-[20px] lg:gap-x-[40px] lg:gap-y-[40px]"
        >
          {categoriesToShow.map((category) => (
            <div
              key={category.id}
              className="flex flex-col items-center py-[16px] px-[24px] gap-y-[18px] lg:py-[30px] lg:px-[50px] rounded-[30px] lg:gap-y-[40px]"
              style={{
                background: `linear-gradient(to top, rgba(${category.color}, 0.1), rgba(${category.color}, 0))`,
              }}
            >
              <Image
                src={category.img}
                alt={category.name}
                width={100}
                height={100}
                className="w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] "
                style={{
                  filter: `drop-shadow(10px 16px 6px rgba(${category.color}, 0.25))`,
                }}
              />
              <h4 className="text-[10px] lg:text-[18px] font-semibold">
                {category.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
