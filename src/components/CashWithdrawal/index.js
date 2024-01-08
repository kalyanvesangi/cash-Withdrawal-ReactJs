// Write your code

import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  withdrawAmount = amount => {
    this.setState(prevState => ({balance: prevState.balance - amount}))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props

    return (
      <div className="withdraw-bg-con">
        <div className="withdraw-card">
          <div className="withdraw-profile-con">
            <div className="withdraw-profile-logo">K</div>
            <p className="withdraw-profile-name">Kalyan</p>
          </div>
          <div className="withdraw-balance-con">
            <p className="withdraw-side-text">Your Balance</p>

            <div>
              <p className="withdraw-balance">{balance}</p>
              <p className="withdraw-rupees-text">In Rupees</p>
            </div>
          </div>

          <p className="withdraw-sub-heading">Withdraw</p>

          <p className="withdraw-side-text">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denomination-items-con">
            {denominationsList.map(eachItem => (
              <DenominationItem
                denominationItem={eachItem}
                withdrawAmount={this.withdrawAmount}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
