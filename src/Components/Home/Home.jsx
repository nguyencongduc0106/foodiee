import React from 'react'
import './Home.css'
import home from '../../image/home.png'

const Home = () => {
  return (
    <section className="home" id='home'>
      <div className="home__content">
        <h2 className="content__heading">
          The best
          <span> quality </span>
          meals for you
        </h2>
        <p className="content__describtion">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Possimus, non consequatur magnam perspiciatis assumenda,
          est ducimus sit ipsam dolores atque officia culpa, fuga at placeat perferendis.
        </p>
        <div className="content__pros">
          <div className="pros__detail">
            <p className="fa-solid fa-truck-fast"></p>
            <span>Fast and free delivery</span>
          </div>
          <div className="pros__detail">
            <p className="fa-solid fa-money-bill-wave"></p>
            <span>Multi method payments</span>
          </div>
          <div className="pros__detail">
            <p>25K+</p>
            <span>Satisfied customers</span>
          </div>
        </div>
      </div>
      <img src={home} alt="" className="home__img" />
    </section>
  )
}

export default Home