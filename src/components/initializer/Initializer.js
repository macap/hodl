import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrentRates, fetchHistorcalRates } from 'redux/actions/rates';

class Initializer extends Component {
  componentDidMount() {
    console.log('did mount');
    this.props.fetchCurrentRates();

    const from = moment()
      .subtract(30, 'days')
      .format('YYYY-MM-DD');
    const to = moment().format('YYYY-MM-DD');
    this.props.fetchHistorcalRates(from, to);
  }

  render() {
    return null;
  }
}

Initializer.propTypes = {
  fetchCurrentRates: PropTypes.func.isRequired,
  fetchHistorcalRates: PropTypes.func.isRequired,
};

export default connect(
  null,
  { fetchCurrentRates, fetchHistorcalRates },
)(Initializer);
