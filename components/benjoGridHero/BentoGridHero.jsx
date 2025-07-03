import {
  Armchair,
  BadgePercent,
  DollarSign,
  Heart,
  ListFilter,
  MoveLeft,
  MoveRight,
  MoveUpRight,
  Search,
  ShoppingBasket,
  Smartphone,
  Star,
} from "lucide-react";
import Image from "next/image";
import React from "react";

const BentoGridHero = () => {
  return (
    <>
      <div className="p-6 text-white max-h-screen flex flex-col gap-3 bg-[#292929] max-w-7xl">
        {/* First section - Header  */}
        <div className="flex justify-between items-center ">
          {/* Left part */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#4D4D4C]">
              <Armchair className="size-6" />{" "}
              <span className="text-sm">MODERA</span>
            </div>

            <div className=" bg-[#4D4D4C] h-10 rounded-full flex items-center pl-4 pr-[2px]">
              <input
                type="text"
                className="border-none focus:outline-none focus:border-gray-500 bg-transparent"
              />
              <div className="bg-zinc-500 h-9 rounded-full w-9 flex items-center justify-center">
                <Search className="" />
              </div>
            </div>
          </div>

          {/* Right part  */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#4D4D4C]">
              <Smartphone className="size-5" />
              App
            </div>
            <div className="px-2 py-2 rounded-full bg-[#4D4D4C]">
              <Heart className="fill-red-500 text-red-500 size-6" />
            </div>
            <div className="px-2 py-2 rounded-full bg-[#4D4D4C]">
              <ShoppingBasket />
            </div>
            <div className="pr-[1px] rounded-full bg-[#4D4D4C] flex items-center">
              <p className="px-4 py-2 text-sm">Olivia Smith</p>
              <div>
                <img
                  src="/profile.jpg"
                  alt="profile"
                  className="size-9 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Second section - filters */}
        <div className="flex justify-between items-center ">
          <div className="px-2 py-2 rounded-full bg-[#4D4D4C] ">
            <ListFilter />
          </div>

          <div>
            {["Table", "Sofa", "Bed", "Lamps", "Speakers", "Chair"].map(
              (item) => (
                <div
                  key={item}
                  className="px-8 py-2 rounded-full bg-[#4D4D4C] inline-block mr-2"
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>

        {/* Third section - Bento Grid */}
        <div className="grid grid-cols-11 grid-rows-7 gap-3 h-full">
          {/* grid 1  */}
          <div
            className="col-span-4 row-span-7 bg-[#4D4D4C] rounded-3xl p-5 relative"
            style={{
              backgroundImage: "url('/chair5.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "1rem",
            }}
          >
            <div className="flex items-center justify-center h-full">
              <ProductCard
                title={"Armchair"}
                price={"302"}
                rating={"4.5"}
                image={"/chair5.jpg"}
              />
            </div>
            <div className="h-12 bg-[#c0c0c0] rounded-full absolute bottom-3 flex items-center justify-between px-[1px] left-3 right-3">
              <button className="h-11 w-11 flex items-center justify-center rounded-full bg-white cursor-pointer">
                <MoveLeft className="text-[#292929]" />
              </button>
              <p className="text-sm tracking-wide text-[#292929]">
                SLIDE LEFT AND RIGHT
              </p>
              <button className="h-11 w-11 flex items-center justify-center rounded-full bg-[#292929] cursor-pointer">
                <MoveRight className="text-gray-200" />
              </button>
            </div>
          </div>

          {/* grid 2  */}
          <div
            className="col-start-5 col-span-4 row-span-4 bg-[#4D4D4C] rounded-3xl p-7 "
            style={{
              backgroundImage: "url('/chair4.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "1rem",
            }}
          >
            <div className="flex flex-col justify-between items-start h-full">
              <div className="flex flex-col ">
                <h3 className="text-3xl ">Great Value Deals</h3>
                <p className="text-xs">Find Deals with 50% - 60% off</p>
              </div>
              <div className="flex items-center gap-1 text-sm px-4 py-2 bg-[#939392] rounded-full">
                <BadgePercent className="size-4" />
                4.9
              </div>
            </div>
          </div>

          {/* grid 3 */}
          <div className="col-start-9 col-span-3 row-span-2 bg-[#4D4D4C] rounded-3xl p-4 relative">
            <div className="flex flex-col gap-1 h-full justify-between items-start">
              <div className="px-4 py-1 border rounded-full text-sm">
                OUR TEAM
              </div>
              <p className="">Our team designs minimalist modern furniture</p>
              <div className="flex items-center gap-2">
                {["/profile.jpg", "/profile.jpg", "/profile.jpg", "/profile.jpg", "/profile.jpg", "/profile.jpg"].map(
                  (src, index) => (
                    <Image
                      key={index}
                      src={src}
                      alt="profile"
                      height={100}
                      width={100}
                      className="size-9 rounded-full"
                    />
                  )
                )}
              </div>
            </div>
            <div className="px-2 py-2 rounded-full bg-zinc-500 mr-0.5 absolute top-2 right-2">
              <MoveUpRight className=" text-gray-200 size-6" />
            </div>
          </div>

          {/* grid 4 */}
          <div className="col-start-5 col-span-4 row-start-5 row-span-3 bg-[#4D4D4C] rounded-3xl p-2 flex items-center  gap-4">
            {/* Left */}
            <div className="flex flex-col gap-1.5 h-full justify-center items-start pl-3 py-3  w-5/12">
              <div className="px-4 py-1.5 border border-[#939392] rounded-full text-xs ">
                EXCLUSIVE
              </div>
              <h3 className="text-xl">Elegance Meets Simplicity</h3>
              <p className="text-sm text-gray-300">
                Upgrade your workspace with chairs that redefine modern
                simplicity
              </p>
            </div>

            {/* Right  */}
            <div
              className="w-7/12 flex flex-col justify-between items-end h-full p-3 "
              style={{
                backgroundImage: "url('/chair1.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "1rem",
              }}
            >
              <div className="px-2 py-2 rounded-full bg-[#e6e6e4]">
                <Heart className="fill-red-500 text-red-500 size-5" />
              </div>
              <div className="h-10 rounded-full bg-[#e6e6e4] flex items-center ">
                <p className="px-4 text-[#292929] text-sm">Open</p>
                <div className="px-2 py-2 rounded-full bg-[#292929] mr-0.5">
                  <MoveUpRight className=" text-gray-200 size-6" />
                </div>
              </div>
            </div>
          </div>

          {/* grid 5 */}
          <div className="col-start-9 col-span-3 row-start-3 row-span-2 bg-[#4D4D4C] rounded-3xl p-3 relative">
            <div className="flex flex-col justify-between items-start h-full">
              <div className="px-4 py-1 border rounded-full text-sm">
                JOIN NOW
              </div>

              <div className="flex flex-col w-full gap-4">
                <input
                  type="text"
                  placeholder="Email"
                  className="border-b border-gray-300 focus:outline-none focus:border-gray-500 w-full bg-transparent py-1 placeholder:text-gray-100 placeholder:font-light"
                />
                <button className="py-1 bg-[#292929] rounded-full text-gray-200">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="px-2 py-2 rounded-full bg-zinc-500 mr-0.5 absolute top-2 right-2">
              <MoveUpRight className=" text-gray-200 size-6" />
            </div>
          </div>

          {/* grid 6 */}
          <div
            className="col-start-9 col-span-3 row-start-5 row-span-3 bg-[#4D4D4C] rounded-3xl p-5 relative"
            style={{
              backgroundImage: "url('/chair3.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "1rem",
            }}
          >
            <div className="flex flex-col gap-2 items-start h-full">
              <div className="px-4 py-1 border rounded-full text-sm">
                OUR SHOP
              </div>
              <p className="text-gray-200 text-sm max-w-4/5">
                123 Harmony St. GreenView Plaza, New Delhi - 1100001
              </p>
            </div>
            <div className="px-2 py-2 rounded-full bg-zinc-500 mr-0.5 absolute top-2 right-2">
              <MoveUpRight className=" text-gray-200 size-6" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BentoGridHero;

const ProductCard = ({ price, title, rating, image }) => {
  return (
    <div
      className="h-80 object-cover w-full mx-12 border shadow-2xl"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "1rem",
      }}
    >
      <div className="flex flex-col justify-between h-full">
        <div className="flex justify-between items-center p-4">
          <div className="flex flex-col">
            <h3 className="text-2xl flex items-center gap-1 font-semibold leading-3">
              <DollarSign /> {price}
            </h3>
            <h2 className="text-lg">{title}</h2>
          </div>
          <div className="flex items-center gap-2 text-sm px-4 py-3 bg-[#4D4D4C] rounded-full">
            <Star className="size-4 fill-yellow-500 text-yellow-500" /> {rating}
          </div>
        </div>
        <div className="flex items-center gap-2 justify-end p-4">
          <div className="px-2 py-2 rounded-full bg-[#e6e6e4]">
            <Heart className="fill-red-500 text-red-500 size-6" />
          </div>
          <div className="px-2 py-2 rounded-full bg-[#e6e6e4]">
            <ShoppingBasket />
          </div>
        </div>
      </div>
    </div>
  );
};
