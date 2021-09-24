import React, {useState} from 'react';
import {
    Paper,
    FormControl,
    InputLabel,
    OutlinedInput,
    Button,
    Checkbox,
    FormControlLabel
  } from '@material-ui/core';
  import {Link, navigate} from '@reach/router';
  import axios from 'axios';

const styles = {
    background : {
        background : 'linear-gradient(#0B486B, #F56217)', display : 'inline-block', 
        height : '100%', width : '100%'
    },
    paper: {
      display : 'flex', flexDirection : 'column', padding : '1rem', textAlign : 'center', width : '25%', height : '50%', 
       background : 'linear-gradient(#FFEFBA, #EAEAEA)', margin: '7.38rem auto'
    },
    form : {
      display : 'flex', flexDirection : 'column', padding : '1rem'
    },
    input: {
        marginBottom: "1rem"
    },
    paragraph : {
        fontFamily : '"Times New Roman'
    },
    errorParagraph : {
        color : 'red', fontFamily : '"Times New Roman', marginTop : '0.5px'
    }
}

const LoginPage = props => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [user, setUser] = useState([]);

    const handleSubmit = e => {
        e.preventDefault();
        authenticated();
        username.length > 0 ? 
            password.length > 0 ?
                username === user.username ?
                    password === user.password ?
                        navigate('/main')
                    : setErrorMessage('Wrong username or password!')
                : setErrorMessage('Wrong username or password!')
            : setErrorMessage('Password can not be empty!')
        : setErrorMessage('Username can not be empty!')

        setUsername("");
        setPassword("");
    }

    const authenticated = () => {
        axios.get('http://localhost:8000/api/user/'+username)
        .then(res => setUser(res.data))
        .catch(err => console.log("error retrieving user!"));
    }
    return (
        <div style={styles.background}>
            <Paper elevation={7} style={styles.paper}>
                <h2 style={styles.paragraph}>Login</h2>
                <form style={styles.form}>
                    <FormControl variant="outlined" style={styles.input}>
                        <InputLabel>Username</InputLabel>
                        <OutlinedInput type="text" onChange={e => setUsername(e.target.value)} value={username} />
                    </FormControl>
                    {
                        errorMessage === 'Username can not be empty!' ?
                            <p style={styles.errorParagraph}>Username can not be empty!</p>
                        :
                        ""
                    }
                    <FormControl variant="outlined" style={styles.input}>
                        <InputLabel>Password</InputLabel>
                        <OutlinedInput type="password" onChange={e => setPassword(e.target.value)} value={password}/>
                    </FormControl>
                    {
                        errorMessage === 'Wrong username or password!' ?
                            <p style={styles.errorParagraph}>Wrong username or password!</p>
                        :
                        errorMessage === 'Password can not be empty!' ?
                            <p style={styles.errorParagraph}>Password can not be empty!</p>
                        :
                        ""
                    }
                    <FormControlLabel
                        style={styles.input}
                        value="end"
                        control={<Checkbox />}
                        label="Remember me"
                        labelPlacement="end"
                    />
                    <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
                        Login
                    </Button>
                    <p style={styles.paragraph}>Not a member? <Link to='/registration'>Sign up now</Link> </p>
                </form>
            </Paper>
        </div>
    );
}

export default LoginPage
