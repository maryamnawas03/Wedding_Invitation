"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SplashScreen from "@/components/SplashScreen";
import FlowerPetals from "@/components/FlowerPetals";
import AudioPlayer from "@/components/AudioPlayer";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Welcome from "@/components/Welcome";
import Venue from "@/components/Venue";
import DressCode from "@/components/DressCode";
import RSVP from "@/components/RSVP";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const handleOpenInvitation = () => {
    setShowSplash(false);
    setIsAudioPlaying(true); // Automatically starts background music once invitation is opened
  };

  return (
    <main className="relative min-h-screen selection:bg-rosegold-light selection:text-rosegold-dark">
      <AnimatePresence mode="wait">
        {showSplash ? (
          <SplashScreen key="splash-screen" onOpen={handleOpenInvitation} />
        ) : (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="relative"
          >
            {/* Ambient Falling Flower Petals Overlay across all sections */}
            <FlowerPetals />

            {/* Background floating music controller */}
            <AudioPlayer isPlaying={isAudioPlaying} setIsPlaying={setIsAudioPlaying} />

            {/* Scrollable sections */}
            <Hero />
            <Countdown />
            <Welcome />
            <Venue />
            <DressCode />
            <RSVP />
            <Contact />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
