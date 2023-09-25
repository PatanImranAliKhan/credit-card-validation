import './styles/carddetailsform.css'

const CardDetailsForm = ({
  cardDetails, onCardDetailsChange, handleSubmitEvent,
  submitClicked, handleOnBlurEvent, cardHolderNameError,
  cardNumberError, expMonthError, expYearError, cvcError }) => {

  return (
    <div className="cardDetailsEntryForm" >
      <form className="cardform" onSubmit={handleSubmitEvent}>
        <div className="field">
          <label>CARDHOLDER NAME</label>
          <input
            type="text"
            placeholder="e.g. Jane Appleseed"
            value={cardDetails.cardHolderName}
            name="cardHolderName"
            onChange={(e) => { onCardDetailsChange(e) }}
            onBlur={(e) => { handleOnBlurEvent(e) }}
          />
          {
            submitClicked && cardHolderNameError !== "" && (
              <span className="error">{cardHolderNameError}</span>
            )
          }
        </div>
        <div className="field">
          <label>CARD NUMBER</label>
          <input
            type="text"
            placeholder="e.g. 1234 5678 9123 0000"
            value={cardDetails.cardNumber}
            name="cardNumber"
            onChange={(e) => { onCardDetailsChange(e) }}
            onBlur={(e) => { handleOnBlurEvent(e) }}
          />
          {
            submitClicked && cardNumberError !== "" && (
              <span className="error">{cardNumberError}</span>
            )
          }
        </div>
        <div className="expcvc">
          <div className="field">
            <label>EXP. DATE (MM/YY)</label>
            <div className="expireInputDiv">
              <div>
                <input
                  type="text"
                  placeholder="MM"
                  value={cardDetails.expMonth}
                  name="expMonth"
                  onChange={(e) => onCardDetailsChange(e)}
                  onBlur={(e) => { handleOnBlurEvent(e) }}
                />
                {
                  submitClicked && expMonthError !== '' && (
                    <span className="error">{expMonthError}</span>
                  )
                }
              </div>
              <div>
                <input
                  type="text"
                  placeholder="YY"
                  value={cardDetails.expYear}
                  name="expYear"
                  onChange={(e) => onCardDetailsChange(e)}
                  onBlur={(e) => { handleOnBlurEvent(e) }}
                />
                {
                  submitClicked && expYearError !== "" && (
                    <span className="error">{expYearError}</span>
                  )
                }
              </div>
            </div>
          </div>
          <div className="field">
            <label htmlFor="">CVC</label>
            <input
              type="text"
              placeholder="e.g. 123"
              value={cardDetails.cvc}
              name="cvc"
              onChange={(e) => onCardDetailsChange(e)}
              onBlur={(e) => { handleOnBlurEvent(e) }}
            />
            {
              submitClicked && cvcError !== "" && (
                <span className="error">{cvcError}</span>
              )
            }
          </div>
        </div>
        <button className="confirmbutton" type="submit">Confirm</button>
      </form>
    </div>
  );
};

export default CardDetailsForm;
