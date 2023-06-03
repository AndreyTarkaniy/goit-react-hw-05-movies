import React from 'react';

import css from 'components/additional/additional.module.css';

export const Additional = ({ children }) => {
  return (
    <div className={css.wrap}>
      <h3>Additional information</h3>
      {children}
    </div>
  );
};
