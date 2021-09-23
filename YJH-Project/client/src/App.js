import './App.css';
import LoginPage from './views/LoginPage';
import RegistrationPage from './views/RegistrationPage';
import {Router} from '@reach/router';

function App() {
  return (
    <>
      <Router>
        <LoginPage path='/'/>
        <RegistrationPage path='/registration'/>
      </Router>
    </>
  );
}

export default App;
