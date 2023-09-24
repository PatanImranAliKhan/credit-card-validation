import React from 'react'
import CardBack from './CardBack';
import CardFront from './CardFront';

import './styles/cardsdisplay.css'

const CardsDisplaySection = ({ cardDetails, cardDetailsError, submitClicked }) => {
  return (
    <div className='carddisplaysection'>
      <div className='bgChange'>&nbsp;</div>
      <div className='card_front'>
        <CardFront cardDetails={cardDetails} cardDetailsError={cardDetailsError} submitClicked={submitClicked} />
      </div>
      <div className='card_back'>
        <CardBack cvc={cardDetails.cvc} cvcError={cardDetailsError.cvc} submitClicked={submitClicked} />
      </div>
    </div>
  )
}

export default CardsDisplaySection