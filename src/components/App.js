import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink as Link,
} from 'react-router-dom';
import Rates from './Rates';
import Wallet from './Wallet';
import './style.scss';

const App = () => {
  return (
    <Router>
      <div>
        <ul className="nav">
          <li><Link exact activeClassName='active' to="/">Rates</Link></li>
          <li><Link activeClassName='active' to="/wallet">Wallet</Link></li>
        </ul>
        <Route exact path="/" component={Rates} />
        <Route path="/wallet" component={Wallet} />
      </div>
    </Router>
  )
}

export default App;
