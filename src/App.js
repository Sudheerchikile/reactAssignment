
 import { Route,Routes } from 'react-router-dom';

import Sidebar from './components/Sidebar';
 import Home from "./components/Home";
 import About from './components/About';

import './App.css';
import Analytics from './components/Analytics';
import Products from './components/Products';
import MetamaskComponent from './components/MetamaskConnect';


const App=()=> {
  return (
    <div className="App">
      
      
        <Sidebar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/analytics" element={<Analytics/>}/>
          <Route path="/product" element={<Products/>}/>
          <Route path="/task4" element={<MetamaskComponent/>}/>

        </Routes> 
      
    </div>
  );
}

export default App;
