import Image from "next/image";

import Style from "./gallery.module.css";

function Gallery(props) {
  const { galleryImages } = props;

  return (
    <div className={Style.container}>
      <h2>صور اثناء تنفيذ اعمال ارضيات الخرسانة المطبوعة والهليكوبتر</h2>
      <ul className={Style.images}>
        {galleryImages.map((image, index) => {
          const link = `/images/static/gallery/${image}`;
          return (
            <li key={index}>
              <Image src={link} width={300} height={300} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Gallery;
