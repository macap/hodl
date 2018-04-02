import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTransaction } from '../actions/wallet';

class WalletForm extends Component {
  state = {
    date: '',
    value: '',
  }

  handleDateChange = (evt) => {
    this.setState({ date: evt.target.value });
  }

  handleValueChange = (evt) => {
    this.setState({ value: evt.target.value });
  }

  addTransaction = () => {
    const { date, value } = this.state;
    this.props.addTransaction(date, value);
    this.setState({ date: '', value: '' });
  }

  render() {
    const { date, value } = this.state;
    return (
      <div>
        <input type="date" value={date} onChange={this.handleDateChange} />
        <input type="number" value={value} onChange={this.handleValueChange} />
        <button onClick={this.addTransaction}>Add</button>
      </div>
    );
  }
}

WalletForm.propTypes = {
  addTransaction: PropTypes.func.isRequired,
};


export default connect(null, { addTransaction })(WalletForm);
