"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/portfolio", label: "PORTFOLIO" },
    { href: "/experience", label: "EXPERIENCE" },
    { href: "https://drive.google.com/file/d/1tKmuxighDR1XeBzOoGoEjEijfcK47ECN/view?usp=sharing", label: "RESUME" },
  ];

  return (
    <div className="flex p-4 px-10 items-center">
      <div id="header-icons" className="mt-2 flex gap-5">
        <Link
          href="https://github.com/evanss2025"
          target="_blank"
          className="transition-transform duration-200 hover:-translate-y-1"
        >
          <Image src="/black_github.png" alt="github" width={35} height={35} />
        </Link>

        <Link
          href="https://www.linkedin.com/in/sophiaevans29/"
          target="_blank"
          className="transition-transform duration-200 hover:-translate-y-1"
        >
          <Image src="/black_linkedin.png" alt="linkedin" width={35} height={35} />
        </Link>
        <Link 
          href="mailto:sophiaevans2025@gmail.com"
          target="_blank"
          className="transition-transform duration-200 hover:-translate-y-1"
        >
          <Image src="/email.png" alt="email" width={35} height={35} />
        </Link>
      </div>

      <div
        id="text"
        className="ml-auto flex md:gap-12 lg:gap-20 text-right items-center"
      >
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`inline-block transition-transform duration-200 hover:-translate-y-1 ${
                isActive ? "font-bold" : "font-normal"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}