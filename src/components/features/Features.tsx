// Styles
import styles from './features.module.scss';

// Icons
import mainIcon from './img/main-icon.png';
import assetsIcon from './img/assets-icon.png';
import truthIcon from '../desc-item/img/truth.svg';
import interfaceIcon from '../desc-item/img/interface.svg';
import rulesIcon from '../desc-item/img/rules.svg';

// Components
import {Title} from "../title/Title";
import {DescItem} from "../desc-item/DescItem";

export const Features = ():JSX.Element => {
    return (
        <>
            <Title title='FEATURES'
                   desc='Most calendars are designed for teams.
                         Slate is designed for freelancers who want
                         a simple way to plan their schedule.'/>
            <div className={styles.content}>
                <div className={styles.content__icons}>
                    <div className={styles.content__icons__main}>
                        <img src={mainIcon} alt=""/>
                    </div>
                    <div className={styles.content__icons__assets}>
                        <img src={assetsIcon} alt=""/>
                    </div>
                </div>
                <div className={styles.content__info}>
                    <DescItem title='A single source of truth'
                              desc='
                                    When you add work to your
                                    Slate calendar we automatically
                                    calculate useful insights'
                              icon={truthIcon}
                    />
                    <DescItem title='Intuitive interface'
                              desc='
                                    When you add work to your
                                    Slate calendar we automatically
                                    calculate useful insights'
                              icon={interfaceIcon}
                    />
                    <DescItem title='Or with rules'
                              desc='When you add work to your
                                    Slate calendar we automatically
                                    calculate useful insights
                                    '
                              icon={rulesIcon}
                    />
                </div>
            </div>
        </>
    )
}