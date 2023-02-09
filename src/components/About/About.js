import React from 'react';
import './about.css';

export default function Aboutme() {
    return (
        <div className="info container">
            <div className='row'>
                <div className='col'>
                    <img src='./images/hpselfie2.png' className='photome' alt='Visiting The Harry Potter Store in NYC'></img>
                </div>
                <div className='col'>
                    <p id='abouttext'>
                        <strong>Hello visitor!</strong> Thank you for taking time to visit my portfolio. As a child growing up in Hollywood, Florida, I dedicated most of my time to school and synchronized
                        swimming practice. I was a part of the Aquacades traveling team for seven years. Those were some of the best years of my life. I owe a lot my teamwork and communication skills to the sport and my teammates. I learned to be
                        disciplined and organized at a very young age and have continued to apply and sharpen those skills
                        my professional life. For that reason, I enjoy conquring challenges with a team and strive to improve the development of a project.
                        I currently reside in New Jersey with my boyfriend,
                        Anthony, our poodle Chloe, our cat Bean, and our fish tanks. Anthony and I both enjoy outdoor activities and being a
                        part of our local Jiu Jitsu community at Radji Barret Jiu Jitsu in Fords. It has been a great
                        experience trying something new, aside from learning Web Development! Overall, I like to stay active
                        and engage people in communities that share the same positive mindset!
                    </p>
                </div>
            </div>
        </div>
    )
}
