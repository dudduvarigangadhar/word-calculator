import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  render() {
    return (
      <div className="bg-container">
        <div className="text-field">
          <h1 className="">Calculate the Letters you enter</h1>
          <p>Enter the phrase</p>
          <input type="text" placeholder="Enter the phrase" />
          <>No.of letters: 0</>
        </div>
        <div>
          <img
            className="img-logo"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
