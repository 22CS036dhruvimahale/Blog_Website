<<<<<<< HEAD


import { useState } from "react";
import React from 'react';
import { Box, Button, styled, TextField, Typography } from "@mui/material";
import { API } from '../../service/api';

=======
import React from "react";
import { useState , useContext} from "react";

import { Box, Button, styled, TextField, Typography } from "@mui/material";
import { DataContext } from "../../context/DataProvider";
import {API} from '../../service/api';
import {useNavigate } from 'react-router-dom';
>>>>>>> 93d4a9bbc29001c89213f477d8f5d3ef4131b89e
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
<<<<<<< HEAD

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`;

const signupInitialValues = {
  name: '',
  username: '',
  password: ''
};
=======
const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`
const loginInitialValues = {
  username: '',
  password: ''
}
// this is an object to store the value
const signupInitialValues={
  name:'',
  username:'',
  password:''
}
>>>>>>> 93d4a9bbc29001c89213f477d8f5d3ef4131b89e

const Login = () => {
  const imageurl = "https://sadeemalkhattabi.wordpress.com/wp-content/uploads/2018/10/blog-gif-2.gif";

  const [account, toggleAccount] = useState("login");
  const [signup, setSignup] = useState(signupInitialValues);
<<<<<<< HEAD
  const [error, setError] = useState('');
=======
  const [login,setLogin]=useState(loginInitialValues);
  const [error,setError]=useState('');
  const {setAccount } = useContext(DataContext);
  const navigate = useNavigate();
>>>>>>> 93d4a9bbc29001c89213f477d8f5d3ef4131b89e

  const toggleSignup = () => {
    account === "signup" ? toggleAccount("login") : toggleAccount("signup");
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

<<<<<<< HEAD
  const signupUser = async () => {
    try {
      let response = await API.userSignup(signup);
      if (response.isSuccess) {
        setError('');
        setSignup(signupInitialValues);
        toggleAccount('login');
      } else {
        setError(response.message || 'Something went wrong! Please try again later.');
      }
    } catch (error) {
      const errorMsg = error.message || 'Something went wrong! Please try again later.';
      setError(typeof error === 'object' ? error.message : errorMsg);
    }
  };
  

=======
  const signupUser =async () =>{
    let response =await API.userSignup(signup);
    if (response.isSuccess) {
      showError('');
      setSignup(signupInitialValues);
      toggleAccount('login');
  } else {
      showError('Something went wrong! please try again later');
  }
 

  }
  const onValueChange = (e) =>{
      setLogin({...login, [e.target.name]: e.target.value})
  }
  const loginUser = async() =>{
      let response= await API.userLogin(login);
      if(response.isSuccess)
      {
        setError('');
        setAccount({username:response.data.username,name:response.data.name});
        navigate('/')
      }
      else{
        setError('Something went wrong!')
      }
  }
>>>>>>> 93d4a9bbc29001c89213f477d8f5d3ef4131b89e
  return (
    <Component>
      <Box>
        <Image src={imageurl} alt="login" />
        {account === "login" ? (
          <Wrapper>
<<<<<<< HEAD
            <TextField variant="standard" label="Enter Username" />
            <TextField variant="standard" label="Enter Password" />
            <LoginButton variant="contained">Login</LoginButton>
=======
            <TextField variant="standard" value={login.username} onChange={(e)=>onValueChange(e)} name="username" label="Enter Username" />  {/*name field is used to differentiate data in the console*/}
            <TextField variant="standard" value={login.password} onChange={(e)=>onValueChange(e)} name="password" label="Enter Password" />
            {error && <Error>{error}</Error>}
            <LoginButton variant="contained" onClick={()=>loginUser()}>Login</LoginButton>
>>>>>>> 93d4a9bbc29001c89213f477d8f5d3ef4131b89e
            <Text style={{ textAlign: "center" }}>OR</Text>
            <SignupButton onClick={toggleSignup} style={{ marginBottom: 50 }}>
              Create an Account
            </SignupButton>
          </Wrapper>
        ) : (
          <Wrapper>
<<<<<<< HEAD
            <TextField variant="standard" onChange={onInputChange} name="name" label="Enter Name" required />
            <TextField variant="standard" onChange={onInputChange} name="username" label="Enter Username" />
            <TextField variant="standard" onChange={onInputChange} name="password" label="Enter Password" />
=======
            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='name' label="Enter Name" />
            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='username' label="Enter Username" />
            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='password' label="Enter Password" />
            

>>>>>>> 93d4a9bbc29001c89213f477d8f5d3ef4131b89e
            {error && <Error>{error}</Error>}
            <SignupButton onClick={signupUser}>Signup</SignupButton>
            <Text style={{ textAlign: "center" }}>OR</Text>
            <LoginButton variant="contained" onClick={toggleSignup}>
              Already have an Account
            </LoginButton>
          </Wrapper>
        )}
      </Box>
    </Component>
  );
};

export default Login;
