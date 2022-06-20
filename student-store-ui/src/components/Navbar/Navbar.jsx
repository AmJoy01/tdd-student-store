import * as React from "react"
import "./Navbar.css"

export default function Navbar() {
  const logo = "https://codepath-student-store-demo.surge.sh/assets/codepath.f1b3e41a.svg";
   
  return (

    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="" />
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
