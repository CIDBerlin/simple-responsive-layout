import styles from './mobile-navbar.module.scss';
import styled, {keyframes} from "styled-components";
import { bounceInLeft, fadeIn } from 'react-animations';
import logo from '../../assets/img/logo.png';

export const MobileNavbar = ():JSX.Element => {

    // Animation
    const bounceAnimation = keyframes`${bounceInLeft}`;
    const fadeAnimation = keyframes`${fadeIn}`;
    // Styles
    const BouncyDiv = styled.div`
      font-family: 'Roboto Light', sans-serif;
      animation: 1s ${bounceAnimation};
      font-size: 24px;
      margin: 0 0 24px 0;
      &:nth-child(1) {
        animation-duration: 1.1s;
      }
      &:nth-child(2) {
        animation-duration: 1.2s;
      }
      &:nth-child(3) {
        animation-duration: 1.3s;
      }
      &:nth-child(4) {
        animation-duration: 1.4s;
      }
      &:nth-child(5) {
        animation-duration: 1.5s;
      }
      &:hover {
        font-weight: bold;
      }
    `;
    const FadeDiv = styled.div`
      animation: 1s ${fadeAnimation};
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: 100vh;
      padding: 120px 0 0 0;
      top: 0;
      left: 0;
      z-index: 100;
      background-color: #000000;
      background-image: linear-gradient(147deg, #000000 0%, #434343 74%);
      color: #fff;
    `

    return (
        <FadeDiv>
            <div className={styles.logo}>
                <img src={logo} alt=""/>
            </div>
            <BouncyDiv>Home</BouncyDiv>
            <BouncyDiv>Product</BouncyDiv>
            <BouncyDiv>About</BouncyDiv>
            <BouncyDiv>Contact</BouncyDiv>
            <div className={styles.created}>Created by <a href="https://github.com/CIDBerlin">CIDBerlin</a></div>
        </FadeDiv>
    )
}