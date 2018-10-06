import React from 'react';
import { NavLink as Link } from 'react-router-dom';

const Navigation = () => (
  <ul className="nav">
    <li>
      <Link exact activeClassName="active" to="/" href="/">
        Rates
      </Link>
    </li>
    <li>
      <Link activeClassName="active" to="/wallet" href="/wallet">
        Wallet
      </Link>
    </li>
  </ul>
);

export default Navigation;
