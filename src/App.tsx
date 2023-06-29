import React from 'react';
import {Route, Routes} from "react-router-dom"
import logo from './logo.svg';
import './styles/App.scss';

import Header from "./components/Header"
import SignUpPage from './pages/SignUpPage';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/signup" element={<SignUpPage/>}/> 
      </Routes>
    </div>
  );
}

export default App;
