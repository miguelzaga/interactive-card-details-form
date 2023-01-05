import { useState } from "react";
import {
  bgCardFront,
  bgCardBack,
  cardLogo,
  iconComplete,
  bgMainMobile,
  bgMainDesktop,
} from "./images";
import { formatCardNumber, onChangeInputHandler, setErrorState } from "./js";

function App() {
  var [completed, setCompleted] = useState(false);
  var [name, setName] = useState("Jane Appleseed");
  var [number, setNumber] = useState("0000 0000 0000 0000");
  var [month, setMonth] = useState("00");
  var [year, setYear] = useState("00");
  var [cvc, setCvc] = useState("000");
  return (
    <div>
      <main className="main">
        <div className="cards">
          <div className="cards__front">
            <img
              className="cards__front-bg"
              src={bgCardFront}
              alt="Front of card"
            />
            <div className="cards__front-container">
              <img
                className="cards__front-logo"
                src={cardLogo}
                alt="Card logo"
              />
              <p className="cards__front-number">{number}</p>
              <div className="cards__front-details">
                <p className="cards__front-name">{name}</p>
                <p className="cards__front-date">
                  {month}/{year}
                </p>
              </div>
            </div>
          </div>

          <div className="cards__back">
            <img className="cards__back" src={bgCardBack} alt="Back of card" />
            <div className="cards__back-csv">{cvc}</div>
          </div>
        </div>

        {completed ? (
          <div className="message">
            <img
              className="message__icon"
              src={iconComplete}
              alt="Complete icon"
            />
            <h2 className="message__title">Thank you!</h2>
            <p className="message__text">We've added your card details</p>
            <button
              className="message__button button"
              onClick={() => setCompleted(false)}
            >
              Continue
            </button>
          </div>
        ) : (
          <form
            onSubmit={function validateForm(event) {
              var formElement = event.currentTarget;

              event.preventDefault();

              if (formElement.checkValidity()) {
                setCompleted(true);
              } else {
                let inputList = formElement.querySelectorAll("input");
                inputList.forEach(function validateInput(inputElement) {
                  setErrorState(inputElement);
                });
              }
            }}
            noValidate
            className="form"
          >
            <label className="form__label">
              Cardholder Name
              <input
                onChange={onChangeInputHandler(setName, "Jane Appleseed")}
                className="form__input"
                type="text"
                required
                placeholder="e.g. Jane Appleseed"
              />
              <p className="form__label-alert alert-js">Error</p>
            </label>

            <label className="form__label">
              Card Number
              <input
                onChange={(event) => {
                  let value = event.currentTarget.value;
                  if (value) {
                    let valueFormatted = formatCardNumber(value);
                    setNumber(valueFormatted);
                  } else {
                    setNumber("0000 0000 0000 0000");
                  }
                }}
                onBlur={(event) => {
                  event.currentTarget.value = formatCardNumber(
                    event.currentTarget.value
                  );
                }}
                required
                pattern="(\d{4} ){4}"
                className="form__input"
                type="text"
                inputMode="numeric"
                placeholder="e.g. 1234 5678 9123 0000"
              />
              <p className="form__label-alert alert-js">Error</p>
            </label>

            <label className="form__label form__label--half">
              Exp. Date (MM/YY)
              <div className="form__input--date">
                <input
                  onChange={onChangeInputHandler(setMonth, "00")}
                  className="form__input"
                  required
                  min="1"
                  max="12"
                  type="number"
                  placeholder="MM"
                />
                <input
                  onChange={onChangeInputHandler(setYear, "00")}
                  className="form__input"
                  required
                  min="0"
                  max="99"
                  type="number"
                  placeholder="YY"
                />
              </div>
              <p className="form__label-alert alert-js">Error</p>
            </label>

            <label className="form__label form__label--half">
              CVC
              <input
                onChange={onChangeInputHandler(setCvc, "000")}
                className="form__input"
                required
                pattern="\d{3}"
                type="text"
                inputMode="numeric"
                placeholder="e.g. 123"
              />
              <p className="form__label-alert alert-js">Error</p>
            </label>

            <button className="form__button button" type="submit">
              Confirm
            </button>
          </form>
        )}
      </main>
      <picture className="background-image">
        <source srcSet={bgMainDesktop} media="(min-width: 1024px)" />
        <img src={bgMainMobile} alt="" />
      </picture>
    </div>
  );
}
export default App;
