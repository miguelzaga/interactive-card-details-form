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
      <main>
        <div> {/* Cards */}
          <picture>
            <img src={bgCardFront} alt="Front of card" /> 
            <img src={cardLogo} alt="Card logo" />
          </picture>
          <div>
            0000 0000 0000 0000
            Jane Appleseed
            00/00
          </div>

          <img src={bgCardBack} alt="Back of card" /> 
          <div>
            000
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
        <source srcset={bgMainDesktop} media="(min-width: 1024px)" />
        <img src={bgMainMobile} alt=""/> 
      </picture>
    </div>
  );
}

export default App;
