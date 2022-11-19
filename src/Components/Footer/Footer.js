import React from "react";
import './Footer.css'
import SocialMediaIcons from "./SocialMediaIcons/SocialMediaIcons";

function Footer() {


  return (
    <footer className='footerContainer'>
      <div className='footerContainerLeft'></div>
      <div className='footerContainerCenter'>
      </div>
      <div className='footerContainerRight d-flex flex-column justify-content-center'>
        <h2>Seguinos en nuestras redes!</h2>
        <SocialMediaIcons/>
      </div>
    </footer>
  );
}

export default Footer;
