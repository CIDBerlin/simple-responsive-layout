// Styles
import styles from './promo.module.scss';
import styled, {keyframes} from "styled-components";

// Icons
import screensBackground from './img/screens.png';

// Components
import {Button} from "../button/Button";

export const Promo = ():JSX.Element => {

    const ButtonsWrapper = styled.div`
        display: flex;
        button {
          &:nth-child(2) {
            margin: 0 0 0 20px;
            @media (max-width: 640px) {
              margin: 0 0 20px 0;
            }
          }
      }
    }
        @media (max-width: 640px) {
          flex-direction: column;
        button {
            &:first-child {
              margin: 0 0 21px 0;
            }
        }
    `
    const FooterFade = keyframes`
      0% {
        background-position-y: 0;
      }
      50% {
        background-position-y: 30px;
      }
      100% {
        background-position-y: 0;
      }
    `
    const PromoFooter = styled.div`
      width: 100%;
      height: 841px;
      margin: 37px 0 0 0;
      background: url(${screensBackground}) center center no-repeat;
      animation: 3.5s linear 1s infinite running ${FooterFade};
      background-size: contain;
      &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 550px;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #0E0E0E 96.15%);
        bottom: 0;
        @media (max-width: 640px) {
          height: 328px;
        }
      }
      @media (max-width: 640px) {
        background-size: cover;
        height: 435px;
        margin: 57px 0 0 0;
      }
    `

    return (
        <>
            <div className={styles.header}>
                <div className={styles.header__title}>
                    Work at the speed of thought.
                </div>
                <div className={styles.header__desc}>
                    Most calendars are designed for teams. Slate is designed for
                    freelancers who want a simple way to plan their schedule.
                </div>
            </div>
            <ButtonsWrapper>
                <Button content='Try For Free' filled={true} />
                <Button content='Learn more' filled={false} />
            </ButtonsWrapper>
            <PromoFooter />
        </>
    )
}