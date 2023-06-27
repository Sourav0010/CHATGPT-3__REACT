import React from "react"
import "./header.css"
import people from "../../assets/people.png"
import ai from "../../assets/ai.png"
function Header() {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header__content">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT3 OpenAi
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
          debitis iste sed soluta at aperiam nobis quibusdam atque, harum
          laboriosam nostrum architecto provident hic repellendus? Accusantium
          reiciendis pariatur hic harum doloribus repudiandae, et est excepturi
          placeat deleniti laborum perferendis maxime?
        </p>
        <div className="gpt3__header__content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header__content__people">
          <img src={people} alt="people" />
          <p>1,6000 pepole requested for acess a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header__image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header
