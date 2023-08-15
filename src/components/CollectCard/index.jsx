import React from 'react'
import { styled } from 'styled-components'
import './styles.css'
import format from 'date-fns/format'

export const CardContainer = styled.div`
    width: 100%;
    height: 80vh;
    overflow-y: scroll;
    margin-top: 30px;

`
function CollectCard({ request, onClick }) {
  return (
    <div id='card-container' onClick={onClick}>
      <div>
        <p>posto de coleta {request.collectionPointId}</p>
      </div>
      <div id='request-time'>
        <p>horário da solicitação</p>
        <p> {format(new Date(request.createdAt), 'dd/MM/yyyy - kk:mm:ss')}</p>
      </div>
    </div>
  )
}

export default CollectCard
