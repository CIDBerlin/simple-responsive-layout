import styles from './testimonials-item.module.scss';

interface TestimonialsItemProps {
    title: string,
    job: string,
    icon: string,
}

export const TestimonialsItem = ({title, job, icon}: TestimonialsItemProps):JSX.Element => {
    return (
        <div className={styles.item}>
            <div className={styles.item__title}>
                <div className={styles.item__title__icon}>
                    <img src={icon} alt=""/>
                </div>
                <div className={styles.item__title__info}>
                    <div>{title}</div>
                    <div>{job}</div>
                </div>
            </div>
            <div className={styles.item__desc}>
                Slate helps you see how many more days
                you need to work to reach your financial
                goal for the month and year. Slate helps
                you see how many more days
                you need to work to reach your financial
                goal for the month and year.
            </div>
        </div>
    )
}