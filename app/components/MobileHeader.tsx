'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative">
      <div className="flex p-4 px-10 items-center">
        <div id="header-icons" className="mt-2 flex gap-5">
          <Link href="https://github.com/evanss2025" target="_blank" className="transition-transform duration-200 hover:-translate-y-1">
            <Image
              src="/black_github.png"
              alt="github"
              width={35}
              height={35}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/sophiaevans29/" target="_blank" className="transition-transform duration-200 hover:-translate-y-1">
            <Image
              src="/black_linkedin.png"
              alt="linkedin"
              width={35}
              height={35}
            />
          </Link>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="ml-auto">
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span className="block w-5 h-0.5 bg-black mb-1"></span>
            <span className="block w-5 h-0.5 bg-black mb-1"></span>
            <span className="block w-5 h-0.5 bg-black"></span>
          </div>
        </button>
      </div>
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md z-50">
          <div className="flex flex-col p-4">
            <Link href="/" className="py-2 inline-block transition-transform duration-200 hover:-translate-y-1" onClick={() => setMenuOpen(false)}>
              HOME
            </Link>
            <Link href="/" className="py-2 inline-block transition-transform duration-200 hover:-translate-y-1" onClick={() => setMenuOpen(false)}>
              ABOUT
            </Link>
            <Link href="/" className="py-2 inline-block transition-transform duration-200 hover:-translate-y-1" onClick={() => setMenuOpen(false)}>
              PORTFOLIO
            </Link>
            <Link href="/" className="py-2 inline-block transition-transform duration-200 hover:-translate-y-1" onClick={() => setMenuOpen(false)}>
              EXPERIENCE
            </Link>
            <Link href="/" className="py-2 inline-block transition-transform duration-200 hover:-translate-y-1" onClick={() => setMenuOpen(false)}>
              WHAT IM LEARNING RN
            </Link>
            <Link href="/" className="py-2 inline-block transition-transform duration-200 hover:-translate-y-1" onClick={() => setMenuOpen(false)}>
              RESUME
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
