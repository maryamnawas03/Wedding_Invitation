"use client";

import React from "react";
import { motion } from "framer-motion";
import { weddingData } from "@/data/weddingData";
import { Countdown } from "./Countdown";
import { ChevronDown, MapPin, Calendar } from "lucide-react";

export const HeroSection: React.FC = () => {
  const scrollToNextSection = () => {
    const timelineElement = document.getElementById("timeline");
    if (timelineElement) {
      timelineElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-between text-center px-4 py-12 overflow-hidden bg-[#FBF7F0]">
      {/* Ambient background soft light rays */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(244,197,190,0.35)_0%,_rgba(251,247,240,0)_70%)] pointer-events-none" />

      {/* Main Architectural Arch Frame Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-[460px] sm:max-w-[500px] min-h-[85vh] my-auto rounded-[140px_140px_30px_30px] border-[3px] border-[#D4AF37]/40 bg-[#FAF6EE]/80 backdrop-blur-md p-8 sm:p-12 shadow-[0_20px_60px_rgba(74,59,50,0.12)] flex flex-col justify-between items-center overflow-hidden"
      >
        {/* Arch Decorative Inner Border Line */}
        <div className="absolute inset-3 rounded-[130px_130px_22px_22px] border border-[#D4AF37]/25 pointer-events-none" />

        {/* Top Header - Bismillah & Wedding Day */}
        <div className="relative z-10 space-y-2 pt-4">
          <p className="font-serif text-xl sm:text-2xl text-brown-dark tracking-wide font-medium">
            بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </p>

          <p className="font-script text-3xl sm:text-4xl text-[#B87A46] font-normal pt-2">
            Wedding Day
          </p>

          <p className="font-cinzel text-xs uppercase tracking-[0.3em] text-brown-400 font-semibold">
            08.08.26
          </p>
        </div>

        {/* Center Monogram & Couple Names Calligraphy (Matching Image 2) */}
        <div className="relative z-10 my-auto py-6">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl sm:text-5xl text-brown-dark font-normal tracking-tight"
            style={{
              background: "linear-gradient(135deg, #4A3B32 0%, #A07B33 50%, #8C6D58 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {weddingData.groomName}
          </motion.h1>

          <div className="flex items-center justify-center gap-3 my-2">
            <span className="h-[1px] w-12 bg-[#D4AF37]/40" />
            <span className="font-script text-4xl sm:text-5xl text-[#B87A46]">&</span>
            <span className="h-[1px] w-12 bg-[#D4AF37]/40" />
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-serif text-4xl sm:text-5xl text-brown-dark font-normal tracking-tight"
            style={{
              background: "linear-gradient(135deg, #4A3B32 0%, #A07B33 50%, #8C6D58 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {weddingData.brideName}
          </motion.h1>

          {/* Venue & Location Badge */}
          <div className="flex items-center justify-center gap-2 mt-6 text-xs font-sans text-brown-400 font-medium">
            <MapPin className="w-3.5 h-3.5 text-[#B87A46]" />
            <span>{weddingData.venue.name}, {weddingData.venue.city}</span>
          </div>
        </div>

        {/* Live Countdown Component */}
        <div className="relative z-10 w-full">
          <Countdown targetDateIso={weddingData.isoDate} />
        </div>

        {/* Bottom Scroll Down Chevron Indicator (Matching Image 2) */}
        <div
          onClick={scrollToNextSection}
          className="relative z-10 cursor-pointer pt-2 pb-2 flex flex-col items-center gap-1 group"
        >
          <span className="font-script text-lg text-[#B87A46] group-hover:text-brown-dark transition-colors">
            Scroll down
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-4 h-4 text-[#B87A46]" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
