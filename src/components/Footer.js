import React from 'react';
import './Footer.css'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { FaFacebookSquare } from 'react-icons/fa'


function Footer() {
    // function initialDisplay() {
    //     var projects = document.querySelector('#projects');
    //     var contact = document.querySelector('.contactform');
    //     var resume = document.querySelector('.resume');
    //     var aboutme = document.querySelector('.info');
    //     projects.style = "display: none";
    //     contact.style = "display: none";
    //     resume.style = "display: none";
    //     aboutme.style = "display: block";
    // }
    // initialDisplay();
    const styles = {
        footer: {
            padding: '3%',
            backgroundImage: 'url(./images/4925519.jpg)',
        },
        icons: {
            color: 'rgb(o,o,o)',
            fontSize: '54px'
        },
        author: {
            fontSize: '20px',
            color: 'rgb(250 91 0 / 79%)',
        }
    }
    return (
        <div style={styles.footer} id='footer'>
            <div style={styles.icons} >
                <a href='https://github.com/Val-gee' rel="noreferrer" target='_blank' style={{ color: "black"}}><FaGithub /></a>
                <a href='https://www.linkedin.com/in/valentinaguevara/' rel="noreferrer" target='_blank' style={{ color: "black", marginLeft: "45px"}}><FaLinkedin /></a>
                <a href='https://www.instagram.com/val.gee/' rel="noreferrer" target='_blank' style={{ color: "black", marginLeft: "45px"}}><AiFillInstagram /></a>
                <a href='https://www.facebook.com/valguevara0806' rel="noreferrer" target='_blank' style={{ color: "black", marginLeft: "45px"}}><FaFacebookSquare /></a>
            </div>
            <div style={styles.author}>
                <p>Made with ♡ by Valentina</p>
            </div>
        </div>
    )
}

export default Footer;