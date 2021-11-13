import React from 'react'
import { FaFacebookF, FaInstagram, FaTelegramPlane } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-section'>
            <div className="row">
                <div className="col">
                    <h2>Go-FX</h2>
                    <p>
                        It is one of a kind stop shop for all the Crypto-Currencies.
                        Buy any digital token at a fair going price.To reach us,visit the following handles below
                    </p>
                    <div className="icons">
                        <FaFacebookF className='fb'/>
                        <FaInstagram className='ig'/>
                        <FaTelegramPlane className='tg'/>
                    </div>
                </div>
                <div className="col-1">
                    <div className="col-item">
                        <h2>Our Links</h2>
                        <ul>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Services</li>
                            <li>Team</li>
                        </ul>
                    </div>
                    <div className="col-item">
                    <h2>Our Services</h2>
                        <ul>
                            <li>Strategy and Research</li>
                            <li>Web Development</li>
                            <li>Web Solution</li>
                            <li>Digital Marketing</li>
                        </ul>
                    </div>
                    <div className="col-item">
                    <h2>Other Links</h2>
                        <ul>
                            <li>FAQ</li>
                            <li>Portofolio</li>
                            <li>Privacy Policy</li>
                            <li>Terms and Conditions</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h5 style={{textAlign:'center'}}> Copyright&copy; 2021</h5>
        </div>
    )
}

export default Footer
