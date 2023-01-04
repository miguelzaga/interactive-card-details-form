import { useState } from "react";
import bgCardFront from "./images/bg-card-front.png";
import bgCardBack from "./images/bg-card-back.png";
import cardLogo from "./images/card-logo.svg";
import iconComplete from "./images/icon-complete.svg";
import bgMainMobile from "./images/bg-main-mobile.png";
import bgMainDesktop from "./images/bg-main-desktop.png";
import onChangeInputHandler from "./js/onChangeInputHandler.js"
import formatCardNumber from "./js/formatCardNumber.js"

function App() {
  var [completed, setCompleted] = useState(false);
  var [name, setName] = useState('Jane Appleseed');
  var [number, setNumber] = useState('0000 0000 0000 0000');
  var [month, setMonth] = useState('00');
  var [year, setYear] = useState('00');
  var [cvc, setCvc] = useState('000');

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
                <p className="cards__front-date">{month}/{year}</p>
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
          <form className="form">
            <label className="form__label form__label--error">
              Cardholder Name
              <input
                onChange={onChangeInputHandler(setName, 'Jane Appleseed')}
                className="form__input form__input--error"
                type="text"
                required
                placeholder="e.g. Jane Appleseed"
              />
            </label>

            <label className="form__label">
              Card Number
              <input
                onChange={
                  (event) => {
                    let value = event.currentTarget.value;
                    if (value) {
                      let valueFormatted = formatCardNumber(value);
                      setNumber(valueFormatted)
                    } else {
                      setNumber('0000 0000 0000 0000');
                    }
                  }}
                onBlur={
                  (event) => {
                    let value = event.currentTarget.value;
                    event.currentTarget.value = formatCardNumber(value);
                  }
                }
                required
          pattern="(\d{4} ){4}"
                className="form__input"
                type="text"
                inputMode="numeric"
                placeholder="e.g. 1234 5678 9123 0000"
              />
            </label>

            <label className="form__label form__label--half">
              Exp. Date (MM/YY)
              <div className="form__input--date">
                <input
                  onChange={onChangeInputHandler(setMonth, '00')}
                  className="form__input" required min="1" max="12" type="number" placeholder="MM" />
                <input
                  onChange={onChangeInputHandler(setYear, '00')}
                  className="form__input" required min="0" max="99" type="number" placeholder="YY" />
              </div>
            </label>

            <label className="form__label form__label--half">
              CVC
              <input
                onChange={onChangeInputHandler(setCvc, '000')}
                className="form__input"
                required
                pattern="\d\d\d"
                type="text"
                inputMode="numeric"
                placeholder="e.g. 123"
              />
            </label>

            <button
              className="form__button button"
              onClick={(event) => {
                // event.preventDefault()
                setCompleted(false)
              }}
              type="submit"
            >
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
