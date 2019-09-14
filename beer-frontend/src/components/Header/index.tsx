import React from 'react';
import { NavLink } from 'react-router-dom';

import './index.scss';

interface Props {
  totalCount: number;
}

const Header: React.FC<Props> = ({ totalCount }) => {
  return (
    <div className="header">
      <h1>맥주담기</h1>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="on"></NavLink>
        </li>
        <li>
          <NavLink to="/payment" activeClassName="on"></NavLink>
          <div className="info-count">{totalCount}</div>
        </li>
      </ul>
    </div>
  );
};

export default Header;