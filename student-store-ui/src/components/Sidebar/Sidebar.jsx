import * as React from "react"
import "./Sidebar.css"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import {GiHamburgerMenu} from "react-icons/gi"
export default function Sidebar(props) {
  return(
    <section className={props.isOpen ? "sidebar open" : "sidebar closed"}>
      <button className="toggle-button" onClick={props.handleOnToggle}><GiHamburgerMenu/></button>
      
      <ShoppingCart 
      isOpen={props.isOpen} 
      products={props.products} 
      shoppingCart={props.shoppingCart} 
      />

      <CheckoutForm 
      isOpen={props.isOpen} 
      shoppingCart={props.shoppingCart} 
      checkoutForm={props.checkoutForm} 
      setCheckoutForm={props.setCheckoutForm} 
      handleOnCheckoutFormChange={props.handleOnCheckoutFormChange} 
      handleOnSubmitCheckoutForm={props.handleOnSubmitCheckoutForm} 
      />
    </section>
  )  
}