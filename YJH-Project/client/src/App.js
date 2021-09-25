import React, { useState, useEffect } from 'react';
import './App.css';
import LoginPage from './views/LoginPage';
import RegistrationPage from './views/RegistrationPage';
import SecondRegistrationPage from './views/SecondRegistrationPage';
import {Router} from '@reach/router';
import MainPage from './views/MainPage';

function App() {
  return (
    <>
      <Router>
        <LoginPage path='/'/>
        <RegistrationPage path='/registration'/>
        <SecondRegistrationPage path='/registration/step/two/:username'/>
        <MainPage path='/main/:username'/>
      </Router>
    </>
  );
}

export default App;
