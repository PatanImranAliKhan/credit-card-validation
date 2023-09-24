import './styles/card.css'

const CardBack = ({ cvc, cvcError, submitClicked }) => {
  
  return (
    <div className='card'>
      <img src="/assets/backcard.jpg" alt="Card Back" />
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

export default CardBack