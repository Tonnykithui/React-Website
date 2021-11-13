import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes, FaBtc } from 'react-icons/fa'
import Button from '../button/Button'
import './Navbar.css'

const Navbar = () => {
    const [click, setclick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => {
        setclick(!click)
    }

    const toggleBtn = () => {
        setclick(!click)
    }

    const showBtn = () => {
        if(window.innerWidth <= 960){
            setButton(!button)
        } else {
            setButton(button)
        }
    }

    window.addEventListener('resize', showBtn)

    return (
        <>
          <div className="navbar">
              <div className="navbar-cont cont">
                  <Link to='/' className='navbar-logo'>
                      <FaBtc className='navbar-icon'/>
                      Go-FX
                  </Link>
                  <div className="menu-icons" onClick={toggleBtn}>
                      <FaBars className="menu-icon"/>
                  </div>
                  <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <div className="menu-icons" onClick={toggleBtn}>
                       <FaTimes className="menu-icon"/>
                  </div>
                      <li className="nav-items" onClick={handleClick}>
                          <Link to='/' className='nav-link'>Home</Link>
                      </li>
                      <li className="nav-items" onClick={handleClick}>
                          <Link to='/services' className='nav-link'>Services</Link>
                      </li>
                      <li className="nav-items" onClick={handleClick}>
                          <Link to='/products' className='nav-link'>Products</Link>
                      </li>
                      <li className="nav-btn">
                          {
                              button ? (
                                  <Link to='/sign-up'>
                                  <Button 
                                  buttonStyle='btn--outline'
                                  buttonSize='btn-medium'
                                  >SIGN-UP</Button>
                                  </Link>
                              ) : (
                                  <Link>
                                  <Button 
                                  buttonStyle='btn--primary'
                                  buttonSize='btn-medium'
                                  >SIGN-UP</Button>
                                  </Link>
                              )
                          }
                      </li>
                  </ul>
              </div>
          </div>  
        </>
    )
}

export default Navbar
