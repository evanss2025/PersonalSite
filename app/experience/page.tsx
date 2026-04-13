"use client";

import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import Footer from "../components/Footer";
import { motion, type Variants } from "motion/react";
import { useRef } from "react";
import { useInView } from "motion/react";

interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  description: string;
  skills?: string[];
}

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
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const experienceItems: ExperienceItem[] = [
  {
    company: "Big Red Hacks",
    position: "Logistics Team Member",
    period: "Dec 2025 - Present",
    description: "Helping organize the logistics behind Cornell’s largest annual hackathon for 400 participants. Managing correspondence between prizes, food, venue, and schedule",
    skills: ["Event Planning", "Communications", "Managing Partnerships"],
  },
  {
    company: "Women in Computing at Cornell",
    position: "Technical Team Member",
    period: "Sep 2025 - Present",
    description: "Leveraging web development to create tech solutions for on and off campus groups and nonprofits. Working with InteliEQ to re-design and re-develop their company’s website.",
    skills: ["Next.js", "Javascript", "Tailwind CSS", "Web Design"],
  },
  {
    company: "Hack Club",
    position: "Associate Producer & Engineer",
    period: "Jan 2024 - Sep 2024",
    description: "Initiated Boston Days of Service hackathon, resulting in a hackathon and learnathon for 30 girl scouts where they created wireframe and basic website projects. Managed a team of 10 high school girls to run the Boston Hackathon, achieved $8K in funding. Curating a partnership with Vermont congresswoman Becca Balint for the Congressional App Challenge, creating a website that reached 260K people. Created guides and documents to help other high schoolers run their own hackathons.",
    skills: ["Event Planning", "Web Dev", "Fundraising", "Team Leadership"],
  },
  {
    company: "Hack Club",
    position: "Summer Intern",
    period: "Jun 2024 - Jul 2024",
    description: "Worked in Hack Club’s Athena initiative, resulting in getting more high school girls interested in STEM. Collaborated with cross-functional teams to re-brand the initiative, including re-designing the Athena website and branding. Helped initiate Ascend, a 3-day hackathon, ensuring $40K in funding and smooth planning to fly 50 girls out to LA for the event. Helped organize teams nationally to host female-targeted hackathons in San Francisco, New York, and Toronto.",
    skills: ["Event Planning", "Web Dev", "Fundraising", "Team Leadership"],
  },
];

function ExperienceCard({ item, delay }: { item: ExperienceItem; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      custom={delay}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className="pb-12 border-b border-gray-200 last:border-b-0"
    >
      <div className="flex flex-col gap-3">
        <div className="mt-4 flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
          <h3 className="text-[clamp(1.4rem,3vw,2rem)] font-[EdoSZ] text-[#323232]">
            {item.position}
          </h3>
          <span className="text-sm font-[Poppins] text-gray-500 tracking-wide">
            {item.period}
          </span>
        </div>

        <p className="text-sm font-[Poppins] text-gray-600 uppercase tracking-wider font-semibold">
          {item.company}
        </p>

        <p className="text-base font-[Poppins] text-gray-700 leading-relaxed mt-3 max-w-2xl">
          {item.description}
        </p>

        {item.skills && (
          <div className="flex flex-wrap gap-2 mt-4">
            {item.skills.map((skill) => (
              <span
                key={skill}
                className="inline-block px-3 py-1 text-xs font-[Poppins] text-gray-700 border border-gray-300 rounded-full hover:border-gray-400 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
      <div className="hidden md:block">
        <Header />
      </div>
      <div className="md:hidden">
        <MobileHeader />
      </div>

      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="py-16"
        >
          <h1 className="text-[clamp(3rem,7vw,5.5rem)] font-[EdoSZ] text-black leading-none mt-3">
            Experience.
          </h1>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="py-8"
        >
          {experienceItems.map((item, index) => (
            <ExperienceCard
              key={`${item.company}-${index}`}
              item={item}
              delay={0}
            />
          ))}
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
