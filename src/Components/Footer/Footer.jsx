import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__info">
        <div className="footer__column footer__contact">
          <h3 className="column__heading">Contact us</h3>
          <div className="column__content">
            <i className="fa-solid fa-phone-volume"></i>
            0123456789
          </div>

          <div className="column__content">
            <i className="fa-solid fa-envelope"></i>
            foodiee@gmail.com
          </div>
        </div>

        <div className="footer__column footer__companies">
          <h3 className="column__heading">Our companies</h3>
          <div className="column__content">
            <i className="fa-solid fa-location-dot"></i>
            Vietnam
          </div>

          <div className="column__content">
            <i className="fa-solid fa-location-dot"></i>
            USA
          </div>

          <div className="column__content">
            <i className="fa-solid fa-location-dot"></i>
            Japan
          </div>
        </div>

        <div className="footer__column footer__media">
          <h3 className="column__heading">Follow us</h3>
          <a href="https://www.facebook.com/duckiee.ngx" className="column__content">
            <i className="fa-brands fa-facebook"></i>
            Facebook
          </a>

          <a href="https://www.facebook.com/duckiee.ngx" className="column__content">
            <i className="fa-brands fa-instagram"></i>
            Instagram
          </a>

          <a href="https://www.facebook.com/duckiee.ngx" className="column__content">
            <i className="fa-brands fa-twitter"></i>
            Twitter
          </a>
        </div>
      </div>

      <p className="footer__credit">
        Created by
        <span> Duckiee </span>
        | All rights reserved
      </p>
    </section>
  )
}

export default Footer