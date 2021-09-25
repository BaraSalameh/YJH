import React from 'react';
import MainForm from '../components/MainForm';

const MainPage = props => {

    const {username} = props;

    return (
        <div>
            <MainForm username={ username }/>
        </div>
    )
}

export default MainPage
