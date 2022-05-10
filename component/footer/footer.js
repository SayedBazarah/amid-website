import Link from "next/link";
import Style from "./footer.module.css";

function Footer() {
  return (
    <footer className={Style.footer}>
      <section className={Style.links}>
        <div className={Style.list}>
          <p>الخدمات</p>
          <ul>
            <li>
              <Link href="/">
                <a>خرسانة مطبوعة</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>خرسانة هليكوبتر</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>ايبوكسى</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>اسئلة شائعة</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={Style.list}>
          <p>تعرف على</p>
          <ul>
            <li>
              <Link href="/">
                <a>أنواع ارضيات لاندسكيب</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>اشكال ارضيات الخرسانة</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>الفرق بين الخرسانة المطبوعة والهليكوبتر</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>ما هيا ارضيات الايبوكسي</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={Style.contact}>
          <p>تواصل معنا</p>
          <ul>
            <li>
              <Link href="/">
                <a>حدد موعد استشارتك</a>
              </Link>
            </li>
            <li>
              <Link href="mailto: abc@example.com">
                <a>help@domain.com</a>
              </Link>
            </li>
            <li>
              <Link href="https://wa.me/01019910600">
                <a>اضغط هنا للتواصل عبر واتس اب</a>
              </Link>
            </li>
            <li>
              <Link href="tel: 00201019910600">
                <a>01019910600</a>
              </Link>
            </li>
          </ul>
        </div>
        <form className={Style.contactForm}>
          <div>
            <input placeholder="الاسم" />
          </div>
          <div>
            <input placeholder="الهاتف" />
          </div>
          <div>
            <textarea placeholder="الاستفسار" rows="4" res />
          </div>
          <div>
            <button>ارسال</button>
          </div>
        </form>
      </section>
      <section className={Style.privacy}>
        <ul>
          <li>
            <Link href="/">الشروط والاحكام</Link>
          </li>
          <li>|</li>
          <li>
            <Link href="/">سياسة الخصوصية</Link>
          </li>
        </ul>
      </section>
      <div className={Style.spratingLine}></div>
      <div className={Style.rightsReserve}>
        <p>
          جميع الحقوق محفوظة لدي شركة العميد للخرسانة {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
