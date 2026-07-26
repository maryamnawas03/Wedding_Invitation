"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const [isEventStarted, setIsEventStarted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Target date: Saturday, 8th August 2026 at 19:30 (7:30 PM local time)
    const targetDate = new Date("2026-08-08T19:30:00").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setIsEventStarted(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  if (!isMounted) {
    return (
      <div className="py-20 bg-nude text-center">
        <div className="w-10 h-10 border-4 border-rosegold/30 border-t-rosegold rounded-full animate-spin mx-auto" />
      </div>
    );
  }

  const timeBlocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="relative py-20 bg-nude overflow-hidden border-b border-gold/10">
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
      
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl text-rosegold-gradient tracking-[0.1em] uppercase mb-4">
            Countdown to the Big Day
          </h2>
          <p className="font-sans text-sm text-secondary-dark/70 tracking-widest uppercase mb-12 max-w-md mx-auto">
            Counting down every heartbeat until we become one
          </p>

          {isEventStarted ? (
            <div className="font-serif text-2xl text-gold-dark tracking-[0.1em] uppercase p-6 border border-gold/20 rounded-lg inline-block glass-card animate-pulse-slow">
              The Celebration Has Begun!
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {timeBlocks.map((block, idx) => (
                <motion.div
                  key={block.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="flex flex-col items-center justify-center p-6 rounded-full aspect-square border border-gold/25 glass-card shadow-luxury hover:border-gold hover:shadow-luxury-hover transition-all duration-500 bg-white/40"
                >
                  <span className="font-serif text-3xl md:text-4xl text-rosegold-gradient font-medium">
                    {String(block.value).padStart(2, "0")}
                  </span>
                  <span className="font-sans text-[10px] md:text-xs uppercase tracking-[0.2em] text-secondary-dark/60 mt-1">
                    {block.label}
                  </span>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
