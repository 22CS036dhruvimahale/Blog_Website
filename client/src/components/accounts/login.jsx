import React from 'react';
import { useState ,useContext} from "react";

import { Box, Button, styled, TextField, Typography } from "@mui/material";
import { API } from '../../service/api';
import {DataContext} from '../../context/DataProvider';

import { useNavigate } from 'react-router-dom'; //use to navigate to other pages

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
const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`;


const Text = styled(Typography)`
  color: #445045;
  font-size: 14px;
`;


const loginInitialValues = {
  username: '',
  password: ''
};

const signupInitialValues = {
  name: '',
  username: '',
  password: ''
};


const Login = () => {
    const imageURL = "https://sadeemalkhattabi.wordpress.com/wp-content/uploads/2018/10/blog-gif-2.gif";
   
    const [login, setLogin] = useState(loginInitialValues);
    const [account, toggleAccount] = useState('login');
    const [signup, setSignup] = useState(signupInitialValues);
    const [error, setError] = useState('');

  const{setAccount}=useContext(DataContext);
  const navigate = useNavigate();

    const toggleSignup = () => {
        account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
      }

      const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

      const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
      };
      
      const loginUser = async () => {
        let response = await API.userLogin(login);
        if (response.isSuccess) {
            setError('');

            sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
            sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);
            
          
            setAccount({ name: response.data.name, username: response.data.username });
            
            // isUserAuthenticated(true)
            // setLogin(loginInitialValues);
            navigate('/');

          } else {
            setError('Something went wrong! please try again later');
        }
      };


      const signupUser = async () => {
        try {
            let response = await API.userSignup(signup);
            if (response.isSuccess) {
                setError('');
                setSignup(signupInitialValues);
                toggleAccount('login');
            } else {
                setError('Something went wrong! Please try again later');
            }
        } catch (error) {
            setError('Error during signing up. Please try again later.');
            console.error(error);
        }
    };
    
      
    return (
        <Component>
          <Box>
            <Image src={imageURL} alt="login" />
           { 
           account === "login"?
              <Wrapper>
                   <TextField variant="standard" value={login.username} onChange={(e) => onValueChange(e)} name='username' label='Enter Username' />
                   <TextField variant="standard" value={login.password} onChange={(e) => onValueChange(e)} name='password' label='Enter Password' />

                
                {error && <Error>{error}</Error>}


                <LoginButton variant="contained" onClick={() => loginUser()}>Login</LoginButton>
                <Text style={{ textAlign: "center" }}>OR</Text>
                <SignupButton onClick={()=>toggleSignup()} style={{ marginBottom: 50 }}>
                  Create an Account
                </SignupButton>

              </Wrapper>
            : 
              <Wrapper>
                <TextField variant="standard"  onChange={(e) => onInputChange(e)} name="name" label="Enter Name" />
                <TextField variant="standard"  onChange={(e) => onInputChange(e)} name="username" label="Enter Username" />
                <TextField variant="standard"  onChange={(e) => onInputChange(e)} name="password" label="Enter Password" />
              
                {error && <Error>{error}</Error>}

                <SignupButton onClick={() =>signupUser()}>Signup</SignupButton>
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