import React from 'react';
import {
    Paper,
    Button
  } from '@material-ui/core';
  import {navigate} from '@reach/router';

const styles = {
    paper: {
      display : 'flex', flexDirection : 'column', padding : '1rem', textAlign : 'center', width : '20rem', 
      margin : '3rem auto 15.5rem auto', background : 'linear-gradient(#FFEFBA, #EAEAEA)'
    },
    form : {
      display : 'flex', flexDirection : 'column', padding : '1rem'
    },
    input: {
        marginBottom: "1rem", fontFamily : '"Times New Roman'
    },
    background : {
        background : 'linear-gradient(#0B486B, #F56217)', height : '100%', width : '100%', display : 'inline-block',
        margin : '0rem'
    }
}

const MainForm = props => {

    const { user } = props;

    const dayHandle = e => {
        e.preventDefault();
        navigate('/daycalculation/'+user.username);
    };

    const weekHandle = e => {
        e.preventDefault();
        navigate('/daycalculation');
    };

    const monthHandle = e => {
        e.preventDefault();
        navigate('/daycalculation');
    };

    return (
        <div style={styles.background}>
            <Paper elevation={7} style={styles.paper}>
                <h2 style={styles.paragraph}> Calculate a </h2>
                
                <form style={styles.form}>
                <Button style={ styles.input } type="submit" variant="contained" color="primary" onClick={dayHandle}>
                    Day
                </Button>
                <Button style={ styles.input } type="submit" variant="contained" color="info" onClick={weekHandle}>
                    Week
                </Button>
                <Button style={ styles.input } type="submit" variant="contained" color="primary" onClick={monthHandle}>
                    Month
                </Button>
                </form>
            </Paper>
        </div>
    );
}

export default MainForm
