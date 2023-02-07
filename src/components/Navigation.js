import React from 'react';

function Navbar() {
    console.log(document.querySelector('#projects'));
    console.log(document.querySelector('.contactform'));
    console.log(document.querySelector('.resume'));
    console.log(document.querySelector('.info'));

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
        var aboutme = document.querySelector('.info');
        var contact = document.querySelector('.contactform');
        var resume = document.querySelector('.resume');
        var projects = document.querySelector('#projects');

        aboutme.style = "display: none";
        contact.style = "display: none";
        resume.style = "display: none";
        projects.style = "display: block";
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
                <a onClick={Aboutme} >About Me</a>
                <a onClick={Projects} >Portfolio</a>
                <a onClick={Contact} >Contact</a>
                <a onClick={Resume} >Resume</a>
            </div>
        </div>
    )
}
export default Navbar;