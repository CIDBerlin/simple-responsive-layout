import styled from "styled-components";

interface ButtonProps {
    content: string,
    filled: boolean
}

export const Button = ({content, filled}: ButtonProps):JSX.Element => {

    const ButtonStyle = styled.button`
      
      font-size: 17px;
      color: #fff;
      padding: ${filled ? '20px 40px' : '18px 38px'};
      transition: background-color 0.4s linear;
      background-color: ${filled ? '#4452FE' : 'transparent'};
      border: ${filled ? 'none' : '1px solid #fff'};
      &:hover {
        background-color: ${filled ? '#7a84ff' : '#7c7c7c'};
      }
    `

    return (
        <ButtonStyle>{content}</ButtonStyle>
    )
}