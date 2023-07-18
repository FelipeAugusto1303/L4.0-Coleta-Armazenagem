import { Modal, Box } from '@mui/material'
import React from 'react'

// import { Container } from './styles';

function CustomModal({ open, handleClose, ...props }) {
  console.log(props)
  const styles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: '12px',
    boxShadow: 24,
    padding: '12px',
  }
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={styles}>{props.children}</Box>
    </Modal>
  )
}

export default CustomModal
