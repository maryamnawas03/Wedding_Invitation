"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Sparkles } from "lucide-react";
import { weddingData } from "@/data/weddingData";

interface OpeningEnvelopeProps {
  onOpen: () => void;
}

export const OpeningEnvelope: React.FC<OpeningEnvelopeProps> = ({ onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const handleOpenClick = () => {
    setIsOpen(true);
    // After envelope flap opens animation completes, notify parent to reveal full site
    setTimeout(() => {
      setIsDismissed(true);
      onOpen();
    }, 1200);
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-cream px-4 py-8 overflow-hidden select-none"
      >
        {/* Soft floating background ambient lights */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-salmon-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-brown-200/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative w-full max-w-md mx-auto text-center">
          {/* Top Bismillah Calligraphy */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <p className="font-serif text-xl sm:text-2xl text-brown-dark tracking-wide font-medium">
              بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
            </p>
            <p className="text-xs uppercase tracking-widest text-brown-300 mt-1 font-sans font-medium">
              In the name of Allah, the Most Gracious, Most Merciful
            </p>
          </motion.div>

          {/* Interactive Envelope Card Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative glass-card-deep rounded-3xl p-8 sm:p-10 border border-salmon-300/40 shadow-luxury overflow-hidden"
          >
            {/* Elegant Corner Motifs */}
            <div className="absolute top-3 left-3 text-salmon-400/40">✦</div>
            <div className="absolute top-3 right-3 text-salmon-400/40">✦</div>
            <div className="absolute bottom-3 left-3 text-salmon-400/40">✦</div>
            <div className="absolute bottom-3 right-3 text-salmon-400/40">✦</div>

            <p className="text-xs font-sans uppercase tracking-[0.25em] text-brown-400 font-semibold mb-3">
              Together with their families
            </p>

            <h1 className="font-serif text-3xl sm:text-4xl text-brown-dark font-normal my-2 tracking-tight">
              {weddingData.groomName}
            </h1>

            <div className="flex items-center justify-center gap-3 my-2 text-salmon">
              <span className="h-[1px] w-12 bg-salmon-300/60" />
              <span className="font-script text-3xl text-salmon-dark">&</span>
              <span className="h-[1px] w-12 bg-salmon-300/60" />
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl text-brown-dark font-normal my-2 tracking-tight">
              {weddingData.brideName}
            </h1>

            <p className="text-sm font-sans text-gray font-medium mt-4">
              Invite you to celebrate their {weddingData.eventTitle}
            </p>

            {/* Action Envelope Button */}
            <motion.div className="mt-8">
              <button
                onClick={handleOpenClick}
                disabled={isOpen}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-salmon text-white font-sans text-sm font-medium tracking-wide shadow-salmon-glow hover:bg-salmon-dark transition-all duration-300 transform active:scale-95 cursor-pointer"
              >
                <motion.span
                  animate={isOpen ? { rotate: [0, -10, 10, 0] } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <Mail className="w-4 h-4 text-white" />
                </motion.span>
                <span>{isOpen ? "Opening..." : "Open Invitation"}</span>
                <Sparkles className="w-4 h-4 text-salmon-100 opacity-70 group-hover:opacity-100 transition-opacity" />
              </button>
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 0.6 }}
            className="text-xs text-brown-300 mt-6 font-sans tracking-wider"
          >
            {weddingData.displayDate} • {weddingData.venue.city}
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
