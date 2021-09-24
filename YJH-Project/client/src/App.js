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
  const [username, setUsername] = useState("");
  const [hourMoney, setHourMoney] = useState(0);
  const [currency, setCurrency] = useState("");
  

  const successfullCallBack = (firstname, lastname, username) => {
    setFirstname(firstname);
    setLastname(lastname);
    setUsername(username);
  }

  const getHourMoney = (hourMoney, currency) => {
    setHourMoney(hourMoney);
    setCurrency(currency);
  }

  return (
    <>
      <Router>
        <LoginPage path='/'/>
        <RegistrationPage path='/registration' SCB={successfullCallBack}/>
        <SecondRegistrationPage path='/registration/step/two' firstname={firstname} lastname={lastname} username={username} SCB={getHourMoney}/>
        <MainPage path='/main' firstname={firstname} lastname={lastname} username={username} hourMoney={hourMoney} currency={currency}/>
      </Router>
    </>
  );
}

export default App;
