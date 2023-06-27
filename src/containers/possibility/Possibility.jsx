import React from "react"
import "./possibility.css"
import possibility from "../../assets/possibility.png"
function Possibility() {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility__image">
        <img src={possibility} alt="Possibility" />
      </div>
      <div className="gpt3__possibility__content">
        <h4>Request early access to possibility</h4>
        <h1 className="gradient__text">
          The possibilities are beyound our imagination
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          nesciunt sed aperiam sint mollitia modi quis id excepturi ipsam
          pariatur.
        </p>
        <h4>Request For Early Bard</h4>
      </div>
    </div>
  )
}

export default Possibility
