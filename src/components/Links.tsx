import React from "react"
import Button from "./Button"
import { useNavigate } from "react-router-dom"

const NavLinks = () => {
  const navigate = useNavigate()
  return (
    <>
        <Button onClick={() => navigate("/about")}>About me</Button>
        <Button onClick={() => navigate("/blog")}>Blog</Button>
        <Button onClick={() => navigate("/projects")}>Projects</Button>
        <Button onClick={() => navigate("/resume.pdf")}>Resume</Button>
    </>
  )
}

export default NavLinks
