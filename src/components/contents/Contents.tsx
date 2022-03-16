// Styles
import styled from "styled-components";

// Icons
import boardIcon from './img/board.png';
import screenIcon from './img/screen.png';

// Components
import {Title} from "../title/Title";
import {ContentsItem} from "../contents-item/ContentsItem";


export const Contents = ():JSX.Element => {

    const Block = styled.div`
        display: flex;
        justify-content: center;
        width: 100%;
        margin: 44px 0 0 0;
        padding: 10px;
        @media (max-width: 1024px) {
          flex-direction: column;
          align-items: center;
        }
    `

    return (
        <>
            <Title title='Contents'
                   desc="We focus on ergonomics and meeting you where you work.
                         It's only a keystroke away." />
            <Block>
                <ContentsItem
                    title='Work'
                    desc="Ever wondered if you're too reliant
                          on a client for work? Slate helps
                          you identify."
                    button='Sign Up'
                    image={screenIcon}
                    variable={true}
                />
                <ContentsItem
                    title='Design with real data'
                    desc="Ever wondered if you're too reliant
                          on a client for work? Slate helps
                          you identify."
                    button='Try For Free'
                    image={boardIcon}
                    variable={false}
                />
            </Block>
        </>
    )
}