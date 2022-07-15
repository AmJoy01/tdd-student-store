import "./ProductView.css"
import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"

export default function ProductView(props){
    return(
        <div className="productView">
            <h1 className="productId">Product #{props.productId}</h1>
            <ProductCard product = {props.product}
            productId = {props.productId}
            shoppingCart = {props.shoppingCart}
            quantity = {props.shoppingCart.quantity}
            handleAddItemToCart = {props.handleAddItemToCart}
            image = {props.productId.image}
            name = {props.productId.name}
            price = {props.productId.price}
            handleRemoveItemFromCart = {props.handleRemoveItemFromCart}
            showDescription = {true}/>
        </div>
    )
}