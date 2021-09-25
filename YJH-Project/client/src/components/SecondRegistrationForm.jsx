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
      margin : '11.9rem auto', background : 'linear-gradient(#FFEFBA, #EAEAEA)'
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
    }
}

const SecondRegistrationForm = props => {

    const { username } = props;

    const [hourMoney, setHourMoney] = useState(0);
    const [currency, setCurrency] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/user/update/'+username+'/'+hourMoney)
        .then(res => console.log('updated successfully'))
        .catch(err => console.log('error updating'));
        navigate('/main/'+username);
    }

    return (
        <div style={styles.background}>
            <Paper elevation={7} style={styles.paper}>
                <h2 style={styles.paragraph}>{username}</h2>
                <form style={styles.form}>
                    <FormControl variant="outlined" style={styles.input}>
                        <InputLabel>How much you get paid per hour?</InputLabel>
                        <OutlinedInput type="number" onChange={e => setHourMoney(e.target.value)}/>
                    </FormControl>
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
