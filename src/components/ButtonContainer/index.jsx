import { styled } from 'styled-components'

export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 24px;
    padding-right: 24px;
    height: 50%;

    @media (max-width: 800px) {
        flex-direction: column;
    }
`
