"use client";

import Image from "next/image";
import logo from "../../../public/assets/logo2.png";
import Link from "next/link";
import { navLinks } from "@/lib/data/LinksData";
import { GrMenu } from "react-icons/gr";
import { useState } from "react";
import NavModal from "../modals/NavModal";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [navModal, setNavModal] = useState(false);

  const currentPath = usePathname();

  return (
    <nav className="w-screen py-3 px-2 xl:px-0 fixed top-0 left-0 z-30 bg-primary/60 backdrop-blur-lg text-secondary shadow-xl">
      <div className="max-w-7xl mx-auto flex flex-row justify-between items-center px-3 xl:px-2">
        <Link
          href={"/"}
          className="flex flex-row gap-2 justify-center items-center"
        >
          <div className="relative w-7 h-7 md:w-9 md:h-9">
            <Image
              src={logo}
              alt="logo"
              fill
              sizes="(max-width: 36px) 100vw, (max-width: 36px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
          <span className="hidden sm:block font-sacramento font-bold text-md md:text-2xl bg-clip-text text-transparent bg-gradient-to-br from-pink-700 via-pink-200 to-orange-900 via-30%">
            SpiralSrc
          </span>
        </Link>

        <div className="hidden md:flex flex-row justify-center items-center gap-5 font-semibold">
          {navLinks.map((nav, id) => (
            <Link
              href={nav.path}
              key={id}
              className={`${
                nav.path === currentPath
                  ? "text-secondary"
                  : "text-secondary/60"
              }`}
            >
              {nav.title}
            </Link>
          ))}
        </div>
        <Link
          href={"https://blogs.spiralsrc.dev/"}
          className=" flex-row gap-2 justify-center items-center hidden md:flex"
        >
          <span className="p-2 rounded-full text-secondary/60 bg-red-400/10 border border-primary/20 hover:text-primary/60 hover:border-primary/50 hover:shadow-xl hover:btn-effect">
            My Blogs
          </span>
        </Link>
        <div className="flex md:hidden">
          {!navModal ? (
            <GrMenu
              size={35}
              className="p-2 rounded-3xl hover:bg-secondary/50 hover:text-primary btn-effect"
              onClick={() => setNavModal(true)}
            />
          ) : (
            ""
          )}
          {navModal && <NavModal setNavModal={setNavModal} />}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
