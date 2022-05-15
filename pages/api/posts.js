import { getAllPostsPreview } from "../../utliz/api";

export default async function handler(req, res) {
  const { secret, first } = req.query;

  if (
    !process.env.WORDPRESS_API_URL ||
    secret !== process.env.WORDPRESS_PREVIEW_SECRET
  ) {
    return res.status(401).json({ message: "Invalid token" });
  }

  const posts = await getAllPostsPreview();
  console.log(posts);
  if (!posts) {
    return res.status(200).json({ message: "no data avaliable!" });
  }

  res.status(200).json({ posts: posts });
}
