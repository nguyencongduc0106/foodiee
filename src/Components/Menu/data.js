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
        category: 'Burger',
        isPopular: true,
        img: doubleCheeseBurger,
        name: 'Double chesse buger',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        price: 5.8
    },
    {
        id: '2',
        category: 'Burger',
        isPopular: false,
        img: classicBurger,
        name: 'Classic burger',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        price: 5.2
    },
    {
        id: '3',
        category: 'Burger',
        isPopular: true,
        img: chickenBurger,
        name: 'Chicken burger',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        price: 5
    },
    {
        id: '4',
        category: 'Burger',
        isPopular: false,
        img: spicyBurger,
        name: 'Spicy burger',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        price: 5.7
    },
    {
        id: '5',
        category: 'Pizza',
        isPopular: false,
        img: vegeterianPizza,
        name: 'Vegeterian pizza',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        price: 10.5
    },
    {
        id: '6',
        category: 'Pizza',
        isPopular: true,
        img: seafoodPizza,
        name: 'Seafood pizza',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        price: 14.2
    },
    {
        id: '7',
        category: 'Pizza',
        isPopular: false,
        img: sausagePizza,
        name: 'Sausage pizza',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        price: 12.2
    },
    {
        id: '8',
        category: 'Pizza',
        isPopular: true,
        img: baconPizza,
        name: 'Bacon pizza',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        price: 13
    },
    {
        id: '9',
        category: 'Drinks',
        isPopular: false,
        img: coffee,
        name: 'Hot coffee',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        price: 4.2
    },
    {
        id: '10',
        category: 'Drinks',
        isPopular: true,
        img: tropicalMix,
        name: 'Tropical mix',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        price: 4.8
    },
    {
        id: '11',
        category: 'Drinks',
        isPopular: false,
        img: soda,
        name: 'Blue soda',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        price: 4.2
    },
];

export default data