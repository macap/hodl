import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { WalletForm } from 'components';

const Wallet = ({ transactions, diff, currentValue, total }) => (
  <div>
    <div className="ticker-box">
      <div className="ticker-box_currency">{total} BTC</div>
      <div className="ticker-box_rate">
        {currentValue.toFixed(2)}
        <span className="ticker-box_rate-currency">PLN</span>
      </div>
      <div
        className={classNames('ticker-box_change', {
          'ticker-box_change--up': diff > 0,
          'ticker-box_change--down': diff < 0,
        })}
      >
        {diff.toFixed(2)} PLN
      </div>
    </div>
    <div>
      {transactions.map(t => (
        <div className="wallet-row">
          <div className="wallet-row__date">{t.date}</div>
          <div className="wallet-row__value">{t.value} BTC</div>
          <div className="wallet-row__cost">{t.cost} PLN</div>
        </div>
      ))}
    </div>
    <WalletForm />
  </div>
);

Wallet.propTypes = {
  // eslint-disable-next-line
  transactions: PropTypes.array.isRequired,
  diff: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  currentValue: PropTypes.number.isRequired,
};

const mapStateToProps = state => {
  const { transactions } = state.wallet;
  const rate = state.rates.current.rate || '0';
  const total = transactions.reduce((v, r) => Number(r.value) + v, 0);
  const currentValue = total * Number(rate.replace(',', ''));
  const totalCost = transactions.reduce((v, r) => Number(r.cost) + v, 0);
  return {
    transactions,
    diff: currentValue - totalCost,
    total,
    currentValue,
  };
};

export default connect(mapStateToProps)(Wallet);
