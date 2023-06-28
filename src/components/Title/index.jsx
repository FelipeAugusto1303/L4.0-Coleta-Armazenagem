import { styled } from 'styled-components'

export const Title = (props) => {
  console.log('variant', props.variant)
  switch (props.variant) {
    case 'h1':
      return <H1>{props.children}</H1>
    case 'h2':
      return <H2>{props.children}</H2>
    case 'h3':
      return <H3>{props.children}</H3>
    case 'h4':
      return <H4>{props.children}</H4>
    case 'h6':
      return <H6>{props.children}</H6>
    default:
      return <H1>{props.children}</H1>
  }
}

const H1 = styled.h1`
    font-family: 'Roboto', sans-serif;
    color: #161326;
`
const H2 = styled.h2`
    font-family: 'Roboto', sans-serif;
    color: #161326;
`
const H3 = styled.h3`
    font-family: 'Roboto', sans-serif;
    color: #161326;
    font-weight: 400;
`

const H4 = styled.h4`
    font-family: 'Roboto', sans-serif;
    color: #161326;
`

const H6 = styled.h6`
    font-family: 'Roboto', sans-serif;
    color: #161326;
`
