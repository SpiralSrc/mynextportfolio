import getPostMetadata from "../../../utils/getPostMetadata";
import ProjectCard from "../projects/ProjectCard";

const ProjectIntro = () => {
  const postMetadata = getPostMetadata("projects");

  return (
    <section id="projects" className="bg-primary/80 backdrop-blur-md py-10">
      <div className="max-w-7xl mx-auto px-3 xl:px-0 py-20 text-secondary">
        <h1 className="text-center text-5xl font-bold font-vibes mb-24">Projects</h1>
        <div className="w-full grid grid-cols-1 xs:flex xs:flex-col justify-center items-center lg:flex-row lg:flex-wrap gap-10">
          {postMetadata.map((post, id) => {
            return <ProjectCard key={id} post={post} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default ProjectIntro;
