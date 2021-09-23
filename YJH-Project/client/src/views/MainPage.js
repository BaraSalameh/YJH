import React, {useState} from 'react';
import {
    Paper,
    FormControl,
    InputLabel,
    OutlinedInput,
    Button
  } from '@material-ui/core';

const styles = {
    paper: {
      display : 'flex', flexDirection : 'column', padding : '1rem', textAlign : 'center', width : '20rem', 
      margin : '9.83rem auto', background : 'linear-gradient(#FFEFBA, #EAEAEA)'
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

const MainPage = props => {

    const {hourMoney} = props;
    const {firstname, lastname} = props;
    const [hours, setHours] = useState(0);
    const [result, setResult] = useState(0);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        hours > 10 ?
            setResult(((hours-10)*(hourMoney*1.5)) + (2*(hourMoney*1.25)) + (8*hourMoney) )
        :
        hours >8 ?
            setResult(((hours-8)*(hourMoney*125)/100) + (8*hourMoney))
        :
        hours <= 8 && hours > 0?
            setResult(hours*hourMoney)
        :
        setErrorMessage('Hours can not be 0!')
    }
    return (
        <div style={styles.background}>
            <Paper elevation={7} style={styles.paper}>
                <h2 style={styles.paragraph}>{firstname} {lastname}</h2>
                <form style={styles.form}>
                    <FormControl variant="outlined" style={styles.input}>
                        <InputLabel>How many hours have you worked today?</InputLabel>
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
                </form>
            </Paper>
        </div>
    );
}

export default MainPage
