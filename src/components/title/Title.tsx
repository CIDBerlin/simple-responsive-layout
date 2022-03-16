import styles from './title.module.scss';

interface TitleProps {
    title: string,
    desc?: string
}

export const Title = ({title, desc}: TitleProps):JSX.Element => {
    return (
        <div className={styles.title}>
            <div className={styles.title__main}>{title}</div>
            <div className={styles.title__desc}>{desc}</div>
        </div>
    )
}