import { useState } from "react";
import bgCardFront from './images/bg-card-front.png';
import bgCardBack from './images/bg-card-back.png';
import cardLogo from './images/card-logo.svg'
import iconComplete from './images/icon-complete.svg'
import bgMainMobile from "./images/bg-main-mobile.png";
import bgMainDesktop from "./images/bg-main-desktop.png";

function App() {
  var [completed, setCompleted] = useState(false);
  return (
    <div>
      <main className="main">
        <div className="cards"> 
    <div className="cards__front">
          <img className="cards__front-bg" src={bgCardFront} alt="Front of card" /> 
    <div className="cards__front-container">
          <img className="cards__front-logo" src={cardLogo} alt="Card logo" />
          <p className="cards__front-number">
            0000 0000 0000 0000
    </p>
          <div className="cards__front-details">
            <p className="cards__front-name">Jane Appleseed</p>
            <p className="cards__front-date">00/00</p>
    </div>
    </div>
    </div>

    <div className="cards__back">
          <img className="cards__back" src={bgCardBack} alt="Back of card" /> 
          <div className="cards__back-csv">
            000
          </div>
    </div>
        </div>

      { completed ? (
        <div>
            <img src={iconComplete} alt="Complete icon" /> 
            <h2>Thank you!</h2>
            <p>We've added your card details</p>
            <button onClick={() => setCompleted(false)}>Continue</button>
        </div>
      ) : (
        <form>
          <label>
            Cardholder Name
            <input type="text" placeholder="e.g. Jane Appleseed" />
          </label>

          <label>
            Card Number
            <input type="text" placeholder="e.g. 1234 5678 9123 0000" />
          </label>

          <label>
            Exp. Date (MM/YY)
            <input type="number" placeholder="MM" />
            <input type="number" placeholder="YY" />
          </label>

          <label>
            CVC
            <input type="number" placeholder="e.g. 123" />
          </label>

          <button onClick={() => setCompleted(true)}type="submit">Confirm</button>
        </form>
      )}

      </main>
      <picture className="background-image">
        <source srcSet={bgMainDesktop} media="(min-width: 1024px)" />
        <img src={bgMainMobile} alt=""/> 
      </picture>
    </div>
  );
}

export default App;
