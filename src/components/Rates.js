import React, { Component } from 'react';
import classNames from 'classnames';
import moment from 'moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchCurrentRates, fetchHistorcalRates } from '../actions/rates';
import Chart from './Chart';

class Rates extends Component {
  componentDidMount() {
    this.props.fetchCurrentRates();

    const from = moment().subtract(30, 'days').format('YYYY-MM-DD');
    const to = moment().format('YYYY-MM-DD');
    this.props.fetchHistorcalRates(from, to);
  }

  render() {
    const { date, rate, chartData, previousRate } = this.props;
    const diff = (previousRate && rate) ? Number(rate.replace(',', '')) - previousRate : 0;
    return (
      <div>
        <div className="ticker-box">
          <div className="ticker-box_currency">BTC</div>
          <div className="ticker-box_rate">
            {rate || '-'}
            <span className="ticker-box_rate-currency">PLN</span>
          </div>
          <div className={classNames('ticker-box_change', {
              'ticker-box_change--up': diff > 0,
              'ticker-box_change--down': diff < 0,
            }
          )}>
            {diff.toFixed(2)} PLN
          </div>
        </div>
        <Chart data={chartData} />
        <div className="updated-at">
          Updated:
          {date && date.toLocaleDateString && ` ${date.toLocaleDateString()} ${date.toLocaleTimeString()}`}
        </div>
        <div className="disclaimer">
          Powered by
          <a href="https://www.coindesk.com/price/">CoinDesk</a>
        </div>
      </div>
    );
  }
}

Rates.propTypes = {
  // eslint-disable-next-line
  // data: PropTypes.array.isRequired,
  rate: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  chartData: PropTypes.shape.isRequired,
  fetchCurrentRates: PropTypes.func.isRequired,
  fetchHistorcalRates: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  rate: state.rates.current.rate,
  previousRate: state.rates.historical.data && state.rates.historical.data[moment().subtract(1, 'days').format('YYYY-MM-DD')],
  date: state.rates.current.updated,
  chartData: state.rates.historical.data,
});

export default connect(mapStateToProps, { fetchCurrentRates, fetchHistorcalRates })(Rates);
