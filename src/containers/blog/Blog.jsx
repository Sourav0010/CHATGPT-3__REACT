import React from "react"
import "./blog.css"
import { blog01, blog02, blog03, blog04, blog05 } from "./imports"
import Article from "../../components/article/Article"
function Blog() {
  return (
    <div className="gpt3__blog section__padding">
      <div className="gpt3__blog__heading">
        <h1 className="gradient__text">
          A Lot is Happening We Are Blogging About It .
        </h1>
      </div>
      <div className="gpt3__blog__container">
        <div className="gpt3__blog__container__groupA">
          <Article
            imageUrl={blog01}
            date="Sept 25 2023"
            title="CHAT GPT & OpenAi is the future. Let's learn how to explore it"
          />
        </div>
        <div className="gpt3__blog__container__groupB">
          <Article
            imageUrl={blog02}
            date="Sept 25 2023"
            title="CHAT GPT & OpenAi is the future. Let's learn how to explore it"
          />
          <Article
            imageUrl={blog03}
            date="Sept 25 2023"
            title="CHAT GPT & OpenAi is the future. Let's learn how to explore it"
          />
          <Article
            imageUrl={blog04}
            date="Sept 25 2023"
            title="CHAT GPT & OpenAi is the future. Let's learn how to explore it"
          />
          <Article
            imageUrl={blog05}
            date="Sept 25 2023"
            title="CHAT GPT & OpenAi is the future. Let's learn how to explore it"
          />
        </div>
      </div>
    </div>
  )
}

export default Blog
