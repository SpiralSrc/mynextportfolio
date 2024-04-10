import Image from "next/image";
import logo from "../../../public/assets/logo.png";
import Link from "next/link";
import { navLinks } from "@/lib/data/LinksData";

const Navbar = () => {
  return (
    <nav className="w-screen py-3 px-2 xl:px-0 fixed top-0 left-0 z-30 bg-primary/40 backdrop-blur-lg text-secondary shadow-xl">
      <div className="flex flex-row justify-between items-center">
        <Link href={"/"} className="flex flex-row gap-2 justify-center items-center">
          <div className="relative w-9 h-9">
            <Image src={logo} alt="logo" fill className="object-cover" />
          </div>
          <span className="font-sacramento font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-bl from-red-500 to-red-300">
            SpiralSrc
          </span>
        </Link>

        <div className="flex flex-row justify-center items-center gap-5 ">
          {navLinks.map((nav, id) => (
            <Link href={nav.path} key={id} className="font-semibold">
              {nav.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
