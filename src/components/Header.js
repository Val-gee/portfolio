import React from 'react';

function Header() {
    const styles = {
        header: {
            display: 'flex',
            justifyContent: 'spaceBetween',
            alignItems: 'center',
            padding: '1%',
            width: '100' ,
            fontWeight: '40',
            backgroundColor: 'rgb(98, 153, 74)',
            color: 'rgb(0,0,0)'

        }
    }

return (
    <div>
        <header style={styles.header}>
            <h1>Valentina Guevara</h1>
        </header>
    </div>
)
}

export default Header;