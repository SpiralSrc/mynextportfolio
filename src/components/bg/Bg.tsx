import Image from "next/image";
import bg from "../../../public/assets/texture3.jpg";

const Bg = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen -z-50">
        <div className="relative w-full h-full -z-50">
          <Image src={bg} fill alt="bg" className="object-cover" />
        </div>
      </div>
      <div className="fixed w-screen h-screen top-0 left-0 -z-20 bg-black/25 backdrop-blur-[2px]" />
    </>
  );
};
export default Bg;