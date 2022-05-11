import Style from "./concrete-types.module.css";
import Gallery from "../gallery/gallery";

import Image from "next/image";
import Link from "next/link";

export default function ConcreteTypes() {
  const galleryImages = [
    "اشكال-الخرسانة-المطبوعة-1.jpeg",
    "اشكال-الخرسانة-المطبوعة-2.jpeg",
    "اشكال-الخرسانة-المطبوعة-3.jpeg",
    "اشكال-الخرسانة-المطبوعة-4.jpeg",
    "اشكال-الخرسانة-المطبوعة-5.jpeg",
    "اشكال-الخرسانة-المطبوعة-6.jpeg",
  ];
  return (
    <div className={Style.container}>
      <h2>اشكال الخرسانات المطبوعة والهليكوبتر</h2>
      <ul className={Style.images}>
        {galleryImages.map((image, index) => {
          const link = `/images/static/concrete-types/${image}`;
          return (
            <li key={index}>
              <Image src={link} width={300} height={300} />
            </li>
          );
        })}
      </ul>
      <Link href="">
        <a> عرض جميع الاشكال</a>
      </Link>
    </div>
  );
}
