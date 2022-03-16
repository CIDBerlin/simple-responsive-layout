// Styles
import styles from './fonts.module.scss';

// Icons
import layoutIcon from './img/layout.png';
import layoutSmallIcon from './img/layoutSmall.png';

// Components
import {Button} from "../button/Button";
import {useEffect, useState} from "react";

export const Fonts = ():JSX.Element => {

    const [width, setWidth] = useState(window.innerWidth)

    const handleResize = () => setWidth(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <div className={styles.block}>
            <div className={styles.block__info}>
                <div className={styles.block__info__title}>
                    OpenType features
                    and Variable fonts
                </div>
                <Button content='Try For Free' filled={true} />
            </div>
            <div className={styles.block__icon}>
                <img src={width > 1280 ? layoutIcon : layoutSmallIcon} alt=""/>
            </div>
        </div>
    )
}