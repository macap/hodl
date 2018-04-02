import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCurrentRates, fetchHistorcalRates } from '../actions/rates';
import Chart from './Chart';

class Rates extends Component {
  componentDidMount() {
    this.props.fetchCurrentRates();
    this.props.fetchHistorcalRates();
  }

  render() {
    const { date, rate, chartData } = this.props;
    return (
      <div>
        <div className="scroll-box" style={{ height: '300px' }}>
          <div className="ticker-box">
            <div className="ticker-box_currency">BTC/PLN</div>
            <div className="ticker-box_rate">{rate || '-'}</div>
            <div className="ticker-box_change">-</div>
          </div>
          <div className="ticker-box">
            <div className="ticker-box_currency">BTC/PLN</div>
            <div className="ticker-box_rate">{rate || '-'}</div>
            <div className="ticker-box_change">-</div>
          </div>
          <div className="ticker-box">
            <div className="ticker-box_currency">BTC/PLN</div>
            <div className="ticker-box_rate">{rate || '-'}</div>
            <div className="ticker-box_change">-</div>
          </div>
          <div className="ticker-box">
            <div className="ticker-box_currency">BTC/PLN</div>
            <div className="ticker-box_rate">{rate || '-'}</div>
            <div className="ticker-box_change">-</div>
          </div>
          <div className="ticker-box">
            <div className="ticker-box_currency">BTC/PLN</div>
            <div className="ticker-box_rate">{rate || '-'}</div>
            <div className="ticker-box_change">-</div>
          </div>
          <div className="ticker-box">
            <div className="ticker-box_currency">BTC/PLN</div>
            <div className="ticker-box_rate">{rate || '-'}</div>
            <div className="ticker-box_change">-</div>
          </div>
        </div>
        <Chart data={chartData} />
        <div className="updated-at">
          Updated:
          {date && ` ${date.toLocaleDateString()} ${date.toLocaleTimeString()}`}
        </div>
        <div className="disclaimer">
          Powered by
          <a href="https://www.coindesk.com/price/">CoinDesk</a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  rate: state.rates.current.rate,
  date: state.rates.current.updated,
  chartData: state.rates.historical.data,
});

export default connect(mapStateToProps, { fetchCurrentRates, fetchHistorcalRates })(Rates);
