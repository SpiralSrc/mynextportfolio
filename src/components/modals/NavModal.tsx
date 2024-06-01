"use client";

import { navLinks, socialsData } from "@/lib/data/LinksData";
import Link from "next/link";
import logo from "../../../public/assets/logo2.png";
import { CgClose } from "react-icons/cg";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NavModal = ({ setNavModal }: any) => {
  const currentPath = usePathname();

  return (
    <div
      className="fixed w-screen h-screen z-40 top-0 left-0 bg-black/50 backdrop-blur-md"
      onClick={() => setNavModal(false)}
    >
      <CgClose
        size={30}
        className="absolute top-10 right-10 p-2 rounded-3xl hover:bg-secondary/50 hover:text-primary btn-effect"
        onClick={() => setNavModal(false)}
      />
      <div
        className="w-56 xxs:w-72 xs:w-80 h-full left-0 top-0 flex flex-col justify-between items-center slideFromLeft bg-section-gradient1 text-primary/50 font-semibold py-16"
        onClick={(e) => e.stopPropagation()}
      >
        <Link
          href={"/"}
          className="w-6 h-6"
          onClick={() => setNavModal(false)}
        >
          <Image src={logo} alt="logo" className="object-cover" />
        </Link>
        <div className="w-[85%] mx-auto text-center flex flex-col gap-5 text-sm">
          {navLinks &&
            navLinks.map((nav, id) => (
              <Link
                key={id}
                onClick={() => setNavModal(false)}
                href={nav.path}
                className={`py-2 rounded-xl hover:btn-effect hover:text-primary hover:bg-primary/30 ${
                  nav.path === currentPath
                    ? "text-primary bg-primary/30"
                    : "text-primary/30"
                }`}
              >
                {nav.title}
              </Link>
            ))}
        </div>

        <div className="flex flex-row">
          {socialsData.map((social, id) => (
            <a
              key={id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {<social.icon size={13} />}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
export default NavModal;
