import React from 'react';
import '../styles/spinner.css';

function Spinner() {
  return (
    <div className="spinner">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Spinner;
