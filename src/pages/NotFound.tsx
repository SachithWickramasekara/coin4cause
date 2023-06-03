import React from 'react';
import '../index.css'; // Import the CSS file for styling

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-heading">404 - Page Not Found</h1>
      <p className="not-found-message">The page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;
