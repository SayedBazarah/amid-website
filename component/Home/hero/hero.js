import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import Style from "./hero.module.css";

export default function Hero(prop) {
  return (
    <Fragment>
      <div className={Style.slogan}>
        <p>خبراء الارضيات الخرسانية والايبوكسي</p>
      </div>
      <section className={Style.hero}>
        <div className={Style.image}>
          <Image
            src="/images/static/hero.jpeg"
            alt="شركة خرسانة مطبوعة وهليكوبتر في مصر"
            height={760}
            width={1366}
            layout="fill"
          />
        </div>
        <div className={Style.content}>
          <p>مرحباً،</p>
          <h2>هل تبحث عن شركة خرسانة مطبوعة او ايبوكسي؟</h2>
          <Link href="/">
            <a>تواصل معنا</a>
          </Link>
        </div>
      </section>
    </Fragment>
  );
}
