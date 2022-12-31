import { useState } from "react";
import bgCardFront from "./images/bg-card-front.png";
import bgCardBack from "./images/bg-card-back.png";
import cardLogo from "./images/card-logo.svg";
import iconComplete from "./images/icon-complete.svg";
import bgMainMobile from "./images/bg-main-mobile.png";
import bgMainDesktop from "./images/bg-main-desktop.png";

function App() {
  var [completed, setCompleted] = useState(false);
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
              <p className="cards__front-number">0000 0000 0000 0000</p>
              <div className="cards__front-details">
                <p className="cards__front-name">Jane Appleseed</p>
                <p className="cards__front-date">00/00</p>
              </div>
            </div>
          </div>

          <div className="cards__back">
            <img className="cards__back" src={bgCardBack} alt="Back of card" />
            <div className="cards__back-csv">000</div>
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
            <label className="form__label">
              Cardholder Name
              <input
                className="form__input"
                type="text"
                placeholder="e.g. Jane Appleseed"
              />
            </label>

            <label className="form__label">
              Card Number
              <input
                className="form__input"
                type="text"
                placeholder="e.g. 1234 5678 9123 0000"
              />
            </label>

            <label className="form__label form__label--half">
              Exp. Date (MM/YY)
              <div className="form__input--flex">
                <input className="form__input" type="number" placeholder="MM" />
                <input className="form__input" type="number" placeholder="YY" />
              </div>
            </label>

            <label className="form__label form__label--half">
              CVC
              <input
                className="form__input"
                type="number"
                placeholder="e.g. 123"
              />
            </label>

            <button
              className="form__button button"
              onClick={() => setCompleted(true)}
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
