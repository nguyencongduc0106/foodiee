import React, { useState } from 'react'
import './Menu.css'
import data from './data.js'

const Menu = () => {

    const [items, setItems] = useState(data)
    const menu = require('./data.json')
    console.log(menu[0])

    return (
        <section className='menu' id='menu'>
            <h1 className="menu__heading">
                Our
                <span> Menu</span>
            </h1>
            <div className='menu__filter'>
                <p className='menu__choice active'>All</p>
                <p className='menu__choice'>Best seller</p>
                <p className='menu__choice'>Hamburger</p>
                <p className='menu__choice'>Pizza</p>
                <p className='menu__choice'>Beverage</p>
            </div>
            <ul className="menu__list">
                {
                    items.map(e => {
                        const { id, img, name, desc, price } = e
                        return (
                            <li key={id} className="menu__item">
                                <img src={img} alt="" className="item__img" />
                                <p className="item__name">{name}</p>
                                <p className="item__desc">{desc}</p>
                                <div className="item__price-btn">
                                    <p className="item__price">{price}</p>
                                    <p className="item__btn btn">
                                        <i className="fa-solid fa-cart-plus"></i>
                                    </p>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default Menu