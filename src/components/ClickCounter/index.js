/* eslint-disable react/button-has-type */
// Write your code here
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {clicks: 0}

  onIncrement = () => {
    this.setState(prevCount => ({clicks: prevCount.clicks + 1}))
  }

  render() {
    const {clicks} = this.state
    return (
      <div className="clickCounter-bg-container">
        <h1 className="clickCounter-heading">
          The Button has been clicked <span className="clicks">{clicks} </span>
          times
        </h1>

        <p className="para">click the button to increase the count!</p>
        <button className="click-me-btn" onClick={this.onIncrement}>
          Click Me
        </button>
      </div>
    )
  }
}

export default ClickCounter
