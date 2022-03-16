// Styles
import styles from './footer.module.scss';
import {Column} from "../column/Column";
import styled from "styled-components";

// Icons
import twitterIcon from './img/twitter.svg';
import facebookIcon from './img/facebook.svg';
import linkedinIcon from './img/linkedin.svg';
import locationIcon from './img/location.svg';
import phoneIcon from './img/phone.svg';

export const Footer = ():JSX.Element => {

    const Block = styled.div`
      display: flex;
      @media (max-width: 768px) {
        flex-direction: column;
      }
    `

    return (
        <Block>
            <Column title='Fingertipe' content={['Home', 'Examples', 'Pricing', 'Updates']} />
            <Column title='Resources' content={['Home', 'Examples', 'Pricing', 'Updates']} />
            <Column title='About' content={['Home', 'Examples', 'Pricing', 'Updates']} />
            <div className={styles.network}>
                <div className={styles.network__contact}>
                    <div className={styles.network__contact__icon}>
                        <img src={locationIcon} alt=""/>
                    </div>
                    <div>Layout created by</div>
                </div>
                <div className={styles.network__contact}>
                    <div className={styles.network__contact__icon}>
                        <img src={phoneIcon} alt=""/>
                    </div>
                    <a href="https://github.com/CIDBerlin">CIDBerlin</a>
                </div>
                <div className={styles.network__social}>
                    <div className={styles.network__social__item}>
                        <img src={twitterIcon} alt=""/>
                    </div>
                    <div className={styles.network__social__item}>
                        <img src={facebookIcon} alt=""/>
                    </div>
                    <div className={styles.network__social__item}>
                        <img src={linkedinIcon} alt=""/>
                    </div>
                </div>
            </div>
        </Block>
    )
}