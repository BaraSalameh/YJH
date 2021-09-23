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

const styles = {
    paper: {
      display : 'flex', flexDirection : 'column', padding : '1rem', textAlign : 'center', width : '20rem', 
      margin : '7.39rem auto', background : 'linear-gradient(#FFEFBA, #EAEAEA)'
    },
    form : {
      display : 'flex', flexDirection : 'column', padding : '1rem'
    },
    input: {
        marginBottom: "1rem"
    },
    background : {
        background : 'linear-gradient(#0B486B, #F56217)', height : '100%', width : '100%', display : 'inline-block',
        margin : '0rem'
    },
    paragraph : {
        fontFamily : '"Times New Roman'
    }
}

const LoginPage = props => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        username.length > 0 ? 
            password.length > 0 ?
                username === 'yazan.hazboun' ?
                    password === 'yj' ?
                        navigate('/main')
                    : alert('Wrong username or password!')
                : alert('Wrong username or password!')
            : alert('Password can not be empty!')
        : alert('Username can not be empty!')
    }
    return (
        <div style={styles.background}>
            <Paper elevation={7} style={styles.paper}>
                <h2 style={styles.paragraph}>Login</h2>
                <form style={styles.form}>
                    <FormControl variant="outlined" style={styles.input}>
                        <InputLabel>Username</InputLabel>
                        <OutlinedInput type="text" onChange={e => setUsername(e.target.value)}/>
                    </FormControl>
                    <FormControl variant="outlined" style={styles.input}>
                        <InputLabel>Password</InputLabel>
                        <OutlinedInput type="password" onChange={e => setPassword(e.target.value)}/>
                    </FormControl>
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
