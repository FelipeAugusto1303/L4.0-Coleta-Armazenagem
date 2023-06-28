import { styled } from 'styled-components'

export const Button = styled.button`
    height: 100px;
    width: 400px;
    background: ${(props) => (props.color === 'primary' ? '#4424D6' : '#347C98')};
    border-radius: 8px;
    box-shadow: 0;
    border: 0;
    color: #fff;
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
