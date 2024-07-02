import React, { useState } from 'react';
import Login from './Login'; // Adjust the import path as needed

const ParentComponent = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    // Add your login logic here
    console.log('Logging in with mobile number:', mobileNumber);
    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
      console.log('Login successful');
    }, 2000);
  };

  return (
    <div className="parent-container">
      <Login
        mobileNumber={mobileNumber}
        isLoading={isLoading}
        setMobileNumber={setMobileNumber}
        handleLogin={handleLogin}
      />
    </div>
  );
};

export default ParentComponent;
