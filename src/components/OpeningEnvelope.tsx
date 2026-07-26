"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, Sparkles } from "lucide-react";
import { weddingData } from "@/data/weddingData";

interface OpeningEnvelopeProps {
  onOpen: () => void;
}

export const OpeningEnvelope: React.FC<OpeningEnvelopeProps> = ({ onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const handleTapToOpen = () => {
    if (isOpen) return;
    setIsOpen(true);
    onOpen();

    // Delay unmounting screen overlay until fade-out animation completes
    setTimeout(() => {
      setIsDismissed(true);
    }, 1200);
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={isOpen ? { opacity: 0, scale: 1.05, pointerEvents: "none" } : { opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        onClick={handleTapToOpen}
        className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-cream px-6 py-12 cursor-pointer select-none overflow-hidden"
      >
        {/* Soft floating background light blur */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-salmon-100/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-80 h-80 bg-brown-100/30 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header - Bismillah Calligraphy */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center pt-4"
        >
          <p className="font-serif text-2xl sm:text-3xl text-brown-dark tracking-wide font-medium">
            بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </p>
          <p className="text-[10px] uppercase tracking-[0.25em] text-brown-400 mt-2 font-cinzel">
            In the name of Allah, Most Gracious, Most Merciful
          </p>
        </motion.div>

        {/* Central Luxury Card Emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full max-w-sm glass-card-deep rounded-3xl p-8 sm:p-10 border border-salmon-300/40 shadow-luxury text-center my-auto overflow-hidden"
        >
          <div className="absolute top-3 left-3 text-salmon-400/30">✦</div>
          <div className="absolute top-3 right-3 text-salmon-400/30">✦</div>
          <div className="absolute bottom-3 left-3 text-salmon-400/30">✦</div>
          <div className="absolute bottom-3 right-3 text-salmon-400/30">✦</div>

          <p className="text-[11px] font-cinzel uppercase tracking-[0.26em] text-brown-400 font-semibold mb-4">
            Together with their families
          </p>

          <h1 className="font-cinzel text-3xl sm:text-4xl text-brown-dark font-medium tracking-tight uppercase">
            {weddingData.groomName}
          </h1>

          <div className="flex items-center justify-center gap-3 my-3 text-salmon">
            <span className="h-[1px] w-12 bg-salmon-300/50" />
            <span className="font-script text-4xl text-salmon-dark">&</span>
            <span className="h-[1px] w-12 bg-salmon-300/50" />
          </div>

          <h1 className="font-cinzel text-3xl sm:text-4xl text-brown-dark font-medium tracking-tight uppercase">
            {weddingData.brideName}
          </h1>

          <p className="text-xs font-sans text-gray mt-5 tracking-wide">
            {weddingData.eventTitle} • {weddingData.displayDate}
          </p>
          <p className="text-xs font-sans text-brown-400 font-medium mt-1">
            {weddingData.venue.name}, {weddingData.venue.city}
          </p>
        </motion.div>

        {/* Bottom Interactive Pulsing "Tap to Open" Chevron (Matching Tilda Sacred Garden style) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col items-center gap-2 pb-6"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="text-salmon"
          >
            <ChevronUp className="w-5 h-5 opacity-80" />
          </motion.div>

          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="font-cinzel text-xs uppercase tracking-[0.28em] text-brown-400 font-semibold flex items-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5 text-salmon" />
            <span>Tap to open</span>
            <Sparkles className="w-3.5 h-3.5 text-salmon" />
          </motion.span>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
