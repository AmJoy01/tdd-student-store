import * as React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import axios from "axios" 
import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import ProductDetail from "../ProductDetail/ProductDetail"
import NotFound from "../NotFound/NotFound"
import "./App.css"

export default function App() {
  const [products, setProducts] = React.useState([])
  const [searchInput, setSearchInput] = React.useState("")
  const [isFetching, setIsFetching] = React.useState() 
  const [error, setError] = React.useState("")
  const [isOpen, setIsOpen] = React.useState(false) 
  const [shoppingCart, setShoppingCart] = React.useState([]) 
  const [checkoutForm, setCheckoutForm] = React.useState({name: undefined,email: undefined,}) 
  const [orders, setOrders] = React.useState([])

  const handleOnSearchInputChange = (event) =>{
    setSearchInput(event.target.value);
  }

  function handleOnToggle(){
    if (isOpen === true){
      setIsOpen(false)
    }else{
      setIsOpen(true)
    }
  }

  function handleAddItemToCart(productId){
    let item = shoppingCart.find((prod) => {
      prod.itemId === productId
    })
    if(item){
      item.quantity += 1
      setShoppingCart([...shoppingCart])
    }else{
      //props.setTweets(current => [...current, newTweet]);
      setShoppingCart(shoppingCart => [...shoppingCart, {itemId: productId, quantity: 1}])
    }
    
  }

  function handleRemoveItemFromCart (productId) {
    if (shoppingCart.length > 0) {
      for (let i = 0; i <= shoppingCart.length-1; i++) {
        if (productId === shoppingCart[i].itemId && shoppingCart[i].quantity > 1) {
          let copyCart = [...shoppingCart]
          copyCart[i]= {
            ...copyCart[i],
            quantity: copyCart[i].quantity-1
          }
          setShoppingCart(copyCart)
        } else if (productId === shoppingCart[i].itemId && shoppingCart[i].quantity === 1) {
          let copyCart = [...shoppingCart]
          copyCart[i]= {
            ...copyCart[i],
            quantity: copyCart[i].quantity-1
          }
          let removeItem = copyCart.find(({ itemId }) => itemId === productId)
          const newCart = copyCart.filter(item => {
            return item !== removeItem
          })
          setShoppingCart(newCart)
        }
      }
    } 
  }

  function handleOnCheckoutFormChange (name, value) {
    setCheckoutForm(current => ({...current,[name]:value}))  
  }

  const handleOnSubmitCheckoutForm = async () => {
    console.log("CLICK CLICK CLICK")
    try {
      const res = await axios.post('http://localhost:3001/store', {user :checkoutForm, shoppingCart: shoppingCart})
      console.log("APP SUBMIT",res)
      if(res.data.purchase) {
        setOrders(current => [...current,res.data.purchase])
        setShoppingCart([])
      }      
    }catch(err) {
      
    }
    setShoppingCart([])
    alert("SUCCESS!\nThank you for shopping!\nCheck your email for the receipt")
  }

  React.useEffect(() => {
    const fetchProducts = async () => {
      setIsFetching(true)
      try {
        const response = await axios.get('http://localhost:3001/store')
        const products = response?.data?.products
        if(products){
          setProducts(products)
        }
      } catch(err) {
        setError(err)
      }finally{
        setIsFetching(false)
      }
    }
    fetchProducts()   
  }, [])



  return(
    <div className="app">
        <BrowserRouter>
        <main>
          <Navbar/>
          <Routes>
            <Route path = "/" element={
              <Home products = {products}
              shoppingCart = {shoppingCart}
              handleAddItemToCart = {handleAddItemToCart}
              handleRemoveItemFromCart = {handleRemoveItemFromCart}
              isOpen = {isOpen}
              checkoutForm = {checkoutForm}
              searchInput = {searchInput}
              setSearchInput = {setSearchInput}
              setCheckoutForm = {setCheckoutForm}
              handleOnToggle = {handleOnToggle}
              handleOnCheckoutFormChange = {handleOnCheckoutFormChange}
              handleOnSubmitCheckoutForm = {handleOnSubmitCheckoutForm}
              handleOnSearchInputChange = {handleOnSearchInputChange}
              />
            }/>
            <Route path = "/products/:productId" element={
                <ProductDetail shoppingCart = {shoppingCart}
                handleAddItemToCart = {handleAddItemToCart}
                handleRemoveItemFromCart = {handleRemoveItemFromCart}/>
            }/>
            <Route path="*" element={
              <NotFound/>
            }/>
          </Routes>
        </main>
        </BrowserRouter>
    </div>
  )







}
