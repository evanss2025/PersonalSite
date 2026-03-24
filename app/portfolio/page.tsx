"use client";

import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import Footer from "../components/Footer";
import Link from "next/link";
import { motion, AnimatePresence, useInView, type Variants } from "motion/react";
import { useRef, useState, useEffect } from "react";

interface Section {
  href: string;
  label: string;
  count: string;
  description: string;
}

const sections: Section[] = [
  { href: "#games", label: "Games", count: "01", description: "" },
  { href: "#modelling", label: "Modelling", count: "02", description: "" },
  { href: "#character-design", label: "Character Design", count: "03", description: "" },
  { href: "#environments", label: "Environments", count: "04", description: "" },
  { href: "#2D-art", label: "2D Art", count: "05", description: "" },
  { href: "#web-dev", label: "Web Dev", count: "06", description: "" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay },
  }),
};

const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
};

const navItemVariant: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

/* ─── MODAL (ADDED) ───────────────────────────── */
function ProjectModal({ item, onClose }: { item: any; onClose: () => void }) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.92, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white w-[90%] max-w-xl p-8 rounded shadow-xl"
          >
            <h2 className="font-[EdoSZ] text-3xl mb-4 text-[#323232]">
              {item?.title}
            </h2>

            <p className="font-[Poppins] text-gray-600 mb-6">
              {item?.description}
            </p>

            <button
              onClick={onClose}
              className="mt-4 px-5 py-2 border border-black text-sm font-[Poppins] uppercase tracking-wider hover:bg-black hover:text-white transition"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─── NAV ───────────────────────────── */
function NavLink({ section }: { section: Section }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div variants={navItemVariant}>
      <Link href={section.href}>
        <motion.div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          animate={{ x: hovered ? 8 : 0 }}
          className="flex items-baseline gap-4 py-4 border-b border-gray-200 cursor-pointer"
        >
          <span className="text-[10px] text-gray-400 font-[Poppins] tracking-widest min-w-[24px]">
            {section.count}
          </span>

          <motion.span
            animate={{ color: hovered ? "#000" : "#323232" }}
            className="text-[clamp(1.6rem,3vw,2.4rem)] font-[EdoSZ] leading-none"
          >
            {section.label}
          </motion.span>

          <motion.span
            animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -8 }}
            className="text-xs text-gray-500 font-[Poppins] tracking-wide"
          >
            {section.description}
          </motion.span>

          <motion.span
            animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -6 }}
            className="ml-auto text-lg"
          >
            →
          </motion.span>
        </motion.div>
      </Link>
    </motion.div>
  );
}

/* ─── SECTION ───────────────────────────── */
function SectionBlock({
  section,
  openModal,
}: {
  section: Section;
  openModal: (item: any) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.section
      id={section.href.slice(1)}
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      className="py-16 border-b border-gray-200"
    >
      <div className="flex items-baseline gap-5 mb-10 flex-wrap">
        <span className="text-xs text-gray-400 font-[Poppins] tracking-widest uppercase">
          {section.count}
        </span>

        <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-[EdoSZ] text-[#323232]">
          {section.label}
        </h2>

        <div className="h-[2px] w-10 bg-[#323232]" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[0, 1, 2].map((i) => {
          const project = {
            title: `${section.label} ${i + 1}`,
            description: "Add your real project details here.",
          };

          return (
            <motion.div
              key={i}
              onClick={() => openModal(project)}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              whileHover={{ y: -4 }}
              className="aspect-[4/3] bg-gray-100 border border-stone-200 rounded flex items-center justify-center cursor-pointer"
            >
              <span className="text-[10px] text-gray-400 font-[Poppins] uppercase tracking-widest">
                Coming Soon
              </span>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}

/* ─── PAGE ───────────────────────────── */
export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
      <div className="hidden md:block"><Header /></div>
      <div className="md:hidden"><MobileHeader /></div>

      <div className="max-w-[1100px] mx-auto px-6 md:px-12">

        <motion.div variants={fadeUp} initial="hidden" animate="show" className="py-16">
          <h1 className="text-[clamp(3rem,7vw,5.5rem)] font-[EdoSZ] text-black leading-none mt-3">
            Selected
            <br />
            <span className="text-black">Work.</span>
          </h1>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 pb-16 border-b">

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="w-full lg:w-[55%]"
          >
            {sections.map((s) => (
              <NavLink key={s.href} section={s} />
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="hidden lg:block flex-1 sticky top-24"
          />
        </div>

        <div className="pb-20">
          {sections.map((s) => (
            <SectionBlock
              key={s.href}
              section={s}
              openModal={setSelectedProject}
            />
          ))}
        </div>

      </div>

      <Footer />

      {/* MODAL RENDER */}
      <ProjectModal
        item={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}