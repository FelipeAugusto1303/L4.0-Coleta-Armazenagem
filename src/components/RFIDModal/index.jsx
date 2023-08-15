import React, { useState, useRef, useEffect } from 'react'
import CustomModal from '../CustomModal'
import { TextField, Box, Button, Typography } from '@mui/material'

function RFIDModal({ open, close, handleNext, id }) {
  const [value, setValue] = useState(null)
  const inputRef = useRef()

  const setFocus = (event) => {
    inputRef.current.focus()
  }

  useEffect(() => {
    setTimeout(() => setFocus(), 200)
  }, [open])

  const handleClose = () => {
    setValue(null)
    close(false)
  }

  return (
    <CustomModal open={open}>
      <Box
        component='div'
        sx={{ display: 'flex', flexDirection: 'column', padding: '12px', gap: '30px' }}
      >
        {id ? (
          <Typography variant='h4'>Posto de Coleta {id}</Typography>
        ) : (
          <Typography variant='h4'>Leitura do RFID</Typography>
        )}
        {open ? (
          <TextField
            value={value}
            onChange={(e) => setValue(e.target.value)}
            variant='outlined'
            inputRef={inputRef}
            sx={{ width: '100%' }}
          />
        ) : (
          <TextField />
        )}
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
            disabled={value === null || value === ''}
            onClick={() => {
              handleNext(value)
              setValue(null)
            }}
          >
            Confirmar Coleta
          </Button>
        </Box>
      </Box>
    </CustomModal>
  )
}

export default RFIDModal
