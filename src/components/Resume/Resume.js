import React from 'react';
import './Resume.css';

export default function Resume() {
    return (
        <div className='resume'>
            <div className='card tech'>
                <div className='card-body'>
                    <h5 class="card-title">Technologies</h5>
                    <ul className='details'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                        <li>React</li>
                    </ul>
                </div>
            </div>
            <div className='card goals'>
                <div className='card-body'>
                    <h5 class="card-title">Career Goals</h5>
                    <p className='details'>
                        I am a self-motivated team-player who is seeking a career opportunity in Web Development. I want to sharpen and grow the skills I originally learned during my Full Stack Coding Bootcamp at Rutgers University.
                    </p>
                </div>
            </div>
            <div className='card skills'>
                <div className='card-body'>
                    <h5 class="card-title">Skills</h5>
                    <ul className='details'>
                        <li>Clear communication</li>
                        <li>Great Listener</li>
                        <li>Kinesthetic Learner</li>
                        <li>Works well in a team</li>
                        <li>Performs well under pressure</li>
                        <li>Problem solving</li>
                    </ul>
                </div>
            </div>
            <div className='resume-link'><a href="https://docs.google.com/document/d/1qiK_znllWaHhbDhyFiKsqm1HmZHRYzpHewY7xj84VZo/edit?usp=sharing" atl="Link to Valentina Guevara's Resume" target='_blank' rel="noreferrer">Check out my full resume here!</a></div>
        </div>
    )
}