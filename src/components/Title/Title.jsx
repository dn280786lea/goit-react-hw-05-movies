import React from 'react';
import { NavLink } from 'react-router-dom';
import {} from './Title.css';

const Title = () => {
  return (
    <nav>
      <NavLink to="/" activeClassName="active" exact>
        Home
      </NavLink>
      <NavLink to="/movies" activeClassName="active">
        Movies
      </NavLink>
    </nav>
  );
};

export default Title;
