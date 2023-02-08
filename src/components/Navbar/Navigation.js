import React from 'react';

function Navbar({
    setShowProjects, showProjects,
    setShowContact, showContact,
    setShowResume, showResume,
    showAbout, setShowAbout }) {
    function About() {
        setShowAbout(!showAbout)
        if (showProjects) {
            setShowProjects(!showProjects)
        }
        if (showContact) {
            setShowContact(!showContact)
        }
        if (showResume) {
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
            <div>
                <button onClick={About}>About Me</button>
                <button onClick={Projects} >Portfolio</button>
                <button onClick={Contact} >Contact</button>
                <button onClick={Resume} >Resume</button>
            </div>
        </div>
    )
}
export default Navbar;


// var aboutme = document.querySelector('.info');
// var projects = document.querySelector('#projects');
// var contact = document.querySelector('.contactform');
// var resume = document.querySelector('.resume');
// aboutme.style = "display: none";
// projects.style = "display: none";
// contact.style = "display: none";
// resume.style = "display: block";




// var projects = document.querySelector('#projects');
// var contact = document.querySelector('.contactform');
// var resume = document.querySelector('.resume');
// var aboutme = document.querySelector('.info');
// projects.style = "display: none";
// contact.style = "display: none";
// resume.style = "display: none";
// aboutme.style = "display: block";























