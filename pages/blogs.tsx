import Navbar from "@/components/Navbar";
import Food from "@/public/resources/food.png";
import Image from "next/image";
import Author from "@/public/resources/author.png";
import SubscribeSection from "@/components/SubscribeSection";
import Footer from "@/components/Footer";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "Blog 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: Food,
    author: "Author Author",
    date: "12 de diciembre de 2021",
  },
  {
    id: 2,
    title: "Blog 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: Food,
    author: "Author Author",
    date: "12 de diciembre de 2021",
  },
  {
    id: 3,
    title: "Blog 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: Food,
    author: "Author Author",
    date: "12 de diciembre de 2021",
  },
  {
    id: 4,
    title: "Blog 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: Food,
    author: "Author Author",
    date: "12 de diciembre de 2021",
  },
  {
    id: 5,
    title: "Blog 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: Food,
    author: "Author Author",
    date: "12 de diciembre de 2021",
  },
  {
    id: 6,
    title: "Blog 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: Food,
    author: "Author Author",
    date: "12 de diciembre de 2021",
  },
];

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

export default function Blogs() {
  const recipes = recipesList;
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col px-[20px] gap-y-[24px] md:gap-y-[56px] md:px-[40px] xl:px-[80px] lg:gap-y-[76px]">
        <div className="flex flex-col text-center mt-[24px] gap-y-[16px]">
          <h1 className="text-[24px] lg:text-[48px] font-semibold">
            Blogs y Articulos
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </p>
        </div>

        {/* Search bar */}
        <div className="flex w-full justify-center">
          <div className="flex w-full flex-row bg-white p-[10px] rounded-[16px] border max-w-[700px]">
            <input
              type="text"
              placeholder="Busca blogs o articulos"
              className="w-full p-[10px] text-[12px] lg:text-[16px] outline-none"
            />
            <button className="w-fit bg-black py-[10px] px-[20px] rounded-[16px]">
              <p className="text-white text-[12px] lg:text-[16px] font-semibold">
                Buscar
              </p>
            </button>
          </div>
        </div>

        {/* Blogs */}
        <div className="flex w-full flex-col lg:flex-row gap-y-[24px] lg:gap-x-[56px]">
          <div className="flex w-full flex-col lg:w-2/3 gap-y-[24px] lg:gap-y-[56px]">
            {blogs.map((blog) => (
              <Link
                key={blog.id}
                href={`/blog/${blog.id}`}
                className="flex w-full gap-x-[12px] lg:gap-x-[24px]"
              >
                <div className="flex w-2/5 rounded-[16px] relative">
                  <Image
                    className="absolute h-full w-full object-cover rounded-[16px]"
                    src={blog.image}
                    alt="image"
                  />
                </div>

                <div className="flex flex-col w-3/5 gap-y-[8px] lg:gap-y-[12px] my-[10px]">
                  <h3 className="text-[16px] lg:text-[22px] font-semibold line-clamp-1">
                    {blog.title}
                  </h3>
                  <p className="text-[12px] lg:text-[16px] text-gray-500 line-clamp-2">
                    {blog.content}
                  </p>
                  <div className="flex flex-col gap-y-[4px] text-[12px] lg:text-[14px] text-gray-500 lg:flex-row lg:items-center lg:gap-x-[8px]">
                    <div className="flex flex-row gap-x-[8px] items-center">
                      <Image
                        className="rounded-full w-[24px]"
                        src={Author}
                        alt="author"
                      />
                      <p className="font-semibold text-black">{blog.author}</p>
                    </div>
                    <div className="flex h-full w-[2px] bg-gray-200" />
                    <p>{blog.date}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {/* Pagination mobile */}
          <div className="flex lg:hidden w-full justify-center gap-x-[12px] text-[14px]">
            <button className="w-fit bg-black text-white px-[16px] py-[8px] rounded-[10px]">
              <p className="font-semibold">{"1"}</p>
            </button>
            <button className="w-fit text-black bg-white border px-[16px] py-[8px] rounded-[10px]">
              <p className="font-semibold">{"2"}</p>
            </button>
            <button className="w-fit text-black bg-white border px-[16px] py-[8px] rounded-[10px]">
              <p className="font-semibold">{"3"}</p>
            </button>
            <button className="w-fit text-black bg-white border px-[16px] py-[8px] rounded-[10px]">
              <p className="font-semibold">{">"}</p>
            </button>
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
                  src={recipe.img}
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
        {/* Pagination Desktop */}
        <div className="lg:flex hidden w-full justify-center gap-x-[12px] text-[14px]">
          <button className="w-fit bg-black text-white px-[16px] py-[8px] rounded-[10px]">
            <p className="font-semibold">{"1"}</p>
          </button>
          <button className="w-fit text-black bg-white border px-[16px] py-[8px] rounded-[10px]">
            <p className="font-semibold">{"2"}</p>
          </button>
          <button className="w-fit text-black bg-white border px-[16px] py-[8px] rounded-[10px]">
            <p className="font-semibold">{"3"}</p>
          </button>
          <button className="w-fit text-black bg-white border px-[16px] py-[8px] rounded-[10px]">
            <p className="font-semibold">{">"}</p>
          </button>
        </div>

        <SubscribeSection />
        <Footer />
      </div>
    </>
  );
}
