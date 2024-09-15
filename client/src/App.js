// import logo from './logo.svg';
import './App.css';

//component

import DataProvider from './context/DataProvider';

import Login from './components/accounts/login';

import Home from './components/home/Home';

function App() {
  return (
    <div style={{marginTop:64}}>

     <DataProvider>   
     <Login/>
     <Home/>
     </DataProvider>
      
        </div>
  );
}

export default App;
