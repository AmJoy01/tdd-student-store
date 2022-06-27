import * as React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../Home/Home"
import ProductDetail from "../ProductDetail/ProductDetail"
import NotFound from "../NotFound/NotFound"
import { useState, useEffect } from "react"
import axios from "axios" 
import "./App.css"

export default function App() {
  const [category, setCategory] = useState("All Categories")
  const [searchInput, setSearchInput] = useState("");
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [shoppingCart, setShoppingCart] = useState({});
  const [isFetching, setIsFetching] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  

  
  const handleOnSearchInputChange = (event) =>{
    setSearchInput(event.target.value);
  }

  const handleOnCheckout = async () => {
    setIsCheckingOut(true)

    try {
      const response = await axios.post("http://localhost:3001/orders", { order: cart })
      if (response?.data?.order) {
        setOrders((o) => [...response.data.order, ...o])
        setIsCheckingOut(false)
        setShoppingCart({})
        return response.data.order
      } else {
        setError("Error checking out.")
      }
    } catch (err) {
      const message = err?.response?.data?.error?.message
      setError(message ?? String(err))
    } finally {
      setIsCheckingOut(false)
    }
  }




useEffect(() => {
  const getProducts = async() =>{
    setIsFetching(true);
   
    try{
      // const response = await axios.get("https://codepath-store-api.herokuapp.com/store");
      const response = await axios.get("http://localhost:3001/store")
      // console.log(response.data.products);
      
      if(response.data.products){
          setProducts(response.data.products);
      }else{
        setError("ERROR!!");
      }
    }catch (e){
      // console.log(e);
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
            isOpen = {isOpen}
            />

            }
            />
            <Route
              path="/products/:productId" element={
                <ProductDetail/>
              }
            />
            <Route 
            path="*" 
            element={
              <NotFound 
              error = {error}
              products = {products}
              category = {category}
              setCategory = {setCategory}
              searchInput = {searchInput}
              setSearchInput = {setSearchInput}
              handleOnSearchInputChange = {handleOnSearchInputChange}/>
            }/>
          </Routes>
        </main>
        
      </BrowserRouter>
    </div>
  )
}
