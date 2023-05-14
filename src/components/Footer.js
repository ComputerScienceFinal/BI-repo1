import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='socials'>
            <InstagramIcon/>
            <FacebookIcon/>
            <TwitterIcon/>
            <LinkedInIcon/>

            <div id='lightStrike'>

            </div>

            <p> &copy; 2023 b•i•poultry.com </p>
        </div>
    </div>
        
  )
}

export default Footer