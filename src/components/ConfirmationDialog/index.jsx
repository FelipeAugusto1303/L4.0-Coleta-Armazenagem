import React from 'react'
import CustomModal from '../CustomModal'
import { Title } from '../Title'
import { SimpleButton } from '../SimpleButton'
import './styles.css'
import { Text } from '../Text'
import { Button, Box } from '@mui/material'

function ConfirmationDialog({ open, handleClose }) {
  return (
    <CustomModal open={open}>
      <Box component='div' sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div id='confirmation-title'>
          <Title variant='h1'>Confirmação de Entrega</Title>
          <Text fontSize='18px'>Aguardando confirmação de entrega na área de picking.</Text>
        </div>
        <div id='confirmation-button'>
          <Button
            sx={{
              height: '60px',
              width: '300px',
              fontFamily: "'Roboto', sans-serif",
              fontSize: '18px',
            }}
            variant='outlined'
            color='error'
            onClick={handleClose}
          >
            Cancelar
          </Button>
          <Button
            sx={{
              height: '60px',
              width: '300px',
              fontFamily: "'Roboto', sans-serif",
              fontSize: '18px',
            }}
            variant='contained'
          >
            Confirmar Entrega
          </Button>
        </div>
      </Box>
    </CustomModal>
  )
}

export default ConfirmationDialog
