import * as React from "react"
import "./Home.css"
import Sidebar from "../Sidebar/Sidebar"
import Navbar from "../Navbar/Navbar"
import Hero from "../Hero/Hero"
import SubNavbar from "../SubNavbar/SubNavbar"
import ProductGrid from "../ProductGrid/ProductGrid"
import Footer from "../Footer/Footer"

export default function Home(props) {
  const filterCategory = Boolean(props.category) && props.category.toLowerCase() !== "all categories"
  ? props.products.filter((c) => c.category === props.category.toLowerCase())
  : props.products;

  const filterSearch = Boolean(props.searchInput) ? filterCategory.filter((itemCat) => itemCat.name.toLowerCase().indexOf(props.searchInput) != -1) : filterCategory;

  return (
    <div className="home">
      <Sidebar />
      <Navbar />
      <Hero />
      <SubNavbar
      handleOnSearchInputChange={props.handleOnSearchInputChange}
      setCategory = {props.setCategory}
        filterSearch = {filterSearch}
        searchInput = {props.searchInput} 
      />
      <ProductGrid
      products={filterSearch}
      handleAddItemToCart = {null}
      handleRemoveItemFromCart = {null}/>
      <Footer/>
    </div>
  )
}
