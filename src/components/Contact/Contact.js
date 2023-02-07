import React from 'react';
import './Contact.css';

export default function Contact() {
    return(
        <div className='contactform'>
            <form className="form">
                <h1>Let's get in touch</h1>
                <input 
                name='name'
                type='text'
                placeholder='Name'
                />
                <input 
                name='email'
                type='text'
                placeholder='Email'
                />
                <input 
                name='Message:'
                type='text'
                placeholder='Message...'
                />
            </form>
        </div>
    )
}