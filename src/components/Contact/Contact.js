import React from 'react';
import './Contact.css';

export default function Contact() {
    return(
        <div className='contactform contanier'>
            <form className="form" action="https://formsubmit.co/c7605528bed6db90bf2127ad1939ba5a" method="POST">
                <h1 className='p-4'>Let's get in touch</h1>
                <input 
                name='name'
                type='text'
                class="form-control mb-3"
                placeholder='Name'
                />
                <input 
                name='email'
                type='text'
                class="form-control"
                placeholder='email@example.com'
                pattern="^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$" required
                />
                <div id="emailHelp" class="form-text mb-3">I'll never share your email with anyone else.</div>
                <input 
                name='Message:'
                type='text'
                class="form-control mb-3"
                placeholder='Message...'
                />
                <input type='submit' className='mb-4'></input>
            </form>
        </div>
    )
}