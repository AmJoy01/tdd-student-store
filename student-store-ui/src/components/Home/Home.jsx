import * as React from "react"
// import {Routes, Route} from "react-router-dom"
import Sidebar from "../Sidebar/Sidebar"
import Hero from "../Hero/Hero"
import SubNavbar from "../SubNavbar/SubNavbar"
import ProductGrid from "../ProductGrid/ProductGrid"
import About from "../About/About"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"
import "./Home.css"

export default function Home(props) {
  const [category, setCategory] = React.useState("")
  const filterCategory = Boolean(category) && category.toLowerCase() !== "all categories"
  ? props.products.filter((c) => c.category === category.toLowerCase())
  : props.products;

  const filterSearch = Boolean(props.searchInput) ? filterCategory.filter((itemCat) => itemCat.name.toLowerCase().indexOf(props.searchInput) != -1) : filterCategory;

  let handleOnSearchChange = (event) => {
    props.setSearchInput(event.target.value)
  }

  let handleOnCategory = (category) =>{
    setCategory(category)
  }
  return (
    <div className="home">
      <Sidebar
      isOpen = {props.isOpen}
      products = {props.products}
      shoppingCart = {props.shoppingCart}
      checkoutForm = {props.checkoutForm}
      setCheckoutForm = {props.setCheckoutForm}
      handleOnSubmitCheckoutForm = {props.handleOnSubmitCheckoutForm}
      handleOnCheckoutFormChange = {props.handleOnCheckoutFormChange}
      handleSubmitCheckoutFormChange = {props.handleSubmitCheckoutFormChange}
      handleOnToggle = {props.handleOnToggle} 
      />
      <Hero />
      <SubNavbar
        setSearchInput = {props.setSearchInput}
        handleOnSearchInputChange = {handleOnSearchChange}
        handleOnCategory = {handleOnCategory}
      />
      <ProductGrid
      products={filterSearch}
      shoppingCart = {props.shoppingCart}
      handleAddItemToCart = {props.handleAddItemToCart}
      handleRemoveItemFromCart = {props.handleRemoveItemFromCart}/>
      
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}
