import React from 'react'
import { ButtonContainer } from '../../components/ButtonContainer'
import { Button } from '../../components/Button'
import './styles.css'
import { Title } from '../../components/Title'
import { TitleContainer } from '../../components/TItleContainer'
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt'
import StorageIcon from '@mui/icons-material/Storage'

function Home() {
  return (
    <div id='home-container'>
      <TitleContainer>
        <Title variant='h1'>Sistema de Coleta e Armazenamento</Title>
        <Title variant='h3'>(SAGV)</Title>
      </TitleContainer>

      <ButtonContainer>
        <Button color='primary' onClick={() => console.log('go to Storage')}>
          <StorageIcon fontSize='large' />
          Armazenamento
        </Button>
        <Button color='secondary' onClick={() => console.log('go to collect')}>
          <SystemUpdateAltIcon fontSize='large' />
          Coleta
        </Button>
      </ButtonContainer>
    </div>
  )
}

export default Home
