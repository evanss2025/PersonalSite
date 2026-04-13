"use client";

import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import Footer from "../components/Footer";
import Work from "../components/Work";
import Link from "next/link";
import { motion, AnimatePresence, useInView, type Variants } from "motion/react";
import { useRef, useState, useEffect } from "react";

interface Section {
  href: string;
  label: string;
  count: string;
  description: string;
}

interface WorkItem {
  title: string;
  description: string;
  image?: string;
  link?: string;
}

interface SectionData {
  section: Section;
  items: WorkItem[];
}

const sections: SectionData[] = [
  {
    section: { href: "#games", label: "Games", count: "01", description: "" },
    items: [
      { title: "Hackathon Game", description: "Placeholder", image: "", link: "" },
      { title: "Placeholder", description: "Placeholder", image: "", link: "" },
      { title: "Placeholder", description: "Placeholder", image: "", link: "" },
    ],
  },
  {
    section: { href: "#modelling", label: "Modelling", count: "02", description: "" },
    items: [
      { title: "Magician Hat", description: "Placeholder", image: "/rabithatimg2.png", link: "" },
      { title: "Split Milk", description: "Placeholder", image: "/SPLITMILKSTILL1.png", link: "" },
      { title: "Placeholder", description: "Placeholder", image: "", link: "" },
    ],
  },
  {
    section: { href: "#character-design", label: "Character Design", count: "03", description: "" },
    items: [
      { title: "Sleepy Bud", description: "Placeholder", image: "/flower2.png", link: "https://drive.google.com/file/d/1yM-IrgAM_Hez2A9GPMpsgxABrVM5CL5b/view?usp=sharing" },
      { title: "Placeholder", description: "Placeholder", image: "", link: "" },
      { title: "Placeholder", description: "Placeholder", image: "", link: "" },
    ],
  },
  {
    section: { href: "#3d-graphics", label: "3D Graphics", count: "04", description: "" },
    items: [
      { title: "Game Thumbnail 1", description: "Placeholder", image: "/2obbythumbnail1.png", link: "" },
      { title: "Game Thumbnail 2", description: "Placeholder", image: "/TruckChaos.png", link: "" },
      { title: "Placeholder", description: "Placeholder", image: "", link: "" },
    ],
  },
  {
    section: { href: "#2D-art", label: "2D Art", count: "06", description: "" },
    items: [
      { title: "Hackathon Game Assets", description: "Placeholder", image: "", link: "" },
      { title: "AP Art Portfolio", description: "Placeholder", image: "/IMG_5034.JPG", link: "https://drive.google.com/file/d/1mcr21iO-xG6AB4PFq8t_UzKNpLdw6693/view?usp=sharing" },
      { title: "Placeholder", description: "Placeholder", image: "", link: "" },
    ],
  },
  {
    section: { href: "#web-dev", label: "Web Dev", count: "07", description: "" },
    items: [
      { title: "InteliEQ", description: "Placeholder", image: "/intelieq.png", link: "https://intelieq.life/" },
      { title: "GeoTrainr", description: "Placehodler", image: "/geotrainr.png", link: "https://geotrainr.vercel.app/" },
      { title: "Scrapsy", description: "Placeholder", image: "/scrapsy.png", link: "https://scrapsy.vercel.app/" },
    ],
  },
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
            className="bg-white w-[90%] max-w-4xl p-8 rounded shadow-xl max-h-[90vh] overflow-y-auto"
          >
            {item?.image && (
              <div className="mb-6 rounded overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto max-h-96 object-contain"
                />
              </div>
            )}

            <h2 className="font-[EdoSZ] text-3xl mb-4 text-[#323232]">
              {item?.title}
            </h2>

            <p className="font-[Poppins] text-gray-600 mb-6">
              {item?.description}
            </p>

            <div className="flex gap-3">
              {item?.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 bg-black text-white text-sm font-[Poppins] uppercase tracking-wider hover:bg-gray-800 transition"
                >
                  See More →
                </a>
              )}
              <button
                onClick={onClose}
                className="px-5 py-2 border border-black text-sm font-[Poppins] uppercase tracking-wider hover:bg-black hover:text-white transition"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

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

function SectionBlock({
  section,
  items,
  openModal,
}: {
  section: Section;
  items: WorkItem[];
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
        {items.map((item, index) => (
          <Work
            key={`${section.href}-${index}`}
            title={item.title}
            image={item.image}
            link={item.link}
            onClick={() => openModal(item)}
          />
        ))}
      </div>
    </motion.section>
  );
}

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
      <div className="hidden md:block"><Header /></div>
      <div className="md:hidden"><MobileHeader /></div>

      <div className="max-w-[1100px] mx-auto px-6 md:px-12">

        <motion.div variants={fadeUp} initial="hidden" animate="show" className="py-16">
          <h1 className="text-[clamp(3rem,7vw,5.5rem)] font-[EdoSZ] text-black leading-none mt-3">
            Selected Work.
           
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
              <NavLink key={s.section.href} section={s.section} />
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
              key={s.section.href}
              section={s.section}
              items={s.items}
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