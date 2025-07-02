import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function HealthHero() {
  return (
    <>
      <Header />
      <div className="font-inter grid grid-cols-2 gap-4 h-screen px-16 max-w-7xl mx-auto items-center justify-center">
        {/* Left side */}
        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="text-8xl font-semi-bold text-[#090909] leading-20">
            We Take Care About Your{" "}
            <span className="text-[#BFD9B7]">Health</span>
          </h1>
          <p className="text-sm text-[#999999]">
            Make sure your daily nutrition is sufficient. Consult your <br />{" "}
            problem about nutrition with us
          </p>

          {/* Buttons & Avatars  */}
          <div className="flex items-center gap-4">
            <button className="px-7 py-3 bg-[#090909] text-white rounded-full text-sm">
              Get Started
            </button>
            <div className="flex relative">
              <div className="size-11 rounded-full bg-red-300 shadow-sm"></div>

              <div className="size-11 rounded-full bg-teal-300 absolute left-7 shadow-sm"></div>
            </div>
            <button className="border-2 rounded-full p-2 ml-6">
              <ArrowUpRight />
            </button>
          </div>

          {/* Tag Badges */}
          <div className="flex flex-wrap gap-3 mt-8 max-w-3/4">
            <div className="px-7 py-2 border rounded-full text-sm">
              Nutrition
            </div>
            <div className="px-7 py-2 border rounded-full text-sm">
              Supplements
            </div>
            <div className="px-7 py-2 border rounded-full text-sm">
              Vitamins
            </div>
            <div className="px-7 py-2 border rounded-full text-sm">
              Healthy Food
            </div>
            <div className="px-7 py-2 border rounded-full text-sm">
              Consultations
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="">
          <div className="relative max-w-[400px] mx-auto mt-16">
            <div className="card">
              <img
                src="/profile.jpg"
                alt="Profile Grid"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Top-right circle button */}
            <div className="absolute top-2 right-2 bg-white w-12 h-12 rounded-full flex items-center justify-center shadow z-20">
              <span className="text-[#BFD9B7] text-xl">➜</span>
            </div>

            {/* Bottom-left profile card */}
            <div className="absolute bottom-[-24px] left-1 bg-white px-4 py-2 pr-6 rounded-full shadow flex items-center gap-3 z-20">
              <img
                src="/profile.jpg"
                alt="Dr. Richard Lee"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="text-sm font-semibold text-black">
                  Nutritionists
                </p>
                <p className="text-xs text-gray-500">Dr. Richard Lee</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 flex items-center gap-11 px-16 max-w-7xl mx-auto py-4">
      <div>
        <img src="nut-logo.svg" alt="logo" className="size-9" />
      </div>
      <div className="flex items-center gap-6 font-medium">
        <a href="#home">Home</a>
        <a href="#product">Product</a>
        <a href="#shop">Shop</a>
      </div>
    </header>
  );
};
