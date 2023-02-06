import React from 'react';
import Aboutme from './About';


function Navbar() {
    function Aboutme(){
        var projects = document.querySelector('#projects');
        projects.style = "display: none";
    }
    function Work(){
        var aboutme = document.querySelector('')
    }

    return (
        <div>
            <div>
                <a onClick={Aboutme}>About Me</a>
                <a onClick{Work}>Portfolio</a>
                <a onClick>Contact</a>
                <a onClick>Resume</a>
            </div>
        </div>
    )
}
export default Navbar;