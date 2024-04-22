import { projectsData } from "@/lib/data/ProjectsData";
import Image from "next/image";

const ProjectCard = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-2 xl:px-0 gap-10">
      {projectsData.map((item, id) => (
        <article key={id} className=" relative rounded-xl overflow-hidden shadow-md group hover:shadow-xl hover:smooth-effect bg-primary/20">
          <div className="w-full h-80 relative ">
            <Image src={item.banner} alt={item.name} fill className="object-cover md:object-top scale-110 group-hover:scale-105 btn-effect" />
            <div className="w-full h-full absolute top-0 left-0 z-10 scale-110 group-hover:scale-105 shadow-over-inset-sm group-hover:shadow-none group-hover:btn-effect" />
          </div>
          <div className="absolute w-full bottom-0 left-0 px-2 py-5 bg-primary/20 backdrop-blur-sm text-secondary opacity-0 group-hover:opacity-100 group-hover:smooth-effect">
            <h3 className="font-bold">{item.name}</h3>
            <p className="line-clamp-2">{item.desc}</p>
          </div>
        </article>
      ))}
    </div>
  );
};
export default ProjectCard;
