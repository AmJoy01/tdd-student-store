import * as React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../Home/Home"
import { useState, useEffect } from "react"
import axios from "axios" 
import "./App.css"

export default function App() {
  const [category, setCategory] = useState("All Categories")
  const [searchInput, setSearchInput] = useState("");
  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  // const[shoppingCart, setShoppingCart] = userState({});

  const handleOnSearchInputChange = (event) =>{
    setSearchInput(event.target.value);
  }
useEffect(() => {
  const getProducts = async() =>{
    setIsFetching(true);
   
    try{
      const response = await axios.get("https://codepath-store-api.herokuapp.com/store");
      console.log(response.data.products);
      
      if(response.data.products){
          setProducts(response.data.products);
      }else{
        setError("ERROR!!");
      }
    }catch (e){
      console.log(e);
    }finally{
      setIsFetching(false);
    }
  }
  getProducts();
}, [])

  return (
    <div className="app">
      <BrowserRouter>
      <main>
          <Routes>
            <Route
            path="/"
            element={
              <Home 
            error = {error}
            products = {products} 
            isFetching={isFetching}
            category = {category}
            setCategory = {setCategory}
            handleOnSearchInputChange = {handleOnSearchInputChange} 
            searchInput = {searchInput} 
            />
            }
            />

            {/* <Route path="/products/:productId" element={
              // <ProductDetail handleAssItemToCart = {null}
              // handleRemoveItemFromCart ={null}
              // />
            } */}
            
          </Routes>
        </main>
        
      </BrowserRouter>
    </div>
  )
}
