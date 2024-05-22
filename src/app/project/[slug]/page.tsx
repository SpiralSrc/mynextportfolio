import fs from "fs";
import Markdown from "markdown-to-jsx";
import React from "react";
import matter from "gray-matter";
import getPostMetadata from "../../../../utils/getPostMetadata";
import Link from "next/link";

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

export async function generateMetadata({
  params,
  searchParams,
}: any) {
  const id = params?.slug ? "|" : "";
  return {
    title: `SpiralSrc Project ${id.replaceAll("_", " ")}`,
  };
}

const renderToHtml = {
  // Add custom renderer for all HTML elements
  // Render all HTML elements as is
  html: ({ children }: { children: React.ReactNode }) => (
    <div
      className="w-full flex"
      dangerouslySetInnerHTML={{ __html: children as TrustedHTML }}
    />
  ),
};

export default function page(props: any) {
  const slug = props.params?.slug;

  const post = getPostContent(slug);

  return (
    <section className="bg-section-gradient1">
      <div className="max-w-7xl mx-auto flex flex-col py-16 md:py-24 px-2">
        <div className="w-[96%] mx-auto max-w-none rounded-xl flex pb-10 border-primary/40 prose-p:indent-10 text-primary/70 marker:text-primary/80 prose lg:prose-lg prose-md prose-h1:text-center prose-h1:font-vibes prose-video:rounded-md prose-video:w-[90%] h-auto lg:prose-video:w-[60%] prose-video:mx-auto">
          <Markdown
            className=""
            options={{ overrides: renderToHtml }}
          >
            {post.content}
          </Markdown>
        </div>
        <div className="flex justify-end items-center pr-5">
          <Link
            href={"/#projects"}
            className="py-2 px-5 my-10 bg-primary/20 rounded-xl border border-primary/20 hover:border-primary/50 hover:shadow-xl hover:btn-effect"
          >
            Go back...
          </Link>
        </div>
      </div>
    </section>
  );
}
