import React from 'react';
import './Header.css'

function Header() {
    const styles = {
        header: {
            padding: '6%',
            backgroundImage: 'url(./images/4925519.jpg)',
            color: 'rgb(250 91 0 / 79%)',
            borderRadius: '25px',
        },
        name: {
            backgroundColor: 'white',
        }
    }

    return (
        <div>
            <header style={styles.header} id="title">
                <h1 style={styles.name} id='name'>Valentina Guevara</h1>
            </header>
        </div>
    )
}

export default Header;