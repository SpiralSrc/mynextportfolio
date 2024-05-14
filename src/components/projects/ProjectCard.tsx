import Image from "next/image";
import Link from "next/link";

const ProjectCard = (props: any) => {
  const { post } = props;

  return (
    <Link href={`/project/${post.slug}`}>
      <article className="xs:w-[450px] sm:w-[500px] md:w-[600px] h-72 md:h-[350px] lg:h-96 relative rounded-xl overflow-hidden shadow-md group hover:shadow-xl hover:smooth-effect bg-primary/20">
        <div className="w-full h-full relative ">
          <Image
            src={post.banner}
            alt={post.title}
            fill
            placeholder="blur"
            blurDataURL={post.banner}
            sizes="(max-width: 1200px) 100vw, (max-width: 1000px) 50vw, 33vw"
            className="object-cover  md:object-top scale-110 group-hover:scale-105 btn-effect"
          />
          <div className="w-full h-full absolute top-0 left-0 z-10 scale-110 group-hover:scale-105 shadow-over-inset-sm group-hover:shadow-none group-hover:btn-effect" />
        </div>
        <div className="absolute w-full bottom-0 left-0 px-2 py-5 bg-primary/20 backdrop-blur-sm text-secondary opacity-0 group-hover:opacity-100 group-hover:smooth-effect">
          <h3 className="font-bold">{post.title}</h3>
          <p className="line-clamp-2">{post.desc}</p>
        </div>
      </article>
    </Link>
  );
};
export default ProjectCard;
