import React from 'react'
import CardBack from './CardBack';
import CardFront from './CardFront';

import './styles/cardsdisplay.css'

const CardsDisplaySection = ({ cardDetails, submitClicked, cardHolderNameError,
  cardNumberError, expMonthError, expYearError, cvcError }) => {
  return (
    <div className='carddisplaysection'>
      <div className='bgChange'>&nbsp;</div>
      <div className='card_front'>
        <CardFront cardDetails={cardDetails} submitClicked={submitClicked}
          cardHolderNameError={cardHolderNameError}
          cardNumberError={cardNumberError}
          expMonthError={expMonthError}
          expYearError={expYearError}
          cvcError={cvcError}
        />
      </div>
      <div className='card_back'>
        <CardBack cvc={cardDetails.cvc} cvcError={cvcError} submitClicked={submitClicked} />
      </div>
    </div>
  )
}

export default CardsDisplaySection