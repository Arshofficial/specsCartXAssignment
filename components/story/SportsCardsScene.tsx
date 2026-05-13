"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type SportKey = "cycling" | "football" | "gym" | "golf" | "running" | "tennis";

type SportCard = {
  key: SportKey;
  label: string;
  image: string;
  description: string;
};

const sportsCards: SportCard[] = [
  {
    key: "cycling",
    label: "CYCLING",
    image:
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=1200&auto=format&fit=crop",
    description:
      "Cycling eyewear built for changing light, high-speed airflow, and clear long-distance focus throughout every ride.",
  },
  {
    key: "football",
    label: "FOOTBALL",
    image:
      "https://images.unsplash.com/photo-1508098682722-e99c643e7f0b?q=80&w=1200&auto=format&fit=crop",
    description:
      "Football-ready clarity designed for quick reads, fast directional shifts, and sharp awareness under pressure.",
  },
  {
    key: "gym",
    label: "GYM",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
    description:
      "Gym-focused eyewear balancing grip, lightweight comfort, and distraction-free vision through intense training.",
  },
  {
    key: "golf",
    label: "GOLF",
    image:
      "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=1200&auto=format&fit=crop",
    description:
      "Golf vision tuned for contrast, course depth, and steadier focus from the tee box through the final putt.",
  },
  {
    key: "running",
    label: "RUNNING",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1200&auto=format&fit=crop",
    description:
      "Running eyewear shaped for motion, sweat resistance, and reliable comfort from steady miles to final sprints.",
  },
  {
    key: "tennis",
    label: "TENNIS",
    image:
      "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=1200&auto=format&fit=crop",
    description:
      "Tennis-ready precision that keeps pace with quick rallies, fast tracking, and changing court angles.",
  },
];

export default function SportsCardsScene() {
  const [activeSport, setActiveSport] = useState<SportKey>("cycling");

  const activeCard =
    sportsCards.find((card) => card.key === activeSport) ?? sportsCards[0];

  return (
    <section className="relative z-[80] -mt-[50vh] bg-transparent">
      {/* Transparent overlap zone:
          lets the final Design image stay visible in the upper half
          while this section begins appearing in the lower half. */}
      <div className="pointer-events-none h-[32vh]" />

      <div className="min-h-[68vh] bg-white px-[3vw] pb-[10vh] pt-[5vh] text-zinc-800">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center">
          <h2 className="text-center text-[clamp(28px,2.7vw,44px)] font-semibold leading-tight">
            Eyewear For Sports
          </h2>

          <div
            className="mt-[4.5vh] grid w-full grid-cols-6 overflow-hidden border border-zinc-200"
            onMouseLeave={() => setActiveSport("cycling")}
          >
            {sportsCards.map((card) => {
              const isActive = card.key === activeSport;

              return (
                <button
                  key={card.key}
                  type="button"
                  onMouseEnter={() => setActiveSport(card.key)}
                  onFocus={() => setActiveSport(card.key)}
                  className="group relative h-[clamp(132px,18vh,198px)] overflow-hidden border-r border-white/50 last:border-r-0 focus-visible:outline-none"
                  aria-label={`View ${card.label.toLowerCase()} eyewear details`}
                >
                  <img
                    src={card.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
                  />

                  <div className="absolute inset-0 bg-black/40 transition duration-500 group-hover:bg-black/48" />

                  <motion.span
                    initial={false}
                    animate={{
                      top: isActive ? "50%" : "84%",
                      y: isActive ? "-50%" : "-100%",
                    }}
                    transition={{
                      duration: 0.55,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute left-1/2 z-10 -translate-x-1/2 whitespace-nowrap text-[clamp(13px,1.15vw,20px)] font-semibold tracking-wide text-white"
                  >
                    {card.label}
                  </motion.span>
                </button>
              );
            })}
          </div>

          <div className="relative mt-[3vh] min-h-[74px] w-full max-w-[1180px] text-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={activeCard.key}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mx-auto max-w-[1120px] text-[clamp(12px,0.95vw,16px)] leading-relaxed text-zinc-600"
              >
                {activeCard.description}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
