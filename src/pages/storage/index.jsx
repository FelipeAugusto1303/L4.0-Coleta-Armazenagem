import React, { useState } from 'react'
import './styles.css'
import { TitleContainer } from '../../components/TItleContainer'
import { Title } from '../../components/Title'
import { HomeButton } from '../../components/HomeButton'
import ReplyIcon from '@mui/icons-material/Reply'
import RFIDModal from '../../components/RFIDModal'
import { useNavigate } from 'react-router-dom'
import ProductInfo from './ProductInfo'
import { Box, Button } from '@mui/material'
import StorageModal from '../../components/StorageModal'
import StorageConfirmationModal from '../../components/StorageConfirmationModal'

function Storage() {
  const [openRFID, setOpenRFID] = useState(true)
  const [rfidValue, setRfidValue] = useState(null)
  const [storageId, setStorageId] = useState(null)
  const [openStorage, setOpenStorage] = useState(false)
  const [openConfirmation, setOpenConfirmation] = useState(false)
  const navigate = useNavigate()

  const handleOpenDialog = (rfidValue) => {
    setRfidValue(rfidValue)
    setOpenRFID(false)
  }

  const handleStorage = () => {
    setOpenStorage(true)
  }

  const handleOpenConfimation = (value) => {
    setStorageId(value)
    setOpenStorage(false)
    setOpenConfirmation(true)
  }

  const handleBack = () => {
    setOpenConfirmation(false)
    setOpenStorage(true)
  }
  return (
    <div id='storage-container'>
      <div id='storage-appbar'>
        <TitleContainer>
          <Title variant='h1'>Sistema de Armazenagem</Title>
          <Title variant='h3'>(SAGV)</Title>
        </TitleContainer>

        <HomeButton onClick={() => navigate('/')}>
          <ReplyIcon font-fontSize='small' />
          Home
        </HomeButton>
      </div>
      <div>
        {rfidValue !== null ? (
          <ProductInfo handleOpenStorage={handleStorage} rfidValue={rfidValue} />
        ) : (
          <Box
            component='div'
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '70vh',
            }}
          >
            <Button
              sx={{
                height: '60px',
                width: '300px',
                fontFamily: "'Roboto', sans-serif",
                fontSize: '18px',
              }}
              variant='contained'
              onClick={() => {
                setOpenRFID(true)
              }}
            >
              Ler RFID
            </Button>
          </Box>
        )}
      </div>

      <RFIDModal open={openRFID} close={setOpenRFID} handleNext={handleOpenDialog} />
      <StorageModal open={openStorage} close={setOpenStorage} handleNext={handleOpenConfimation} />
      <StorageConfirmationModal
        open={openConfirmation}
        close={setOpenConfirmation}
        handleBack={handleBack}
        rfid={rfidValue}
        storageId={storageId}
      />
      {/* <ConfirmationDialog
        open={openDialog}
        handleClose={handleCloseDialog}
        handleNext={handleOpenFinalDialog}
      />
      <FinishDialog
        open={openFinalDialog}
        handleClose={handleCloseFinalDialog}
        handleFinish={handleFinishCollect}
      /> */}
    </div>
  )
}

export default Storage
