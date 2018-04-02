import React from 'react';
import { connect } from 'react-redux';
import WalletForm from './WalletForm';


const Wallet = ({ transactions }) => (
  <div>
    <div>
      {transactions.map(t => (
        <div className="ticker-box">
          <div className="ticker-box_currency">{t.date}</div>
          <div className="ticker-box_rate">{t.value}</div>
          <div className="ticker-box_change">BTC</div>
        </div>
      ))}
    </div>
    <WalletForm />
  </div>
);


const mapStateToProps = state => ({
  transactions: state.wallet.transactions,
});

export default connect(mapStateToProps)(Wallet);
