import React, { useState, useEffect } from 'react'
import './Menu.css'
import data from './data.js'

const Menu = () => {

    const categories = ['All', 'Best seller', 'Hamburger', 'Pizza', 'Beverage']
    const [filter, setFilter] = useState('All')
    const [menu, setMenu] = useState(data)
    useEffect(() => {
        if (filter === 'All') {
            setMenu(data)
        } else if (filter === 'Best seller') {
            const filteredMenu = data.filter(item => {
                return item.isBestSeller
            })
            setMenu(filteredMenu)
        } else {
            const filteredMenu = data.filter(item => {
                return item.category === filter
            })
            setMenu(filteredMenu)
        }
    }, [filter])

    return (
        <section className='menu' id='menu'>
            <h1 className="menu__heading">
                Our
                <span> Menu</span>
            </h1>

            <div className='menu__filter'>
                {
                    categories.map(category => (
                        <p
                            key={category}
                            className={`menu__choice ${category === filter ? 'active' : ''}`}
                            onClick={() => setFilter(category)}
                        >
                            {category}
                        </p>
                    )
                    )
                }
            </div>

            <ul className="menu__list">
                {
                    menu.map(item => {
                        const { id, img, name, desc, price } = item
                        return (
                            <li key={id} className="menu__item">
                                <img src={img} alt="" className="item__img" />
                                <h3 className="item__name">{name}</h3>
                                <p className="item__desc">{desc}</p>
                                <div className="item__price-btn">
                                    <p className="item__price">${price}</p>
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