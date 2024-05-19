import fs from "fs";
import Markdown from "markdown-to-jsx";
import React from "react";
import matter from "gray-matter";
import getPostMetadata from "../../../../utils/getPostMetadata";

function getPostContent(slug: any) {
  const folder = "projects/";
  const file = folder + `${slug}.md`;
  const content = fs.readFileSync(file, "utf8");

  const matterResult = matter(content);
  return matterResult;
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata("projects");
  return posts.map((post) => ({ slug: post.slug }));
};

export async function generateMetadata({ params, searchParams }: any) {
  const id = params?.slug ? "|" : "";
  return {
    title: `SpiralSrc Project ${id.replaceAll("_", " ")}`,
  };
}

const renderToHtml = {
  // Add custom renderer for all HTML elements
  // Render all HTML elements as is
  html: ({ children }: { children: React.ReactNode }) => (
    <div className="w-full flex" dangerouslySetInnerHTML={{ __html: children as TrustedHTML }} />
  ),
};

export default function page(props: any) {
  const slug = props.params?.slug;

  const post = getPostContent(slug);

  return (
    <section className="bg-section-gradient1">
      <div className="max-w-7xl mx-auto flex flex-col py-24 px-2 xl:px-0">
        <div className="w-[96%] mx-auto max-w-none flex py-10 prose-p:indent-10 text-primary marker:text-primary/80 prose xl:prose-lg prose-sm prose-h1:text-center prose-h1:font-vibes prose-video:rounded-md prose-video:mx-auto">
          <Markdown options={{ overrides: renderToHtml }}>{post.content}</Markdown>
        </div>
      </div>
    </section>
  );
}
