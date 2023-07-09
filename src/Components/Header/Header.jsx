import React, { useState, useEffect } from 'react'
import './Header.css'

const Header = () => {

  // Open and Close navbar fuction
  const [isOpen, setIsOpen] = useState(false)
  const openNavbar = () => {
    setIsOpen(true)
  }
  const closeNavbar = () => {
    setIsOpen(false)
  }
  const navLinks = document.querySelectorAll('.navbar__link')
  navLinks.forEach(function (navLink) {
    navLink.onclick = closeNavbar
  })

  return (
    <div className='header'>
      <div className="header__container">
        {/* Logo */}
        <a href="#" className="header__logo">
          <i className="fa-solid fa-utensils"></i>
          Foodiee
        </a>

        {/* Nav link */}
        <div className={`header__navbar ${isOpen ? 'open' : ""}`}>
          <i className="navbar__close fa-solid fa-xmark" onClick={closeNavbar}></i>
          <a href="#home" className="navbar__link">Home</a>
          <a href="#menu" className="navbar__link">Menu</a>
          <a href="#review" className="navbar__link">Review</a>
          <a href="#about" className="navbar__link">About</a>
          <a href="#blog" className="navbar__link">Blog</a>
        </div>

        {/* Icons */}
        <div className="header__icon">
          <i className="icon__bars fa-solid fa-bars" onClick={openNavbar}></i>
          <i className="icon__cart fa-solid fa-cart-shopping"></i>
          <i className="icon__user fa-solid fa-user"></i>
        </div>
      </div>
    </div>
  )
}

export default Header