"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import Footer from "./Footer";
import { useLayoutEffect, useRef, useState } from "react";
import LogoMark from "./LogoMark";
import FeatureTabs from "./FeatureTabs";
import { FeatureKey, imageSet } from "@/lib/storyData";

type SportKey = "cycling" | "football" | "gym" | "golf" | "running" | "tennis";

const sportsCards = [
  {
    key: "cycling" as SportKey,
    label: "CYCLING",
    image:
      "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?q=80&w=1200&auto=format&fit=crop",
    description:
      "CYCLING eyewear is built for changing light, airflow, and long-distance visual comfort during every ride.",
  },
  {
    key: "football" as SportKey,
    label: "FOOTBALL",
    image:
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1200&auto=format&fit=crop",
    description:
      "FOOTBALL eyewear supports fast reads, sharp tracking, and steady focus through quick directional changes.",
  },
  {
    key: "gym" as SportKey,
    label: "GYM",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1200&auto=format&fit=crop",
    description:
      "GYM eyewear balances grip, lightweight comfort, and clear visibility across intense workouts.",
  },
  {
    key: "golf" as SportKey,
    label: "GOLF",
    image:
      "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=1200&auto=format&fit=crop",
    description:
      "GOLF eyewear enhances contrast, depth, and visual confidence from tee to green.",
  },
  {
    key: "running" as SportKey,
    label: "RUNNING",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1200&auto=format&fit=crop",
    description:
      "RUNNING eyewear is shaped for motion, sweat resistance, and comfort from first stride to final sprint.",
  },
  {
    key: "tennis" as SportKey,
    label: "TENNIS",
    image:
      "https://images.unsplash.com/photo-1622163642998-1ea32b0bbc67?q=80&w=1200&auto=format&fit=crop",
    description:
      "TENNIS eyewear keeps pace with quick rallies, fast tracking, and changing court angles.",
  },
];

type BrandKey = "tom-archer" | "marc-fabien";

const brandPanels = {
  "tom-archer": {
    title: "TOM ARCHER",
    image:
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=1800&auto=format&fit=crop",
    description:
      "Explore contemporary frames designed for confident silhouettes, everyday clarity, and expressive eyewear presence.",
  },
  "marc-fabien": {
    title: "Marc Fabien",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1800&auto=format&fit=crop",
    description:
      "Discover expressive eyewear with premium silhouettes, polished finishes, and a more editorial design language.",
  },
};

export default function ActicsStory() {
  const ref = useRef<HTMLDivElement>(null);
  const introLockupRef = useRef<HTMLDivElement>(null);
  const introLogoSlotRef = useRef<HTMLDivElement>(null);

  const [activeFeature, setActiveFeature] = useState<FeatureKey>("lens");
  const [activeSport, setActiveSport] = useState<SportKey>("cycling");
  const [activeBrand, setActiveBrand] = useState<BrandKey>("tom-archer");
  const [introLockupOffset, setIntroLockupOffset] = useState(0);

  const [activeTailScene, setActiveTailScene] = useState<
    "feature" | "sports" | "brands" | "footer"
  >("feature");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (value < 0.978) {
      setActiveFeature("lens");
    } else if (value < 0.982) {
      setActiveFeature("frame");
    } else {
      setActiveFeature("design");
    }

    if (value < 0.988) {
      setActiveTailScene("feature");
    } else if (value < 0.993) {
      setActiveTailScene("sports");
    } else if (value < 0.999) {
      setActiveTailScene("brands");
    } else {
      setActiveTailScene("footer");
    }
  });
  const activeSportCard =
    sportsCards.find((card) => card.key === activeSport) ?? sportsCards[0];

  const activeBrandPanel = brandPanels[activeBrand];

  useLayoutEffect(() => {
    const updateIntroLockupOffset = () => {
      const lockup = introLockupRef.current;
      const logoSlot = introLogoSlotRef.current;

      if (!lockup || !logoSlot) return;

      const offset = Math.max(
        0,
        (lockup.getBoundingClientRect().width -
          logoSlot.getBoundingClientRect().width) /
          2,
      );

      setIntroLockupOffset(offset);
    };

    updateIntroLockupOffset();

    const resizeObserver = new ResizeObserver(updateIntroLockupOffset);

    if (introLockupRef.current) resizeObserver.observe(introLockupRef.current);
    if (introLogoSlotRef.current)
      resizeObserver.observe(introLogoSlotRef.current);

    window.addEventListener("resize", updateIntroLockupOffset);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateIntroLockupOffset);
    };
  }, []);

  const introClusterOpacity = useTransform(
    scrollYProgress,
    [0, 0.275, 0.34],
    [1, 1, 0],
  );

  const introClusterVisibility = useTransform(scrollYProgress, (value) =>
    value >= 0.34 ? "hidden" : "visible",
  );

  const introClusterY = useTransform(scrollYProgress, [0.18, 0.31], [0, -210]);

  const introClusterScale = useTransform(
    scrollYProgress,
    [0.18, 0.31],
    [1, 0.62],
  );

  const introLockupX = useTransform(
    scrollYProgress,
    [0.05, 0.17],
    [introLockupOffset, 0],
  );

  const persistentLogoRotate = useTransform(
    scrollYProgress,
    [0.05, 0.17],
    [0, 60],
  );

  const acticsTextOpacity = useTransform(scrollYProgress, [0.11, 0.17], [0, 1]);

  const acticsTextVisibility = useTransform(scrollYProgress, (value) =>
    value < 0.105 || value >= 0.34 ? "hidden" : "visible",
  );

  const acticsTextX = useTransform(scrollYProgress, [0.11, 0.17], [150, 0]);

  const introducingOpacity = useTransform(
    scrollYProgress,
    [0.12, 0.18],
    [0, 1],
  );

  const introducingVisibility = useTransform(scrollYProgress, (value) =>
    value < 0.115 || value >= 0.34 ? "hidden" : "visible",
  );

  const introducingX = useTransform(scrollYProgress, [0.12, 0.18], [110, 0]);

  const introducingY = useTransform(scrollYProgress, [0.12, 0.18], [-78, 0]);

  const introBlackBgOpacity = useTransform(
    scrollYProgress,
    [0, 0.18, 0.31],
    [1, 1, 0],
  );

  const darkRevealOpacity = useTransform(
    scrollYProgress,
    [0.18, 0.28, 0.43],
    [0, 1, 1],
  );

  const darkRevealScale = useTransform(
    scrollYProgress,
    [0.18, 0.38],
    [1.15, 1],
  );

  const durabilityOpacity = useTransform(
    scrollYProgress,
    [0.345, 0.395, 0.43],
    [0, 1, 0],
  );

  const differenceOpacity = useTransform(
    scrollYProgress,
    [0.41, 0.48, 0.55],
    [0, 1, 0],
  );

  const differenceBgY = useTransform(scrollYProgress, [0.41, 0.55], [-120, 40]);

  const edgeSequenceOpacity = useTransform(
    scrollYProgress,
    [0.53, 0.59, 0.89, 0.92],
    [0, 1, 1, 0],
  );

  const edgeTopLabelColor = useTransform(
    scrollYProgress,
    [0.655, 0.725],
    ["rgb(255,255,255)", "rgb(63,63,70)"],
  );

  const edgeBodyColor = useTransform(
    scrollYProgress,
    [0.655, 0.725],
    ["rgb(255,255,255)", "rgb(63,63,70)"],
  );

  const edgeSequenceBackground = useTransform(
    scrollYProgress,
    [0.655, 0.725],
    ["rgb(0,0,0)", "rgb(255,255,255)"],
  );

  const activeLifestyleOpacity = useTransform(
    scrollYProgress,
    [0.56, 0.62, 0.675, 0.72],
    [0, 1, 1, 0],
  );

  const activeLifestyleY = useTransform(
    scrollYProgress,
    [0.64, 0.72],
    [0, -52],
  );

  const firstEdgeCopyOpacity = useTransform(
    scrollYProgress,
    [0.6, 0.64, 0.765, 0.79],
    [0, 1, 1, 0],
  );

  const firstEdgeCopyY = useTransform(
    scrollYProgress,
    [0.63, 0.725],
    ["0vh", "-48vh"],
  );

  const whiteBgOpacity = useTransform(scrollYProgress, [0.655, 0.725], [0, 1]);

  const edgeProductOpacity = useTransform(
    scrollYProgress,
    [0.675, 0.74],
    [0, 1],
  );

  const edgeProductY = useTransform(
    scrollYProgress,
    [0.675, 0.74],
    ["18vh", "0vh"],
  );

  const edgeProductScale = useTransform(
    scrollYProgress,
    [0.675, 0.74],
    [1.03, 1],
  );

  const secondEdgeCopyOpacity = useTransform(
    scrollYProgress,
    [0.765, 0.79, 0.835, 0.855],
    [0, 1, 1, 0],
  );

  const thirdEdgeCopyOpacity = useTransform(
    scrollYProgress,
    [0.845, 0.875, 0.91],
    [0, 1, 1],
  );

  const innovationOpacity = useTransform(
    scrollYProgress,
    [0.895, 0.925, 0.975],
    [0, 1, 0],
  );

  const innovationWordY = useTransform(
    scrollYProgress,
    [0.925, 0.958],
    ["0vh", "-44vh"],
  );

  const innovationWordOpacity = useTransform(
    scrollYProgress,
    [0.935, 0.958],
    [1, 0],
  );

  const ampersandY = useTransform(
    scrollYProgress,
    [0.925, 0.958],
    ["0vh", "-40vh"],
  );

  const ampersandOpacity = useTransform(
    scrollYProgress,
    [0.938, 0.958],
    [1, 0],
  );

  const technologyY = useTransform(
    scrollYProgress,
    [0.925, 0.968],
    ["0vh", "-30vh"],
  );

  const technologyOpacity = useTransform(
    scrollYProgress,
    [0.958, 0.975],
    [1, 0],
  );

  const innovationNavY = useTransform(
    scrollYProgress,
    [0.925, 0.968],
    ["0vh", "-72vh"],
  );

  const innovationNavWidth = useTransform(
    scrollYProgress,
    [0.925, 0.968],
    ["34vw", "43vw"],
  );

  const innovationNavOpacity = useTransform(
    scrollYProgress,
    [0.962, 0.975],
    [1, 0],
  );

  const featureOpacity = useTransform(
    scrollYProgress,
    [0.958, 0.975, 0.984, 0.988],
    [0, 1, 1, 0],
  );

  const sportsOpacity = useTransform(
    scrollYProgress,
    [0.984, 0.988, 0.991, 0.993],
    [0, 1, 1, 0],
  );

  const brandsOpacity = useTransform(
    scrollYProgress,
    [0.9915, 0.994, 0.999],
    [0, 1, 1],
  );

  const sportsY = useTransform(
    scrollYProgress,
    [0.984, 0.988, 0.993, 0.996],
    ["4vh", "0vh", "0vh", "-4vh"],
  );

  const brandsY = useTransform(
    scrollYProgress,
    [0.9915, 0.994],
    ["5vh", "0vh"],
  );

  const footerOpacity = useTransform(scrollYProgress, [0.9985, 1], [0, 1]);

  return (
    <main ref={ref} className="relative h-[1100vh] bg-black">
      <div className="sticky top-0 h-screen w-screen overflow-hidden bg-black">
        <motion.section
          style={{
            opacity: darkRevealOpacity,
            scale: darkRevealScale,
          }}
          className="absolute inset-0 z-10"
        >
          <img
            src={imageSet.darkHero}
            alt="Actics dark cinematic reveal"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-black/65" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent,rgba(0,0,0,0.85))]" />
        </motion.section>

        <motion.div
          style={{ opacity: introBlackBgOpacity }}
          className="pointer-events-none absolute inset-0 z-20 bg-black"
        />

        {/* COMPLETE INTRO CLUSTER */}
        <motion.div
          style={{
            opacity: introClusterOpacity,
            visibility: introClusterVisibility,
            y: introClusterY,
            scale: introClusterScale,
          }}
          className="pointer-events-none absolute inset-0 z-50"
        >
          <motion.p
            style={{
              opacity: introducingOpacity,
              visibility: introducingVisibility,
              x: introducingX,
              y: introducingY,
            }}
            className="absolute left-1/2 top-[32vh] -translate-x-1/2 text-[clamp(18px,2vw,30px)] font-light text-white"
          >
            Introducing
          </motion.p>

          <motion.div
            ref={introLockupRef}
            style={{ x: introLockupX }}
            className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-[clamp(18px,2vw,32px)] whitespace-nowrap"
          >
            <motion.div
              ref={introLogoSlotRef}
              style={{ rotate: persistentLogoRotate }}
              className="shrink-0"
            >
              <LogoMark className="text-[clamp(80px,10vw,150px)] text-[#00B8A9]" />
            </motion.div>

            <motion.h1
              style={{
                opacity: acticsTextOpacity,
                visibility: acticsTextVisibility,
                x: acticsTextX,
              }}
              className="text-[clamp(64px,11vw,160px)] font-light tracking-[0.16em] bg-gradient-to-r from-white via-cyan-100 to-[#00B8A9] bg-clip-text text-transparent"
            >
              ACTICS
            </motion.h1>
          </motion.div>
        </motion.div>

        <motion.p
          style={{ opacity: durabilityOpacity }}
          className="absolute left-1/2 top-[74vh] z-30 max-w-5xl -translate-x-1/2 -translate-y-1/2 text-center text-[clamp(18px,2.2vw,34px)] uppercase leading-relaxed tracking-wide text-white"
        >
          With Actics, experience unmatched{" "}
          <span className="font-bold">durability</span> and{" "}
          <span className="font-bold">performance</span>, designed to meet the
          demands of high-intensity sports.
        </motion.p>

        <motion.section
          style={{ opacity: differenceOpacity }}
          className="absolute inset-0 z-30 overflow-hidden bg-black"
        >
          <motion.div
            style={{ y: differenceBgY }}
            className="absolute inset-0 grid grid-cols-4 grid-rows-4 opacity-25"
          >
            {Array.from({ length: 16 }).map((_, index) => (
              <img
                key={index}
                src={imageSet.macroOne}
                alt=""
                className="h-full w-full object-cover"
              />
            ))}
          </motion.div>

          <div className="absolute inset-0 bg-black/55" />

          <h2 className="absolute left-1/2 top-1/2 z-20 w-full -translate-x-1/2 -translate-y-1/2 text-center text-[clamp(42px,6vw,110px)] font-light tracking-wide">
            THE ACTICS DIFFERENCE
          </h2>
        </motion.section>

        <motion.div
          style={{ opacity: whiteBgOpacity }}
          className="absolute inset-0 z-20 bg-white"
        />

        <motion.section
          style={{
            opacity: edgeSequenceOpacity,
            backgroundColor: edgeSequenceBackground,
          }}
          className="absolute inset-0 z-40 overflow-hidden"
        >
          <motion.p
            style={{ color: edgeTopLabelColor }}
            className="absolute left-1/2 top-[12vh] z-20 -translate-x-1/2 text-[clamp(16px,1.4vw,24px)] uppercase tracking-[0.3em]"
          >
            THE ACTICS EDGE
          </motion.p>

          <motion.h2
            style={{
              opacity: activeLifestyleOpacity,
              y: activeLifestyleY,
            }}
            className="absolute left-1/2 top-[32vh] z-20 w-full -translate-x-1/2 text-center text-[clamp(56px,9vw,150px)] font-black uppercase leading-[0.95] tracking-wide text-zinc-500"
          >
            DESIGNED FOR
            <br />
            ACTIVE LIFESTYLES
          </motion.h2>

          <motion.p
            style={{
              opacity: firstEdgeCopyOpacity,
              y: firstEdgeCopyY,
              color: edgeBodyColor,
            }}
            className="absolute left-1/2 top-[74vh] z-30 max-w-4xl -translate-x-1/2 text-center text-[clamp(11px,1.25vw,21px)] font-medium leading-relaxed"
          >
            Actics combines <span className="text-[#00B8A9]">innovation</span>{" "}
            and style, offering advanced protection and{" "}
            <span className="text-[#00B8A9]">enhanced vision</span> for athletes
            pushing their limits.
          </motion.p>

          <motion.p
            style={{ opacity: secondEdgeCopyOpacity }}
            className="absolute left-1/2 top-[26vh] z-30 max-w-4xl -translate-x-1/2 text-center text-[clamp(12px,1.4vw,24px)] font-medium leading-relaxed text-zinc-800"
          >
            Built for speed, comfort, and endurance, Actics enhances your{" "}
            <span className="text-[#00B8A9]">performance</span> across all
            sports, with clarity that lasts.
          </motion.p>

          <motion.p
            style={{ opacity: thirdEdgeCopyOpacity }}
            className="absolute left-1/2 top-[26vh] z-30 max-w-4xl -translate-x-1/2 text-center text-[clamp(12px,1.4vw,24px)] font-medium leading-relaxed text-zinc-800"
          >
            Actics redefines sports eyewear with precision, offering
            high-performance lenses and frames built for{" "}
            <span className="text-[#00B8A9]">action-packed</span> adventure.
          </motion.p>

          <motion.img
            style={{
              opacity: edgeProductOpacity,
              y: edgeProductY,
              scale: edgeProductScale,
            }}
            src={imageSet.macroTwo}
            alt="Actics sports eyewear"
            className="absolute left-1/2 top-[47vh] z-20 h-[42vh] w-[70vw] -translate-x-1/2 object-contain"
          />
        </motion.section>

        {/* INNOVATION & TECHNOLOGY */}
        <motion.section
          style={{ opacity: innovationOpacity }}
          className="absolute inset-0 z-50 bg-white text-zinc-700"
        >
          <img
            src={imageSet.macroThree}
            alt="Innovation glasses"
            className="absolute right-[6vw] top-[24vh] z-10 h-[48vh] w-[44vw] object-contain"
          />

          <motion.h2
            style={{
              y: innovationWordY,
              opacity: innovationWordOpacity,
            }}
            className="absolute left-[8vw] top-[18vh] z-30 text-[clamp(54px,8vw,130px)] font-light italic"
          >
            INNOVATION
          </motion.h2>

          <motion.p
            style={{
              y: ampersandY,
              opacity: ampersandOpacity,
            }}
            className="absolute left-[35vw] top-[45vh] z-30 text-center text-[clamp(36px,5vw,80px)]"
          >
            &
          </motion.p>

          <motion.h2
            style={{
              y: technologyY,
              opacity: technologyOpacity,
            }}
            className="absolute left-[8vw] top-[63vh] z-30 text-[clamp(58px,8vw,140px)] font-light tracking-[0.14em] text-transparent [-webkit-text-stroke:1px_#777]"
          >
            TECHNOLOGY
          </motion.h2>

          <motion.div
            style={{
              y: innovationNavY,
              width: innovationNavWidth,
              opacity: innovationNavOpacity,
            }}
            className="absolute left-[8vw] top-[92vh] z-30 flex items-center justify-between text-[clamp(12px,1.5vw,25px)] font-bold tracking-wide text-zinc-600"
          >
            <span>LENS</span>
            <span className="text-zinc-300">•</span>
            <span>FRAME</span>
            <span className="text-zinc-300">•</span>
            <span>DESIGN</span>
          </motion.div>
        </motion.section>

        {/* FEATURE TABS */}
        <motion.section
          style={{ opacity: featureOpacity }}
          className="absolute inset-0 z-[60]"
        >
          <FeatureTabs active={activeFeature} />
        </motion.section>

        {/* SPORTS SECTION */}
        <motion.section
          style={{
            opacity: sportsOpacity,
            y: sportsY,
          }}
          className={`absolute inset-0 z-[65] bg-white px-[4vw] pt-[5vh] pb-[2vh] text-zinc-800 ${
            activeTailScene === "sports"
              ? "pointer-events-auto"
              : "pointer-events-none"
          }`}
        >
          <div className="mx-auto flex h-full w-full max-w-[1440px] flex-col items-center justify-start">
            <h2 className="mt-[1vh] text-center text-[clamp(30px,3vw,48px)] font-semibold">
              Eyewear For Sports
            </h2>

            <div
              className="mt-[5vh] grid w-full grid-cols-6 overflow-hidden border border-zinc-200"
              // onMouseLeave={() => setActiveSport("cycling")}
            >
              {sportsCards.map((card) => {
                const isActive = card.key === activeSport;

                return (
                  <button
                    key={card.key}
                    type="button"
                    onMouseEnter={() => setActiveSport(card.key)}
                    onFocus={() => setActiveSport(card.key)}
                    className="group relative h-[clamp(170px,24vh,260px)] overflow-hidden border-r border-white/60 last:border-r-0"
                  >
                    <img
                      src={card.image}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                    />

                    <div className="absolute inset-0 bg-black/45" />

                    <motion.span
                      initial={false}
                      animate={{
                        top: isActive ? "50%" : "88%",
                        y: isActive ? "-50%" : "-100%",
                      }}
                      transition={{
                        duration: 0.55,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="absolute left-1/2 z-10 -translate-x-1/2 whitespace-nowrap text-[clamp(14px,1.15vw,20px)] font-semibold tracking-wide text-white"
                    >
                      {card.label}
                    </motion.span>
                  </button>
                );
              })}
            </div>

            <div className="relative mt-[3vh] min-h-[84px] w-full max-w-[1180px] text-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeSportCard.key}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="mx-auto max-w-[1120px] text-[clamp(12px,0.95vw,16px)] leading-relaxed text-zinc-600"
                >
                  {activeSportCard.description}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </motion.section>

        {/* OTHER BRANDS SECTION */}
        <motion.section
          style={{
            opacity: brandsOpacity,
            y: brandsY,
          }}
          className={`absolute inset-0 z-[68] bg-white px-[4vw] py-[6vh] text-zinc-800 ${
            activeTailScene === "brands"
              ? "pointer-events-auto"
              : "pointer-events-none"
          }`}
        >
          <div className="mx-auto flex h-full w-full max-w-[1440px] flex-col items-center">
            <h2 className="mt-[1vh] text-center text-[clamp(30px,3vw,48px)] font-semibold">
              Our Other Brands
            </h2>

            <div className="relative mt-[3.8vh] h-[74vh] w-full overflow-hidden bg-black">
              <button
                type="button"
                onClick={() => setActiveBrand("tom-archer")}
                className={`absolute left-0 top-0 z-30 h-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  activeBrand === "tom-archer" ? "w-[60%]" : "w-[40%]"
                }`}
                aria-label="Show Tom Archer"
              />

              <button
                type="button"
                onClick={() => setActiveBrand("marc-fabien")}
                className={`absolute right-0 top-0 z-30 h-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  activeBrand === "marc-fabien" ? "w-[60%]" : "w-[40%]"
                }`}
                aria-label="Show Marc Fabien"
              />

              <AnimatePresence mode="wait">
                <motion.img
                  key={activeBrand}
                  src={activeBrandPanel.image}
                  alt={activeBrandPanel.title}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{
                    duration: 0.75,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-black/55" />

              <motion.div
                animate={{
                  left: activeBrand === "tom-archer" ? "0%" : "40%",
                  width: "60%",
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute top-0 z-10 h-full bg-black/20"
              />

              <motion.div
                animate={{
                  left: activeBrand === "tom-archer" ? "60%" : "40%",
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute top-0 z-20 h-full w-px bg-white/25"
              />

              <motion.div
                animate={{
                  left: activeBrand === "tom-archer" ? "5vw" : "6vw",
                  top: activeBrand === "tom-archer" ? "30vh" : "34vh",
                  opacity: activeBrand === "tom-archer" ? 1 : 0.78,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="pointer-events-none absolute z-20 text-white"
              >
                <p className="text-[clamp(11px,0.85vw,14px)] font-semibold tracking-[0.08em]">
                  SPECSCART.
                </p>

                <h3 className="mt-8 text-[clamp(34px,3vw,54px)] font-light tracking-wide">
                  TOM ARCHER
                </h3>

                {activeBrand === "tom-archer" && (
                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-8 max-w-[360px]"
                  >
                    <p className="text-[clamp(12px,0.95vw,16px)] leading-relaxed text-white/90">
                      {brandPanels["tom-archer"].description}
                    </p>

                    <span className="mt-8 inline-block border-b border-white/80 pb-1 text-[clamp(12px,0.9vw,15px)] font-medium text-white">
                      Know the Brand
                    </span>
                  </motion.div>
                )}
              </motion.div>

              <motion.div
                animate={{
                  left: activeBrand === "marc-fabien" ? "47%" : "74%",
                  top: activeBrand === "marc-fabien" ? "26vh" : "34vh",
                  opacity: activeBrand === "marc-fabien" ? 1 : 0.78,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="pointer-events-none absolute z-20 max-w-[420px] text-white"
              >
                <p className="text-[clamp(11px,0.85vw,14px)] font-semibold tracking-[0.08em]">
                  SPECSCART.
                </p>

                <h3 className="mt-6 font-serif text-[clamp(42px,4.2vw,72px)] italic">
                  Marc Fabien
                </h3>

                {activeBrand === "marc-fabien" && (
                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 max-w-[360px]"
                  >
                    <p className="text-[clamp(12px,0.95vw,16px)] leading-relaxed text-white/90">
                      {brandPanels["marc-fabien"].description}
                    </p>

                    <span className="mt-8 inline-block border-b border-white/80 pb-1 text-[clamp(12px,0.9vw,15px)] font-medium text-white">
                      Know the Brand
                    </span>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* FOOTER */}
        <motion.div
          style={{ opacity: footerOpacity }}
          className={`absolute inset-0 z-[70] ${
            activeTailScene === "footer"
              ? "pointer-events-auto"
              : "pointer-events-none"
          }`}
        >
          <Footer />
        </motion.div>
      </div>
    </main>
  );
}
