import React from 'react';
import {BrowserRouter,Routes, Route,Link} from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';

import './App.css';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <div className='container mx-auto'>
      <BrowserRouter>
          <Routes>
              <Route index path="/" exact element={<Home/>} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
