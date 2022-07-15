import * as React from "react"
import { Link } from "react-router-dom"
import Logo from "../Logo/Logo"
import "./Navbar.css"

export default function Navbar() {
  
  return (

    <nav className="navbar">
      <Logo/>
    <div className="container">
      <div className="logo">
      </div>
      <ul>
        <li>HOME</li>
        <li>ABOUT US</li>
        <li>CONTACT US</li>
        <li>BUY</li>
      </ul>
      <div className="cart"></div>

      
    </div>
    {/* end of content */}
  </nav>
  // end of navbar
  )
}
