import { useEffect } from 'react'
import './styles/card.css'

const CardFront = ({ cardNumber, cardholderName, expMonth, expYear }) => {

  useEffect(() => {

  }, [])


  return (
    <div className='card'>
      <img src="/assets/frontcard.png" alt="Card Front" />
    </div>
  )
}

export default CardFront