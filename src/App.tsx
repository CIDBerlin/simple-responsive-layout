// Styles
import styled from 'styled-components';

// Components
import {Navbar} from "./components/navbar/Navbar";
import {Promo} from "./components/promo/Promo";
import {Features} from "./components/features/Features";
import {Contents} from "./components/contents/Contents";
import {Gallery} from "./components/gallery/Gallery";
import {Partners} from "./components/partners/Partners";
import {Testimonials} from "./components/testimonials/Testimonials";
import {Fonts} from "./components/fonts/Fonts";
import {Footer} from "./components/footer/Footer";

export const App = ():JSX.Element => {

    const Wrapper = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      @media (max-width: 1536px) {
        max-width: 1536px;
      }
      @media (max-width: 1280px) {
        max-width: 1280px;
      }
      @media (max-width: 1024px) {
        max-width: 1024px;
      }
      @media (max-width: 768px) {
        max-width: 768px;
      }
      @media (max-width: 640px) {
        max-width: 640px;
      }
    `
    const Block = styled.div({
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        padding: '50px 0',
        margin: '0 0 100px 0'
    })

  return (
      <Wrapper>
          <Navbar />
          <Block>
              <Promo />
          </Block>
          <Block>
              <Features />
          </Block>
          <Block>
              <Contents />
          </Block>
          <Block>
              <Gallery />
          </Block>
          <Block>
              <Partners />
          </Block>
          <Block>
              <Testimonials />
          </Block>
          <Block>
              <Fonts />
          </Block>
          <Block>
              <Footer />
          </Block>
      </Wrapper>
  )
}