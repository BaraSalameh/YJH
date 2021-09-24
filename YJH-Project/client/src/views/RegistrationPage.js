import React, {useState} from 'react';
import {
    Paper,
    FormControl,
    InputLabel,
    OutlinedInput,
    Button,
  } from '@material-ui/core';
import {Link, navigate} from '@reach/router';
import axios from 'axios';

const styles = {
    paper: {
      display : 'flex', flexDirection : 'column', padding : '1rem', textAlign : 'center', width : '20rem', 
      margin : '5rem auto', background : 'linear-gradient(#FFEFBA, #EAEAEA)'
    },
    form : {
      display : 'flex', flexDirection : 'column', padding : '1rem'
    },
    input: {
        marginBottom: "1rem"
    },
    background : {
        background : 'linear-gradient(#0B486B, #F56217)', height : '100%', width : '100%', display : 'inline-block'
    },
    paragraph : {
        fontFamily : '"Times New Roman'
    },
    errorParagraph : {
        color : 'red', fontFamily : '"Times New Roman', marginTop : '0.5px'
    }
}

const RegistrationPage = props => {

    const {SCB} = props;

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        firstname.length >= 2 ?
            lastname.length >= 2 ?
                username.length >= 5 ?
                    password.length >= 8 ? 
                        passwordConfirmation.length >= 8 ?
                            password === passwordConfirmation ?
                                navigateFunction()
                            : setErrorMessage('Both password and password confirmation should match!')
                        : setErrorMessage('Password confirmation can not be less than 8 characters!')
                    : setErrorMessage('Username can not be less than 5 characters!')
                : setErrorMessage('Password can not be less than 8 characters!')
            : setErrorMessage('Last name can not be less than 2 characters!')
        : setErrorMessage('First name can not be less than 2 characters!')
    }

    const navigateFunction = () =>{
        axios.get('http://localhost:8000/api/user/'+username)
        .then(res => {
            res.data !== null ?
                setErrorMessage('Username or email is already exists!')
            :
            axios.post('http://localhost:8000/api/user/new',{
                firstname, lastname, username, password
            })
            .then(res => {
                SCB(firstname, lastname,username);
                navigate('/registration/step/two');
            })
            .catch(err => console.log('err adding new user'));
        });
    };

    return (
        <div style={styles.background}>
            <Paper elevation={7} style={styles.paper}>
                <h2 style={styles.paragraph}>Registration</h2>
                <form style={styles.form}>
                    <FormControl variant="outlined" style={styles.input}>
                        <InputLabel>First Name</InputLabel>
                        <OutlinedInput type="text" onChange={e => setFirstname(e.target.value)}/>
                    </FormControl>
                    {
                        errorMessage === 'First name can not be less than 2 characters!' ?
                            <p style={styles.errorParagraph}>First name can not be less than 2 characters!</p>
                        :
                        ""
                    }
                    <FormControl variant="outlined" style={styles.input}>
                        <InputLabel>Last Name</InputLabel>
                        <OutlinedInput type="text" onChange={e => setLastname(e.target.value)}/>
                    </FormControl>
                    {
                        errorMessage === 'Last name can not be less than 2 characters!' ?
                            <p style={styles.errorParagraph}>Last name can not be less than 2 characters!</p>
                        :
                        ""
                    }
                    <FormControl variant="outlined" style={styles.input}>
                        <InputLabel>Username or email</InputLabel>
                        <OutlinedInput type="text" onChange={e => setUsername(e.target.value)}/>
                    </FormControl>
                    {
                        errorMessage === 'Username can not be less than 5 characters!' ?
                            <p style={styles.errorParagraph}>Username can not be less than 5 characters!</p>
                        :
                        ""
                    }
                    {
                        errorMessage === 'Username or email is already exists!' ?
                            <p style={styles.errorParagraph}>Username or email is already exists!</p>
                        :
                        ""
                    }
                    <FormControl variant="outlined" style={styles.input}>
                        <InputLabel>Password</InputLabel>
                        <OutlinedInput type="password" onChange={e => setPassword(e.target.value)}/>
                    </FormControl>
                    {
                        errorMessage === 'Password can not be less than 8 characters!' ?
                            <p style={styles.errorParagraph}>Password can not be less than 8 characters!</p>
                        :
                        ""
                    }
                    <FormControl variant="outlined" style={styles.input}>
                        <InputLabel>Password Confirmation</InputLabel>
                        <OutlinedInput type="password" onChange={e => setPasswordConfirmation(e.target.value)}/>
                    </FormControl>
                    {
                        errorMessage === 'Password confirmation can not be less than 8 characters!' ?
                            <p style={styles.errorParagraph}>Password confirmation can not be less than 8 characters!</p>
                        :
                        errorMessage === 'Both password and password confirmation should match!' ?
                            <p style={styles.errorParagraph}>Both password and password confirmation should match!</p>
                        :
                        ""
                    }
                    <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
                        Register
                    </Button>
                    <p style={styles.paragraph}>Already have an account? <Link to='/'>Login</Link> </p>
                </form>
            </Paper>
        </div>
    );
}

export default RegistrationPage
