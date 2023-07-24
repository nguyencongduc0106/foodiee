import doubleCheeseBurger from '../../image/doubleCheeseBurger.jpg'
import classicBurger from '../../image/classicBurger.jpg'
import chickenBurger from '../../image/chickenBurger.jpg'
import spicyBurger from '../../image/spicyBurger.jpg'
import vegeterianPizza from '../../image/vegeterianPizza.jpg'
import seafoodPizza from '../../image/seafoodPizza.jpg'
import sausagePizza from '../../image/sausagePizza.jpg'
import baconPizza from '../../image/baconPizza.jpg'
import coffee from '../../image/coffee.jpg'
import tropicalMix from '../../image/tropicalMix.jpg'
import soda from '../../image/soda.jpg'

const data = [
    {
        id: '1',
        category: 'Hamburger',
        isBestSeller: true,
        img: doubleCheeseBurger,
        name: 'Double chesse buger',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        price: 5.85
    },
    {
        id: '2',
        category: 'Hamburger',
        isBestSeller: false,
        img: classicBurger,
        name: 'Classic burger',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        price: 5.2
    },
    {
        id: '3',
        category: 'Hamburger',
        isBestSeller: true,
        img: chickenBurger,
        name: 'Chicken burger',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        price: 5
    },
    {
        id: '4',
        category: 'Hamburger',
        isBestSeller: false,
        img: spicyBurger,
        name: 'Spicy burger',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        price: 5.75
    },
    {
        id: '5',
        category: 'Pizza',
        isBestSeller: false,
        img: vegeterianPizza,
        name: 'Vegeterian pizza',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        price: 10.5
    },
    {
        id: '6',
        category: 'Pizza',
        isBestSeller: true,
        img: seafoodPizza,
        name: 'Seafood pizza',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        price: 14.2
    },
    {
        id: '7',
        category: 'Pizza',
        isBestSeller: false,
        img: sausagePizza,
        name: 'Sausage pizza',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        price: 12.2
    },
    {
        id: '8',
        category: 'Pizza',
        isBestSeller: true,
        img: baconPizza,
        name: 'Bacon pizza',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        price: 13
    },
    {
        id: '9',
        category: 'Beverage',
        isBestSeller: false,
        img: coffee,
        name: 'Hot coffee',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        price: 4.2
    },
    {
        id: '10',
        category: 'Beverage',
        isBestSeller: true,
        img: tropicalMix,
        name: 'Tropical mix',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        price: 4.85
    },
    {
        id: '11',
        category: 'Beverage',
        isBestSeller: false,
        img: soda,
        name: 'Blue soda',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        price: 4.2
    },
];

export default data