import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route }  from 'react-router-dom';
import Button from './Components/Button/Button'
import Hero from './Components/Hero'
import CreateAccount from './Components/CreateAccount'
import Signup from './Components/Signup';
import Profile from './Components/Profile';

function App() {
  
  return (
      <BrowserRouter>
           <Routes>
              <Route path="/" element={<Hero></Hero>}></Route>
              <Route path="/createAcc" element={<CreateAccount></CreateAccount>}></Route>
              <Route path='/signup' element={<Signup></Signup>}> </Route>
              <Route path='/profile' element={<Profile></Profile>}></Route>
           </Routes>
      </BrowserRouter>
  );
}

export default App
