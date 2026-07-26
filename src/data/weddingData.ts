import { WeddingDetails } from "@/types/wedding";

export const weddingData: WeddingDetails = {
  groomName: "Mohammed Akram",
  brideName: "Maryam",
  eventTitle: "Wedding Reception",
  isoDate: "2026-08-08T19:30:00+05:30",
  displayDate: "08 August 2026",
  timeRange: "7:30 PM Onwards",
  venue: {
    name: "Oak Ray Regency",
    address: "Deveni Rajasinghe Mawatha",
    city: "Kandy",
    googleMapsUrl: "https://maps.google.com/?q=Oak+Ray+Regency+Kandy",
    phone: "+94812389141",
  },
  timeline: [
    {
      id: "arrival",
      time: "7:30 PM",
      title: "Guest Arrival",
      description: "Warm welcome and seating of guests.",
      iconName: "UserCheck",
    },
    {
      id: "reception",
      time: "8:00 PM",
      title: "Reception Begins",
      description: "Grand entrance of Akram & Maryam.",
      iconName: "Sparkles",
    },
    {
      id: "dinner",
      time: "8:30 PM",
      title: "Royal Dinner",
      description: "Exquisite banquet feast served for guests.",
      iconName: "Utensils",
    },
    {
      id: "cake",
      time: "9:15 PM",
      title: "Cake Cutting Ceremony",
      description: "Celebrating sweet moments together.",
      iconName: "Cake",
    },
    {
      id: "celebration",
      time: "10:00 PM",
      title: "Celebrations & Farewells",
      description: "Capturing memories & heartfelt dua.",
      iconName: "Heart",
    },
  ],
  dressThemes: [
    {
      category: "Ladies",
      description: "Kindly follow our refined luxury pastel palette.",
      colors: [
        { name: "Salmon Pink", hex: "#E89D93", borderHex: "#E2877A" },
        { name: "Slate Grey", hex: "#8C92AC", borderHex: "#71717A" },
        { name: "Pure White", hex: "#FFFFFF", borderHex: "#E4E4E7" },
      ],
    },
    {
      category: "Gentlemen",
      description: "Elegant suits or tailored formal attire.",
      colors: [
        { name: "Slate Grey", hex: "#4B5563", borderHex: "#374151" },
        { name: "Pure White", hex: "#FFFFFF", borderHex: "#E4E4E7" },
        { name: "Classic Black", hex: "#18181B", borderHex: "#09090B" },
      ],
    },
  ],
  quranVerse: {
    arabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
    english: "And among His Signs is this, that He created for you mates from among yourselves, that ye may dwell in tranquility with them, and He has put love and mercy between your hearts.",
    reference: "Surah Ar-Rum (30:21)",
  },
};
