"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { weddingData } from "@/data/weddingData";

interface OpeningEnvelopeProps {
  onOpen: () => void;
}

export const OpeningEnvelope: React.FC<OpeningEnvelopeProps> = ({ onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);
    onOpen();

    // After flap unrolls and envelope slides down, unmount the overlay
    setTimeout(() => {
      setIsDismissed(true);
    }, 1400);
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={isOpen ? { opacity: 0, y: 100 } : { opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#F7F1E5] px-4 py-8 overflow-hidden select-none"
      >
        {/* Ambient soft glow background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#EFE4CE]/60 rounded-full blur-3xl pointer-events-none" />

        {/* 3D Envelope Wrapper */}
        <div
          onClick={handleOpen}
          className="relative w-full max-w-[400px] sm:max-w-[440px] aspect-[1/1.55] bg-[#FDFBF7] rounded-xl shadow-[0_20px_50px_rgba(74,59,50,0.18)] border border-[#E8DCC4] flex flex-col justify-between p-6 sm:p-8 cursor-pointer overflow-hidden transform transition-transform duration-300 hover:scale-[1.01]"
          style={{ perspective: "1200px" }}
        >
          {/* Embossed Floral Vine Borders (Left & Right) */}
          <div className="absolute inset-y-0 left-3 w-8 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-salmon-200/20 via-transparent to-transparent opacity-60 pointer-events-none" />
          <div className="absolute inset-y-0 right-3 w-8 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-salmon-200/20 via-transparent to-transparent opacity-60 pointer-events-none" />

          {/* Top Envelope Flap with 3D Flip */}
          <motion.div
            initial={false}
            animate={isOpen ? { rotateX: -160, opacity: 0.3 } : { rotateX: 0 }}
            transition={{ duration: 1.1, ease: [0.25, 1, 0.5, 1] }}
            style={{ transformOrigin: "top center" }}
            className="absolute top-0 left-0 right-0 h-[48%] bg-[#F8F2E6] border-b border-[#E3D4B8] shadow-sm z-20 flex flex-col items-center justify-end pb-4"
          >
            {/* Top flap triangular outline design */}
            <div className="absolute inset-0 border-b-2 border-dashed border-[#D8C7A5]/40 clip-triangle" />
          </motion.div>

          {/* Bottom Flap Overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-[52%] bg-[#FBF7F0] border-t border-[#E8DCC4] z-10 clip-bottom-flap" />

          {/* Header Monogram & Bismillah */}
          <div className="relative z-30 text-center pt-2">
            <p className="font-serif text-lg sm:text-xl text-brown-dark tracking-wide font-medium">
              بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
            </p>
            <p className="text-[9px] uppercase tracking-[0.28em] text-brown-400 font-cinzel mt-1">
              Together with their families
            </p>
          </div>

          {/* Center Red Wax Seal Button */}
          <div className="relative z-30 flex flex-col items-center my-auto">
            <motion.div
              animate={
                isOpen
                  ? { scale: [1, 1.25, 0], rotate: 45, opacity: 0 }
                  : { scale: [1, 1.04, 1] }
              }
              transition={
                isOpen
                  ? { duration: 0.8 }
                  : { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
              }
              className="relative flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-full shadow-[0_10px_25px_rgba(90,15,27,0.45)] cursor-pointer"
              style={{
                background:
                  "radial-gradient(circle at 35% 35%, #9E1C2B 0%, #6B0F1B 65%, #420810 100%)",
                border: "3px solid #7D1522",
              }}
            >
              {/* Wax Seal Rim Detailing */}
              <div className="absolute inset-1.5 rounded-full border border-[#B83244]/40 pointer-events-none" />

              {/* Gold Stamped Initials Monogram A & M */}
              <div className="text-center">
                <span
                  className="font-script text-3xl sm:text-4xl text-[#E8C278] drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] font-bold tracking-tight"
                  style={{
                    background: "linear-gradient(135deg, #F9E4B7 0%, #D4AF37 50%, #AA820A 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  A & M
                </span>
              </div>
            </motion.div>

            {/* Pulsing TAP TO OPEN Label & Upward Chevron (matching user image) */}
            <motion.div
              animate={{ y: [0, -5, 0], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-1 mt-6 text-brown-400"
            >
              <ChevronUp className="w-4 h-4 text-brown-400" />
              <span className="font-cinzel text-[10px] uppercase tracking-[0.3em] font-semibold text-[#8C6D58]">
                TAP TO OPEN
              </span>
            </motion.div>
          </div>

          {/* Bottom Card Footer Info */}
          <div className="relative z-30 text-center pb-2">
            <h2 className="font-cinzel text-sm sm:text-base text-brown-dark font-medium uppercase tracking-wider">
              {weddingData.groomName} & {weddingData.brideName}
            </h2>
            <p className="text-[10px] font-sans text-brown-400 tracking-widest uppercase mt-0.5">
              {weddingData.displayDate} • {weddingData.venue.city}
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
