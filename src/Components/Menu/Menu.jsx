import React from 'react'
import './Menu.css'

const Menu = () => {
    return (
        <section className='menu' id='menu'>
            <h1 className="menu__heading">
                Our
                <span> menu</span>
            </h1>
            <div className='menu__filter'>
                <p className='menu__choice active'>All</p>
                <p className='menu__choice'>Best seller</p>
                <p className='menu__choice'>Hamburger</p>
                <p className='menu__choice'>Pizza</p>
                <p className='menu__choice'>Beverage</p>
            </div>
            <ul className="menu__list">
                <li className="menu__item">
                    <img src="" alt="" className="item__img" />
                    <div className="item__info">
                        <h3 className="item__name">Hamburger</h3>
                        <p className="item__price"></p>
                    </div>
                    <p className="item__btn btn">Add to cart</p>
                </li>
                <li className="menu__item">Item</li>
                <li className="menu__item">Item</li>
                <li className="menu__item">Item</li>
                <li className="menu__item">Item</li>
            </ul>
        </section>
    )
}

export default Menu