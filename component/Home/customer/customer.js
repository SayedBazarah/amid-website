import Image from "next/image";
import Style from "./customer.module.css";

export default function Customer() {
  const companies = [
    "/images/static/companies/CMS-Egypt.png",
    "/images/static/companies/CMS-Egypt.png",
    "/images/static/companies/CMS-Egypt.png",
    "/images/static/companies/CMS-Egypt.png",
    "/images/static/companies/CMS-Egypt.png",
  ];
  return (
    <div className={Style.container}>
      <p>نعمل مع كبرى شركات المقاولات داخل السوق المصري</p>
      <ul>
        {companies.map((item) => (
          <Image src={item} width={100} height={40} />
        ))}
      </ul>
    </div>
  );
}
