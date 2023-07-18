import { styled } from 'styled-components'
import { colorpalette } from '../../Commons/colors'

export const Button = styled.button`
    height: 100px;
    width: 400px;
    background: ${(props) =>
      props.color === 'primary' ? colorpalette.primary : colorpalette.secondary};
    border-radius: 8px;
    box-shadow: 0;
    border: 0;
    color: ${colorpalette.common.white};
    font-size: 30px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 16px;

    @media (max-width: 820px) {
        width: 350px;
    }
`
