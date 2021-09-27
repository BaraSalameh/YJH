import React, {useState} from 'react';
import {
    Paper,
    FormControl,
    InputLabel,
    OutlinedInput,
    Button,
    Select,
    MenuItem
  } from '@material-ui/core';
import { navigate } from '@reach/router';
import axios from 'axios';

const styles = {
    paper: {
      display : 'flex', flexDirection : 'column', padding : '1rem', textAlign : 'center', width : '20rem', 
      margin : '11.05rem auto', background : 'linear-gradient(#FFEFBA, #EAEAEA)'
    },
    form : {
      display : 'flex', flexDirection : 'column', padding : '1rem'
    },
    input: {
        marginBottom: "1rem"
    },
    background : {
        background : 'linear-gradient(#0B486B, #F56217)', minHeight : '100%', minWidth : '100%', display : 'inline-block',
        margin : '0rem'
    },
    paragraph : {
        fontFamily : '"Times New Roman'
    },
    errorParagraph : {
        color : 'red', fontFamily : '"Times New Roman', marginTop : '0.5px'
    },
    inlineDiv : {
        display : 'flex', 
    },
    leftDiv : {
        
    },
    rightDiv : {
        paddingLeft : '0.5rem',
        maxWidth : '7rem'
    }
}

const SecondRegistrationForm = props => {

    const { username } = props;

    const [ firstPeriod, setFirstPeriod ] = useState(0);
    const [ secondPeriod, setSecondPeriod ] = useState(0);
    const [ secondPercentage, setSecondPercentage ] = useState(0);
    const [ thirdPercentage, setThirdPercentage ] = useState(0);
    const [ bonus, setBonus ] = useState(0);
    const [hourMoney, setHourMoney] = useState(0);
    const [currency, setCurrency] = useState("");
    const [recipientType, setRecipientType] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [ isLoaded, setIsLoaded ] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        console.log(errorMessage);
        validation();
    };

    const validation = () => {
        if(isLoaded === 'perHour'){
            if(firstPeriod > 0){
                if(secondPeriod > 0){
                    if(secondPercentage < 100){
                        setErrorMessage("Second period percentage can't be less than 100%");
                    }else{
                        if(hourMoney > 0){
                            if(thirdPercentage > 0 && thirdPercentage < 100){
                                setErrorMessage("Third period percentage can't be less than 100!");
                            }else{
                                readyToGo();
                            }
                        }else{
                            setErrorMessage("Amount of money can't be 0");
                        }
                    }
                }else if(secondPercentage > 0){
                        setErrorMessage("You can't insert a percentage for a not existed period");
                    }
            }else{
                setErrorMessage("You can't proceed without having a first period");
            }
        }else{
            if(isLoaded === 'shifts'){

            }else{
                setErrorMessage("You can't proceed without having a recipient way");
            }
        } 
    };

    const readyToGo = () => {
        axios.put('http://localhost:8000/api/user/update/'+username, {firstPeriod, secondPeriod, 
        secondPercentage, thirdPercentage, hourMoney, bonus})
        .then(res => navigate('/main/'+username))
        .catch(err => console.log('error updating'));  
    };

    const handlePerHour = e => {
        e.preventDefault();
        recipientType === 'perHour' ?
            setRecipientType("")
        :
            setRecipientType('perHour')

        recipientType === 'perHour' ?
            setIsLoaded("")
        :
            setIsLoaded("perHour");
    };

    const handleShifts = e => {
        e.preventDefault();
        recipientType === 'shifts' ?
            setRecipientType("")
        :
            setRecipientType('shifts')

        recipientType === 'shifts' ?
            setIsLoaded("")
        :
            setIsLoaded("shifts");
    }

    return ( 
        <div style={styles.background}>
            <Paper elevation={7} style={styles.paper}>
                <h2 style={styles.paragraph}>{username}</h2>
                <h3 style={styles.paragraph}>Money recipient way</h3>
                <form style={styles.form}>
                    <Button style={styles.input} type="submit" variant="contained" color="primary" onClick={handlePerHour}>
                        Per hour
                    </Button>
                    {
                        recipientType === 'perHour' &&
                            <>
                                <div style={ styles.inlineDiv }>
                                    <div style = { styles.leftDiv }>
                                        <FormControl variant="outlined" style={styles.input}>
                                            <InputLabel>First period time</InputLabel>
                                            <OutlinedInput type="number" onChange={e => setFirstPeriod(e.target.value)}/>
                                        </FormControl>
                                    </div>
                                    <div style = { styles.rightDiv }>
                                        <FormControl variant="outlined" style={styles.input}>
                                            <InputLabel>percentage</InputLabel>
                                            <OutlinedInput type="number" value='100' readOnly/>
                                        </FormControl>
                                    </div>
                                </div>
                                {
                                    errorMessage === "You can't proceed without having a first period" &&
                                        <p style={styles.errorParagraph}>You can't proceed without having a first period</p>
                                }
                                <div style={ styles.inlineDiv }>
                                    <div style = { styles.leftDiv }>
                                        <FormControl variant="outlined" style={styles.input}>
                                            <InputLabel>Second period time</InputLabel>
                                            <OutlinedInput type="number" onChange={e => setSecondPeriod(e.target.value)}/>
                                        </FormControl>
                                    </div>
                                    <div style = { styles.rightDiv }>
                                        <FormControl variant="outlined" style={styles.input}>
                                            <InputLabel>percentage</InputLabel>
                                            <OutlinedInput type="number" onChange={e => setSecondPercentage(e.target.value)}/>
                                        </FormControl>
                                    </div>
                                </div>
                                {
                                    errorMessage === "Second period percentage can't be less than 100%" &&
                                        <p style={styles.errorParagraph}>Second period percentage can't be less than 100%</p>
                                }
                                {
                                    errorMessage === "You can't insert a percentage for a not existed period" &&
                                        <p style={styles.errorParagraph}>You can't insert a percentage for a not existed period</p>
                                }
                                <FormControl variant="outlined" style={styles.input}>
                                    <InputLabel>Third period time percentage</InputLabel>
                                    <OutlinedInput type="number" onChange = { e => setThirdPercentage(e.target.value) }/>
                                </FormControl>
                                {
                                    errorMessage === "Third period percentage can't be less than 100!" &&
                                        <p style={styles.errorParagraph}>Third period percentage can't be less than 100!</p>
                                }
                                <FormControl variant="outlined" style={styles.input}>
                                    <InputLabel>Money per hour</InputLabel>
                                    <OutlinedInput type="number" onChange = { e => setHourMoney(e.target.value)} />
                                </FormControl>
                                
                                {
                                    errorMessage === "Amount of money can't be 0" &&
                                        <p style={styles.errorParagraph}>Amount of money can't be 0</p>
                                }
                                <FormControl variant="outlined" style={styles.input}>
                                    <InputLabel>Bonus per hour</InputLabel>
                                    <OutlinedInput type="number" onChange = { e => setBonus(e.target.value)} />
                                </FormControl>
                            </>
                            
                    }
                    <Button style={styles.input} type="submit" variant="contained" color="" onClick={handleShifts}>
                        Shifts
                    </Button>
                    {
                        recipientType === 'shifts' &&
                        <   FormControl variant="outlined" style={styles.input}>
                                <InputLabel>How much you get paid per shift?</InputLabel>
                                <OutlinedInput type="number" onChange={e => setHourMoney(e.target.value)}/>
                            </FormControl>
                    }
                    {
                        errorMessage === "You can't proceed without having a recipient way" &&
                        <p style={styles.errorParagraph}>You can't proceed without having a recipient way</p>
                    }
                    <FormControl style={styles.input}>
                        <InputLabel id="demo-simple-select-label">Currency</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={currency}
                            onChange = {e => setCurrency(e.target.value)}
                            label="Currency" 
                        >
                            <MenuItem value={1}>$ US Dollar</MenuItem>
                            <MenuItem value={2}>₪ Israeli New Sheqel</MenuItem>
                            <MenuItem value={3}>€ Euro</MenuItem>
                            <MenuItem value={4}>JD Jordanian Dinar</MenuItem>
                        </Select>
                    </FormControl>
                    <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
                        Done
                    </Button>
                </form>
            </Paper>
        </div>
    );
}

export default SecondRegistrationForm
