import React, { useState, useEffect } from 'react'
import api from '../../services/api'

import './styles.css'
import { Title } from '../../components/Title'
import { HomeButton } from '../../components/HomeButton'
import ReplyIcon from '@mui/icons-material/Reply'
import { useNavigate } from 'react-router-dom'
import { TitleContainer } from '../../components/TItleContainer'
import CollectCard, { CardContainer } from '../../components/CollectCard'
import { cards } from '../../mock/card.mock'
import ConfirmationDialog from '../../components/ConfirmationDialog'
import FinishDialog from '../../components/FinishDialog'
import RFIDModal from '../../components/RFIDModal'

function Collect() {
  const [openDialog, setOpenDialog] = useState(false)
  const [openFinalDialog, setOpenFinalDialog] = useState(false)
  const [openRFID, setOpenRFID] = useState(false)
  const [objectId, setObjectId] = useState(null)
  const [selectId, setSelectId] = useState(null)
  const [rfidValue, setRfidValue] = useState(null)
  const [data, setData] = useState(null)
  const [rfidData, setRfidData] = useState(null)

  const navigate = useNavigate()

  const handleOpenDialog = (rfidValue) => {
    setRfidData(rfidValue)
    setOpenDialog(true)
    setOpenRFID(false)
  }

  const handleCloseDialog = () => {
    setOpenDialog(false)
  }

  const handleOpenFinalDialog = () => setOpenFinalDialog(true)
  const handleCloseFinalDialog = () => setOpenFinalDialog(false)

  const handleOpenRFIDModal = (id, pointId) => {
    setSelectId(pointId)
    setObjectId(id)
    setOpenRFID(true)
  }

  const handleFinishCollect = () => {
    api.patch(`/collection-request/${objectId}`, {
      status: 'PICKING_AREA',
      rfid_code: rfidData,
    })
    setOpenFinalDialog(false)
    setOpenDialog(false)
    setRfidValue(null)
  }

  useEffect(() => {
    api
      .get('/collection-request')
      .then((response) => {
        setData(response.data)
      })
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      api
        .get('/collection-request')
        .then((response) => {
          setData(response.data)
        })
        .catch((err) => console.log(err))
    }, 3000)
    return () => clearInterval(timer)
  }, [data])

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
          {data &&
            data
              .filter((d) => d.status === 'CREATED')
              .sort(function (a, b) {
                return new Date(a.createdAt) - new Date(b.createdAt)
              })
              .map((card) => {
                return (
                  <CollectCard
                    key={card.id}
                    request={card}
                    onClick={() => handleOpenRFIDModal(card.id, card.collectionPointId)}
                  />
                )
              })}
        </CardContainer>
      </div>
      <RFIDModal
        open={openRFID}
        close={setOpenRFID}
        id={selectId}
        value={rfidValue}
        handleChange={setRfidValue}
        handleNext={handleOpenDialog}
      />
      <ConfirmationDialog
        open={openDialog}
        handleClose={handleCloseDialog}
        handleNext={handleOpenFinalDialog}
      />
      <FinishDialog
        open={openFinalDialog}
        handleClose={handleCloseFinalDialog}
        handleFinish={handleFinishCollect}
      />
    </div>
  )
}

export default Collect
