import React from 'react';
import './Navigation.css'

function Navbar({
    setShowProjects, showProjects,
    setShowContact, showContact,
    setShowResume, showResume,
    showAbout, setShowAbout }) {
    function About() {
        setShowAbout(!showAbout)

        if (showProjects) {
            setShowProjects(!showProjects)
        } else if (showContact) {
            setShowContact(!showContact)
        } else if (showResume) {
            setShowResume(!showResume)
        } 
    }

    function Projects() {
        setShowProjects(!showProjects);
        if (showAbout) {
            setShowAbout(!showAbout)
        }
        if (showContact) {
            setShowContact(!showContact)
        }
        if (showResume) {
            setShowResume(!showResume)
        }
    }
    function Contact() {
        setShowContact(!showContact);
        if (showProjects) {
            setShowProjects(!showProjects)
        }
        if (showAbout) {
            setShowAbout(!showAbout)
        }
        if (showResume) {
            setShowResume(!showResume)
        }
    }
    function Resume() {
        setShowResume(!showResume);
        if (showContact) {
            setShowContact(!showContact)
        }
        if (showAbout) {
            setShowAbout(!showAbout)
        }
        if (showProjects) {
            setShowProjects(!showProjects)
        }
    }

    return (
        <div>
            <div className="nav-btns">
                <button className="btn btn-secondary btn-sm" type="button" data-bs-toggle="button" onClick={About}>About Me</button>
                <button className="btn btn-secondary btn-sm" type="button" data-bs-toggle="button" onClick={Projects} >Projects</button>
                <button className="btn btn-secondary btn-sm" type="button" data-bs-toggle="button" onClick={Contact} >Contact</button>
                <button className="btn btn-secondary btn-sm" type="button" data-bs-toggle="button" onClick={Resume} >Resume</button>
            </div>
        </div>
    )
}
export default Navbar;
























