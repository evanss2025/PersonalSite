"use client";

import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import Image from "next/image";
import profile from "../../public/profile.png";
import { motion, useMotionValue, useTransform, animate, type Variants } from "motion/react";
import { useRef, useState } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1], delay },
  }),
};

const STATS = [
  { value: "CS and Philosophy", label: "Major" },
  { value: "Game Design", label: "Minor" },
  { value: "'29", label: "Class Year" },
];

function AccentLine() {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: 48, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
      className="h-[2px] bg-[#323232] my-5"
    />
  );
}

function ImageColumn() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-1, 1], [2, -2]);
  const rotateY = useTransform(x, [-1, 1], [-2, 2]);
  const scale = useMotionValue(1);

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current!.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    animate(x, nx, { duration: 0.4 });
    animate(y, ny, { duration: 0.4 });
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseEnter={() => animate(scale, 1.04)}
      onMouseLeave={() => {
        animate(x, 0);
        animate(y, 0);
        animate(scale, 1);
      }}
      className="relative w-full md:w-[50%] min-h-[320px] md:min-h-[520px] overflow-hidden bg-[#f0f0f0]"
      style={{ rotateX, rotateY, perspective: 800 }}
    >
      <motion.div style={{ scale }} className="absolute inset-0">
        <Image src={profile} alt="profile" fill className="object-cover object-top" />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/80" />
    </motion.div>
  );
}

function StatItem({ value, label, delay }: { value: string; label: string; delay: number }) {
  return (
    <motion.div
      custom={delay}
      variants={fadeUp}
      initial="hidden"
      animate="show"
      className="pl-4"
    >
      <div className="border-l-2 border-gray-200 pl-2">
        <div className="text-lg font-semibold font-[EdoSZ] text-[#323232]">{value}</div>
        <div className="text-[10px] uppercase tracking-widest text-gray-500 font-[Poppins]">{label}</div>
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
      <div className="hidden md:block"><Header /></div>
      <div className="md:hidden"><MobileHeader /></div>

      <div className="flex justify-center px-6 md:px-12 py-12 md:py-20">
        <div className="w-full max-w-[1100px]">

          <motion.div
            className="flex flex-col md:flex-row border border-stone-200 rounded-xl overflow-hidden shadow"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >

            <ImageColumn />

            <div className="flex-1 p-8 md:p-14">

              <motion.div variants={fadeUp} initial="hidden" animate="show">
                <h1 className="text-[clamp(2.2rem,4vw,3.4rem)] font-[EdoSZ] text-black leading-tight">
                  Bridging People
                </h1>
                <h1 className="text-[clamp(2.2rem,4vw,3.4rem)] font-[EdoSZ] text-black leading-tight">
                  & Technology
                </h1>
              </motion.div>

              <AccentLine />

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="text-gray-600 leading-relaxed mb-8 max-w-[500px] font-[Poppins]"
              >
                As a freshman at Cornell, my passion for STEM and connecting others
                through computer science drives me. I aim to bridge the gap between
                technology and people, leveraging my skills to empower communities
                and create positive change.
              </motion.p>

              <div className="flex flex-wrap gap-6 mb-8">
                {STATS.map((s, i) => (
                  <StatItem key={s.label} {...s} delay={0.4 + i * 0.1} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}