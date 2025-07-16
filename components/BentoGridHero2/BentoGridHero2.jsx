import React from "react";

const BentoGridHero2 = () => {
  return (
    <div className="h-screen w-full p-4">
      <div className="grid grid-cols-11 grid-rows-10 gap-4 h-full">
        <div className="col-span-3 row-span-10 bg-blue-300 rounded-lg">1</div>
        <div className="col-span-5 row-span-4 col-start-4 bg-blue-300 rounded-lg relative">
          <div className="absolute imageBox"></div>
          <div className="absolute icon bg-red-200 z-10 w-12 h-12 right-0 bottom-0 rounded-tl-3xl flex items-center justify-center">
            icn
          </div>
        </div>
        <div className="col-span-4 row-span-6 col-start-4 row-start-5 bg-blue-300 rounded-lg">
          3
        </div>
        <div className="col-span-3 row-span-2 col-start-9 row-start-1 bg-blue-300 rounded-lg">
          4
        </div>
        <div className="col-span-3 row-span-2 col-start-9 row-start-3 bg-blue-300 rounded-lg">
          5
        </div>
        <div className="col-span-4 row-span-6 col-start-8 row-start-5 bg-blue-300 rounded-lg">
          6
        </div>
      </div>
    </div>
  );
};

export default BentoGridHero2;
