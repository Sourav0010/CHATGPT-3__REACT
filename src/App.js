import React from "react"
import { Article, Brand, Cta, Feature, Navbar } from "./components"
import {
  WhatGPT3,
  Possibility,
  Header,
  Footer,
  Features,
  Blog,
} from "./containers"
import "./App.css"
function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
