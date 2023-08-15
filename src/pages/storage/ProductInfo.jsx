import { Box, Button, Typography } from '@mui/material'
import React from 'react'

// import { Container } from './styles';

function ProductInfo({ handleOpenStorage, rfidValue }) {
  return (
    <Box
      component='div'
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingY: '56px',
      }}
    >
      <Box component='div' sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant='h6'>RFID: {rfidValue ? rfidValue : null}</Typography>
        <Typography variant='h6'>Produto: (Informaçoes do produto)</Typography>
        <Typography variant='h6'>Quantidade: (Quantidade de produtos)</Typography>
      </Box>
      <Box component='div' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Button
          sx={{
            height: '50px',
            width: '200px',
            fontFamily: "'Roboto', sans-serif",
            fontSize: '15px',
          }}
          variant='outlined'
          onClick={handleOpenStorage}
        >
          Armazenar
        </Button>
      </Box>
    </Box>
  )
}

export default ProductInfo
