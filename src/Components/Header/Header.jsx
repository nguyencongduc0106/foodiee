import React, { useState, useEffect } from 'react'
import './Header.css'
import cartList from './data'

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
  // const cartList = data
  var cartQuantity = 0
  var cartTotal = 0
  cartList.forEach(item => {
    cartQuantity += item.quantity
    cartTotal += item.price * item.quantity
  })
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
          <p className="cart__icon" onClick={openCart}>
            <i className="fa-solid fa-cart-shopping"></i>
            <span className='cart__quantity'>{cartQuantity}</span>
          </p>
          <i className="user__icon fa-solid fa-user" onClick={openUser}></i>
        </div>
      </div>

      {/* Cart */}
      <div className={`cart__container ${isCartOpen ? 'open' : ""}`}>
        <h1 className="cart__heading">Your
          <span> Order</span>
        </h1>
        <ul className="cart__list">
          {
            cartList.map(item => {
              const { id, img, name, price, quantity } = item
              var itemTotal = Math.round(price * quantity * 10) / 10
              return (
                <li key={id} className="cart__item">
                  <img src={img} alt="" className="item__img" />
                  <div className="item__info">
                    <h3 className="item__name">{name}</h3>
                    <div className="item__detail">
                      <p className="item__price">${price}</p>
                      <p className="item__quantity">
                        <i className="quantity__minus fa-solid fa-minus"></i>
                        {quantity}
                        <i className="quantity__plus fa-solid fa-plus"></i>
                      </p>
                      <p className="item__total">${itemTotal}</p>
                    </div>
                  </div>
                  <i className="item__delete fa-solid fa-trash-can"></i>
                </li>
              )
            })
          }
        </ul>
        <p className="cart__total">Total: ${cartTotal}</p>
        <div className="cart__btn">
          <p className="btn__close btn" onClick={closeCart}>Close</p>
          <p className="btn__order btn">Order now</p>
        </div>
      </div>

      {/* User */}
      <div className={`user__container ${isUserOpen ? 'open' : ""}`}>
        <i className="user__close fa-solid fa-xmark" onClick={closeUser}></i>
        <p className="user__name">Duckiee</p>
        <p className="user__link">Change avatar</p>
        <p className="user__link">Change user name</p>
        <p className="user__link">Change password</p>
        <p className="user__link">Log out</p>
      </div>
    </section>
  )
}

export default Header