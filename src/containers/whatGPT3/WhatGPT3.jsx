import React from "react"
import "./whatGPT3.css"
import Feature from "../../components/feature/Features"
function WhatGPT3() {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3__feature">
        <Feature
          title="What is GPT3"
          text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, eligendi praesentium? Atque reiciendis distinctio qui itaque expedita perspiciatis earum rem officia natus est commodi repellat iste, quaerat quis nisi architecto."
        />
      </div>
      <div className="gpt3__whatgpt3__heading">
        <h1 className="gradient__text">
          The Possibilites Are Beyound Your Imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3__container">
        <Feature
          title="Chatbots"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat."
        />
        <Feature
          title="Knowledgebase"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat."
        />
        <Feature
          title="Education"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat."
        />
      </div>
    </div>
  )
}

export default WhatGPT3
