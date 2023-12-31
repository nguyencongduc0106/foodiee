import React, { useState } from 'react'
import './Review.css'
import data from './data'

const Review = () => {

    const reviews = data.slice(0, 4)

    return (
        <section className="review" id="review">
            <h1 className="review__heading">
                Customers
                <span> Review</span>
            </h1>

            <div className="review__list">
                {
                    reviews.map(review => {
                        const { id, img, name, rating, comment } = review
                        return (
                            <div key={id} className="review__card">
                                <img className="card__img" src={img} alt="image" />
                                <h3 className="card__name">{name}</h3>
                                <div className="card__rating">
                                    {
                                        rating.map((star, index) => {
                                            return (
                                                <i key={index} className={`star ${star ? 'fa-solid' : 'fa-regular'} fa-star`}></i>
                                            )
                                        })
                                    }
                                </div>
                                <p className="card__comment">{comment}</p>
                            </div>
                        )
                    })
                }
            </div>

            <div className="review__user">
                <h3 className='user__heading'>Leave your rating</h3>
                <div className="user__rating">
                    <i className="star star__rate fa-solid fa-star">
                        <i className="star star__rate fa-solid fa-star">
                            <i className="star star__rate fa-solid fa-star">
                                <i className="star star__rate fa-solid fa-star">
                                    <i className="star star__rate fa-solid fa-star"></i>
                                </i>
                            </i>
                        </i>
                    </i>
                </div>
                <input className="user__comment" type="text" placeholder="Your comment ..." />
                <p className="user__btn btn">Send</p>
            </div>
        </section>
    )
}

export default Review