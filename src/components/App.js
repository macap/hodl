import React from 'react';
import {
  Route,
  NavLink as Link,
} from 'react-router-dom';
import Rates from './Rates';
import Wallet from './Wallet';
import './style.scss';

const App = () => (
  <div>
    <ul className="nav">
      <li><Link exact activeClassName="active" to="/" href="/">Rates</Link></li>
      <li><Link activeClassName="active" to="/wallet" href="/wallet">Wallet</Link></li>
    </ul>
    <Route exact path="/" component={Rates} />
    <Route path="/wallet" component={Wallet} />
  </div>
);


export default App;
