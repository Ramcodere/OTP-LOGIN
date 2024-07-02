// import { Button } from './components/ui/button'
import { useState } from 'react';
// import ParentComponent from './components/ParentComponent'
import Home from './components/Home';
import Otp from './components/Otp';
// import { RecaptchaVerifier } from 'firebase/auth/web-extension';
import { auth } from './config/firebase.config';
import { ConfirmationResult, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import Login from './components/Login';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isOtpSent, setIsOtpSent] = useState<boolean>(false);
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [otp, setOtp] = useState<string>("");
  const [result, setResult] = useState<ConfirmationResult |undefined>();


  const handleLogin = () => {
    if (!mobileNumber.trim() || mobileNumber.length < 10) return;
  
    setIsLoading(true);
    const appVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
      size: "invisible",
    });
  
    signInWithPhoneNumber(auth, `+91 ${mobileNumber}`, appVerifier)
      .then((response) => { 
        setResult(response);
        alert(`OTP sent to your mobile number: +91 ${mobileNumber}`);
        setIsOtpSent(true);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };
  



  const validateOtp = () => {
    if (!otp.trim() || otp.length < 6) return;
    setIsLoading(true);
    result?.confirm(otp).then(response => {
      console.log(response);
      alert("OTP validation successful");
      setIsLoggedIn(true);
    })
    .catch(err => console.log(err))
    .finally(() => setIsLoading(false));
  };



  const logout = () => {
    setIsLoggedIn(false);
    setIsOtpSent(false);
    setMobileNumber("");
    setOtp("");
    setResult(undefined);

  };




return (
  <div className="App">
    {isLoggedIn ? (
      <Home mobileNumber={mobileNumber} logout={logout} />
    ) : isOtpSent ? (
      <Otp
        mobileNumber={mobileNumber}
        otp={otp}
        setOtp={setOtp}
        isLoading={isLoading}
        validateOtp={validateOtp}
      />
    ) : (
      <Login
        mobileNumber={mobileNumber}
        isLoading={isLoading}
        setMobileNumber={setMobileNumber}
        handleLogin={handleLogin}
      />
    )}
  </div>
);
}




export default App;


