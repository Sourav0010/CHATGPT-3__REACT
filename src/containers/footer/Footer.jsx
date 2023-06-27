import React from "react"
import "./footer.css"
import GPT3logo from "../../assets/logo.svg"
function Footer() {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer__heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
      </div>
      <div className="gpt3__footer__btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer__links">
        <div className="gpt3__footer__links__logo">
          <img src={GPT3logo} alt="GPT3 Logo" />
          <p>Carrer Hub || All Rights Reserved 2023</p>
        </div>
        <div className="gpt3__footer__links__div">
          <h4>Links</h4>
          <p>Overoons</p>
          <p>Social Media</p>
          <p>Careers</p>
          <p>Contacts</p>
        </div>{" "}
        <div className="gpt3__footer__links__div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy & Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer__links__div">
          <h4>Get in Touch</h4>
          <p>Carrer Hub , 201-Street, Highway, Indonesia</p>
          <p>085-132-567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className="gpt3__footer__copyright">
        <p>2021 GPT-3. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
