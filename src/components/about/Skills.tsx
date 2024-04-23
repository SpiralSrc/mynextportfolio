import { skillsData } from "@/lib/data/LinksData";

const Skills = () => {
  return (
    <div className="w-[40%] mx-auto flex flex-wrap justify-evenly items-center gap-5 mt-20">
      {skillsData.map((skill, id) => (
        <div key={id} className="flex flex-row gap-1 justify-center items-center opacity-80">
          {<skill.icon className="text-2xl" />}
          <span className="uppercase text-sm font-semibold">{skill.name}</span>
        </div>
      ))}
    </div>
  );
};
export default Skills;
