import React from 'react'
import CustomModal from '../CustomModal'
import { Title } from '../Title'
import { SimpleButton } from '../SimpleButton'
import './styles.css'
import { Text } from '../Text'

function FinishDialog({ open, handleClose }) {
  return (
    <CustomModal open={open} handleClose={handleClose}>
      <div id='finish-title'>
        <Title variant='h1'>Concluir entrega</Title>
        <Text fontSize='18px'>Você tem certeza que deseja concluir essa operação?</Text>
      </div>
      <div id='finish-button'>
        <SimpleButton onClick={handleClose}>Concluir</SimpleButton>
        <SimpleButton onClick={handleClose}>Cancelar</SimpleButton>
      </div>
    </CustomModal>
  )
}

export default FinishDialog
