import React from 'react';
import { Link } from 'react-router-dom';

export const GoBack = ({ url }) => {
  return (
    <div>
      <Link to={url}>GoBack</Link>
    </div>
  );
};
