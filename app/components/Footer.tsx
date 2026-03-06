import Image from "next/image";
import Link from "next/link";


export default function Footer() {
  return (
    <div className="w-full bg-custom-dark-grey flex flex-col p-9 pb-14 justify-center">
      <Image className="w-1/2 md:w-1/6 lg:w-1/8" src="/logo_white.png" alt="logo" width={250} height={250} />
      <div id="email" className="flex items-center mt-2 mb-2">
        <Image src="/grey_email.png" alt="email" width={30} height={30} />
        <p className="text-stone-300 mx-2">sophiaevans2025@gmail.com</p>
      </div>
      <div id="icons" className="mt-2 flex gap-3">
        <Link href="https://github.com/evanss2025" target="_blank" className="">
          <Image
            src="/grey_github.png"
            alt="github"
            width={30}
            height={30}
          />
        </Link>
        <Link href="https://www.linkedin.com/in/sophiaevans29/" target="_blank">
          <Image
            src="/grey_linkedin.png"
            alt="linkedin"
            width={30}
            height={30}
          />
        </Link>
      </div>
    </div>
  );
}
