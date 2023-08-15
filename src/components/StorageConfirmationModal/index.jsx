import React, { useState, useEffect, useRef } from 'react'
import CustomModal from '../CustomModal'
import { TextField, Box, Button, Typography } from '@mui/material'

function StorageConfirmationModal({ open, close, handleBack, rfid, storageId }) {
  const [value, setValue] = useState(null)

  const handleClose = () => {
    setValue(null)
    close(false)
    window.location.reload()
  }

  return (
    <CustomModal open={open}>
      <Box
        component='div'
        sx={{ display: 'flex', flexDirection: 'column', padding: '12px', gap: '30px' }}
      >
        <Typography variant='h4'>Confirmar Armazenagem</Typography>

        <Typography variant='h6'>RFID: {rfid ? rfid : null}</Typography>
        <Typography variant='h6'>Local: {storageId ? storageId : null}</Typography>

        <Box component='div' sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button
            sx={{
              height: '60px',
              width: '300px',
              fontFamily: "'Roboto', sans-serif",
              fontSize: '18px',
            }}
            variant='outlined'
            color='error'
            onClick={handleBack}
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
            onClick={handleClose}
          >
            Concluir
          </Button>
        </Box>
      </Box>
    </CustomModal>
  )
}

export default StorageConfirmationModal
