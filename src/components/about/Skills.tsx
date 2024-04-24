import { skillsData } from "@/lib/data/LinksData";

const Skills = () => {
  return (
    <div className="w-[95%] md:w-[40%] mx-auto flex flex-wrap justify-evenly items-center gap-10 mt-10">
      {skillsData.map((skill, id) => (
        <div key={id} className="flex flex-row gap-10 justify-center items-center opacity-80">
          {<skill.icon className="text-2xl" />}
          <span className="uppercase text-sm font-semibold">{skill.name}</span>
        </div>
      ))}
    </div>
  );
};
export default Skills;
