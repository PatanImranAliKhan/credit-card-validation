import { useState, useEffect } from "react";

import CardsDisplaySection from "./components/CardsDisplaySection";
import CardDetailsForm from "./components/CardDetailsForm";

import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [cardDetails, setCardDetails] = useState({
    cardHolderName: '',
    cardNumber: '',
    expMonth: '',
    expYear: '',
    cvc: ''
  })

  const [cardHolderNameError, setCardHolderNameError] = useState("")
  const [cardNumberError, setcardNumberError] = useState("")
  const [expMonthError, setExpMonthError] = useState("")
  const [expYearError, setExpYearError] = useState("")
  const [cvcError, setCvcError] = useState("")

  // const [cardDetailsError, setCardDetailsError] = useState({
  //   cardHolderName: '',
  //   cardNumber: '',
  //   expMonth: '',
  //   expYear: '',
  //   cvc: ''
  // })

  const [submitClicked, setSubmitClicked] = useState(false);

  const cardNumberRegex = new RegExp(/[0-9]/);
  let cvcRegex = new RegExp(/^[0-9]{3}$/);
  const numberRegex = new RegExp(/^\d+$/);
  let currentYear = new Date().getFullYear() % 100;
  const [validationFuntions, setvalidationFuntions] = useState({})

  useEffect(() => {
    setvalidationFuntions({
      cardHolderName: validateCardHolderName,
      cardNumber: validateCardNumber,
      expMonth: validateExpiryMonth,
      expYear: validateExpiryYear,
      cvc: validateCVC
    })
  }, [])


  const onCardDetailsChange = (e) => {
    let name = e.target.name, value = e.target.value;
    if (name === "expMonth") {
      if (value.length > 2 || parseInt(value) > 12) return;
    } if (name === "expYear" && value.length > 12) {
      return;
    } if (name === "cardNumber" && value.replaceAll(" ", "").length > 16) {
      return;
    }
    setCardDetails({
      ...cardDetails,
      [name]: value
    })
  }

  const handleOnBlurEvent = async (e) => {
    const name = e.target.name, value = e.target.value;
    const valFun = validationFuntions[name]
    if (submitClicked) {
      valFun(value);
    }
  }

  const handleSubmitEvent = async (e) => {
    const tId = toast.loading("Please wait...", {
      position: toast.POSITION.TOP_CENTER
    })
    e.preventDefault();
    setSubmitClicked(true)
    let verify = await validateDetails();
    if (verify === true) {
      toast.update(tId, { render: "All good", type: "success", isLoading: false, autoClose: 3000, closeButton: true });
    } else {
      toast.update(tId, { render: "Enter Valid Data!..", type: "error", isLoading: false, autoClose: 3000, closeButton: true });
    }
  }

  const validateDetails = async () => {
    let verify1 = validateCardHolderName(),
      verify2 = validateCardNumber(), verify3 = validateExpiryMonth(),
      verify4 = validateExpiryYear(), verify5 = validateCVC()

    return verify1 && verify2 && verify3 && verify4 && verify5
  }

  const validateCardHolderName = (newCardholdername = cardDetails.cardHolderName) => {
    if (newCardholdername === "") {
      setCardHolderNameError('Card Holder Name is required')
      return false;
    } else {
      setCardHolderNameError("");
    }
    return true;
  }

  const validateCardNumber = (newCardNumber = cardDetails.cardNumber) => {
    newCardNumber = newCardNumber.replaceAll(" ", "").trim();
    if (newCardNumber === "") {
      setcardNumberError('Card Number is required')
      return false;
    }
    else if (!cardNumberRegex.test(newCardNumber)) {
      setcardNumberError('Card Number must contain only Numbers')
      return false;
    }
    else if (newCardNumber.length !== 16) {
      setcardNumberError('Please Enter Valid Card Number and must contain 16 digits')
      return false;
    }
    newCardNumber = parseInt(newCardNumber)
    if (newCardNumber <= 0) {
      setcardNumberError('invalid card number')
      return false;
    }
    else {
      setcardNumberError('')
    }
    return true;
  }

  const validateExpiryMonth = (newExpMonth = cardDetails.expMonth) => {
    if (newExpMonth === "") {
      setExpMonthError('Required')
      return false;
    } else if (numberRegex.test(newExpMonth) === false) {
      setExpMonthError('Invalid Format')
      return false;
    }
    newExpMonth = parseInt(newExpMonth)
    if (newExpMonth <= 0 || newExpMonth > 12) {
      setExpMonthError('Invalid Month')
      return false;
    } else {
      setExpMonthError('')
    }
    return true;
  }

  const validateExpiryYear = (newExpYear = cardDetails.expYear) => {
    if (newExpYear === "") {
      setExpYearError('required')
      return false;
    } else if (numberRegex.test(newExpYear) === false) {
      setExpYearError('Invalid Format')
      return false;
    }
    newExpYear = parseInt(newExpYear)
    let year = currentYear % 100;
    if (newExpYear < year) {
      setExpYearError('Year Expired')
      return false;
    } else if (newExpYear > year + 5) {
      setExpYearError('Invalid Year')
      return false;
    } else {
      setExpYearError('')
    }
    return true;
  }

  const validateCVC = (newCVC = cardDetails.cvc) => {
    if (newCVC === "") {
      setCvcError('CVC is required')
      return false;
    } else if (cvcRegex.test(newCVC) === false) {
      setCvcError('CVC must contain 3 digits')
      return false;
    } else {
      setCvcError('');
    }
    return true;
  }

  return (
    <>
      <div className="mainsection">
        <CardsDisplaySection cardDetails={cardDetails} submitClicked={submitClicked}
          cardHolderNameError={cardHolderNameError}
          cardNumberError={cardNumberError}
          expMonthError={expMonthError}
          expYearError={expYearError}
          cvcError={cvcError}
        />
        <CardDetailsForm
          cardDetails={cardDetails}
          onCardDetailsChange={onCardDetailsChange}
          handleSubmitEvent={handleSubmitEvent}
          submitClicked={submitClicked}
          handleOnBlurEvent={handleOnBlurEvent}
          cardHolderNameError={cardHolderNameError}
          cardNumberError={cardNumberError}
          expMonthError={expMonthError}
          expYearError={expYearError}
          cvcError={cvcError}
        />
      </div>
      <ToastContainer style={{ position: 'absolute' }} />
    </>

  );
}

export default App;
