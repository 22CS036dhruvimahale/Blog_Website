<<<<<<< HEAD

import React from 'react';
=======
import React from 'react';
import logo from './logo.svg';
import Header from './components/header/Header';
import DataProvider from './context/DataProvider';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
>>>>>>> 93d4a9bbc29001c89213f477d8f5d3ef4131b89e
import './App.css';
import Login from './components/account/login'
import Home from './components/home';
function App() {
  return (
    <DataProvider>
      <BrowserRouter>
      <Header/>
     <div style={{marginTop: 64}}>
      
        <Routes>
         <Route path='/login'element={<Login/>}/>
         <Route path='/'element={<Home/>}/>
        </Routes>
     </div>
    </BrowserRouter>
   </DataProvider>
  );
}
export default App;

