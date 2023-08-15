import React from 'react'
import { ButtonContainer } from '../../components/ButtonContainer'
import { Button } from '../../components/Button'
import './styles.css'
import { Title } from '../../components/Title'
import { MainTitleContainer } from '../../components/MainTItleContainer'
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt'
import StorageIcon from '@mui/icons-material/Storage'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  return (
    <div id='home-container'>
      <MainTitleContainer>
        <Title variant='h1'>Sistema de Coleta e Armazenamento</Title>
        <Title variant='h3'>(SAGV)</Title>
      </MainTitleContainer>

      <ButtonContainer>
        <Button color='primary' onClick={() => navigate('/storage')}>
          <StorageIcon fontSize='large' />
          Armazenamento
        </Button>
        <Button color='secondary' onClick={() => navigate('/collect')}>
          <SystemUpdateAltIcon fontSize='large' />
          Coleta
        </Button>
      </ButtonContainer>
    </div>
  )
}

export default Home
