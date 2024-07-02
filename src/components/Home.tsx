import React from "react";

import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";

interface HomeProps {
    mobileNumber: string;
    logout: () => void;
}

const Home: React.FC<HomeProps> = ({ mobileNumber, logout }) => {
  return (
    <Card className="w-[450px] flex flex-col gap-4">
      <CardHeader>
        <CardTitle className="text-center">Login Successful!</CardTitle>
      </CardHeader>
      <CardContent>
        <p>You've successfully logged In!</p>
        <p>Mobile Number: +91 {mobileNumber}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className="w-full" variant={"destructive"} onClick={logout}>
          Log Out
        </Button>
      </CardFooter>
    </Card>
  );
}

export default Home