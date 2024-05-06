import Image from "next/image";
import bg from "../../../public/assets/texture3.jpg";

const Bg = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen -z-50">
        <div className="relative w-full h-full -z-50">
          <Image src={bg} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt="bg" className="object-cover" />
        </div>
      </div>
      <div className="fixed w-screen h-screen top-0 left-0 -z-20 bg-section-gradient/95 backdrop-blur-[3px]" />
    </>
  );
};
export default Bg;
