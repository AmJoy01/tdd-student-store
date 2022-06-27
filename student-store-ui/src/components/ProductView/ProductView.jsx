import "./ProductView.css"
import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"

export default function ProductView(props){
    return(
        <div className="productView">
            <h1 className="productId">Product #{props.productId}</h1>
            <ProductCard product = {props.product}
            productId = {props.productId}
            image = {props.product.image}
            name = {props.product.name}
            price = {props.product.price}
            handleAddItemToCart = {null}
            handleRemoveItemFromCart = {null}/>
        </div>
    )
}