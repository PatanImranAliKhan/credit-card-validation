import { useEffect } from 'react'
import './styles/card.css'

const CardBack = ({cvc, cvcError}) => {

  const data="jhwvd";
  useEffect(() => {
    cvc="kjh"
    if(cvcError !=="") {
      console.log(cvc)
    }
  }, [])
  

  return (
    <div className='card'>
        <img src="/assets/backcard.jpg" alt="Card Back" />
        <div className='data'>
          <span className='cvcdata'>{data}</span>
        </div>
    </div>
  )
}

export default CardBack