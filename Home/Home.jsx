import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"
import SubNavbar from "../SubNavbar/SubNavbar"

export default function Home(props) {
  const filterCategory = Boolean(props.category) && props.category.toLowerCase() !== "all categories"
  ? props.products.filter((c) => c.category === props.category.toLowerCase())
  : props.products;

  const filterSearch = Boolean(props.searchInput) ? filterCategory.filter((itemCat) => itemCat.name.toLowerCase().indexOf(props.searchInput)) : filterCategory;

  return (
    <div className="home">
      <Hero/>
      <SubNavbar
      category = {props.category}
      setCategory = {props.setCategory}
        handleOnSearchInputChange={props.handleOnSearchInputChange}
        filterSearch = {filterSearch}
        searchInput = {props.searchInput} 
      />
      <ProductGrid
      products={props.products}
      isFetching = {props.isFetching}/>
    </div>
  )
}
