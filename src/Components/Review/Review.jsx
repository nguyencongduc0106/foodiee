import React from 'react'
import './Review.css'

const Review = () => {
    return (
        <section className="review" id="review">
            <h1 className="review__heading">
                Customers
                <span> Review</span>
            </h1>

            <div className="review__list">
                <div className="review__card">
                    <img className="card__img" src="./assets/image/customer-avt.jpg" alt="image" />
                    <h3 className="card__name">Namichii</h3>
                    <div className="card__rating">
                        <i className="star fa-solid fa-star"></i>
                        <i className="star fa-solid fa-star"></i>
                        <i className="star fa-solid fa-star"></i>
                        <i className="star fa-solid fa-star"></i>
                        <i className="star fa-solid fa-star"></i>
                    </div>
                    <p className="card__comment">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, ad
                        cum?!
                    </p>
                </div>
            </div>

            <div className="review__user">
                <h3 className='user__heading'>Leave your rating</h3>
                <div className="user__rating">
                    <i className="star star__1 fa-regular fa-star"></i>
                    <i className="star star__2 fa-regular fa-star"></i>
                    <i className="star star__3 fa-regular fa-star"></i>
                    <i className="star star__4 fa-regular fa-star"></i>
                    <i className="star star__5 fa-regular fa-star"></i>
                </div>
                <input className="user__comment" type="text" placeholder="Your comment ..." />
                <p className="user__btn btn">Send</p>
            </div>
        </section>
    )
}

export default Review