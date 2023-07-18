import { styled } from 'styled-components'

export const Text = styled.p`
    color: ${(props) => props.color ?? '#000'};
    font-size: ${(props) => props.fontSize ?? '20px'};
    font-family: 'Roboto', sans-serif;
`
