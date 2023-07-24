import React from 'react'
import './Blog.css'
import data from './data.js'

const Blog = () => {

  const blogs = data.slice(0, 4)

  return (
    <section className="blog" id="blog">
      <h1 className="blog__heading">
        Our Best
        <span> Blogs</span>
      </h1>

      <div className="blog__list">
        {
          blogs.map(blog => {
            const {id, img, name, desc} = blog
            return (
              <div key={id} className="blog__card">
                <div className="card__img">
                  <img src={img} alt=""/>
                </div>
                <h3 className="card__name">{name}</h3>
                <p className="card__desc">{desc}</p>
                <p className="card__btn">
                  Read more
                  <i className="fa-solid fa-arrow-right"></i>
                </p>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Blog