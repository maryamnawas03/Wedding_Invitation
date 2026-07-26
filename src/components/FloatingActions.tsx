"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, MessageCircle, CalendarCheck, Volume2, VolumeX } from "lucide-react";
import { weddingData } from "@/data/weddingData";

export const FloatingActions: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(
      `You're invited to the Wedding Reception of ${weddingData.groomName} & ${weddingData.brideName} on ${weddingData.displayDate} at ${weddingData.venue.name}, ${weddingData.venue.city}.`
    );
    window.open(`https://wa.me/?text=${text}`, "_blank");
  };

  const toggleMusic = () => {
    setIsPlaying((prev) => !prev);
    // Audio playback toggle logic hooks into ambient nasheed track
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
      <AnimatePresence>
        {/* Floating Quick Action Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-2.5 items-center bg-cream/90 backdrop-blur-md p-2 rounded-full border border-salmon-200/50 shadow-luxury"
        >
          {/* Play Nasheed Ambient Toggle */}
          <button
            onClick={toggleMusic}
            title={isPlaying ? "Mute Nasheed" : "Play Nasheed"}
            className={`p-3 rounded-full transition-all duration-300 ${
              isPlaying
                ? "bg-salmon text-white shadow-salmon-glow"
                : "bg-cream-dark text-brown-dark hover:bg-salmon-100"
            }`}
          >
            {isPlaying ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
          </button>

          {/* Quick Google Maps Directions */}
          <a
            href={weddingData.venue.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Get Directions"
            className="p-3 rounded-full bg-cream-dark text-brown-dark hover:bg-salmon hover:text-white transition-all duration-300"
          >
            <MapPin className="w-5 h-5" />
          </a>

          {/* WhatsApp Quick Share */}
          <button
            onClick={handleWhatsAppShare}
            title="Share via WhatsApp"
            className="p-3 rounded-full bg-cream-dark text-brown-dark hover:bg-salmon hover:text-white transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5" />
          </button>

          {/* RSVP Direct Jump */}
          <button
            onClick={() => scrollToSection("rsvp")}
            title="RSVP Now"
            className="p-3.5 rounded-full bg-salmon text-white shadow-salmon-glow hover:bg-salmon-dark transition-all duration-300"
          >
            <CalendarCheck className="w-5 h-5" />
          </button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
