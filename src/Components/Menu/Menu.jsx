import React, { useState } from 'react'
import './Menu.css'
import data from './data.js'

const Menu = () => {

    const [menu, setMenu] = useState(data)
    const filterMenu = cateItem => {
        const filteredMenu = data.filter(item => {
            return item.category === cateItem
        })
        setMenu(filteredMenu)
    }

    // const choices = document.querySelectorAll('.menu__choice')
    // choices.forEach(choice => {
    //     choice.onclick = () => {
    //         document.querySelector('.menu__choice.active').classList.remove('active')
    //         choice.classList.add('active')
    //         if (choice.innerHTML === 'All') {
    //             setMenu(data)
    //         } else filterMenu(choice.innerHTML)
    //     }
    // })

    const handleFilter = e => {
        document.querySelector('.menu__choice.active').classList.remove('active')
        // e.classList.add('active')
        console.log(e.target)
        // filterMenu(cateItem)
    }
    // const menu = require('./data.json')
    // console.log(menu[0])

    return (
        <section className='menu' id='menu'>
            <h1 className="menu__heading">
                Our
                <span> Menu</span>
            </h1>
            <div className='menu__filter'>
                <p className='menu__choice active' onClick={() => setMenu(data)}>All</p>
                <p className='menu__choice'>Best seller</p>
                <p className='menu__choice' onClick={(e) => handleFilter(e)}>Hamburger</p>
                <p className='menu__choice' onClick={(e) => handleFilter(e)}>Pizza</p>
                <p className='menu__choice' onClick={(e) => handleFilter(e)}>Beverage</p>
            </div>
            <ul className="menu__list">
                {
                    menu.map(item => {
                        const { id, img, name, desc, price } = item
                        return (
                            <li key={id} className="menu__item">
                                <img src={img} alt="" className="item__img"/>
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