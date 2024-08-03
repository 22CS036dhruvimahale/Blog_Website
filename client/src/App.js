import logo from './logo.svg';
import DataProvider from './context/DataProvider';
import {BrowserRout,Routes,Route} from 'react-router-dom';
import './App.css';
import Login from './components/account/login'
import Home from './components/home';
function App() {
  return (
    <DataProvider>
      <BrowserRout>
     <div style={{marginTop: 64}}>
        <Routes>
         <Route path='/login'element={<Login/>}/>
         <Route path='/'element={<Home/>}/>
        </Routes>
     </div>
    </BrowserRout>
   </DataProvider>
  );
}
export default App;

