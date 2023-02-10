import React from 'react';
import { FaGithub } from 'react-icons/fa'
import './Projects.css';

export default function Projects() {
    return (
        <div >
            <div id='projects'>
                <figure className="dimg card-column">
                    <h3 className="card-header">
                        The Journal Post
                        <a href='https://github.com/jennahopeclem/self-journal' target="_blank"
                            rel='noreferrer' style={{ color: "black", marginLeft: "14px" }}><FaGithub />
                        </a>
                    </h3>
                    <a className="link" target="_blank"
                        href="https://self-journal-post.herokuapp.com/" rel='noreferrer'>
                        <div className="card-body description">
                            <h4 className='projectDescription'>MVC Paradigm Application that uses RESTful API's, MySQL, and Handlebars</h4>
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
                            <h4 className='projectDescription'>JavaScript Application that uses server-side API's and client-side storage</h4>
                        </div>
                    </a>
                </figure>
            </div>
        </div>

    )
}
