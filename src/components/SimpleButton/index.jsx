import { styled } from 'styled-components'
import { colorpalette } from '../../Commons/colors'

export const FilledButton = styled.button`
    height: 70px;
    width: 250px;
    background: ${(props) =>
      props.color === 'primary' ? colorpalette.primary : colorpalette.secondary};
    border-radius: 8px;
    box-shadow: 0;
    border: 0;
    color: ${colorpalette.common.white};
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

`

const OutlinedButton = styled.button`
  height: 70px;
    width: 250px;
    background: ${colorpalette.common.white};
    border: 1px solid ${(props) =>
      props.color === 'primary' ? colorpalette.primary : colorpalette.secondary};
    border-radius: 8px;
    box-shadow: 0;
    border: 0;
    color: ${(props) =>
      props.color === 'primary' ? colorpalette.primary : colorpalette.secondary};
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const SimpleButton = ({ variant, color, onClick }) => {
  if (variant === 'filled') {
    return <FilledButton color={color} onClick={onClick} />
  } else {
    return <OutlinedButton color={color} onClick={onClick} />
  }
}
