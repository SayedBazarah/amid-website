import Link from "next/link";
import Style from "./hero.module.css";

export default function Hero(prop) {
  return (
    <section className={Style.hero}>
      <div>
        <p>مرحباً،</p>
        <h2>هل تبحث عن شركة خرسانة مطبوعة او ايبوكسي</h2>
        <Link href="/">
          <a>تواصل معنا</a>
        </Link>
      </div>
    </section>
  );
}
