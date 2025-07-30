import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/Header"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" /> 
        <Route element={<div>FooBar</div>} path="/foo" />
      </Routes>
    </BrowserRouter>
  )
}

export default App
