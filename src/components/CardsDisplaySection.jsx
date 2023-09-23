import React from 'react'
import CardBack from './CardBack';
import CardFront from './CardFront';

import './styles/cardsdisplay.css'

const CardsDisplaySection = () => {
  return (
    <div className='carddisplaysection'>
        <div>
            <CardFront />
        </div>
        <div>
            <CardBack />
        </div>
    </div>
  )
}

export default CardsDisplaySection