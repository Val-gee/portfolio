import React from 'react';

function Navbar({ setShowProjects, showProjects }) {
    function Aboutme(){

        var projects = document.querySelector('#projects');
        var contact = document.querySelector('.contactform');
        var resume = document.querySelector('.resume');
        var aboutme = document.querySelector('.info');
        projects.style = "display: none";
        contact.style = "display: none";
        resume.style = "display: none";
        aboutme.style = "display: block";
    }
    function Projects(){
        // var aboutme = document.querySelector('.info');
        // var contact = document.querySelector('.contactform');
        // var resume = document.querySelector('.resume');
        // var projects = document.querySelector('#projects');

        // aboutme.style = "display: none";
        // contact.style = "display: none";
        // resume.style = "display: none";
        // projects.style = "display: block";
        setShowProjects(!showProjects)
    }
    function Contact() {
        var aboutme = document.querySelector('.info');
        var projects = document.querySelector('#projects');
        var resume = document.querySelector('.resume');
        var contact = document.querySelector('.contactform');

        aboutme.style = "display: none";
        projects.style = "display: none";
        resume.style = "display: none";
        contact.style = "display: block";       
    }
    function Resume() {
        var aboutme = document.querySelector('.info');
        var projects = document.querySelector('#projects');
        var contact = document.querySelector('.contactform');
        var resume = document.querySelector('.resume');

        aboutme.style = "display: none";
        projects.style = "display: none";
        contact.style = "display: none";
        resume.style = "display: block";
    }

    return (
        <div>
            <div>
                <button onClick={Aboutme} >About Me</button>
                <button onClick={Projects} >Portfolio</button>
                <button onClick={Contact} >Contact</button>
                <button onClick={Resume} >Resume</button>
            </div>
        </div>
    )
}
export default Navbar;