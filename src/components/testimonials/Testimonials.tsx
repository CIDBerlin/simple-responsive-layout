// Styles
import styles from './testimonials.module.scss';

// Icons
import chelIcon from './img/chel.png';

// Components
import {Title} from "../title/Title";
import {TestimonialsItem} from "../testimonials-item/TestimonialsItem";

export const Testimonials = ():JSX.Element => {
    return (
        <>
            <Title title='Testimonials' desc='Testimonials from our clients, allowing you to understand the structure of our work' />
            <div className={styles.testimonials__block}>
                <TestimonialsItem title='Claire Bell'
                                  job='Designer'
                                  icon={chelIcon} />
                <TestimonialsItem title='Francisco Lane'
                                  job='Designer'
                                  icon={chelIcon} />
                <TestimonialsItem title='Ralph Fisher'
                                  job='Designer'
                                  icon={chelIcon} />
                <TestimonialsItem title='Jorge Murphy'
                                  job='Designer'
                                  icon={chelIcon} />
            </div>
        </>
    )
}