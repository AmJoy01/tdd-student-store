import * as React from "react";
import {Link} from "react-router-dom";
import "./ProductCard.css";
//import { useState } from "react"

export default function ProductCard(props){
    // const [counter, setCounter] = React.useState(0)
    // const incrementCounter = () => setCounter(counter + 1)
    // const decrementCounter = () => setCounter(counter - 1)
    let item = props.shoppingCart.find(({itemId}) => itemId === props.product.id)
    // let num = 0;
    // const addingItem = () =>{
    //     num++;
    // }


    return(
    <div className="productCard">
        <div className="image">
        <Link to={"/products/" + props.productId} className="productImage">
        <img src= {props.product.image}/>
        </Link>
        </div>
        <div className="product-info">
            <div className="info">
                <p className="product-name">{props.product.name}</p>
                <p className="product-price">${props.product.price?.toFixed(2)}</p>
                <p className="product-description" style={{display: props.showDescription===true ? "block" : "none" }}>{props.product.description}</p>
            
            </div>
            <div className="actions">
                <div className="buttons">
                    <button className="add" onClick={() => {props.handleAddItemToCart(props.product.id)}}>+</button>
                    <button className="remove" onClick={() => {props.handleRemoveItemFromCart(props.product.id)}}>-</button>
                </div>
                {/* <div className="productQuantity">{props.productId !== null ? "Cart: " + item.quantity : ""}</div> */}
            </div>
        </div>
    </div>
)

}