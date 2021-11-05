import React from 'react';
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return(
        <section>
            <ul className="flex-row-footer center">
                <li className="mx-1">
                    <a className="icon" href="https://instagram.com/jweicht92" rel="noreferrer" target="_blank"><FaInstagram /></a>
                </li>
                <li className="mx-1">
                    <a className="icon" href="https://linkedin.com/in/justin-weicht-4a476684/" rel="noreferrer" target="_blank"><FaLinkedinIn /></a>
                </li>
                <li className="mx-1">
                    <a className="icon" href="https://github.com/JustinWeicht" rel="noreferrer" target="_blank"><FaGithub /></a>
                </li>
            </ul>
            <p className="flex-row center icon">Justin Weicht 2021</p>
        </section>
    );
};

export default Footer;