"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

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

    // After unroll animation completes, unmount overlay screen
    setTimeout(() => {
      setIsDismissed(true);
    }, 1200);
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={
          isOpen
            ? { opacity: 0, scale: 1.08, pointerEvents: "none" }
            : { opacity: 1, scale: 1 }
        }
        exit={{ opacity: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        onClick={handleOpen}
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#FAF6EE] px-4 py-8 overflow-hidden select-none cursor-pointer"
      >
        {/* Soft background light blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#EFE4CE]/50 rounded-full blur-3xl pointer-events-none" />

        {/* Photorealistic Envelope Container */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[1/1.4] rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(74,59,50,0.22)] border border-[#E8DCC4]"
        >
          <Image
            src="/assets/wedding_envelope_cover.png"
            alt="Akram & Maryam Wedding Envelope"
            fill
            priority
            className="object-cover"
          />

          {/* Interactive Click Ripple Layer */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-40 hover:opacity-20 transition-opacity" />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
