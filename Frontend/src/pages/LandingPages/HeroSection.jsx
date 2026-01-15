import React from "react";
import LandingIntro from "./LandingIntro";

export default function HeroSection() {
  return (
    <section id="home" className="relative">
      <LandingIntro />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Kutubxonangizni Boshqaring
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Zamonaviy va qulay kutubxona boshqaruv tizimi bilan kitoblaringizni
            oson boshqaring
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/login"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105"
            >
              Boshlash
            </a>
            <a
              href="/login"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Batafsil
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
