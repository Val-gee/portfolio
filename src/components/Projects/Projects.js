import React from 'react';
import './Projects.css';

export default function Projects() {
    return (
        <div >
            <div id='projects'>
                <h2 className="work" id="work">Work</h2>
                <figure className="dimg card-column"><a className="link" target="_blank"
                    href="https://self-journal-post.herokuapp.com/">
                    <div className="card-body">
                        <h3 className="card-header">
                            The Self Journal Post
                        </h3>
                    </div>
                </a>
                </figure>
                <figure className="cimg card-column"><a className="link" target="_blank"
                    href="https://val-gee.github.io/weekly-task-manager/">
                    <div className="card-body">
                        <h3 className="card-header">
                            Motivational Wep Page
                        </h3>
                    </div>
                </a>
                </figure>
                <figure className="aimg card-column"><a className="link" target="_blank"
                    href="https://val-gee.github.io/prework-study-guide/">
                    <div className="card-body">
                        <h3 className="card-header">
                            Pre-work Study Guide
                        </h3>
                    </div>
                </a>
                </figure>
                <figure className="bimg card-column"><a className="link" target="_blank"
                    href="https://val-gee.github.io/Code-refractor/">
                    <div className="card-body">
                        <h3 className="card-header">
                            First Code Refractor
                        </h3>
                    </div>
                </a>
                </figure>
            </div>
        </div>
    )
}