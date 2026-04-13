import React, { useState } from 'react'
import { motion } from "motion/react";

interface WorkProps {
  title: string;
  image?: string;
  link?: string;
  onClick?: () => void;
}

function Work({ title, image, link, onClick }: WorkProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const bgStyle = image
    ? { backgroundImage: `url(${image})` }
    : { backgroundImage: 'linear-gradient(135deg, #e5e7eb, #d1d5db)' };

  return (
    <motion.div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="aspect-[4/3] relative overflow-hidden rounded border border-stone-200 cursor-pointer"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={bgStyle}
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-black/25" />

      <div className="absolute inset-0 flex flex-col justify-end p-4">
        <h3 className="font-[EdoSZ] text-xl text-white drop-shadow">{title}</h3>
        
        {link && (
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            animate={{ opacity: isHovered ? 1 : 0.7 }}
            className="mt-3 inline-flex items-center gap-1 text-white text-sm font-[Poppins] hover:gap-2 transition-all w-fit"
          >
            See More <span>→</span>
          </motion.a>
        )}
      </div>
    </motion.div>
  )
}

export default Work