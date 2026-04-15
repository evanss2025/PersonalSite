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
  description?: string;
}

interface WorkItem {
  title: string;
  description: string;
  image?: string;
  link?: string;
  github?: string;
  techStack?: string[];
}

interface SectionData {
  section: Section;
  items: WorkItem[];
}

const sections: SectionData[] = [
  {
    section: { href: "#games", label: "Games", count: "01"},
    items: [
      { title: "Hackathon Game", description: "This game was for a hackathon where we had to build a project that used no text. Help save the marine creatures' island by defeating the incoming tentacles by drawing the matching symbols. You can play single player or multiplayer. My role was the art assets, which helped me practice 2D backgrounds and sprites.", image: "/thumb.png", link: "https://dfhp0a0o74.onrender.com/", github: "https://github.com/giragon6/-------", techStack: ["JavaScript", "HTML", "CSS", "Q Stoke Recognizer"] },
      { title: "Ophelia Boarding School", description: "Open world roleplay Roblox game. Ammased 36.4K+ visits. I mainly focused on environment building to establish a believable world so players feel immersed.", image: "/ophelia.png", link: "https://www.roblox.com/games/6539934823/Ophelia-Boarding-School#!/about", techStack: ["Roblox Studio", "Lua", "Blender"] },
    ],
  },
  {
    section: { href: "#modelling", label: "Modelling", count: "02"},
    items: [
      { title: "Magician Hat", description: "Created to practice image textures and model composition. Designed low poly for game engine use.", image: "/rabithatimg2.png", techStack: ["Blender", "3D Modelling"] },
      { title: "Spilt Milk", description: "Created to practice taking a 2D sketch and recreating it as a 3D model. Additionally, practising Blender animation using keyframes that represent a character's personality.", image: "/SPLITMILKSTILL1.png", link: "https://drive.google.com/file/d/19ycB3psI-j8ZTpI2eVhRdRvdcehSnKS_/view?usp=sharing", techStack: ["Blender", "3D Modelling", "3D Animation"] },
      { title: "Star Clips", description: "Created to practice accessories for characters in a game engine, so also practising low poly models.", image: "/starclipsss.png", techStack: ["Blender", "3D Modelling"] },
    ],
  },
  {
    section: { href: "#character-design", label: "Character Design", count: "03"},
    items: [
      { title: "Sleepy Bud", description: "Designed to pratice designing a character around a shape (triangle in this case), and then exploring multiple iterations to find the best features that express the charcter the best through design.", image: "/flower2.png", link: "https://drive.google.com/file/d/1yM-IrgAM_Hez2A9GPMpsgxABrVM5CL5b/view?usp=sharing", techStack: ["Digital Art", "Character Design", "Wacom Tablet"] },
      { title: "Sapling", description: "Designed for a game concept about a tree growing through seasons. I practised texturing, rigging and posing the model.", image: "/sapling1.png", techStack: ["Blender", "3D Modelling", "Rigging"] },
    ],
  },
  {
    section: { href: "#3d-graphics", label: "3D Graphics", count: "04"},
    items: [
      { title: "Game Thumbnail 1", description: "Created for a client developing a Roblox game. Practised specific style that the client wanted and going through multiple iterations for the client.", image: "/2obbythumbnail1.png", techStack: ["Blender", "Rendering", "Posing", "Image Editing"] },
      { title: "Game Thumbnail 2", description: "Created for a client devloping a Roblox game. Practised recreating client sketches and imagees. Also, focusing on photo editing to add special effects.", image: "/TruckChaos.png", techStack: ["Blender", "Game Art", "Image Editing"] },
      { title: "Starry Night", description: "A screenshot from a 3D website I created that was an immersion of the Starry Night painting. I modelled all 3D objects, and composed the scene and environment to mimic the painting.", image: "/starry.png", techStack: ["Blender", "Environment Design", "3D Modelling"] },
    ],
  },
  {
    section: { href: "#2D-art", label: "2D Art", count: "05"},
    items: [
      { title: "Hackathon Game Assets", description: "Different background and sprite assets for the hackathon game mentioned above.", image: "/sprite4.png", link: "https://drive.google.com/file/d/1nVc4yIW7BB3psiwy2QjQHqa4QHPMRNL0/view?usp=sharing", techStack: ["Digital Art", "Sprite Design", "Background Design"] },
      { title: "AP Art Portfolio", description: "AP 2D Art portfolio from high school, my theme focused on how a red string can represent the possessions, relationships, and events that shape identity through time.", image: "/IMG_5034.JPG", link: "https://drive.google.com/file/d/1mcr21iO-xG6AB4PFq8t_UzKNpLdw6693/view?usp=sharing", techStack: ["Mixed Media", "Illustration", "Painting", "Drawing"] },
      { title: "Sketches", description: "Some rough character sketches for a future game idea I have.", image: "/sktech2.png", link: "https://drive.google.com/file/d/1CPBYHoxiXd5CkYap1Yv07002KeCkGQ-Z/view?usp=sharing", techStack: ["Drawing", "Concept Art"] },
    ],
  },
  {
    section: { href: "#web-dev", label: "Web Dev", count: "06"},
    items: [
      { title: "InteliEQ", description: "Website created for a startup that focuses on air quality solutions. My role was to help develop designs and build out the home page to provide the best experience for users.", image: "/intelieq.png", link: "https://intelieq.life/", github: "https://github.com/cyweng03/InteliEQ", techStack: ["React", "Next.js", "Tailwind CSS", "Typescript", "Design"] },
      { title: "GeoTrainr", description: "Website that based on an inputted country and road object, goes through geosphere images and uses a custom trained computer vision model to retrievd the ones with that certain road object. The latitudes and longitudes of the locations in the images is taken and compiled into a playable Geoguessr mapped. This can be used to practice identifying certain road objects unique to certain countries. Recent 3D party API changes means the website does not work as intended for right now!", image: "/geotrainr.png", link: "https://geotrainr.vercel.app/", github: "https://github.com/evanss2025/GeoTrainr", techStack: ["Machine Learning", "Computer Vision", "Flask", "Python", "Next.js", "TypeScript", "Tailwind CSS"] },
      { title: "Scrapsy", description: "Website that allows users to create and download cute scrapbook pages. Features multiple stickers and different elements to add, and also allows users to upload their own images", image: "/scrapsy.png", link: "https://scrapsy.vercel.app/", github: "https://github.com/evanss2025/Scrapsy", techStack: ["Next.js", "Typescript", "Fabric.js"] },
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

            {item?.techStack && item.techStack.length > 0 && (
              <div className="mb-6">
                <p className="text-xs uppercase tracking-widest text-gray-500 font-[Poppins] mb-3">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {item.techStack.map((tech: string, index: number) => (
                    <span
                      key={`${tech}-${index}`}
                      className="inline-block px-3 py-1 text-xs font-[Poppins] text-white bg-[#323232] rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-3">
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
              {item?.github && (
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 border border-black text-black text-sm font-[Poppins] uppercase tracking-wider hover:bg-black hover:text-white transition"
                >
                  GitHub
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