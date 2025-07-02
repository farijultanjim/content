import {
  Armchair,
  DollarSign,
  Heart,
  ListFilter,
  Search,
  ShoppingBasket,
  Smartphone,
  Star,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Mail,
} from "lucide-react";
import React, { useState } from "react";

const BentoGridHero = () => {
  return (
    <div className="p-4 text-white h-screen flex flex-col gap-3 bg-[#2a2a2a] max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center">
        {/* Left part */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#3a3a3a]">
            <Armchair className="size-5" />
            <span className="text-sm font-medium">MODERA</span>
          </div>

          <div className="bg-[#3a3a3a] h-10 rounded-full flex items-center pl-4 pr-1">
            <input
              type="text"
              placeholder="Armchairs"
              className="bg-transparent border-none outline-none text-white placeholder-gray-400 text-sm w-32"
            />
            <div className="bg-[#555] h-8 rounded-full w-8 flex items-center justify-center ml-2">
              <Search className="size-4" />
            </div>
          </div>
        </div>

        {/* Right part */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#3a3a3a]">
            <Smartphone className="size-4" />
            <span className="text-sm">App</span>
          </div>
          <div className="p-2 rounded-full bg-[#3a3a3a]">
            <Heart className="fill-red-500 text-red-500 size-5" />
          </div>
          <div className="p-2 rounded-full bg-[#3a3a3a]">
            <ShoppingBasket className="size-5" />
          </div>
          <div className="pr-1 rounded-full bg-[#3a3a3a] flex items-center">
            <span className="px-3 py-2 text-sm">Olivia Smith</span>
            <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full flex items-center justify-center text-xs font-medium">
              OS
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex justify-between items-center">
        <div className="p-2 rounded-full bg-[#3a3a3a]">
          <ListFilter className="size-5" />
        </div>

        <div className="flex gap-2">
          {["Table", "Sofa", "Bed", "Lamps", "Speakers", "Chairs"].map(
            (item) => (
              <div
                key={item}
                className="px-6 py-2 rounded-full bg-[#3a3a3a] text-sm hover:bg-[#4a4a4a] transition-colors cursor-pointer"
              >
                {item}
              </div>
            )
          )}
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-12 grid-rows-6 gap-3 flex-1">
        {/* Main Product Card */}
        <div className="col-span-4 row-span-6 bg-gradient-to-br from-amber-100 to-orange-200 rounded-3xl p-6 relative overflow-hidden">
          <ProductCard />
        </div>

        {/* Great Value Deals */}
        <div className="col-span-5 row-span-4 bg-gradient-to-br from-gray-600 to-gray-800 rounded-3xl p-6 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-2">Great Value Deals</h2>
            <p className="text-gray-300 mb-4">Find deals with 50%- 60% off</p>
            <div className="absolute bottom-4 left-6 flex items-center gap-2 bg-black/30 backdrop-blur-sm px-3 py-2 rounded-full">
              <Star className="fill-yellow-400 text-yellow-400 size-4" />
              <span className="text-sm">4.9</span>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 w-80 h-60 bg-gradient-to-tl from-gray-400 to-gray-600 rounded-tl-[100px] opacity-30"></div>
        </div>

        {/* Our Team */}
        <div className="col-span-3 row-span-2 bg-[#3a3a3a] rounded-3xl p-5 relative">
          <div className="mb-3">
            <span className="text-xs px-3 py-1 bg-[#4a4a4a] rounded-full">
              OUR TEAM
            </span>
          </div>
          <p className="text-sm text-gray-300 mb-4">
            Our team designs minimalist modern furniture
          </p>
          <div className="flex -space-x-2 mb-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-full border-2 border-[#3a3a3a] ${
                  i === 1
                    ? "bg-gradient-to-br from-pink-400 to-orange-400"
                    : i === 2
                    ? "bg-gradient-to-br from-blue-400 to-purple-400"
                    : i === 3
                    ? "bg-gradient-to-br from-green-400 to-teal-400"
                    : i === 4
                    ? "bg-gradient-to-br from-yellow-400 to-orange-400"
                    : "bg-gradient-to-br from-purple-400 to-pink-400"
                }`}
              ></div>
            ))}
          </div>
          <button className="w-full py-2 bg-[#4a4a4a] rounded-full text-sm hover:bg-[#5a5a5a] transition-colors">
            JOIN NOW
          </button>
          <ExternalLink className="absolute top-4 right-4 size-4 text-gray-500" />
        </div>

        {/* Newsletter/Email */}
        <div className="col-span-5 row-span-2 bg-[#3a3a3a] rounded-3xl p-6 relative">
          <div className="mb-4">
            <span className="text-xs px-3 py-1 bg-[#4a4a4a] rounded-full">
              EXCLUSIVE
            </span>
          </div>
          <h3 className="text-xl font-bold mb-2">Elegance Meets Simplicity</h3>
          <p className="text-sm text-gray-300 mb-4">
            Upgrade your workspace with chairs that redefine modern simplicity.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 bg-[#4a4a4a] border-none outline-none px-4 py-2 rounded-full text-sm placeholder-gray-400"
            />
            <button className="px-6 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
          <Heart className="absolute top-6 right-6 fill-red-500 text-red-500 size-5" />
        </div>

        {/* Product Preview */}
        <div className="col-span-3 row-span-2 bg-gradient-to-br from-gray-200 to-gray-400 rounded-3xl p-5 relative overflow-hidden">
          <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-black text-xs font-medium">
            Open
          </div>
          <div className="absolute bottom-4 left-4">
            <span className="text-xs px-3 py-1 bg-[#4a4a4a] text-white rounded-full">
              OUR SHOP
            </span>
            <p className="text-black text-xs mt-2">
              123 Harmony St, Greenview Plaza,
              <br />
              New Delhi - 110001
            </p>
          </div>
          <ExternalLink className="absolute top-4 right-4 size-4 text-black/60" />
          <div className="absolute right-0 bottom-0 w-32 h-32 bg-white/30 rounded-full -mr-8 -mb-8"></div>
        </div>

        {/* Bottom Product Card */}
        <div className="col-span-3 row-span-2 bg-gradient-to-br from-gray-100 to-gray-300 rounded-3xl p-5 relative overflow-hidden">
          <div className="absolute right-4 top-4">
            <Heart className="fill-red-500 text-red-500 size-5" />
          </div>
          <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs">
            4.9 ⭐
          </div>
          <div className="absolute right-0 bottom-0 w-24 h-24 bg-white/40 rounded-full -mr-6 -mb-6"></div>
          <ExternalLink className="absolute bottom-4 right-4 size-4 text-black/60" />
        </div>
      </div>
    </div>
  );
};

const ProductCard = () => {
  return (
    <div className="h-full flex flex-col justify-between relative">
      {/* Product Image Area */}
      <div className="flex-1 relative mb-4">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-orange-300 rounded-2xl"></div>
        <div className="absolute inset-4 bg-gradient-to-br from-amber-100 to-orange-200 rounded-xl opacity-60"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-24 bg-gradient-to-br from-amber-800 to-orange-900 rounded-2xl opacity-40"></div>
      </div>

      {/* Product Info */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center gap-1 text-black mb-1">
            <DollarSign className="size-5" />
            <span className="text-2xl font-bold">302</span>
          </div>
          <h3 className="text-black text-lg font-medium">Armchair</h3>
        </div>

        <div className="flex items-center gap-1 bg-amber-800/20 backdrop-blur-sm px-3 py-1 rounded-full">
          <Star className="fill-yellow-500 text-yellow-500 size-4" />
          <span className="text-black text-sm font-medium">4.9</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <button className="p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
            <Heart className="fill-red-500 text-red-500 size-5" />
          </button>
          <button className="p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
            <ShoppingBasket className="size-5 text-black" />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-2 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-full">
          <ChevronLeft className="size-4 text-white cursor-pointer hover:text-gray-300" />
          <span className="text-white text-xs font-medium">
            SLIDE LEFT AND RIGHT
          </span>
          <ChevronRight className="size-4 text-white cursor-pointer hover:text-gray-300" />
        </div>
      </div>
    </div>
  );
};

export default BentoGridHero;
