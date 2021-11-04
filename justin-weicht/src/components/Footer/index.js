import React from 'react';
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return(
        <section>
            <ul className="flex-row">
                <li className="mx-1">
                    <a className="icon" href="https://instagram.com" rel="noreferrer" target="_blank"><FaInstagram /></a>
                </li>
                <li className="mx-1">
                    <a className="icon" href="https://linkedin.com" rel="noreferrer" target="_blank"><FaLinkedinIn /></a>
                </li>
                <li className="mx-1">
                    <a className="icon" href="https://github.com" rel="noreferrer" target="_blank"><FaGithub /></a>
                </li>
            </ul>
        </section>
    );
};

export default Footer;