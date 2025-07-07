"use client";

import MultiFilterSetup from "@/components/MultiFilterSetup/MultiFilterSetup";
import PricingPlansCards from "@/components/PricingPlansCards/PricingPlansCards";

export default function Home() {
  return (
    <main className="bg-[#e7e9f3]">
      {/* <PricingPlansCards /> */}
      <MultiFilterSetup />
    </main>
  );
}
