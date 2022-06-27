import * as React from "react"
import "./Sidebar.css"
import { BsFillCartPlusFill, BsFillInfoCircleFill } from "react-icons/bs"
import { GiHamburgerMenu } from "react-icons/all"
import { MdPayment } from "react-icons/md"
import ShoppingCart from "../ShoppingCart/ShoppingCart"

export default function Sidebar() {
  const handleOnClick = (evt) => {
    console.log("Clicked Sidebar button!")
    if (document.getElementById("sidebar").classList.contains("closed")) {
      document.getElementById("sidebar").classList.remove("closed")
      document.getElementById("sidebar").classList.add("open")
    } else {
      document.getElementById("sidebar").classList.add("closed")
      document.getElementById("sidebar").classList.remove("open")
    }
  }

  const handleCartClick = (evt) => {
    return <ShoppingCart />
  }

  return (
    <section className="sidebar closed" id="sidebar">
      <div className="wrapper">
        <button className="toggle-button button closed" onClick={handleOnClick}><p className="material-icons"><GiHamburgerMenu/></p></button>
        <div className="shopping-cart">
          <div className="cart-icons">
            <span className="cart-icon icon button">
              <i className="material-icons" onClick={handleCartClick}><BsFillCartPlusFill /></i>
            </span>
            <span className="cart-icon icon button">
              <i className="material-icons"><MdPayment /></i>
            </span>
            <span className="cart-icon icon button">
              <i className="material-icons"><BsFillInfoCircleFill /></i>
            </span>
          </div>
        </div>
        <form action="info" className="info">
          <input type="text" id="name" placeholder="First and Last name"/>
          <input id="emailAddress" type="email" placeholder= "email address" multiple/>
        </form>
      </div>
    </section>
  )
}