// Styles
import styles from './partners.module.scss';

// Icons
import icon1 from './img/icon1.svg';
import icon2 from './img/icon2.svg';
import icon3 from './img/icon3.svg';
import icon4 from './img/icon4.svg';
import icon5 from './img/icon5.svg';
import icon6 from './img/icon6.svg';

// Components
import {Title} from "../title/Title";
import {Button} from "../button/Button";

export const Partners = ():JSX.Element => {
    return (
        <>
            <Title title='Partners'
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
            </div>
            <Button content='All Partners' filled={false} />
         </>
    )
}