import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import {Link} from 'react-router-dom'
import './SocialMediaIcons.css'

function SocialMediaIcons() {
  return (
    <div className="d-flex flex-row justify-content-center">
      
        <WhatsAppIcon className="m-2 wappIcon" style={styles.socialMediaStyle}/>
      
      <a href='https://www.facebook.com/KaramHechoAMano' target='_blank' rel="noopener noreferrer">
        <FacebookOutlinedIcon className="m-2 facebookIcon" style={styles.socialMediaStyle}/>
      </a>
      
      <a href='https://www.instagram.com/karamhechoamano/' target='_blank' rel="noopener noreferrer">
        <InstagramIcon className="m-2 instagramIcon" style={styles.socialMediaStyle}/>
      </a>
      
    </div>
  );
}


const styles = {
    socialMediaStyle: {
        height: '50px',
        width: '50px',
        cursor: 'pointer'

    }
    
}

export default SocialMediaIcons;
