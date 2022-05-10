import Link from "next/link";
import { useState } from "react";
import Style from "./header.module.css";

function Header() {
  const [navState, setNavState] = useState(false);

  const navOpenHandler = () => {
    setNavState(!navState);
  };
  return (
    <header className={Style.header}>
      <div className={Style.container}>
        <div className={Style.logo}>العميد</div>
        <div className={Style.nav}>
          <div
            onClick={navOpenHandler}
            className={navState ? Style.closeIcon : null}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
          <ul className={navState ? Style.openNav : Style.links}>
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
                <a className={Style.button}>تواصل معنا</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
