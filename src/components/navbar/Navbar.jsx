import React, { useState } from "react"
import "./navbar.css"
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"
import logo from "../../assets/logo.svg"
function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const Menu = () => (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#wgpt3">What is GPT-3</a>
      </p>
      <p>
        <a href="#possibilities">Open AI</a>
      </p>
      <p>
        <a href="#features">Case Studies</a>
      </p>
      <p>
        <a href="#blog">Library</a>
      </p>
    </>
  )
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar__links">
        <div className="gpt3__navbar__links__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar__links__container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar__sign">
        <p>Sign in</p>
        <button type="button">Sign Up</button>
      </div>
      <div className="gpt3__navbar__menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            onClick={() => {
              setToggleMenu(false)
            }}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            onClick={() => {
              setToggleMenu(true)
            }}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar__menu__container scale-up-center">
            <div className="gpt3__navbar__menu__container__links">
              <Menu />
              <div className="gpt3__navbar__menu__container__links__sign">
                <p>Sign in</p>
                <button type="button">Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
