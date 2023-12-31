import { useState } from 'react'
import './styles/card.css'

const CardFront = ({ cardDetails, submitClicked, cardHolderNameError,
  cardNumberError, expMonthError, expYearError }) => {

  const [loaded, setloaded] = useState(false)

  return (
    <div className='card'>
      <img src="/assets/frontcard.png" alt="Card Front" onLoad={() => { setloaded(true) }} />
      {
        loaded && (
          <div>
            <div className='topcircles'>
              <span className='leftcircle'></span>
              <span className='rightcircle'></span>
            </div>
            <div className='card_content'>
              <div className='card_num'>
                {
                  cardNumberError !== "" || cardDetails.cardNumber === "" || !submitClicked ?
                    <span>0000  0000  0000  0000</span>
                    :
                    <span>
                      {cardDetails.cardNumber.toString().replace(/\d{4}(?=.)/g, '$& ')}
                    </span>
                }
              </div>
              <div className='card_det'>
                <div>
                  {
                    cardHolderNameError !== '' || cardDetails.cardHolderName === "" || !submitClicked ?
                      <span>Mr. XYZ</span>
                      :
                      <span>
                        {cardDetails.cardHolderName}
                      </span>
                  }
                </div>
                <div>
                  {
                    expMonthError !== '' || cardDetails.expMonth === "" || !submitClicked ?
                      <span>MM</span>
                      :
                      <span>
                        {cardDetails.expMonth}
                      </span>
                  }
                  <span>/</span>
                  {
                    expYearError !== '' || cardDetails.expYear === "" || !submitClicked ?
                      (<span>YY</span>)
                      :
                      <span>
                        {cardDetails.expYear}
                      </span>
                  }
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default CardFront