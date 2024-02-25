// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {counter: 0}

  countChars = event => {
    this.setState({counter: event.target.value.length})
  }

  render() {
    const {counter} = this.state

    return (
      <div className="bg-container">
        <div className="text-field">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="label-name" className="input-heading">
            Enter the phrase
          </label>
          <input
            type="text"
            placeholder="Enter the phrase"
            id="label-name"
            className="input-field"
            onChange={this.countChars}
          />
          <div className="counter-box">
            <p className="counter-part">No.of letters: {counter}</p>
          </div>
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
