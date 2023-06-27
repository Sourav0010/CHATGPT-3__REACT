import React from "react"
import "./article.css"
function article({ imageUrl, date, title }) {
  return (
    <div className="gpt3__blog__container__article">
      <div className="gpt3__blog__container__article__image">
        <img src={imageUrl} alt="Blog Image" />
      </div>
      <div className="gpt3__blog__container__article__content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read the full article</p>
      </div>
    </div>
  )
}

export default article
