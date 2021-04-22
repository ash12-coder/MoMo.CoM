import React from 'react';
import './Footer.css';
import {NavLink} from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';


const Footer  = () =>{
  return(
    <>
    <div className="footer">
        <div className="footer_1">
        <p to="/home">MoMo.CoM</p>
        </div>
        <div className="footer_2">
        <a href="facebook.com"><FacebookIcon /></a>
        <a href="instagram.com"><InstagramIcon /></a>
        <a href="linkedIn.com"><LinkedInIcon /></a>
        <a href="Github.com"><GitHubIcon /></a>
        </div>
    </div>
    </>
  )
}

export default Footer;