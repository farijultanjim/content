"use client";


import { GlassButton } from "@/components/glass-button/glass-button";
// import GlassButton2 from "@/components/glassButton/GlassButton";
import { LiquidButton } from "@/components/liquid-glass-button";
import { LiquidMetalButton } from "@/components/liquid-metal-button";
import PortfolioHero from "@/components/PortfolioHero";
import SettingsModal from "@/components/SettingsModal/SettingsModal";

export default function Home() {
  return (
    <main>
      <PortfolioHero />
      <div className="fixed top-[15%] left-1/2 -translate-x-1/2 right-1/2 z-50">
        <LiquidButton className="mb-20 text-white" >Liquid Glass</LiquidButton>

        <LiquidMetalButton label="Get Started" />

        <GlassButton className="w-full my-20">
          Generating...
        </GlassButton>

        {/* <GlassButton2 /> */}
      </div>
      {/* <SettingsModal /> */}
      <div className="h-screen w-full bg-gradient-to-b from-[#2e85dc] to-[#e69191]" />
      
    </main>
  );
}
