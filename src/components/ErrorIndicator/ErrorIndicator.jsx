import React from 'react';

import './ErrorIndicator.scss';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <span className="boom">BOOM!</span>
      <span>something gas go terribly wrong</span>
      <span>(but we already sent droids to fix it)</span>
    </div>
  )
}

export default ErrorIndicator;


