import React from 'react'

import './styles.css'
import { Title } from '../../components/Title'
import { HomeButton } from '../../components/HomeButton'
import ReplyIcon from '@mui/icons-material/Reply'
import { useNavigate } from 'react-router-dom'
import { TitleContainer } from '../../components/TItleContainer'

function Collect() {
  const navigate = useNavigate()
  return (
    <div id='collect-container'>
      <div id='collect-appbar'>
        <TitleContainer>
          <Title variant='h1'>Requisições de Retirada</Title>
          <Title variant='h3'>(SAGV)</Title>
        </TitleContainer>

        <HomeButton onClick={() => navigate('/')}>
          <ReplyIcon font-fontSize='small' />
          Home
        </HomeButton>
      </div>
    </div>
  )
}

export default Collect
