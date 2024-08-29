// import React from 'react';
import { useState } from "react";
import React from 'react';
import { Box, Button, styled, TextField, Typography } from "@mui/material";

const Component = styled(Box)`
  width: 400px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0/0.4);
`;

const Image = styled("img")({
  width: 120,
  margin: "auto",
  display: "flex",
  padding: "50px 0 0",
});

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #9fd4ca;
  height: 49px;
  border-radius: 2px;
  &:hover {
    background: #82c0b3;
    color: #445045;
  }
`;

const SignupButton = styled(Button)`
  text-transform: none;
  background: #9fd4ca;
  color: white;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
  &:hover {
    background: #82c0b3;
    color: #445045;
  }
`;

const Text = styled(Typography)`
  color: #445045;
  font-size: 14px;
`;


const Login = () => {
    const imageurl = "https://sadeemalkhattabi.wordpress.com/wp-content/uploads/2018/10/blog-gif-2.gif";
   
    const [account, toggleAccount] = useState("login");

    const toggleSignup = () => {
        account === "signup" ? toggleAccount("login") : toggleAccount("signup");
      };
   
    return (
        <Component>
          <Box>
            <Image src={imageurl} alt="login" />
           { 
           account === "login"?
              <Wrapper>
                <TextField variant="standard" label="Enter Username" />
                <TextField variant="standard" label="Enter Password" />
                <LoginButton variant="contained">Login</LoginButton>
                <Text style={{ textAlign: "center" }}>OR</Text>
                <SignupButton onClick={()=>toggleSignup()} style={{ marginBottom: 50 }}>
                  Create an Account
                </SignupButton>
              </Wrapper>
            : 
              <Wrapper>
                <TextField variant="standard"   label="Enter Name" />
                <TextField variant="standard"   label="Enter Username" />
                <TextField variant="standard"   label="Enter Password" />
              
                <SignupButton>Signup</SignupButton>
                <Text style={{ textAlign: "center" }}>OR</Text>
                <LoginButton variant="contained" onClick={()=>toggleSignup()}>
                  Already have an Account
                </LoginButton>
              </Wrapper>
}
        
          </Box>
        </Component>
      );
    };
    
    export default Login;