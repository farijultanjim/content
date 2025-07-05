import React from "react";
import Image from "next/image";

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

const BentoGridHero = () => {
  return (
    <div className="p-6 text-white flex flex-col gap-3 bg-[#292929] max-w-7xl mx-auto h-screen">
      <Header />
      <Filters />
      <BentoGrid />
    </div>
  );
};

export default BentoGridHero;

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      {/* Left part */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#4D4D4C]">
          <Armchair className="size-6" />
          <span className="text-sm">MODERA</span>
        </div>
        <div className="bg-[#4D4D4C] h-10 rounded-full flex items-center pl-4 pr-[2px]">
          <input
            type="text"
            placeholder="Search..."
            className="border-none focus:outline-none bg-transparent text-sm placeholder:text-gray-300"
          />
          <div className="bg-zinc-500 h-9 rounded-full w-9 flex items-center justify-center">
            <Search className="size-5" />
          </div>
        </div>
      </div>

      {/* Right part */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#4D4D4C]">
          <Smartphone className="size-5" />
          <span className="text-sm">App</span>
        </div>
        <div className="p-2 rounded-full bg-[#4D4D4C]">
          <Heart className="fill-red-500 text-red-500 size-6" />
        </div>
        <div className="p-2 rounded-full bg-[#4D4D4C]">
          <ShoppingBasket className="size-6" />
        </div>
        <div className="pr-[1px] rounded-full bg-[#4D4D4C] flex items-center">
          <span className="px-4 py-2 text-sm">Olivia Smith</span>
          <Image
            src="/profile.jpg"
            alt="profile"
            width={36}
            height={36}
            className="size-9 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

const Filters = () => {
  const filterItems = ["Table", "Sofa", "Bed", "Lamps", "Speakers", "Chair"];

  return (
    <div className="flex justify-between items-center">
      <div className="p-2 rounded-full bg-[#4D4D4C]">
        <ListFilter className="size-6" />
      </div>
      <div className="flex gap-2">
        {filterItems.map((item) => (
          <div
            key={item}
            className="px-8 py-2 rounded-full bg-[#4D4D4C] text-sm"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

const BentoGrid = () => {
  return (
    <div className="grid grid-cols-11 grid-rows-7 gap-3 h-full">
      <div
        className="col-span-4 row-span-7 bg-[#4D4D4C] rounded-3xl p-5 relative bg-cover bg-center"
        style={{ backgroundImage: "url('/chair5.jpg')", borderRadius: "1rem" }}
      >
        <div className="flex items-center justify-center h-full">
          <ProductCard
            title="Armchair"
            price="302"
            rating="4.5"
            image="/chair5.jpg"
          />
        </div>
        <div className="h-12 bg-[#c0c0c0] rounded-full absolute bottom-3 flex items-center justify-between px-[1px] left-3 right-3">
          <button className="h-11 w-11 flex items-center justify-center rounded-full bg-white cursor-pointer">
            <MoveLeft className="text-[#292929] size-6" />
          </button>
          <p className="text-sm tracking-wide text-[#292929]">
            SLIDE LEFT AND RIGHT
          </p>
          <button className="h-11 w-11 flex items-center justify-center rounded-full bg-[#292929] cursor-pointer">
            <MoveRight className="text-gray-200 size-6" />
          </button>
        </div>
      </div>

      <ValueDealsSection />
      <TeamSection />
      <ExclusiveSection />
      <SubscribeSection />
      <ShopSection />
    </div>
  );
};

const TeamSection = () => {
  const profiles = Array(6).fill("/profile.jpg");

  return (
    <div className="col-start-9 col-span-3 row-span-2 bg-[#4D4D4C] rounded-3xl p-4 relative">
      <div className="flex flex-col gap-1 h-full justify-between items-start">
        <div className="px-4 py-1 border rounded-full text-sm">OUR TEAM</div>
        <p className="text-sm">Our team designs minimalist modern furniture</p>
        <div className="flex items-center gap-2">
          {profiles.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt="profile"
              width={36}
              height={36}
              className="size-9 rounded-full"
            />
          ))}
        </div>
      </div>
      <div className="p-2 rounded-full bg-zinc-500 absolute top-2 right-2">
        <MoveUpRight className="text-gray-200 size-6" />
      </div>
    </div>
  );
};

const ExclusiveSection = () => {
  return (
    <div className="col-start-5 col-span-4 row-start-5 row-span-3 bg-[#4D4D4C] rounded-3xl p-2 flex items-center gap-4">
      <div className="flex flex-col gap-1.5 h-full justify-center items-start pl-3 py-3 w-5/12">
        <div className="px-4 py-1.5 border border-[#939392] rounded-full text-xs">
          EXCLUSIVE
        </div>
        <h3 className="text-xl">Elegance Meets Simplicity</h3>
        <p className="text-sm text-gray-300">
          Upgrade your workspace with chairs that redefine modern simplicity
        </p>
      </div>
      <div
        className="w-7/12 flex flex-col justify-between items-end h-full p-3 bg-cover bg-center"
        style={{ backgroundImage: "url('/chair1.jpg')", borderRadius: "1rem" }}
      >
        <div className="p-2 rounded-full bg-[#e6e6e4]">
          <Heart className="fill-red-500 text-red-500 size-5" />
        </div>
        <div className="h-10 rounded-full bg-[#e6e6e4] flex items-center">
          <p className="px-4 text-[#292929] text-sm">Open</p>
          <div className="p-2 rounded-full bg-[#292929] mr-0.5">
            <MoveUpRight className="text-gray-200 size-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

const SubscribeSection = () => {
  return (
    <div className="col-start-9 col-span-3 row-start-3 row-span-2 bg-[#4D4D4C] rounded-3xl p-3 relative">
      <div className="flex flex-col justify-between items-start h-full">
        <div className="px-4 py-1 border rounded-full text-sm">JOIN NOW</div>
        <div className="flex flex-col w-full gap-4">
          <input
            type="text"
            placeholder="Email"
            className="border-b border-gray-300 focus:outline-none focus:border-gray-500 w-full bg-transparent py-1 placeholder:text-gray-100 placeholder:font-light"
          />
          <button className="py-1 bg-[#292929] rounded-full text-gray-200 text-sm">
            Subscribe
          </button>
        </div>
      </div>
      <div className="p-2 rounded-full bg-zinc-500 absolute top-2 right-2">
        <MoveUpRight className="text-gray-200 size-6" />
      </div>
    </div>
  );
};

const ShopSection = () => {
  return (
    <div
      className="col-start-9 col-span-3 row-start-5 row-span-3 bg-[#4D4D4C] rounded-3xl p-5 relative bg-cover bg-center"
      style={{ backgroundImage: "url('/chair3.jpg')", borderRadius: "1rem" }}
    >
      <div className="flex flex-col gap-2 items-start h-full">
        <div className="px-4 py-1 border rounded-full text-sm">OUR SHOP</div>
        <p className="text-gray-200 text-sm max-w-4/5">
          123 Harmony St. GreenView Plaza, New Delhi - 1100001
        </p>
      </div>
      <div className="p-2 rounded-full bg-zinc-500 absolute top-2 right-2">
        <MoveUpRight className="text-gray-200 size-6" />
      </div>
    </div>
  );
};

const ValueDealsSection = () => {
  return (
    <div
      className="col-start-5 col-span-4 row-span-4 bg-[#4D4D4C] rounded-3xl p-7 bg-cover bg-center"
      style={{ backgroundImage: "url('/chair4.jpg')", borderRadius: "1rem" }}
    >
      <div className="flex flex-col justify-between items-start h-full">
        <div className="flex flex-col">
          <h3 className="text-3xl">Great Value Deals</h3>
          <p className="text-xs">Find Deals with 50% - 60% off</p>
        </div>
        <div className="flex items-center gap-1 text-sm px-4 py-2 bg-[#939392] rounded-full">
          <BadgePercent className="size-4" />
          4.9
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ price, title, rating, image }) => {
  return (
    <div
      className="h-80 w-full mx-12 border shadow-2xl bg-cover bg-center"
      style={{ backgroundImage: `url(${image})`, borderRadius: "1rem" }}
    >
      <div className="flex flex-col justify-between h-full">
        <div className="flex justify-between items-center p-4">
          <div className="flex flex-col">
            <h3 className="text-2xl flex items-center gap-1 font-semibold leading-3">
              <DollarSign className="size-6" /> {price}
            </h3>
            <h2 className="text-lg">{title}</h2>
          </div>
          <div className="flex items-center gap-2 text-sm px-4 py-3 bg-[#4D4D4C] rounded-full">
            <Star className="size-4 fill-yellow-500 text-yellow-500" /> {rating}
          </div>
        </div>
        <div className="flex items-center gap-2 justify-end p-4">
          <div className="p-2 rounded-full bg-[#e6e6e4]">
            <Heart className="fill-red-500 text-red-500 size-6" />
          </div>
          <div className="p-2 rounded-full bg-[#e6e6e4]">
            <ShoppingBasket className="size-6" />
          </div>
        </div>
      </div>
    </div>
  );
};
