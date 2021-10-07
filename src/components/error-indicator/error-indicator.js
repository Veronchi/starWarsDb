import React from "react";

import './error-indicator.css';

function ErrorIndicator() {
  return (
    <div className='error-indicator'>
      <span className='boom'>BOOM!</span>
      <span></span>
      <span></span>
    </div>
  );
}

export default ErrorIndicator;