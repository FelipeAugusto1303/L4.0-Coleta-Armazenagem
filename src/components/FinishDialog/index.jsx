import React from 'react'
import CustomModal from '../CustomModal'
import { Title } from '../Title'
import { Button } from '@mui/material'
import './styles.css'
import { Text } from '../Text'

function FinishDialog({ open, handleClose, handleFinish }) {
  return (
    <CustomModal open={open} handleClose={handleClose}>
      <div id='finish-title'>
        <Title variant='h1'>Concluir entrega</Title>
        <Text fontSize='18px'>Você tem certeza que deseja concluir essa operação?</Text>
      </div>
      <div id='finish-button'>
        <Button
          sx={{
            height: '60px',
            width: '300px',
            fontFamily: "'Roboto', sans-serif",
            fontSize: '18px',
          }}
          variant='contained'
          color='success'
          onClick={handleFinish}
        >
          Sim
        </Button>
        <Button
          sx={{
            height: '60px',
            width: '300px',
            fontFamily: "'Roboto', sans-serif",
            fontSize: '18px',
          }}
          variant='contained'
          color='error'
          onClick={handleClose}
        >
          Não
        </Button>
      </div>
    </CustomModal>
  )
}

export default FinishDialog
