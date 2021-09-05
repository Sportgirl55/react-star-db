import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'

const Header = () => {
  return (
    <div className="header">
      <h3>
        <Link to="/">
          Star DB
        </Link>
      </h3>
      <ul className="header-list">
        <li>
          <Link to="/people/">People</Link>
        </li>
        <li>
          <Link to="/planets/">Planets</Link>
        </li>
        <li>
          <Link to="/starships/">Starships</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/secret">Secret</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header;



