import React from 'react';

const styles = {
    container : {
        display : 'flex',
        justifyContent : 'space-between',
        padding : '0 5rem',
        background : 'linear-gradient(#0B486B, #0B486B)',
        borderBottom : '1px solid #745345'
    },
    paragraph : {
        fontFamily : '"Times New Roman',
        color : 'wheat'
    },
};

const Header = props => {

    const { firstname, lastname } = props;
    return (
        <div style={styles.container}>
            <div>
                <h2 style={ styles.paragraph }>{ firstname } { lastname }</h2>
            </div>
            <div>
                <h3 ><a href='/' style={ styles.paragraph }>Logout</a></h3>
            </div>
        </div>
    );
}

export default Header
