import React from 'react'
import { styled } from 'styled-components'
import './styles.css'

export const CardContainer = styled.div`
    width: 100%;
    height: 80vh;
    overflow-y: scroll;
    margin-top: 30px;

`
function CollectCard({ request, onClick }) {
  console.log(request)
  return (
    <div id='card-container' onClick={onClick}>
      <div>
        <p>posto de coleta {request.id}</p>
      </div>
      <div id='request-time'>
        <p>horário da solicitação</p>
        <p> {request.time}</p>
      </div>
    </div>
  )
}

export default CollectCard
