import React from 'react';
import SecondRegistrationForm from '../components/SecondRegistrationForm';

const SecondRegistrationPage = props => {

    const { username } = props;
    return (
        <div>
            <SecondRegistrationForm username = { username }/>      
        </div>
    );
}

export default SecondRegistrationPage
