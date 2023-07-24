import avt from '../../image/customerAvt.jpg'

const rate = function (stars) {
    const result = []
    for (var i = 0; i < 5; i++) {
        if (i < stars) result.push(true)
        else result.push(false)
    }
    return result
}

const data = [
    {
        id: '1',
        img: avt,
        name: 'Aubrey',
        rating: rate(5),
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, ad cum?!.'
    },
    {
        id: '2',
        img: avt,
        name: 'Namichii',
        rating: rate(5),
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, ad cum?!.'
    },
    {
        id: '3',
        img: avt,
        name: 'Namphan',
        rating: rate(5),
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, ad cum?!.'
    },
    {
        id: '4',
        img: avt,
        name: 'Tieenn',
        rating: rate(4),
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, ad cum?!.'
    },
    {
        id: '5',
        img: avt,
        name: 'Klinh',
        rating: rate(4),
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, ad cum?!.'
    }
]

export default data