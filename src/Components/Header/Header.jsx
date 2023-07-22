import React, { useState, useEffect } from 'react'
import './Header.css'

const Header = () => {

  // Open and Close navbar fuctions
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)
  const openNavbar = () => {
    setIsNavbarOpen(true)
  }
  const closeNavbar = () => {
    setIsNavbarOpen(false)
  }
  const navLinks = document.querySelectorAll('.navbar__link')
  navLinks.forEach(function (navLink) {
    navLink.onclick = closeNavbar
  })

  // Open and Close cart functions
  const [isCartOpen, setIsCartOpen] = useState(false)
  const openCart = () => {
    setIsCartOpen(true)
  }
  const closeCart = () => {
    setIsCartOpen(false)
  }

  // Open and Close user functions
  const [isUserOpen, setIsUserOpen] = useState(false)
  const openUser = () => {
    setIsUserOpen(true)
  }
  const closeUser = () => {
    setIsUserOpen(false)
  }

  return (
    <section className='header'>
      <div className="header__container">
        {/* Logo */}
        <a href="#" className="header__logo">
          <i className="fa-solid fa-utensils"></i>
          Foodiee
        </a>

        {/* Nav link */}
        <div className={`header__navbar ${isNavbarOpen ? 'open' : ""}`}>
          <i className="navbar__close fa-solid fa-xmark" onClick={closeNavbar}></i>
          <a href="#home" className="navbar__link">Home</a>
          <a href="#menu" className="navbar__link">Menu</a>
          <a href="#review" className="navbar__link">Review</a>
          <a href="#blog" className="navbar__link">Blog</a>
        </div>

        {/* Icons */}
        <div className="header__icons">
          <i className="bars__icon fa-solid fa-bars" onClick={openNavbar}></i>
          <i className="cart__icon fa-solid fa-cart-shopping"></i>
          <i className="user__icon fa-solid fa-user" onClick={openUser}></i>
        </div>
      </div>

      {/* Cart */}
      <div className={`cart__container ${isCartOpen ? 'open' : ""}`}>
        <h1 className="cart__heading">Your
          <span> Order</span>
        </h1>
        <ul className="cart__list">
          <li className="cart__item">
            <img src="" alt="" className="item__img" />
            <div className="item__info">
              <h3 className="item__name">Hamburger</h3>
              <p className="item__price">$5</p>
            </div>
            <i className="item__delete fa-solid fa-xmark"></i>
          </li>
        </ul>
      </div>

      {/* User */}
      <div className={`user__container ${isUserOpen ? 'open' : ""}`}>
        <i className="user__close fa-solid fa-xmark" onClick={closeUser}></i>
        <p className="user__name">Duckiee</p>
        <p className="user__link">Change user name</p>
        <p className="user__link">Change password</p>
        <p className="user__link">Change phone number</p>
        <p className="user__link">Log out</p>
      </div>
    </section>
  )
}

export default Header