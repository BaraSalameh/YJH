import React from 'react';
import './App.css';
import LoginPage from './views/LoginPage';
import RegistrationPage from './views/RegistrationPage';
import SecondRegistrationPage from './views/SecondRegistrationPage';
import {Router} from '@reach/router';
import MainPage from './views/MainPage';
import DayCalculation from './views/DayCalculation';

function App() {
  return (
    <>
      <Router>
        <LoginPage path='/'/>
        <RegistrationPage path='/registration'/>
        <SecondRegistrationPage path='/registration/step/two/:username'/>
        <MainPage path='/main/:username'/>
        <DayCalculation path='daycalculation/:username'/>
      </Router>
    </>
  );
}

export default App;
