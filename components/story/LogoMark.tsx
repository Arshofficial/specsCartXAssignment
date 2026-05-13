import { motion, MotionValue } from "framer-motion";

type Props = {
  rotate?: MotionValue<number>;
  x?: MotionValue<number>;
  y?: MotionValue<number>;
  scale?: MotionValue<number>;
  opacity?: MotionValue<number>;
  className?: string;
};

export default function LogoMark({
  rotate,
  x,
  y,
  scale,
  opacity,
  className = "",
}: Props) {
  return (
    <motion.div
      style={{ rotate, x, y, scale, opacity }}
      className={`font-black leading-none ${className}`}
    >
      ◁
    </motion.div>
  );
}
