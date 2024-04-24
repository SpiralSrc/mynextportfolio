import ProjectCard from "../projects/ProjectCard";

const ProjectIntro = () => {
  return (
    <section className="bg-primary/80 backdrop-blur-md py-10">
      <div className="max-w-7xl mx-auto px-3 xl:px-0 py-20 text-secondary">
        <h1 className="text-center text-5xl font-bold font-sacramento mb-24">Projects</h1>
        <ProjectCard />
      </div>
    </section>
  );
};
export default ProjectIntro;
