import styles from './desc-item.module.scss';
import truthIcon from './img/truth.svg';

interface DescItemProps {
    title: string,
    desc: string,
    icon: string
}

export const DescItem = ({title, desc, icon}: DescItemProps):JSX.Element => {
    return (
        <div className={styles.desc}>
            <div className={styles.desc__title}>
                <div className={styles.desc__title__icon}>
                    <img src={icon} alt=""/>
                </div>
                <div className={styles.desc__title__text}>{title}</div>
            </div>
            <div className={styles.desc__more}>{desc}</div>
        </div>
    )
}