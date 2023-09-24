import './styles/card.css'

const CardFront = ({ cardDetails, cardDetailsError, submitClicked }) => {

  return (
    <div className='card'>
      <img src="/assets/frontcard.png" alt="Card Front" />
      <div className='topcircles'>
        <span className='leftcircle'></span>
        <span className='rightcircle'></span>
      </div>
      <div className='card_content'>
        <div className='card_num'>
          {
            cardDetailsError.cardNumber !== "" || cardDetails.cardNumber === "" || !submitClicked ?
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
              cardDetailsError.cardHolderName !== '' || cardDetails.cardHolderName === "" || !submitClicked ?
                <span>Mr. XYZ</span>
                :
                <span>
                  {cardDetails.cardHolderName}
                </span>
            }
          </div>
          <div>
            {
              cardDetailsError.expMonth !== '' || cardDetails.expMonth === "" || !submitClicked ?
                <span>MM</span>
                :
                <span>
                  {cardDetails.expMonth}
                </span>
            }
            <span>/</span>
            {
              cardDetailsError.expYear !== '' || cardDetails.expYear === "" || !submitClicked ?
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

export default CardFront