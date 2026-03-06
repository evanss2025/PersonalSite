"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  delay?: number;
};

export default function AnimatedImage({
  src,
  alt,
  width,
  height,
  className = "",
  delay = 0,
}: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  const base = "transition-all duration-700 ease-out";
  const stateClasses = mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6";

  return (
    <div className={`${className} ${base} ${stateClasses}`} style={{ transitionDelay: `${delay}ms` }}>
      <Image src={src} alt={alt} width={width} height={height} className="block w-full h-auto" />
    </div>
  );
}
