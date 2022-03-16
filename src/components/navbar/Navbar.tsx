import {useEffect, useState} from "react";

// Styles
import styles from './navbar.module.scss';

// Icons
import logo from '../../assets/img/logo.png';

// Components
import {MobileNavbar} from "../mobile-navbar/MobileNavbar";

export const Navbar = ():JSX.Element => {

    const [status, setStatus] = useState(false);

    useEffect(() => {
        if (status) {
            document.body.classList.add('block');
        } else {
            document.body.classList.remove('block');
        }
    }, [status])

    return (
        <div className={styles.navbar}>
            <div className={styles.navbar__logo}>
                <img src={logo} alt=""/>
            </div>
            <div className={styles.navbar__menu}>
                <div className={styles.navbar__menu__item}>Home</div>
                <div className={styles.navbar__menu__item}>Product</div>
                <div className={styles.navbar__menu__item}>About</div>
                <div className={styles.navbar__menu__item}>Contact</div>
            </div>
            <div className={styles.navbar__settings}>
                <div className={styles.navbar__settings__login}>login</div>
                <div className={styles.navbar__settings__burger} onClick={() => setStatus(!status)} />
            </div>
            {status ? <MobileNavbar /> : null}
        </div>
    )
}