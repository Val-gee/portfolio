import React from 'react';
import './Projects.css';

export default function Projects() {
    return (
        <div >
            <div id='projects'>
                <figure className="dimg card-column">
                    <a className="link" target="_blank"
                        href="https://self-journal-post.herokuapp.com/" rel='noreferrer'>
                        <div className="card-body">
                            <h3 className="card-header">
                                The Journal Post
                            </h3>
                        </div>
                    </a>
                </figure>
                <figure className="cimg card-column">
                    <a className="link" target="_blank"
                        href="https://val-gee.github.io/weekly-task-manager/" rel='noreferrer'>
                        <div className="card-body">
                            <h3 className="card-header">
                                Motivational Wep Page
                            </h3>
                        </div>
                    </a>
                </figure>
            </div>
        </div>

    )
}
