import Image from "next/image";
import Link from "next/link";
import Style from "./projects.module.css";

export default function Projects(props) {
  const projects = props.projects;
  return (
    <section className={Style.container}>
      <h2>بعض المشاريع التى قمنا بتنفيذها</h2>
      <ul>
        {projects.map((project, index) => {
          const { title, description, image, slug } = project;
          const imgUrl = `/images/projects/${slug}/${image}`;
          return (
            <div
              className={index % 2 === 0 ? Style.product : Style.reverse}
              key={index}
            >
              <div className={Style.image}>
                <Image src={imgUrl} alt={title} width={500} height={500} />
              </div>
              <div className={Style.description}>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
                <Link href="/">
                  <a>اعرف المزيد</a>
                </Link>
              </div>
            </div>
          );
        })}
      </ul>
    </section>
  );
}
