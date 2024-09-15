import { useState } from 'react';

import DataProvider from './context/DataProvider';

import {BrowserRouter,Routes,Route} from 'react-router-dom';

//component
import Login from './components/accounts/login';
import Home from './components/home/Home';
import Header from './components/header/Header';

function App() {
  const [isAuthenticated, isUserAuthenticated] = useState(false);

  return (
   
   <DataProvider>  
      <BrowserRouter>       {/* enables routing in the whole browser */}
       <Header/>
         <div style={{marginTop:64}}>

          <Routes> {/* to add routing to each page*/}
            <Route path='/login' element={<Login isUserAuthenticated={isUserAuthenticated} />} />
            <Route path='/' element={<Home/>} />
          </Routes>

        </div> 
      </BrowserRouter>
    
    
  </DataProvider>
      
       
  );
}

export default App;
