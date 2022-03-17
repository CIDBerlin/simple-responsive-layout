// Styles
import styles from './column.module.scss';

interface ColumnProps {
    title: string,
    content: string[],
}

export const Column = ({title, content}: ColumnProps):JSX.Element => {

    const contentElements = content.map((item, index) => <div key={index} className={styles.column__item}>{item}</div>)

    return (
        <div className={styles.column}>
            <div className={styles.column__title}>{title}</div>
            {contentElements}
        </div>
    )
}