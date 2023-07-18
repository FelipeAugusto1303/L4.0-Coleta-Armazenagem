import { styled } from 'styled-components'
import { colorpalette } from '../../Commons/colors'

export const HomeButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 180px;
    height: 70px;
    background-color: ${colorpalette.primary};
    border-radius: 8px;
    color: ${colorpalette.common.white};
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: bold;    
`
