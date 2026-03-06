import Image from "next/image";
import Link from "next/link";


export default function Header() {
  return (
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
      <div id="text" className="ml-auto flex md:gap-12 lg:gap-20 text-right items-center">
        <Link href="/" className="inline-block transition-transform duration-200 hover:-translate-y-1">
          HOME
        </Link>
        <Link href="/" className="inline-block transition-transform duration-200 hover:-translate-y-1">
          ABOUT
        </Link>
        <Link href="/" className="inline-block transition-transform duration-200 hover:-translate-y-1">
          PORTFOLIO
        </Link>
        <Link href="/" className="inline-block transition-transform duration-200 hover:-translate-y-1">
          EXPERIENCE
        </Link>
        <Link href="/" className="inline-block transition-transform duration-200 hover:-translate-y-1">
          WHAT IM LEARNING RN
        </Link>
        <Link href="/" className="inline-block transition-transform duration-200 hover:-translate-y-1">
          RESUME
        </Link>
      </div>
    </div>
  );
}
