import { getPreviewPost } from "../utliz/api";
import Head from "next/head";
import Style from "../component/posts/posts.module.css";

export default function Product(props) {
  const { content, date } = props.product;
  console.log(props.product);
  return (
    <div className={Style.container}>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  );
}

export async function getStaticProps(context) {
  const slug = context.params.slug;
  const product = await getPreviewPost(slug, "URI");
  console.log(product);
  return {
    props: { product },
  };
}
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
