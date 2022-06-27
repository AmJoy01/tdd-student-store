import * as React from "react";
import {Link} from "react-router-dom";
import "./ProductCard.css";
//import { useState } from "react"

export default function ProductCard(props){
    const [counter, setCounter] = React.useState(0)
    const incrementCounter = () => setCounter(counter + 1)
    const decrementCounter = () => setCounter(counter - 1)

    // let num = 0;
    // const addingItem = () =>{
    //     num++;
    // }


    return(
    <div className="productCard">
        <div className="image">
        <Link to={"/products/" + props.productId}>
        <img src= {props.product.image}/>
        </Link>
        </div>
        <div className="product-info">
            <div className="info">
                <p className="product-name">{props.product.name}</p>
                <p className="product-price">${props.product.price?.toFixed(2)}</p>
            </div>
            <div className="actions">
                <div className="buttons">
                    <button className="add" onClick={incrementCounter}>+</button>
                    <button className="remove" onClick={decrementCounter}>-</button>
                    <p>{counter}</p>
                </div>
            </div>
        </div>
    </div>
)

}