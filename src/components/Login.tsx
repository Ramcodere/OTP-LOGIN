import React from "react";

import { Button } from "./ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "./ui/card";
import { Input } from "./ui/input";

interface LoginProps {
  mobileNumber: string;
  isLoading: boolean;
  setMobileNumber: React.Dispatch<React.SetStateAction<string>>;
  handleLogin: () => void;
}

const Login: React.FC<LoginProps> = ({
  mobileNumber,
  isLoading,
  setMobileNumber,
  handleLogin,
}) => {
  return (
    <Card className="w-[450px] flex flex-col gap-4">
      <CardHeader>
        <CardTitle className="text-center">Log In</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <label htmlFor="number">Mobile Number</label>
              <Input
                id="number"
                placeholder="Enter your mobile number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                maxLength={10}
                className="text-[18px]"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          id="sign-in-button"
          className="w-full"
          onClick={handleLogin}
          disabled={isLoading}
        >
          Log In
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Login;


