import { useState } from "react";

function App() {
  var [completed, setCompleted] = useState(false);
  return (
    <div>
      <main>
        <div> {/* Cards */}
          <img /> {/* Card image */}
          <img /> {/* Card image */}
          <div>
            0000 0000 0000 0000
            Jane Appleseed
            00/00
          </div>

          <div>
            000
          </div>
        </div>


      { completed ? (
        <div>
          <img /> {/* Confirmation image */}
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
      <picture>
        <source />
        <img /> {/* Background image */}
      </picture>
    </div>
  );
}

export default App;
