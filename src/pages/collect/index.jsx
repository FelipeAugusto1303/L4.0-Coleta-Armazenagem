import React, { useState } from 'react'

import './styles.css'
import { Title } from '../../components/Title'
import { HomeButton } from '../../components/HomeButton'
import ReplyIcon from '@mui/icons-material/Reply'
import { useNavigate } from 'react-router-dom'
import { TitleContainer } from '../../components/TItleContainer'
import CollectCard, { CardContainer } from '../../components/CollectCard'
import { cards } from '../../mock/card.mock'
import CustomModal from '../../components/CustomModal'
import ConfirmationDialog from '../../components/ConfirmationDialog'
import FinishDialog from '../../components/FinishDialog'

function Collect() {
  const [openDialog, setOpenDialog] = useState(false)
  const [openFinalDialog, setOpenFinalDialog] = useState(false)
  const navigate = useNavigate()
  const handleOpenDialog = () => setOpenDialog(true)
  const handleCloseDialog = () => {
    setOpenFinalDialog(true)
    setOpenDialog(false)
  }

  const handleOpenFinalDialog = () => setOpenFinalDialog(true)
  const handleCloseFinalDialog = () => setOpenFinalDialog(false)
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
      <div id='collect-table'>
        <CardContainer>
          {cards
            .sort(function (a, b) {
              return new Date(a.time) - new Date(b.time)
            })
            .map((card) => {
              return <CollectCard key={card.id} request={card} onClick={handleOpenDialog} />
            })}
        </CardContainer>
      </div>
      <ConfirmationDialog open={openDialog} handleClose={handleCloseDialog} />
      <FinishDialog open={openFinalDialog} handleClose={handleCloseFinalDialog} />
    </div>
  )
}

export default Collect
