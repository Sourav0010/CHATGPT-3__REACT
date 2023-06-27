import React from "react"
import "./features.css"
import Feature from "../../components/feature/Features"
const featureData = [
  {
    title: "Improving end distrusts instantly",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit facilis repellat minima accusantium qui incidunt?",
  },
  {
    title: "Become The Trended Active",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit facilis repellat minima accusantium qui incidunt?",
  },
  {
    title: "Message or Arm Nothing",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit facilis repellat minima accusantium qui incidunt?",
  },
  {
    title: "Really Body Low Country",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit facilis repellat minima accusantium qui incidunt?",
  },
]
function Features() {
  return (
    <div className="gpt3__features section__padding" id="featues">
      <div className="gpt3__features__heading">
        <h1 className="gradient__text">
          The Feature is Now and You Just Need To Realize It. Step Into Future
          Today & Make It Happen.
        </h1>
        <p>Request Early Access To Get Started</p>
      </div>
      <div className="gpt3__features__container">
        {featureData.map((items, index) => (
          <Feature
            title={items.title}
            text={items.text}
            key={items.title + index}
          />
        ))}
      </div>
    </div>
  )
}

export default Features
