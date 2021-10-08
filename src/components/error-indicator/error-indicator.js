import React from "react";

import './error-indicator.css';

function ErrorIndicator() {
  return (
    <div className='error-indicator'>
      <span className='boom'>BOOM!</span>
      <span>somthing has gone terrible wrong</span>
      <span>(but we already sent droids to fix it)</span>
    </div>
  );
}

export default ErrorIndicator;