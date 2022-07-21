import React from 'react';
import './footer.css';


function Footer() {
  return (
  <>
  <footer className="footer-container">
    <span className='text-color'>2022 - ©Chomyszyn/Vila - Powered by <a className='copyright' href="https://rawg.io/" target="__blank">RAWG.io</a></span>  
    <div className="redes-sociales">
    <a href="https://facebook.com/" target="__blank"><img height="20" src='icons-facebook.png' alt="facebook" /></a>
    <a href="https://instagram.com/" target="__blank"><img height="20" src='icons-instagram.png ' alt="instagram" /></a>
    <a href="https://twitter.com/" target="__blank"><img height="20" src='icons-twitter.png' alt="twitter" /></a>
    </div>
  </footer>
  </>
  )
}

export default Footer;