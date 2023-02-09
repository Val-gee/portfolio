import React from 'react';
import './Footer.css'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { FaFacebookSquare } from 'react-icons/fa'
import { RiHeartsLine } from "react-icons/ri"


function Footer() {
    const styles = {
        footer: {
            padding: '10px',
            backgroundImage: 'url(./images/4925519.jpg)',
            borderRadius: '25px'
        },
        icons: {
            color: 'rgb(o,o,o)',
            fontSize: '65px'
        },
        author: {
            fontSize: '20px',
            color: 'rgb(250 91 0)',
            paddingTop: '30px'
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
                <p>Made with <RiHeartsLine /> by Valentina</p>
            </div>
        </div>
    )
}

export default Footer;