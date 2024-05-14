import fs from "fs";
import matter from "gray-matter";

export default function getPostMetadata(basePath: any) {
  const folder = basePath + "/";
  const files = fs.readdirSync(folder);
  const mdPosts = files.filter((file) => file.endsWith(".md"));

  //get the  file data
  const posts = mdPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`${basePath}/${fileName}`, "utf8");

    const matterResult = matter(fileContents);

    return {
      title: matterResult.data.title,
      desc: matterResult.data.desc,
      banner: matterResult.data.banner,
      website: matterResult.data.website,
      slug: fileName.replace(".md", ""),
    };
  });
  return posts;
}
