import React, { useState, useEffect } from 'react';
import {
    Paper,
    FormControl,
    InputLabel,
    OutlinedInput,
    Button
  } from '@material-ui/core';
  import axios from 'axios';
  import {navigate} from '@reach/router';

const styles = {
    paper: {
      display : 'flex', flexDirection : 'column', padding : '1rem', textAlign : 'center', width : '20rem', 
      margin : '3rem auto 9.92rem auto', background : 'linear-gradient(#FFEFBA, #EAEAEA)'
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
    },
    errorParagraph : {
        color : 'red', fontFamily : 'Times New Roman', marginTop : '0.5px'
    }
}

const DayCalculation = props => {

    const {username} = props;

    const [ user, setUser ] = useState([]);
    const [result, setResult] = useState(0);
    const [hours, setHours] = useState(0);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        axios.get('http://localhost:8000/api/user/'+username)
        .then(res => setUser(res.data))
        .catch(err => console.log('error retrieving data from database'));
    }, [username]);
    
    const handleSubmit = e => {
        e.preventDefault();
        hours > 10 ?
            setResult(((hours-10)*(user.hourMoney*1.5)) + (2*(user.hourMoney*1.25)) + (8*user.hourMoney) + hours*5 )
        :
        hours >8 ?
            setResult(((hours-8)*(user.hourMoney*125)/100) + (8*user.hourMoney) + hours*5)
        :
        hours <= 8 && hours > 0?
            setResult(hours*user.hourMoney + hours*5)
        :
        setErrorMessage('Hours can not be empty or 0!')
    }

    const backHandle = () => {
        navigate('/main/'+username);
    }

    return (
        <div style={styles.background}>
            <Paper elevation={7} style={styles.paper}>
                <h2 style={styles.paragraph}>{user.firstname} {user.lastname}</h2>
                <form style={styles.form}>
                    <FormControl variant="outlined" style={styles.input}>
                        <InputLabel>Hours today?</InputLabel>
                        <OutlinedInput type="number" onChange={e => setHours(e.target.value)}/>
                    </FormControl>
                    {
                        errorMessage.length > 0 ?
                            <p style={styles.errorParagraph}>{errorMessage}</p>
                        :
                        ""
                    }
                    <FormControl variant="outlined" style={styles.input}>
                        <InputLabel>Your salary</InputLabel>
                        <OutlinedInput type="text" readOnly value={result}/>
                    </FormControl>
                    <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
                        Calculate
                    </Button>
                    <h3><Button style={styles.paragraph} type="submit" variant="" onClick={backHandle}>Main menu</Button> </h3>
                    <h4><a href="/" style={styles.paragraph}> Logout </a></h4>
                </form>
            </Paper>
        </div>
    );
}

export default DayCalculation
