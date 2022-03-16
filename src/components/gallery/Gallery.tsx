// Styles
import styles from './gallery.module.scss';

// Icons
import icon1 from './img/icon1.png';
import icon2 from './img/icon2.png';
import icon3 from './img/icon3.png';
import icon4 from './img/icon4.png';
import icon5 from './img/icon5.png';
import icon6 from './img/icon6.png';
import icon7 from './img/icon7.png';

// Components
import {Title} from "../title/Title";
import {Button} from "../button/Button";

export const Gallery = ():JSX.Element => {
    return (
        <>
            <Title title='Gallery'
                   desc="We focus on ergonomics and meeting you where you work.
                         It's only a keystroke away." />
            <div className={styles.block}>
                <div className={styles.block__item}>
                    <img src={icon1} alt=""/>
                </div>
                <div className={styles.block__item}>
                    <img src={icon2} alt=""/>
                </div>
                <div className={styles.block__item}>
                    <img src={icon3} alt=""/>
                </div>
                <div className={styles.block__item}>
                    <img src={icon4} alt=""/>
                </div>
                <div className={styles.block__item}>
                    <img src={icon5} alt=""/>
                </div>
                <div className={styles.block__item}>
                    <img src={icon6} alt=""/>
                </div>
                <div className={styles.block__item}>
                    <img src={icon7} alt=""/>
                </div>
            </div>
            <Button content='See more' filled={false} />
        </>
    )
}