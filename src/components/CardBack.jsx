import { useState } from 'react'
import './styles/card.css'

const CardBack = ({ cvc, cvcError, submitClicked }) => {

  const [loaded, setloaded] = useState(false)

  return (
    <div className='card'>
      <img src="/assets/backcard.jpg" alt="Card Back" onLoad={()=>{setloaded(true)}} />
      {
        loaded && (
          <div>
            <div className='data'>
              <span className='cvcdata'>
                {
                  cvcError === "" && cvc !== "" && submitClicked ?
                    <span>{cvc}</span>
                    :
                    <span>000</span>
                }
              </span>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default CardBack