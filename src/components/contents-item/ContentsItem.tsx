import styles from './contents-item.module.scss';
import {Button} from "../button/Button";

interface ContentsItemProps {
    title: string,
    desc: string,
    button: string,
    image: string,
    variable: boolean
}

export const ContentsItem = ({title, desc, button, image, variable}: ContentsItemProps):JSX.Element => {

    const setImageVariable = () => {
        if (variable) {
            return (
                <div className={styles.laptop}>
                    <div className={styles.laptop__screen}>
                        <div className={styles.laptop__screen__image}>
                            <img src={image} alt=""/>
                        </div>
                    </div>
                    <div className={styles.laptop__keyboard}>
                        <div className={styles.laptop__keyboard__header} />
                        <div className={styles.laptop__keyboard__footer} />
                    </div>
                </div>
            )
        } else {
            return (
                <div className={styles.contentsItem__image}>
                    <img src={image} alt=""/>
                </div>
            )
        }
    }

    return (
        <div className={styles.contentsItem}>
            <div className={styles.contentsItem__title}>{title}</div>
            <div className={styles.contentsItem__desc}>{desc}</div>
            <Button content={button} filled={true} />
            {setImageVariable()}
        </div>
    )
}