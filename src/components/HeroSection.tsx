"use client";

import React from "react";
import { motion } from "framer-motion";
import { weddingData } from "@/data/weddingData";
import { Countdown } from "./Countdown";
import { MapPin, Calendar } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 py-16 overflow-hidden bg-cream">
      {/* Subtle floating ambient background light particles */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-salmon-100/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[350px] h-[350px] bg-brown-100/30 rounded-full blur-[90px] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Bismillah Header */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-xl sm:text-2xl text-brown-dark tracking-wide font-medium mb-6"
        >
          بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
        </motion.p>

        {/* Invitation Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs uppercase tracking-[0.3em] text-brown-400 font-sans font-semibold mb-4"
        >
          {weddingData.eventTitle}
        </motion.p>

        {/* Large Luxury Typography Couple Names */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="my-4"
        >
          <h1 className="font-serif text-4xl sm:text-6xl text-brown-dark font-normal tracking-tight">
            {weddingData.groomName}
          </h1>

          <div className="flex items-center justify-center gap-4 my-3 text-salmon">
            <span className="h-[1px] w-16 bg-salmon-300/50" />
            <span className="font-script text-4xl sm:text-5xl text-salmon-dark">&</span>
            <span className="h-[1px] w-16 bg-salmon-300/50" />
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl text-brown-dark font-normal tracking-tight">
            {weddingData.brideName}
          </h1>
        </motion.div>

        {/* Date & Venue Badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 text-sm font-sans text-brown-dark mt-6"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-salmon-200/40">
            <Calendar className="w-4 h-4 text-salmon" />
            <span className="font-medium">{weddingData.displayDate}</span>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-brown-200/40">
            <MapPin className="w-4 h-4 text-brown-400" />
            <span className="font-medium">{weddingData.venue.name}, {weddingData.venue.city}</span>
          </div>
        </motion.div>

        {/* Live Countdown Component */}
        <Countdown targetDateIso={weddingData.isoDate} />
      </div>
    </section>
  );
};
