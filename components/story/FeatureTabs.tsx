"use client";

import { AnimatePresence, motion } from "framer-motion";
import { featureTabs, FeatureKey, imageSet } from "@/lib/storyData";

type Props = {
  active: FeatureKey;
};

const featureTargets: Record<
  FeatureKey,
  {
    x: number;
    y: number;
  }
> = {
  // These percentages are relative to the product image stage.
  // They intentionally point to the same product image while the copy updates.
  lens: { x: 35, y: 47 },
  frame: { x: 40, y: 37 },
  design: { x: 72, y: 30 },
};

export default function FeatureTabs({ active }: Props) {
  const current = featureTabs[active];
  const target = featureTargets[active];

  return (
    <section className="absolute inset-0 overflow-hidden bg-white text-zinc-800">
      {/* Shared nav — this lands where the moving nav from the Innovation scene resolves. */}
      <div className="absolute left-[8vw] top-[18vh] z-30 flex w-[43vw] items-center justify-between text-[clamp(12px,1.5vw,25px)] font-light tracking-wide">
        {(Object.keys(featureTabs) as FeatureKey[]).map((key, index) => (
          <div
            key={key}
            className="flex items-center gap-[clamp(14px,2vw,28px)]"
          >
            <span
              className={
                active === key ? "font-medium text-[#00B8A9]" : "text-zinc-600"
              }
            >
              {featureTabs[key].label}
            </span>

            {index < 2 && <span className="text-zinc-300">•</span>}
          </div>
        ))}
      </div>

      {/* Left-side copy changes while the product image stays static. */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -24 }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-[8vw] top-[46vh] z-30 max-w-[520px]"
        >
          <h2 className="text-[clamp(28px,2.7vw,48px)] font-semibold leading-tight">
            {current.title}
          </h2>

          <p className="mt-6 max-w-[500px] text-[clamp(16px,1.35vw,22px)] leading-relaxed text-zinc-600">
            {current.description}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* One static product image for Lens / Frame / Design, per the current asset strategy. */}
      <div className="absolute right-[9vw] top-[20vh] h-[52vh] w-[46vw]">
        <img
          src={imageSet.macroThree}
          alt="Actics glasses feature detail"
          className="absolute inset-0 h-full w-full object-contain"
        />

        {/* The pointer animates to lens / frame / design without swapping the image. */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`feature-pointer-${active}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none absolute inset-0"
          >
            <div
              className="absolute h-px bg-zinc-400"
              style={{
                left: 0,
                top: `${target.y}%`,
                width: `${target.x}%`,
              }}
            />

            <div
              className="absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#00B8A9] bg-white"
              style={{
                left: `${target.x}%`,
                top: `${target.y}%`,
              }}
            >
              <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00B8A9]" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
