import React, { Component } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTransaction } from '../actions/wallet';

class WalletForm extends Component {
  state = {
    date: '',
    value: '',
    cost: '',
    isOpen: false,
  }

  handleDateChange = (evt) => {
    this.setState({ date: evt.target.value });
  }

  handleValueChange = (evt) => {
    this.setState({ value: evt.target.value });
  }

  handleCostChange = (evt) => {
    this.setState({ cost: evt.target.value });
  }

  addTransaction = () => {
    const { date, value, cost } = this.state;
    this.props.addTransaction(date, value, cost);
    this.setState({ date: '', value: '', isOpen: false });
  }

  render() {
    const { date, value, cost, isOpen } = this.state;
    return (
      <div className={classNames('wallet-form', {'wallet-form--open': isOpen })}>
        <button className="wallet-form__toggle" onClick={e => {this.setState((s) => ({isOpen: !s.isOpen}))}}>+ Add transaction</button>
        <div className="wallet-form__collapse">
          <label>Transaction date</label>
          <input type="date" value={date} onChange={this.handleDateChange} />
          <label>Amount of BTC bought</label>
          <input type="number" value={value} onChange={this.handleValueChange} />
          <label>Cost in PLN</label>
          <input type="number" value={cost} onChange={this.handleCostChange} />
          <button onClick={this.addTransaction}>+ Add transaction</button>
        </div>
      </div>
    );
  }
}

WalletForm.propTypes = {
  addTransaction: PropTypes.func.isRequired,
};


export default connect(null, { addTransaction })(WalletForm);
