import React from 'react';
import { Link } from 'react-router-dom';
import {} from './buttonback.css';
export const GoBack = ({ url }) => {
  return (
    <div>
      <Link to={url}>
        <button className="button_back">GoBack</button>
      </Link>
    </div>
  );
};
