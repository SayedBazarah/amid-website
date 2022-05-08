import Link from 'next/link';
import Style from './header.module.css'

function Header() {
    return <header>
       <div className={Style.logo}>العميد</div>
        <div className={Style.nav}>
            <div className={Style.burger}>
                <div></div>
                <div></div>
                <div></div>
                </div>
            <ul className={Style.links}>
                <li><Link href='/'><a>خرسانة مطبوعة</a></Link></li>
                <li><Link href='/'><a>خرسانة هليكوبتر</a></Link></li>
                <li><Link href='/'><a>ايبوكسى</a></Link></li>
                <li><Link href='/'><a>تواصل معنا</a></Link></li>
            </ul>
        </div>
    </header>


}

export default Header;