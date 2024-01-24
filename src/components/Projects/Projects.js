import React from 'react';
import { FaGithub } from 'react-icons/fa'
import './Projects.css';

export default function Projects() {
    return (
        <div >
            <div id='projects'>
                <figure className="aimg card-column">
                    <h3 className="card-header">
                        Hometown Hero
                        <a href='https://github.com/Val-gee/HometownHero' target="_blank"
                            rel='noreferrer' style={{ color: "black", marginLeft: "14px" }}><FaGithub />
                        </a>
                    </h3>
                    <a className="link" target="_blank"
                        href="https://yourhometownhero-d093725de416.herokuapp.com/" rel='noreferrer'>
                        <div className="description">
                            <h4 className='projectDescription'>MERN Stack Single-Page Application for local Sports hero to host youth sports camps. This application includes admin access for the camp host and a shop to sell their merchandise.</h4>
                        </div>
                    </a>
                </figure>
                <figure className="bimg card-column">
                    <h3 className="card-header">
                        The Journal Post
                        <a href='https://github.com/michelletrn/selfjournalpost' target="_blank"
                            rel='noreferrer' style={{ color: "black", marginLeft: "14px" }}><FaGithub />
                        </a>
                    </h3>
                    <a className="link" target="_blank"
                        href="https://selfjournalpost.herokuapp.com/" rel='noreferrer'>
                        <div className="card-body description">
                            <h4 className='projectDescription'>MVC Paradigm Application that uses RESTful API's, MySQL, and Handlebars. Provides daily news articles, local weather information, and allows members to post their own articles.</h4>
                        </div>
                    </a>
                </figure>
                <figure className="cimg card-column">
                    <h3 className="card-header">
                        Motivational Wep Page
                        <a href='https://github.com/Val-gee/weekly-task-manager' target="_blank"
                            rel='noreferrer' style={{ color: "black", marginLeft: "14px" }}><FaGithub />
                        </a>
                    </h3>
                    <a className="link" target="_blank"
                        href="https://val-gee.github.io/weekly-task-manager/" rel='noreferrer'>
                        <div className="description">
                            <h4 className='projectDescription'>JavaScript Application that uses server-side API's and client-side storage. This application is designed to keep the user organized, motivated and help develop healthy time management habits.</h4>
                        </div>
                    </a>
                </figure>

            </div>
        </div>

    )
}
