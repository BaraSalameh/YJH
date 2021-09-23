import React, {useState} from 'react';
import {
    Paper,
    FormControl,
    InputLabel,
    OutlinedInput,
    Button,
  } from '@material-ui/core';
import {Link, navigate} from '@reach/router';

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
    }
}

const RegistrationPage = props => {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        password.length > 0 ? 
            passwordConfirmation.length > 0 ?
                password === passwordConfirmation ?
                    navigate('/registration/step/two')
                : alert('Both password and password confirmation should match!')
            : alert('Password confirmation field can not be empty')
        : alert('Password field can not be empty!')
    }

    return (
        <div style={styles.background}>
            <Paper elevation={7} style={styles.paper}>
                <h2 style={styles.paragraph}>Registration</h2>
                <form style={styles.form}>
                    <FormControl variant="outlined" style={styles.input}>
                        <InputLabel>First Name</InputLabel>
                        <OutlinedInput type="text" onChange={e => setFirstname(e.target.value)}/>
                    </FormControl>
                    <FormControl variant="outlined" style={styles.input}>
                        <InputLabel>Last Name</InputLabel>
                        <OutlinedInput type="text" onChange={e => setLastname(e.target.value)}/>
                    </FormControl>
                    <FormControl variant="outlined" style={styles.input}>
                        <InputLabel>Password</InputLabel>
                        <OutlinedInput type="password" onChange={e => setPassword(e.target.value)}/>
                    </FormControl>
                    <FormControl variant="outlined" style={styles.input}>
                        <InputLabel>Password Confirmation</InputLabel>
                        <OutlinedInput type="password" onChange={e => setPasswordConfirmation(e.target.value)}/>
                    </FormControl>
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