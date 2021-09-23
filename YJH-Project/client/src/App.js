import React, { useState } from 'react';
import './App.css';
import LoginPage from './views/LoginPage';
import RegistrationPage from './views/RegistrationPage';
import SecondRegistrationPage from './views/SecondRegistrationPage';
import {Router} from '@reach/router';
import MainPage from './views/MainPage';

function App() {

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [hourMoney, setHourMoney] = useState(0);

  const successfullCallBack = (firstname, lastname) => {
    setFirstname(firstname);
    setLastname(lastname);
  }

  const getHourMoney = hourMoney => {
    setHourMoney(hourMoney);
  }

  return (
    <>
      <Router>
        <LoginPage path='/'/>
        <RegistrationPage path='/registration' SCB={successfullCallBack}/>
        <SecondRegistrationPage path='/registration/step/two' firstname={firstname} lastname={lastname} SCB={getHourMoney}/>
        <MainPage firstname={firstname} lastname={lastname} hourMoney={hourMoney} path='/main'/>
      </Router>
    </>
  );
}

export default App;
