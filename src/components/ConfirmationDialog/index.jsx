import React from 'react'
import CustomModal from '../CustomModal'
import { Title } from '../Title'
import { SimpleButton } from '../SimpleButton'
import './styles.css'
import { Text } from '../Text'

function ConfirmationDialog({ open, handleClose }) {
  return (
    <CustomModal open={open} handleClose={handleClose}>
      <div id='confirmation-title'>
        <Title variant='h1'>Confirmação de Entrega</Title>
        <Text fontSize='18px'>Aguardando confirmação de entrega na área de picking.</Text>
      </div>
      <div id='confirmation-button'>
        <SimpleButton variant='filled' color='primary' onClick={handleClose}>
          Confirmar Entrega
        </SimpleButton>
      </div>
    </CustomModal>
  )
}

export default ConfirmationDialog
