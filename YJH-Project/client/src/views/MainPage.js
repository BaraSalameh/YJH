import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import MainForm from '../components/MainForm';
import axios from 'axios';
const MainPage = props => {

    const {username} = props;
    const [ user, setUser ] = useState([]);

    useEffect (() => {
        axios.get('http://localhost:8000/api/user/'+username)
        .then(res => {
            setUser(res.data);
        })
        .catch(err => console.log('error retrieving data from database'));
    }, [username])

    return (
        <div>
            <Header firstname = { user.firstname } lastname = { user.lastname }/>
            <MainForm user={ user } />
        </div>
    )
}

export default MainPage
