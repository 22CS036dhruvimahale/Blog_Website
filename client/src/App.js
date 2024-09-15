import { useState } from 'react';

import DataProvider from './context/DataProvider';

import {BrowserRouter,Routes,Route,Outlet,Navigate} from 'react-router-dom';

//component
import Login from './components/accounts/login';
import Home from './components/home/Home';
import Header from './components/header/Header';



const PrivateRoute = ({ isAuthenticated, ...props }) => {
  // const token = sessionStorage.getItem('accessToken');
  return isAuthenticated ? 
    <>
      <Header/>
      <Outlet />
    </>
     : <Navigate replace to='/login' />
};

function App() {
  const [isAuthenticated, isUserAuthenticated] = useState(false);

  return (
   
   <DataProvider>  
      <BrowserRouter>       {/* enables routing in the whole browser */}
      
         <div style={{marginTop:64}}>

          <Routes> {/* to add routing to each page*/}
            <Route path='/login' element={<Login isUserAuthenticated={isUserAuthenticated} />} />
            
            <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
               <Route path='/' element={<Home/>} />
            </Route>

          </Routes>

        </div> 
      </BrowserRouter>
  </DataProvider>
  );
}

export default App;
