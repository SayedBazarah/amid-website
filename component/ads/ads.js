import Link from "next/link";
import Style from "./ads.module.css";

export default function Advertising() {
  return (
    <section className={Style.container}>
      <div>
        <h3>لماذا توظفنا للقيام بالعمل؟</h3>
        <p>
          هدفنا هو تطوير اعمالك عن طريق تقديم خدمات ذات معاير تضمن جودة المنتج
          النهائي الذي يضمن رضاء عملائك، كما اننا نهتم بالتفاصيل الدقيقة التي
          تهمك
        </p>
      </div>
      <Link href="/">تواصل معنا</Link>
    </section>
  );
}
