import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    stateId: countryAndCapitalsList[0].id,
  }

  getUpdate = event => {
    this.setState({stateId: event.target.value})
  }

  getCountry = () => {
    const {stateId} = this.state

    const activeCountryAndCapital = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === stateId,
    )

    return activeCountryAndCapital.country
  }

  render() {
    const {stateId} = this.state
    const val = this.getCountry(stateId)

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading"> Countries and Capitals</h1>
          <select
            className="form-control"
            onChange={this.getUpdate}
            id="optElement"
            value={stateId}
          >
            {countryAndCapitalsList.map(eachItem => (
              <option value={eachItem.id} key={eachItem.id}>
                {eachItem.capitalDisplayText}
              </option>
            ))}
          </select>
          <label htmlFor="optElement" className="labelElement">
            is capital of which country?
          </label>

          <p className="para">{val}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
